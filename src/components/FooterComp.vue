<template>
    <div class="debug container-footer">

        <!-- start: top part footer -->
        <div class="footer-style" style="border-bottom: 1px solid #B9B9B9 ">

            <!-- start: dynamic footer div -->
            <div v-for="(elem, index) in datiFooter" :key="index" class="footer-card">
                <h4 class="text-bold col-white mb-4">
                    {{ elem.id }}
                </h4>
                <ul>
                    <li v-for="(elem2, index2) in elem.li" :key="index2" class="text-col-foot mb-3">

                        <!-- title -->
                        <span v-if="elem2.course !== ''" class="text-col-foot font-size-17">
                            {{ elem2.course }}
                        </span> <br>

                        <!-- teacher -->
                        <span v-if="elem2.teacher !== ''" class="text-col-foot font-size-14">
                            {{ elem2.teacher }}
                        </span>

                        <!-- img -->
                        <img v-if="elem2.pathimg !== ''" src="../assets/footer-img-1.png" alt="footer-img-1"
                            class="img-fluid">
                    </li>

                    <li v-if="elem.tel !== ''" class="text-col-foot font-size-14 mb-3">
                        <i class="fa-solid fa-phone mr-5" style="color: #B9B9B9;"></i> {{ elem.tel }}
                    </li>

                    <li v-if="elem.hours !== ''" class="text-col-foot font-size-14 mb-3">
                        <i class="fa-regular fa-clock mr-5" style="color: #B9B9B9;"></i> {{ elem.hours }}
                    </li>
                </ul>

            </div>
            <!-- end: dynamic footer div -->

        </div>
        <!-- end: top part footer -->

        <!-- start: bottom part footer -->
        <div class="footer-style">

            <div class="text-col-foot">
                Copyrights 2017 <i class="fa-regular fa-copyright text-col-foot"></i> Mikado Themes
            </div>

            <div class="flex flex-dir-row just-cont-evenly align-it-center width-40">
                <div class="text-col-foot">
                    CALL +44 300 303 0266
                </div>

                <div class="text-col-foot">
                    FOLLOW US
                </div>

                <i class="fa-brands fa-twitter text-col-foot"></i>
                <i class="fa-brands fa-facebook text-col-foot"></i>
                <i class="fa-brands fa-instagram text-col-foot"></i>

            </div>

        </div>
        <!-- end: bottom part footer -->

    </div>
</template>

<script>
export default {
    name: 'FooterComp',
    props: ['datiFooter']
}
</script>

<style lang="scss" scoped>
.container-footer {
    padding: 10px;
    background-color: #222222;
}

.footer-style {
    width: 75%;
    margin: auto;

    padding-top: 10px;
    padding-bottom: 10px;

    color: #FFFFFF;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.text-col-foot {
    color: #B9B9B9;
}

.footer-card {
    width: calc(100% / 4 - 1%);
    color: #FFFFFF;
}



ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
        &:hover {
            cursor: pointer;
        }
    }
}
</style>