<script>
import mainIntro from './mainComponents/mainIntro.vue'
import mainTeam from './mainComponents/mainTeam.vue'
export default {
    components: {
        mainIntro,
        mainTeam
    }
}

</script>

<template>
    <div class="section">
        <div class="container">
            <mainIntro />
        </div>
    </div>
    <div class="section">
        <div class="container">
            <mainTeam />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.section {
    padding: 60px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
}

.dark-white {
    background-color: $dark-white;
}
</style>
