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

        <div class="debug default-div mb-3">
            <h2 class="debug text-bold mb-3">
                The Trusted Name for In-Home Tutoring.
            </h2>

            <p class="debug" style="color: #959595;">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptates amet minus odio eveniet ipsum,
                dolore porro! Expedita rerum consequuntur inventore amet obcaecati possimus pariatur? Aut perferendis sit
                dolorem nesciunt?
            </p>

            <span class="debug learn-more">
                Learn more
            </span>

        </div>

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