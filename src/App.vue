<script>
import pageHeader from './components/pageHeader.vue'
import pageMain from './components/pageMain.vue'
import pageFooter from './components/pageFooter.vue'
export default {
    components: {
        pageHeader,
        pageMain,
        pageFooter
    }
}
</script>

<template>
    <pageHeader />
    <pageMain />
    <pageFooter />
</template>

<style lang="scss">
@use'./style/generals.scss'
</style>
