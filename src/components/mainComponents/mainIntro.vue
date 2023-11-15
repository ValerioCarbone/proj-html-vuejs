<script>
import database from '../../../db.json'
import card from './introCard.vue'
export default {
    components: {
        card
    },
    data() {
        return {
            database
        }
    },
    computed: {
        cards() {
            return this.database.cards
        }
    },
    mounted() {
        console.log(this.database.cards)
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
            <card v-for="(card, index) in cards" :key="index" :card="card" />
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
    padding: 0 10px;
}

.section-content {
    text-align: center;
    width: 690px;
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
