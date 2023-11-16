<script>

export default {
    props: {
        cardname: {
            type: String,
            required: true
        },
        cardsBg: {
            type: String,
            required: true
        }
    },
    computed: {
        cardsbg() {
            return cardsBg
        }
    }
}
</script>

<template>
    <div class="card">
        <h4></h4>
    </div>
</template>

<style lang="scss" scoped>
.card {
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    background-color: cardsBg();
}
</style>
