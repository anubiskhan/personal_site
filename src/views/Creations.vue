<template lang="">
    <div>
        <h1>This is CREATIONS</h1>
        <ol>
            <li v-for="creation in myCreations" :key="creation.id"> {{ creation.title }}</li>
        </ol>
    </div>
</template>
<script>
import creations from '@/json/creations.json'
export default {
    name: 'Creations',
    data() {
        return {
            myCreations: creations
        }
    }
}
</script>
<style lang="scss">
    
</style>