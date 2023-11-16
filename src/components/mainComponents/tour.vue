<script>
export default {
}
</script>

<template>
    <div class="row">
        <div class="section-content">
            <img src="/icon-7.png" class="icon">
            <div class="title-container">
                <h2 class="title white">Tour Our Facilities</h2>
            </div>
            <p class="description white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, quaerat?
                Voluptatem
                velit omnis consequatur incidunt quisquam debitis, suscipit quibusdam eos quod eveniet optio! Distinctio,
                quaerat? Cumque voluptate error repellat animi!</p>
            <img src="/play-icon.png" class="icon play">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use'../../style/partials/variables' as *;

.row {
    display: flex;
    flex-direction: column;
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
    font-size: 22px;
    line-height: 50px;
    font-weight: 300;
}

.icon {
    aspect-ratio: 1;
    height: 80px;
}

.white {
    color: white;
}

.play {
    margin-top: 40px;
}
</style>
