<template lang="pug">
  .side
    projects
    beadCount
</template>
<script>
import projects from '~/projects.vue'
import beadCount from '~/beadCount.vue'
export default {
  components: {
    projects,
    beadCount
  }
}
</script>

