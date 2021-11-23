<template>
    <nav class="nav">  
        <div class="me">Me</div>  
        <div class="creations">Creations</div>  
    </nav>
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