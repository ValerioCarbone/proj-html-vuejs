<script>
export default {
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4 row column about-us">
                <picture>
                    <img class="logo" src="/medical_logo_1x_dark.png">
                </picture>
                <p class="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat labore doloribus rerum quos nihil,
                    modi quo dignissimos natus ex molestiae maiores. Ad officia, ducimus nesciunt architecto libero expedita
                    eveniet molestias modi consectetur laborum illo consequuntur vitae at fuga impedit minima cumque eum
                    temporibus deleniti.
                </p>
                <p class="cta">Learn more about us</p>
                <ul class="social-links">
                    <li>
                        <a href="#" class="social-item facebook">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-item twitter">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-item youtube">
                            <font-awesome-icon icon="fa-brands fa-square-youtube" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-item instagram">
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-4"></div>
            <div class="col-4"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.container {
    max-width: 1780px;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 20px;
}

.row {
    display: flex;
}

.column {
    flex-direction: column;
}

.col-4 {
    flex-basis: calc(100% / 3);
}

.about-us {
    row-gap: 12px;
}

.description {
    color: $light-grey;
    font-size: 16px;
    line-height: 38px;

    &::after {
        content: '';
        border-bottom: 1px solid $lighter-grey;
        width: 100%;
        height: 1px;
        display: block;
        padding-top: 20px;
    }
}

.cta {
    text-transform: uppercase;
    color: $dark-blue;
    font-size: 20px;
}

.social-item {
    border-radius: 4px;
    color: white;
}

.social-links {
    display: flex;
    column-gap: 10px;
    padding-top: 40px;
}

.facebook {
    background-color: $fb-blue;
    padding: 6px 10px;
}

.twitter {
    background-color: $twitter-lb;
    padding: 6px 7px;
}

.instagram {
    background-color: $ig-blue;
    padding: 6px 8px;
}

.youtube {
    background-color: #CD201F;
    padding: 6px 8px;
}
</style>
