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
    <div class="card col-4">
        <img class="card-img" :src="card.serviceIconPath">
        <h4 class="card-title">{{ card.serviceName }}</h4>
        <p class="card-content">{{ card.serviceDescription }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../style/partials/variables' as *;

.col-4 {
    flex-basis: calc(100% / 3);
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding: 0 16px;
    color: $dark-blue;
}

.card-img {
    width: 25%;
}

.card-title {
    font-weight: 500;
    text-transform: uppercase;
    font-size: 18px;
}

.card-content {
    text-align: center;
    font-size: 14px;
    line-height: 36px;
    color: $light-grey;
}
</style>
