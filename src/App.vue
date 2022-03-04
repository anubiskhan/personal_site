<template class="appContainer">
  <Home/>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style lang="scss">
body {
  background: $black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
