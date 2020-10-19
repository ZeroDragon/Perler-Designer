/* globals localStorage */
import Vue from 'vue'
localStorage.projects = localStorage.projects || JSON.stringify({})

export const store = Vue.observable({
  selectedColor: '#000000',
  selectedProject: null,
  unsavedProject: '',
  unsavedPing: 0
})

export const commit = (field, value) => {
  store[field] = value
}
