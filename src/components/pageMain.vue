<script>
import mainIntro from './mainComponents/mainIntro.vue'
export default {
    components: {
        mainIntro
    }
}

</script>

<template>
    <div class="section">
        <div class="container">
            <mainIntro />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section {
    padding: 60px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
}
</style>
