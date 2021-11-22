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
    name: 'Hero'
}
</script>
<style lang="scss">
    nav {
        display: flex;
        justify-content: flex-start;
        div {
            border: 2px solid black;
            flex: 1;
        }
    }
</style>