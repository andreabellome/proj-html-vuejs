<template>
    <div class="debug col-white flex flex-dir-col just-cont-center align-it-center">


        <h1 class="col-white">
            Contemporary ideas
        </h1>

        <p class="col-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error exercitationem, temporibus earum minus delectus
            totam reiciendis voluptate sunt cum blanditiis porro sit. Quam ullam repudiandae, laudantium officiis maiores
            amet illum?
        </p>

        <div class="debug load-more-button">
            Register Now
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
    font-size: 18px;
    padding: 10px;

    text-transform: uppercase;
    font-weight: bold;

    background-color: #0282F9;
    color: #FFFFFF;

    &:hover {
        cursor: pointer;
    }

}
</style>