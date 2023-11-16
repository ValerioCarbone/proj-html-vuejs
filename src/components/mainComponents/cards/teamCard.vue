<script>

export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card">
        <img :src="card.teamMemberImgPath" class="member-img">
        <div class="member">
            <div class="member-info dark-blue">
                <p class="member-name">{{ card.teamMemberName }}</p>
                <p class="member-role">{{ card.teamMemberRole }}</p>
            </div>
            <p class="member-description light-grey">{{ card.teamMemberDescription }}</p>
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
                    <a href="#" class="social-item instagram">
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../style/partials/variables' as *;

.facebook {
    background-color: $fb-blue;
    padding: 4px 8px;
}

.twitter {
    background-color: $twitter-lb;
    padding: 4px 5px;
}

.instagram {
    background-color: $ig-blue;
    padding: 4px 6px;
}

.dark-blue {
    color: $dark-blue;
}

.light-grey {
    color: $light-grey;
}

.social-item {
    border-radius: 4px;
    color: white;
}

.social-links {
    display: flex;
    column-gap: 10px;
}

.card {
    padding: 0 20px;
}

.member-name {
    text-transform: uppercase;
    margin-bottom: 14px;
}

.member-img {
    width: 100%;
    display: block;
}

.member {
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    background-color: white;
}
</style>
