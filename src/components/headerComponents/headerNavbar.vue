<script>
import database from '../../../db.json'
export default {
    data() {
        return {
            showDropDown: false,
            database
        }
    },
    methods: {
        show() {
            this.showDropDown = !this.showDropDown
        }
    },
    computed: {
        departments() {
            return this.database.departments
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
                        <li class="nav-item drop-down" @click="show()">
                            <a href="#">
                                Departments
                                <span v-if="showDropDown" class="drop-down-icon">
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

.drop-down:hover .drop-down-icon {
    display: inline-block;
}

.drop-down {
    position: relative;
}

.drop-down-wrapper {
    background-color: white;
    padding: 6px 14px;
    position: absolute;
    top: 30px;
    left: 0;
    width: 200px;
}

.drop-down-item {
    padding: 8px 0;
    text-transform: capitalize;
    color: $dark-blue;

    &:hover {
        color: $light-blue;
    }
}
</style>
