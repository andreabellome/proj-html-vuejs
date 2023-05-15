<template>
    <!-- start: nav bar -->
    <div class="flex flex-dir-row just-cont-between mb-3">

        <!-- start: logo -->
        <div class="logo">
            <img src="../assets/logo-light.png" alt="logo-light" class="margin-auto img-fluid">
        </div>
        <!-- end: logo -->

        <!-- start: dyanmic header with info from store -->
        <div class="flex align-it-center text-bold">
            <ul>
                <li v-for="(elem, index) in datiNav" class="col-white">
                    {{ elem.id }}
                </li>
            </ul>
        </div>
        <!-- end: dyanmic header with info from store -->

        <!-- start: icons -->
        <div class="flex align-it-center">
            <i class="fa-solid fa-magnifying-glass col-white mr-30"></i>
            <i class="fa-solid fa-bag-shopping col-white mr-30"></i>
            <i class="fa-solid fa-bars col-white"></i>
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