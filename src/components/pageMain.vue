<script>
import mainIntro from './mainComponents/intro.vue'
import mainTeam from './mainComponents/team.vue'
import mainServices from './mainComponents/services.vue'
import mainTour from './mainComponents/tour.vue'
import mainInDepth from './mainComponents/inDepth.vue'
import mainAppointment from './mainComponents/appointment.vue'
import mainSlider from './mainComponents/slider.vue'


export default {
    components: {
        mainIntro,
        mainTeam,
        mainServices,
        mainTour,
        mainInDepth,
        mainAppointment,
        mainSlider

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
    <div class="section tour-bg">
        <div class="container">
            <mainTour />
        </div>
    </div>
    <mainInDepth />
    <div class="section appointment-bg">
        <div class="container">
            <mainAppointment />
        </div>
    </div>
    <div class="section-sm slider-bg">
        <div class="container">
            <mainSlider />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.section {
    padding: 140px 0;
}

.section-sm {
    padding: 80px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
}

.dark-white {
    background-color: $dark-white;
}

.tour-bg {
    background-image: url('/paralax-bg-tour-facilities.jpg');
    background-position: center;
    background-size: cover;
}

.appointment-bg {
    background-image: url('/make-an-appointment.jpg');
    background-size: cover;
    background-position: center;
}

.slider-bg {
    background-image: url('/rgb-gradient-bar-for-logo-carrasel.jpg');
    background-size: cover;
}
</style>
