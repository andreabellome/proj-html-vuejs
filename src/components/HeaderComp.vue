<template>
    <div class="debug padd-10">
        <div class="debug padd-10 width-75 margin-auto flex flex-dir-row just-cont-between">

            <div class="debug">
                chicco
            </div>

            <div class="debug">
                <ul>
                    <li v-for="(elem, index) in datiHeader">
                        {{ elem.id }}
                    </li>
                </ul>
            </div>


            <div class="debug">
                chicco
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    props: ['datiHeader'],
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
        display: inline-block;
        margin-right: 2rem;
        text-transform: uppercase;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            cursor: pointer;
        }
    }
}
</style>