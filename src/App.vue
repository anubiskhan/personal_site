<template class="appContainer">
  <NavBar/>
  <!-- <Home/> -->
</template>

<script>
import NavBar from './components/NavBar.vue'
// import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    // Home,
    NavBar,
  }
}
</script>

<style lang="scss">
body {
  background: $black;
}
a {
    color: $blue;
    text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
