<template class="mainLevel">
  <NavBar/>

</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
body {
  background: #282C34;
  color: #ABB2BF;
}
.mainLevel {
  
  // z-index: ;
  opacity: .3;
  // color: #00243f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
