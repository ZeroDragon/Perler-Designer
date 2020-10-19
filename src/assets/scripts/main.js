import Vue from 'vue'
import app from '~/app.vue'

document.addEventListener('DOMContentLoaded', () => {
  return new Vue({
    el: '#app',
    components: {
      app
    }
  })
})
