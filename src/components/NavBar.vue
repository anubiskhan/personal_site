<template>
    <div class="navBarContainer">
        <div/>
        <div class="navFlex">
            <router-link to="/" class="someClass">Home</router-link>
            <!-- <router-link to="/me" class="someClass">Me</router-link> -->
            <router-link to="/creations" class="someClass">Creations</router-link>    
        </div>
        <div/>
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
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .navFlex {
        display: flex;
        justify-content: space-between;
    }
    .someClass {
        align-content: center;
        // margin: 0 20%;
        // padding: 10px;
        // margin: 0px 10px;
        // color: $brown;
        // background: $gray;
    }
</style>3