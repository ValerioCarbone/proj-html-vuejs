<script>

export default {
}
</script>

<template>
    <nav class="header-navbar">
        <div class="container">
            <div class="row">
                <figure>
                    <img src="/medical_logo_1x_light.png">
                </figure>
                <div class="nav-menu">
                    <ul class="nav-items">
                        <li class="nav-item">
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                                About
                            </a>
                        </li>
                        <li class="nav-item drop-down">
                            <a href="#">
                                Departments
                                <span class="drop-down-icon">
                                    <font-awesome-icon icon="fa-solid fa-angle-down" />
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                                Articles
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="btn btn-lb">
                                Make appointment
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

.container {
    max-width: 1780px;
    margin: 0 auto;
    padding-top: 30px;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-items {
    color: white;
    display: flex;
    align-items: center;
    column-gap: 32px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
}

.nav-item:hover {
    color: $light-blue;
}

.btn {
    padding: 10px 24px;
    text-transform: uppercase;
}

.btn-lb {
    background-color: $light-blue;

    &:hover {
        color: $light-blue;
        background-color: white;
    }
}


.drop-down-icon {
    display: none;
}

.drop-down:hover .drop-down-icon {
    display: inline-block;
}
</style>
