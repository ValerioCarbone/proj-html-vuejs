<script>
export default {
}
</script>

<template>
    <div class="section-content">
        <div class="title-container">
            <h2 class="title white">Make An Appointment</h2>
        </div>
        <p class="description white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, quaerat?
            Voluptatem
            velit omnis consequatur incidunt quisquam debitis, suscipit quibusdam eos quod eveniet optio! Distinctio,
            quaerat? Cumque voluptate error repellat animi!</p>
        <form action="post" class="row column form">
            <div class="input-section row">
                <input type="text" placeholder="Name*" class="col-6 input input-style">
                <input type="email" placeholder="Email*" class="col-6 input input-style">
            </div>
            <div class="input-section row">
                <input type="tel" placeholder="Phone Number" class="col-6 input input-style">
                <input type="date" required pattern="\d{2}-\d{2}-\d{4}" class="col-6 input date input-style">
            </div>
            <textarea placeholder="How can we help?*" cols="30" rows="7" class="textarea input-style "></textarea>
            <button type="submit" class="btn-lb">Make an appointment</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@use'../../style/partials/variables' as *;

.row {
    display: flex;
}

.column {
    flex-direction: column;
}

.form {
    row-gap: 40px;
    padding-top: 20px;
}

.input-section {
    column-gap: 40px;
}

.input {
    height: 40px;

}

.input-style {
    background: none;
    border: 1px solid $lighter-grey;
    color: $lighter-grey;
    font-size: 12px;
    padding: 12px 10px;
}

.date {
    color: #949393;
}


.col-6 {
    flex-basis: calc(100% / 2);
}

.section-content {
    text-align: center;
    max-width: 690px;
    margin: 0 auto;
}


.title {
    font-size: 40px;
    font-weight: 300;
    line-height: 40px;
    padding: 20px 0;
    text-transform: uppercase;
}

.title-container {


    &::after {
        content: '';
        border-bottom: 1px solid $lighter-grey;
        width: 33%;
        text-align: center;
        display: inline-block;
    }

}

.description {
    padding: 20px 0;
    font-size: 22px;
    line-height: 50px;
    font-weight: 300;
}

.icon {
    aspect-ratio: 1;
    height: 80px;
}

.white {
    color: white;
}

.btn-lb {
    background-color: $light-blue;
    border: none;
    height: 60px;
    color: white;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
}
</style>
