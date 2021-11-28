<template class="mainLevel">
  <NavBar/>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">
body {
  background: #282C34;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: #ABB2BF;
  font-size: 2em;
  a {
    color: #ABB2BF;
    text-decoration: none;
  }
}
</style>
