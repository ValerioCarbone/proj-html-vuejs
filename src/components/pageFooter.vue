<script>
import database from '../../db.json'
import departmentCard from './footerComponents/cards/departmentCard.vue'
export default {
    components: {
        departmentCard
    },
    data() {
        return {
            database
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
    <div class="container">
        <div class="row footer">
            <div class="col-4 row column about-us">
                <picture>
                    <img class="logo" src="/medical_logo_1x_dark.png">
                </picture>
                <p class="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat labore doloribus rerum quos nihil,
                    modi quo dignissimos natus ex molestiae maiores. Ad officia, ducimus nesciunt architecto libero expedita
                    eveniet molestias modi consectetur.
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
            <div class="col-4 row column">
                <h3 class="title">Contact information</h3>
                <div class="contact-section row column">
                    <div class="row ">
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                        </span>
                        <p class="contact-info">121 King Street, London United Kingdom</p>
                    </div>
                    <div class="row ">
                        <span class="icon">
                            <font-awesome-icon :icon="['fas', 'phone-flip']" />
                        </span>
                        <p class="contact-info">1.800.458.556</p>
                    </div>
                </div>
            </div>
            <div class="col-4 row column">
                <h3 class="title">Medical Departments</h3>
                <div class="row column departments">
                    <departmentCard v-for="(department, index) in departments" :key="index" :department="department" />
                </div>
                <a href="#" class="btn">View our departments</a>
            </div>
            <a href="#" class="top-shortcut">
                <font-awesome-icon :icon="['fas', 'angle-up']" />
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.container {
    max-width: 1780px;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 20px;
}

.row {
    display: flex;
}

.footer {
    column-gap: 40px;
    padding-bottom: 100px;
    position: absolute;
}

.column {
    flex-direction: column;
}

.col-4 {
    flex-basis: calc(100% / 3);
}

.title {
    font-size: 18px;
    color: $dark-blue;
    font-weight: 300;
    text-transform: uppercase;

    &::after {
        content: '';
        border: 1px solid $light-blue;
        // height: 1px;
        width: 6%;
        margin: 24px 0;
        display: block;
    }
}

.top-shortcut {
    background-color: #474747;
    border-radius: 4px 4px 0 0;
    position: absolute;
    bottom: 0;
    right: 80px;
    padding: 8px 18px;
    color: white;
}

// ABOUt US 

.about-us {
    row-gap: 8px;
}


.description {
    color: $light-grey;
    font-size: 16px;
    line-height: 34px;

    &::after {
        content: '';
        border-bottom: 1px solid $lighter-grey;
        width: 100%;
        height: 1px;
        display: block;
        margin-top: 20px;
    }
}

.cta {
    text-transform: uppercase;
    color: $dark-blue;
    font-size: 18px;
}

.social-item {
    border-radius: 4px;
    color: white;
}

.social-links {
    display: flex;
    column-gap: 10px;
    padding-top: 30px;
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

// CONTACT INFORMATION

.contact-section {
    padding-left: 8px;
    row-gap: 20px;
}

.contact-info {
    color: $light-grey;
    font-size: 14px;
}

.icon {
    color: $light-blue;
    margin-right: 14px;

}

// Departments

.departments {
    row-gap: 12px;
}

.btn {
    margin-top: 44px;
    text-transform: uppercase;
    color: $dark-blue;
    border: 1px solid $dark-blue;
    text-align: center;
    width: 60%;
    line-height: 48px;
    letter-spacing: 2px;
}
</style>
