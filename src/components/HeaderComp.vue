<template>
    <div class="debug bg-header" style="padding-top: 10px; padding-bottom: 10px;">

        <!-- start: header -->
        <div class="debug header-style padd-10 width-75 margin-auto">

            <!-- nav bar -->
            <NavBarComp :datiNav="datiHeader" />

            <!-- carousel -->
            <CarouselComp :datiCarouselComp="datiCarousel" :currentActive="currActive" />

        </div>
        <!-- end: header -->

    </div>
</template>

<script>
import NavBarComp from './NavBarComp.vue';
import CarouselComp from './CarouselComp.vue';

export default {
    name: 'HeaderComp',
    props: ['datiHeader', 'datiCarousel', 'currActive'],
    components: {
        NavBarComp,
        CarouselComp
    }
}
</script>

<style lang="scss" scoped>
.header-style {
    padding: 10px;
}

.bg-header {
    background-image: url(../assets/h5-slide-3-background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
</style>