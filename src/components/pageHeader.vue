<script>
import headerNavbar from './headerNavbar.vue';
import headerHero from './headerHero.vue';
export default {
    components: {
        headerNavbar,
        headerHero
    }
}
</script>

<template>
    <header class="page-header">
        <headerNavbar />
        <headerHero />
    </header>
</template>

<style lang="scss" scoped>
.page-header {
    height: 926px;
    background-image: url('/header-image-homepage.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;

}
</style>
