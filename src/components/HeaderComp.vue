<template>
    <div class="debug padd-10">

        <!-- start: header -->
        <div class="debug padd-10 width-75 margin-auto ">

            <!-- nav bar -->
            <NavBarComp :datiNav="datiHeader" />

            <!-- carousel -->
            <CarouselComp />

        </div>
        <!-- end: header -->

    </div>
</template>

<script>
import NavBarComp from './NavBarComp.vue';
import CarouselComp from './CarouselComp.vue';

export default {
    name: 'HeaderComp',
    props: ['datiHeader'],
    components: {
        NavBarComp,
        CarouselComp
    }
}
</script>

<style lang="scss" scoped></style>