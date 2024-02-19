<template lang="">
    <div class="thingsContainer">
        <h1>{{ projectsList }}</h1>
        <h1>{{ someThingData }}</h1>
        <h1>_____</h1>
    </div>
</template>
<script>
import things from '@/json/things.json'

export default {
    name: 'Things',
    data() {
        return {
            myThings: things,
            someThingData: 2 + 2
        }
    }
};

</script>
<style lang="scss">

</style>