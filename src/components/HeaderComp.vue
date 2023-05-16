<template>
    <div class="padd-10 bg-header" style="min-height: 650px;">

        <!-- start: header -->
        <div class="header-style padd-10 width-75 margin-auto">

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