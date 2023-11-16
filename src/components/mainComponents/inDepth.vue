<script>
export default {}
</script>

<template>
    <div class="row">
        <div class="card col-4 white bg-light-blue">
            <h3 class="title">Emergency Care</h3>
            <img src="/wave-divider.png">
            <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga vel provident ea facere
                nesciunt blanditiis asperiores.</p>
            <a href="#" class="btn btn-lb">Learn More</a>
        </div>
        <div class="card col-4 white bg-blue">
            <h3 class="title">Expert Diagnostics</h3>
            <img src="/wave-divider.png">
            <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga vel provident ea facere
                nesciunt blanditiis asperiores.</p>
            <a href="#" class="btn btn-b">Learn More</a>
        </div>
        <div class="card col-4 white bg-dark-blue">
            <h3 class="title">Superb Rehabilitation</h3>
            <img src="/wave-divider.png">
            <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga vel provident ea facere
                nesciunt blanditiis asperiores.</p>
            <a href="#" class="btn btn-db">Learn More</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

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
