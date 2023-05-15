<template>
    <div class="debug col-white flex flex-dir-col just-cont-center align-it-center padd-10 mt-70 width-80 margin-auto">

        <h1 class="col-white font-size-80 mb-5">
            Contemporary Ideas
        </h1>

        <p class="col-white text-center mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error exercitationem, temporibus earum minus delectus
            totam reiciendis voluptate sunt cum blanditiis porro sit. Quam ullam repudiandae, laudantium officiis maiores
            amet illum?
        </p>

        <div class="load-more-button mb-5">
            Register Now
        </div>

        <div class="debug col-white">
            pallini
        </div>

    </div>
</template>

<script>
export default {
    name: 'CarouselComp',
}
</script>

<style lang="scss" scoped>
.load-more-button {
    display: flex;
    justify-content: center;

    width: 20%;
    font-size: 15px;
    padding: 10px;

    text-transform: uppercase;
    font-weight: bold;

    background-color: #40C4FF;
    color: #FFFFFF;

    &:hover {
        cursor: pointer;
    }

}
</style>