<template lang="">
    <div class="creationsContainer">
        <h1>This is CREATIONS</h1>
        <h3>this is a list</h3>
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
    .creationsContainer {
        color: $orange;
        display: grid;
        grid-template-columns: 1fr;
    }
</style>