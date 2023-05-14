<template>
    <div class="debug container-footer">
        <div class="debug footer-style">

            <!-- start: dynamic footer div -->
            <div v-for="(elem, index) in datiFooter" :key="index" class="debug footer-card">
                <h4 class="text-bold col-white mb-4">
                    {{ elem.id }}
                </h4>
                <ul>
                    <li v-if="index + 1 < datiFooter.length" v-for="(elem2, index2) in elem.li" :key="index2"
                        class="text-col-foot mb-3">
                        <span class="text-col-foot font-size-17">
                            {{ elem2.course }}
                        </span> <br>
                        <span class="text-col-foot font-size-14">
                            {{ elem2.teacher }}
                        </span>
                    </li>
                    <li v-else>
                        <img src="../assets/footer-img-1.png" alt="footer-img-1" class="img-fluid">
                    </li>
                </ul>

            </div>
            <!-- end: dynamic footer div -->

        </div>
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

    padding: 10px;

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