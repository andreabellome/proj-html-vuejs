<template>
    <div class="debug" style="padding-top: 10px; padding-bottom: 10px;">

        <!-- start: main container first div -->
        <div class="debug default-div mb-3">

            <div class="flex flex-dir-row just-cont-evenly">
                <div v-for="(elem, index) in datiFirstDiv" class="flex flex-dir-col align-it-center just-cont-center"
                    style="width: calc(100% / 6 - 1%); background-color: #F2F8FC;">

                    <img :src="elem.imgpath" :alt="elem.title" class="img-fluid mb-3">

                    <div class="text-bold">
                        {{ elem.title }}
                    </div>

                </div>
            </div>

        </div>
        <!-- end: main container first div -->

        <!-- start: second div The Trusted Name for In-Home Tutoring -->
        <div class="debug default-div mb-3">
            <h2 class="text-bold mb-3 width-40 font-size-40">
                The Trusted Name for In-Home Tutoring.
            </h2>

            <p style="color: #959595;">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptates amet minus odio eveniet ipsum,
                dolore porro! Expedita rerum consequuntur inventore amet obcaecati possimus pariatur? Aut perferendis sit
                dolorem nesciunt?
            </p>

            <p class="learn-more" style="display: inline-block;">
                Learn more
            </p>

            <div class="width-70 margin-auto">
                <img src="../assets/new-image.png" class="img-fluid">
            </div>

        </div>
        <!-- end: second div The Trusted Name for In-Home Tutoring -->

        <!-- start: third div -->
        <div class="debug default-div mb-3 flex flex-dir-row just-cont-between">
            <div class="bg-image" style="width: 40%"></div>

            <div class="" style="width: 55%;">
                <h2 class="text-bold mb-3 font-size-40">
                    Empowering Children to Reach Their Potential.
                </h2>
                <p style="color: #959595;">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, ratione vel distinctio nemo at
                    exercitationem corrupti ullam animi voluptate earum repudiandae eum mollitia quidem harum adipisci non.
                    Quaerat, nihil dolorum!
                </p>

                <div class="flex flex-dir-row just-cont-evenly">

                    <div class="text-center">
                        <span class="text-bold font-size-40" style="color: #40C4FF;">
                            168
                        </span> <br>
                        <span class="text-bold font-size-20" style="color: #40C4FF;">
                            Used stories
                        </span>
                    </div>

                    <div class="text-center">
                        <span class="text-bold font-size-40" style="color: #40C4FF;">
                            347
                        </span> <br>
                        <span class="text-bold font-size-20" style="color: #40C4FF;">
                            Events
                        </span>
                    </div>

                </div>

            </div>
        </div>
        <!-- end: third div -->

        <!-- start: div with carousel -->
        <div class="debug mb-3 bg-image-carousel flex align-it-center" style="min-height: 500px;">
            <div class="debug default-div flex flex-dir-col align-it-center just-cont-center">

                <div class="debug mb-3">
                    <img :src="daticarousel[curractive].imgpath" :alt="daticarousel[curractive].name">
                </div>

                <div class="debug mb-3 col-white width-65 text-center font-size-18">
                    {{ daticarousel[curractive].text }}
                </div>

                <div class="debug text-center mb-3">
                    <p class="font-size-25 col-white text-bold">
                        {{ daticarousel[curractive].name }}
                    </p>
                    <span class="text-uppercase col-white">
                        student
                    </span>
                </div>

                <div class="debug width-20 flex flex-dir-row just-cont-evenly">
                    <i v-for="(elem, index) in daticarousel" class="fa-regular col-white"
                        v-bind:class="[index == curractive ? 'fa-circle-dot' : 'fa-circle']"
                        @click="updateCurrActive(index)"></i>
                </div>


            </div>
        </div>
        <!-- end: div with carousel -->


        <!-- start: client logos -->
        <div class="debug">
            <div class="debug default-div flex flex-dir-row just-cont-evenly align-it-center">

                <div v-for="(elemlogo, idxlogo) in clientLogos" class="">
                    <img :src="elemlogo.imgpath" :alt="elemlogo.imgpath">
                </div>

            </div>
        </div>
        <!-- end: client logos -->


    </div>
</template>

<script>
export default {
    name: 'MainComp',
    props: ['datiFirstDiv', 'carouselInfo', 'currActiveCar', 'clientLogos'],
    data() {
        return {
            curractive: this.currActiveCar,
            daticarousel: this.carouselInfo
        }
    },
    methods: {
        updateCurrActive(index) {

            if (index != this.curractive) {
                this.curractive = index
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.bg-image {
    background-image: url(../assets/h1-img-8.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
}

.bg-image-carousel {
    background-image: url(../assets/h5-parallax-img-1.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.default-div {
    padding: 10px;
    width: 75%;
    margin: auto;
}

.learn-more {
    color: #40C4FF;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
    }
}
</style>