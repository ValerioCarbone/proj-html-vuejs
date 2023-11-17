<script>

export default {
    props: {
        department: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <a href="#" class="card">
        <span class="icon">
            <font-awesome-icon :icon="['fas', 'angle-right']" />
        </span>
        <p class="item">{{ department }}</p>
    </a>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

.card {
    display: flex;
    align-items: center;
}

.icon {
    background-color: $light-blue;
    padding: 6px 10px;
    margin-right: 8px;
    border-radius: 999px;
    color: white;
    font-size: 12px;
}

.item {
    color: $dark-blue;
    font-size: 14px;
}
</style>
