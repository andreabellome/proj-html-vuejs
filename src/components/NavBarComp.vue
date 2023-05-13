<template>
    <!-- start: nav bar -->
    <div class="debug flex flex-dir-row just-cont-between bg-yellow">

        <!-- start: logo -->
        <div class="debug logo">
            <img src="../assets/logo-light.png" alt="logo-light" class="debug margin-auto img-fluid">
        </div>
        <!-- end: logo -->

        <!-- start: dyanmic header with info from store -->
        <div class="debug flex align-it-center">
            <ul>
                <li v-for="(elem, index) in datiNav">
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
    <!-- end: nav bar -->
</template>

<script>
export default {
    name: 'NavBarComp',
    props: ['datiNav'],
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