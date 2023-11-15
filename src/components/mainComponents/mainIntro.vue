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
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="section-content">
                    <h2 class="title">Welcome to Avada Health</h2>
                    <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam eius
                        placeat sequi iure repellat
                        delectus fuga soluta quo quaerat dolores.</p>
                </div>
                <div class="cards">
                    <card v-for="(card, index) in cards" :key="index" :card="card" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use'../../style/partials/variables' as *;

.cards {
    display: flex;
}

.section-content {
    text-align: center;
}

.section {
    padding: 60px 0;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    height: 100%;
}

.row {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}

.title {}

.dscription {}
</style>
