<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}

</script>

<template>
    <div class="card">
        <img class="card-img" :src="card.iconPath">
        <h3 class="card-title">{{ card.cardTitle }}</h3>
        <p class="card-content">{{ card.cardText }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
}

// .card-img{

// }

// .card-title{

// }

// .card-content{

// }
</style>
