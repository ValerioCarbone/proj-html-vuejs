<script>

export default {
}
</script>

<template>
    <section class="header-hero">
        <div class="container">
            <div class="row color-white">
                <h2 class="hero-title">Caring <span class="main-color">For Life</span></h2>
                <p class="hero-content">Kind words can be short and easy to speak, but their echoes are truly
                    endless. Avada Health focuses on you as if it was our own family.</p>
                <a href="#" class="btn btn-mainc">Learn more</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use'../../style/partials/variables' as *;

.hero-content {
    font-size: 18px;
}

.header-hero {
    flex-grow: 1;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    height: 100%;
}

.row {
    max-width: 670px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 30px;
}

.btn {
    padding: 10px 24px;
    text-transform: uppercase;
}

.btn-mainc {
    background-color: $main-color;
}

.main-color {
    color: $main-color;
}

.color-white {
    color: white;
}

.hero-title {
    font-size: 60px;
    font-weight: 100;
    letter-spacing: 4px;
    white-space: pre-wrap;
}
</style>
