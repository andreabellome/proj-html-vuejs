<template>
    <div class="debug" style="padding-top: 10px; padding-bottom: 10px;">

        <!-- start: main container first div -->
        <div class="debug default-div mb-3 padd-10">

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
        <div class="debug default-div mb-3 padd-10">
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
                <img src="../assets/h5-img-1.jpg" class="img-fluid">
            </div>

        </div>
        <!-- end: second div The Trusted Name for In-Home Tutoring -->

        <!-- start: third div -->
        <div class="debug default-div mb-3 flex flex-dir-row just-cont-between padd-10">
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
        <div class="debug bg-image-carousel flex align-it-center" style="min-height: 500px;">
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

        <!-- start: learning possibilities -->
        <div class="debug padd-10">

            <div class="debug default-div flex flex-dir-row just-cont-evenly">
                <div class="debug width-30">
                    <ul class="list-group">
                        <li v-for="idxlist in 5" class="list-group-item font-size-25"
                            v-bind:class="[idxlist == curractiveList ? 'class-li' : '']" @click="updateActiveLi(idxlist)">
                            An item
                        </li>
                    </ul>
                </div>

                <div class="debug width-60 padd-5">
                    <h2 class="text-bold mb-3 font-size-40">
                        Learning Possibilities
                    </h2>

                    <p class="font-size-20" style="color: #959595;">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quibusdam voluptates nulla, hic id,
                        ipsa eum commodi blanditiis repellat, eligendi nesciunt recusandae natus ad voluptatem ex adipisci
                        nobis corrupti obcaecati.
                    </p>

                    <ul class="user-list-ticks">
                        <li v-for="idxlist2 in 5">
                            chicco
                        </li>
                    </ul>

                </div>
            </div>

        </div>
        <!-- end: learning possibilities -->

        <!-- start: carousel popular courses -->
        <div class="debug mb-3 flex align-it-center bg-pattern padd-10" style="min-height: 500px;">

            <div class="debug default-div flex flex-dir-col align-it-center just-cont-center">

                <h2 class="text-bold mb-3 font-size-40">
                    Popular Online Courses
                </h2>

                <p class="text-center width-70" style="color: #959595;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eaque! Officiis molestiae est eum quo
                    nam adipisci? Nisi, itaque eius libero, fugit sit suscipit maxime soluta, voluptate accusantium delectus
                    architecto!
                </p>

                <!-- start: div with 3 cards -->
                <div class="debug mb-3 flex flex-dir-row width-100p100 just-cont-evenly flex-wrap">

                    <!-- start: card -->
                    <div v-for="(ELEMCARD, IDXCARD) in secondCarObj.slice(curractivesec * 3, curractivesec * 3 + 3)"
                        class="card" style="width: 18rem;">

                        <div class="debug">


                            <img :src="ELEMCARD.imgpath" class="card-img-top" :alt="ELEMCARD.title">

                            <div class="card-body">
                                <div class="debug flex flex-dir-row just-cont-between mb-3">
                                    <div class="debug">
                                        <h5 class="card-title">
                                            {{ ELEMCARD.title }}
                                        </h5>
                                        <span>
                                            {{ ELEMCARD.teacher }}
                                        </span>
                                    </div>

                                    <div>
                                        <span v-if="ELEMCARD.price === 'FREE'"
                                            class="badge rounded-pill text-bg-primary debug" style="display: inline-block;">
                                            {{ ELEMCARD.price }}
                                        </span>

                                        <span v-else class="badge rounded-pill text-bg-warning debug"
                                            style="display: inline-block;">
                                            &#36 {{ ELEMCARD.price }}
                                        </span>
                                    </div>

                                </div>

                                <p class="card-text">
                                    {{ ELEMCARD.content }}
                                </p>

                                <div class="debug flex flex-dir-row just-cont-evenly">
                                    <div class="debug">
                                        <i class="fa-solid fa-user"></i>
                                        <span>
                                            {{ ELEMCARD.students }}
                                        </span>
                                    </div>

                                    <div class="debug">
                                        <i class="fa-solid fa-tag"></i>
                                        <span class="text-uppercase">
                                            {{ ELEMCARD.type }}
                                        </span>
                                    </div>
                                </div>



                            </div>
                        </div>


                    </div>
                    <!-- end: card -->


                </div>
                <!-- end: div with 3 cards -->

                <div class="debug width-20 flex flex-dir-row just-cont-evenly">
                    <i v-for="IDXCARDI in secondCarObj.length / ncardsrow" class="fa-solid"
                        v-bind:class="[IDXCARDI - 1 == curractivesec ? 'fa-circle-dot' : 'fa-circle']"
                        @click="updateCurrActiveSecond(IDXCARDI - 1)">
                    </i>
                </div>

            </div>

        </div>
        <!-- end: carousel popular courses -->


        <!-- start: client logos -->
        <div class="">
            <div class="default-div flex flex-dir-row just-cont-evenly align-it-center">

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
    props: ['datiFirstDiv', 'carouselInfo', 'currActiveCar', 'clientLogos', 'secondCarObj', 'currActiveSecond', 'ncardsrow'],
    data() {
        return {
            curractive: this.currActiveCar,
            daticarousel: this.carouselInfo,
            curractivesec: this.currActiveSecond,
            curractiveList: 1
        }
    },
    methods: {
        updateCurrActive(index) {
            if (index != this.curractive) {
                this.curractive = index
            }
        },

        updateCurrActiveSecond(IDXCARDI) {
            if (IDXCARDI != this.curractivesec) {
                this.curractivesec = IDXCARDI
            }
        },

        updateActiveLi(idxlist) {
            if (idxlist != this.curractiveList) {
                this.curractiveList = idxlist
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.user-list-ticks {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li:before {
        content: '✓';
        color: #40C4FF;
    }

}

.class-li {
    color: #40C4FF;
    border-left: 10px solid #40C4FF;
    font-weight: bold;
}

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

.bg-pattern {
    background-image: url(../assets/background-pattern.jpg);
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