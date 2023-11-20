<script>
import database from '../../../db.json'
import inDepthCard from './cards/inDepthcard.vue'
export default {
    components: {
        inDepthCard
    },
    data() {
        return {
            database
        }
    },
    computed: {
        inDepthCards() {
            return this.database.inDepthCards
        }
    }

}
</script>

<template>
    <div class="row">
        <inDepthCard v-for="(card, index) in inDepthCards" :card="card" :key="index" />
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;



.row {
    display: flex;
}
</style>
