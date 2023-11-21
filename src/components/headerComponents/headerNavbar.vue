<script>
import database from '../../../db.json'
import MenuItem from './MenuItem.vue'
export default {
    components: {
        MenuItem
    },
    data() {
        return {
            showDropDown: false,
            database,
        }
    }
}
</script>

<template>
    <nav class="header-navbar">
        <div class="container">
            <div class="row">
                <figure>
                    <img src="/medical_logo_1x_light.png">
                </figure>
                <div class="nav-items">
                    <!-- <ul class="nav-items">
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
                        <li class="nav-item drop-down" @click="show()" :class="showDropDown ? 'light-blue' : ''">
                            <a href="#">
                                Departments
                                <span class="drop-down-icon" v-if="showDropDown">
                                    <font-awesome-icon icon="fa-solid fa-angle-down" />
                                </span>
                                <div>
                                    <ul v-if="showDropDown" class="drop-down-wrapper">
                                        <li v-for="(department, index) in departments" :key="index" class="drop-down-item">
                                            <a href="#">{{ department }}</a>
                                        </li>
                                    </ul>
                                </div>
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
                    </ul> -->
                    <MenuItem v-for="(currentItem, index) in database.menu" :key="index" :item="currentItem" />
                    <a href="#" class="btn">
                        Make appointment
                    </a>
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

.btn {
    padding: 10px 24px;
    text-transform: uppercase;
    background-color: $light-blue;

    &:hover {
        color: $light-blue;
        background-color: white;
    }
}
</style>
