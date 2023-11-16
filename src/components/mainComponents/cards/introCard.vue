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
        <h4 class="card-title">{{ card.cardTitle }}</h4>
        <p class="card-content">{{ card.cardText }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../style/partials/variables' as *;

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding: 0 16px;
    color: $dark-blue;

    &:hover .card-title {
        color: $light-blue;
    }
}

.card-img {
    width: 25%;
}

.card-title {
    font-weight: 500;
    text-transform: uppercase;
}

.card-content {
    text-align: center;
    font-size: 14px;
    line-height: 36px;
    color: $light-grey;
}
</style>
