<script>
import database from '../../../db.json'
import introCard from './cards/introCard.vue'
export default {
    components: {
        introCard
    },
    data() {
        return {
            database
        }
    },
    computed: {
        cards() {
            return this.database.introCards
        }
    }
}

</script>

<template>
    <div class="row">
        <div class="section-content">
            <h2 class="title">Welcome to Avada Health</h2>
            <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam eius
                placeat sequi iure repellat
                delectus fuga soluta.</p>
        </div>
        <div class="cards">
            <introCard v-for="(card, index) in cards" :key="index" :card="card" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../../style/partials/variables' as *;

.row {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
}

.cards {
    display: flex;
}

.section-content {
    text-align: center;
    max-width: 690px;
    margin: 0 auto;
    color: $dark-blue;
}


.title {
    font-size: 44px;
    font-weight: 300;
    line-height: 120px;
}

.description {
    font-size: 20px;
    line-height: 40px;
}
</style>
