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
    <div class="card col-4 white" :class="card.bgColor">
        <h3 class="title">{{ card.cardTitle }}</h3>
        <img src="/wave-divider.png">
        <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga vel provident ea facere
            nesciunt blanditiis asperiores.</p>
        <a href="#" class="btn" :class="card.btnStyle">Learn More</a>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../style/partials/variables' as *;

button {
    all: unset;
}

.card {
    padding: 80px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
}

.row {
    display: flex;
}

.col-4 {
    flex-basis: calc(100% / 3);
}

.white {
    color: white;
}

.btn {
    padding: 16px 32px;
    border: 3px solid white;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2px;
}

.btn-lb:hover {
    border: 3px solid $bg-blue;
    color: $bg-blue;
    background-color: white;
}

.btn-b:hover {
    border: 3px solid $bg-dark-blue;
    color: $bg-dark-blue;
    background-color: white;
}

.btn-db:hover {
    border: 3px solid $light-blue;
    color: $light-blue;
    background-color: white;
}

.bg-light-blue {
    background-color: $light-blue;
}

.bg-blue {
    background-color: $bg-blue;
}

.bg-dark-blue {
    background-color: $bg-dark-blue;
}

.title {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 1px;
}

.content {
    text-align: center;
    font-size: 18px;
    line-height: 38px;
}
</style>
