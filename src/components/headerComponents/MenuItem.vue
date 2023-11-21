<script>

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            showDropDown: false
        }
    },
    methods: {
        show() {
            this.showDropDown = !this.showDropDown
        }
    },
}
</script>

<template>
    <a :href="item.link" class="nav-item drop-down" @click="show()">
        {{ item.name }}

        <span class="drop-down-icon" v-if="item.items.length > 0 & showDropDown">
            <font-awesome-icon icon="fa-solid fa-angle-down" />
        </span>

        <div v-if="item.items.length > 0 & showDropDown" :class="showDropDown ? 'light-blue' : ''">

            <ul class="drop-down-wrapper">
                <li v-for="(department, index) in item.items" :key="index" class="drop-down-item">
                    <a href="#">{{ department }}</a>
                </li>
            </ul>

        </div>
    </a>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;



.nav-item:hover {
    color: $light-blue;
}

.drop-down-icon {
    display: inline-block;
    vertical-align: middle;
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
    padding: 12px 0;
    text-transform: capitalize;
    color: $dark-blue;
    font-size: 14px;

    &:hover {
        color: $light-blue;
    }
}

.light-blue {
    color: $light-blue;
}
</style>
