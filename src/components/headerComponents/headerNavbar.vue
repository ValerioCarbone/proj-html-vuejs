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
                        <li class="nav-item main-color">
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                                Departments
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                                Articles
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="btn btn-mainc">
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

.main-color {
    color: $light-blue;
}

.btn {
    padding: 10px 24px;
    text-transform: uppercase;
}

.btn-mainc {
    background-color: $light-blue;
}
</style>
