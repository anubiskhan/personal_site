<template>
    <div class="navBarContainer">
        <router-link to="/" class="someClass">Welcome</router-link>
        <router-link to="/me" class="someClass">Me</router-link>
        <router-link to="/creations" class="someClass">Creations</router-link>
    </div>
    <router-view></router-view>
</template>
<script>
// import router from './router/index.js'
export default {
    name: 'NavBar'
}
</script>
<style lang="scss">
    .navBarContainer {
        font-size: 2em;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        padding: .5em 0;
        margin: 0 20vw;
        .someClass {
            padding: 10px;
            margin: 0px 10px;
            color: $brown;
            background: $gray;
        }
        a {
            color: $white;
            text-decoration: none;
        }
    }
</style>3