<template>
    <div class="col-white flex flex-dir-col just-cont-center align-it-center padd-10 mt-70 width-80 margin-auto">

        <h1 class="col-white font-size-80 mb-5">
            {{ datiCarouselComp[curractive].title }}
        </h1>

        <p class="col-white text-center mb-5">
            {{ datiCarouselComp[curractive].text }}
        </p>

        <div class="load-more-button mb-5">
            Register Now
        </div>

        <!-- start: buttons to update slides -->
        <div class="col-white width-20 flex flex-dir-row just-cont-evenly">

            <i v-for="(elem, index) in datiCarouselComp" class="fa-regular col-white"
                v-bind:class="[index == curractive ? 'fa-circle-dot' : 'fa-circle']" @click="updateCurrActive(index)"></i>

        </div>
        <!-- end: buttons to update slides -->

    </div>
</template>

<script>
export default {
    name: 'CarouselComp',
    props: ['datiCarouselComp', 'currentActive'],
    data() {
        return {
            curractive: this.currentActive,
            daticarousel: this.datiCarouselComp
        }
    },
    methods: {
        updateCurrActive(index) {

            if (index != this.curractive) {
                let lcarousel = this.daticarousel.length
                this.curractive = index
            }

        }
    }
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

.fa-circle-dot {
    &:hover {
        cursor: pointer;
    }
}

.fa-circle {
    &:hover {
        cursor: pointer;
    }
}
</style>