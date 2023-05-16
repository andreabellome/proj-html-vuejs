<template>
    <div class="debug padd-10">

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
        <div class="debug ">
            carousel here
        </div>
        <!-- end: div with carousel -->

    </div>
</template>

<script>
export default {
    name: 'MainComp',
    props: ['datiFirstDiv'],
    setup() {

        return {}
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