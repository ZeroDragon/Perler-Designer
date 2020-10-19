<style lang="sass" scoped>
.projects
  margin-bottom: 10px
  padding-right: 4px
.project
  display: flex
  align-items: center
  justify-content: space-between
.name
  flex-grow: 1
input
  width: 100%
  border: none
  font-size: 16px
  padding: 2px
.btn
  margin: 0
  padding: 4px
  background-color: #0078f8
  color: #fff
  text-align: center
</style>

<template lang="pug">
  .projects
    h3 Projects
    div(v-for='project of Object.keys(projects)')
      .project
        .name {{project}}
        template(v-if="project === activeProjectKey")
          div(@click='saveProject(project)' v-if='isNotSaved') 💾
          div(@click='clearActive()') ✖️
        template(v-else)
          div(@click='viewProject(project)') ✏️
        div(@click='deleteProject(project)') 🗑️
    hr
    .btn(@click='createProject') Save as
    input(type='text', v-model='projectName', placeholder="Name")
</template>
<script>
import { commit, store } from 'Utils/store'

export default {
  data: () => ({
    activeProjectKey: null,
    projectName: '',
    projects: {},
    lastSaved: 0
  }),
  methods: {
    createProject () {
      if (!this.projectName) return
      const activeGrid = JSON.parse(JSON.stringify(store.selectedProject))
      this.projects[this.projectName] = activeGrid
      localStorage.projects = JSON.stringify(this.projects)
      const key = this.projectName.toString()
      this.projectName = ''
      this.viewProject(key)
      this.saveProject(key)
    },
    viewProject (key) {
      commit('selectedProject', this.projects[key])
      this.activeProjectKey = key
      this.projectName = key.toString()
      this.lastSaved = new Date().getTime()
    },
    clearActive () {
      this.projects = JSON.parse(localStorage.projects)
      commit('selectedProject', 'clearGridnow')
      this.activeProjectKey = null
      this.projectName = null
    },
    saveProject (key) {
      this.projects[key] = JSON.parse(JSON.stringify(store.unsavedProject))
      localStorage.projects = JSON.stringify(this.projects)
      this.lastSaved = new Date().getTime()
      commit('unsavedPing', this.lastSaved)
    },
    deleteProject (key) {
      this.clearActive()
      this.projectName = key
      delete this.projects[key]
      localStorage.projects = JSON.stringify(this.projects)
      this.projectName = ''
    }
  },
  computed: {
    isNotSaved () {
      const lastSaved = Math.round(this.lastSaved / 1000)
      const unsavedPing = Math.round(store.unsavedPing / 1000)
      return lastSaved !== unsavedPing
    }
  },
  beforeMount () {
    this.projects = JSON.parse(localStorage.projects)
  }
}
</script>
