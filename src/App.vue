<script>
import pageHeader from './components/pageHeader.vue'
import pageMain from './components/pageMain.vue'
export default {
    components: {
        pageHeader,
        pageMain
    }
}
</script>

<template>
    <pageHeader />
    <pageMain />
</template>

<style lang="scss">
@use'./style/generals.scss'
</style>
