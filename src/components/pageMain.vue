<script>
import mainIntro from './mainComponents/Intro.vue'
import mainTeam from './mainComponents/team.vue'
import mainServices from './mainComponents/Services.vue'
export default {
    components: {
        mainIntro,
        mainTeam,
        mainServices

    }
}

</script>

<template>
    <div class="section">
        <div class="container">
            <mainIntro />
        </div>
    </div>
    <div class="section dark-white">
        <div class="container">
            <mainTeam />
        </div>
    </div>
    <div class="section">
        <div class="container">
            <mainServices />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.section {
    padding: 100px 0;
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
