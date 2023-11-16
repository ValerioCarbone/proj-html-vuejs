<script>
import database from '../../../db.json'
import servicesCard from './cards/servicesCard.vue'
export default {
    components: {
        servicesCard
    },
    data() {
        return {
            database
        }
    },
    computed: {
        servicesCards() {
            return this.database.serviceCards
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="section-content">
            <img src="/icon-6.png" class="icon">
            <div class="title-container">
                <h2 class="title dark-blue">Our Health Services</h2>
            </div>
            <p class="description dark-blue">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, quaerat?
                Voluptatem
                velit omnis consequatur incidunt quisquam debitis, suscipit quibusdam eos quod eveniet optio! Distinctio,
                quaerat? Cumque voluptate error repellat animi!</p>
        </div>
        <div class="cards">
            <servicesCard v-for="(card, index) in servicesCards" :key="index" :card="card" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../../style/partials/variables' as *;

.row {
    display: flex;
    flex-direction: column;
    row-gap: 80px;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    row-gap: 80px;

}

.section-content {
    text-align: center;
    max-width: 690px;
    margin: 0 auto;
}


.title {
    font-size: 40px;
    font-weight: 300;
    line-height: 40px;
    padding: 20px 0;
    text-transform: uppercase;
}

.title-container {


    &::after {
        content: '';
        border-bottom: 1px solid $lighter-grey;
        width: 33%;
        text-align: center;
        display: inline-block;
    }

}

.description {
    padding-top: 20px;
    font-size: 20px;
    line-height: 40px;
}

.icon {
    aspect-ratio: 1;
    height: 80px;
}

.dark-blue {
    color: $dark-blue;
}

.light-grey {
    color: $light-grey;
}
</style>
