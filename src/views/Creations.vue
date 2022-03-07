<template lang="">
    <div class="creationsContainer">
        <h1>This is CREATIONS</h1>
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