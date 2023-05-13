<template>
    <div class="debug padd-10">
        <div class="debug padd-10 width-75 margin-auto flex flex-dir-row just-cont-between bg-yellow">

            <!-- start: logo -->
            <div class="debug logo">
                <img src="../assets/logo-light.png" alt="logo-light" class="debug margin-auto img-fluid">
            </div>
            <!-- end: logo -->

            <!-- start: dyanmic header with info from store -->
            <div class="debug flex align-it-center">
                <ul>
                    <li v-for="(elem, index) in datiHeader">
                        {{ elem.id }}
                    </li>
                </ul>
            </div>
            <!-- end: dyanmic header with info from store -->

            <!-- start: icons -->
            <div class="debug flex align-it-center">
                chicco
            </div>
            <!-- end: icons -->

        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',
    props: ['datiHeader'],
}
</script>

<style lang="scss" scoped>
.logo {
    width: 15%;

    &:hover {
        cursor: pointer;
    }
}

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