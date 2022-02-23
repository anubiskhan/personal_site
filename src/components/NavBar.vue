<template>
    <div class="nav">
        <router-link to="/" class="someClass">Bem</router-link>
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
    .nav {
        color: #ABB2BF;
        display: flex;
        justify-content: center;
        border: 2px solid black;
        flex: 1;
        padding: .5em 0;
        margin: 0 20vw;
        .someClass {
            padding: 10px;
            margin: 0px 10px;
            background: $pacific-blue;
        }
    }
</style>3