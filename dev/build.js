const { promisify } = require('util')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const { sync: copyDir } = require('copy-dir')
const sass = require('sass')
const pug = require('pug')

const webpackConfig = require('./webpack.config')
const sassParser = (file, cb) => {
  sass.render({
    file: path.join(srcPath, `${file}.sass`)
  }, cb)
}

const webpackAsync = promisify(webpack)
const mkdirpAsync = promisify(mkdirp)
const rimrafAsync = promisify(rimraf)
const sassParserAsync = promisify(sassParser)

const distPath = path.join(__dirname, '../dist')
const srcPath = path.join(__dirname, '../src')

const cleanStart = async () => {
  console.log('Re-Create dist folder')
  await rimrafAsync(distPath)
}

const bundleScripts = async () => {
  console.log('Bundling JS file')
  const scriptsPath = `${distPath}/scripts/`
  await mkdirpAsync(scriptsPath)
  const wpConfig = Object.assign(webpackConfig, {})
  wpConfig.output.path = scriptsPath
  // wpConfig.mode = 'production'
  // wpConfig.resolve.alias.vue = 'vue/dist/vue.min.js'
  return webpackAsync(wpConfig)
    .then(({ compilation }) => {
      if (compilation.errors.length > 0) {
        compilation.errors.forEach(err => {
          console.log(err.toString())
        })
        process.exit(1)
      }
    })
}

const bundleStyles = async () => {
  console.log('Bundling CSS file')
  const stylesPath = `${distPath}/styles/`
  await mkdirpAsync(stylesPath)
  const { css } = await sassParserAsync('assets/styles/bundle')
  fs.writeFileSync(`${stylesPath}bundle.css`, css)
}

const bundleAllAssets = async () => {
  console.log('Bundling all assets')
  await mkdirpAsync(distPath)
  await copyDir(path.join(srcPath, 'assets'), distPath, {})
  await rimrafAsync(path.join(distPath, 'styles'))
  await rimrafAsync(path.join(distPath, 'scripts'))
}
const bundleHTML = async () => {
  console.log('Bundling HTML files')
  const index = pug.renderFile(`${srcPath}/index.pug`, { pretty: true })
  fs.writeFileSync(`${distPath}/index.html`, index)
}

(async () => {
  await cleanStart()
  await bundleAllAssets()
  await bundleScripts()
  await bundleStyles()
  await bundleHTML()
})()
