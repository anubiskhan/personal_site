<template>
    <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/me">Me</router-link>
        <router-link to="/creations">Creations</router-link>
    </nav>
    <router-view />
    <div class="body">
        
    </div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style lang="scss">
    nav {
        color: #ABB2BF;
        display: flex;
        height: 4em;
        justify-content: flex-start;
        div {
            border: 2px solid black;
            flex: 1;
            font-size: 2.2em;
        }
    }
</style>