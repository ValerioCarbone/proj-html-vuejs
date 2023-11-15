<script>
import headerNavbar from './headerNavbar.vue';
// import headerCta from './headerCta.vue';
export default {
    components: {
        headerNavbar,
        // headerCta
    }
}
</script>

<template>
    <header class="page-header">
        <headerNavbar />
        <!-- <headerCta /> -->
    </header>
</template>

<style lang="scss" scoped>
.page-header {
    height: 926px;
    background-image: url('/header-image-homepage.jpg');
    background-size: cover
}
</style>
