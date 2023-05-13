<template>
    <div class="debug padd-10 container-footer">
        <div class="debug footer-style padd-10">

            <!-- start: iAcademy -->
            <div class="debug footer-card">
                <h5 class="text-bold col-white">
                    iAcademy
                </h5>
                <span class="col-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui molestiae itaque eius consectetur quia
                    modi fugit totam dolores ipsum, doloremque sunt iste! Qui reprehenderit provident quibusdam pariatur!
                    Reiciendis, magni iste!
                </span>
            </div>
            <!-- end: iAcademy -->

            <!-- start: popular courses -->
            <div class="debug footer-card">
                <h5 class="text-bold col-white">
                    Popular Courses
                </h5>
                <span class="col-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui molestiae itaque eius consectetur quia
                    modi fugit totam dolores ipsum, doloremque sunt iste! Qui reprehenderit provident quibusdam pariatur!
                    Reiciendis, magni iste!
                </span>
            </div>
            <!-- end: popular courses -->

            <!-- start: support -->
            <div class="debug footer-card">
                <h5 class="text-bold col-white">
                    Support
                </h5>
                <span class="col-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui molestiae itaque eius consectetur quia
                    modi fugit totam dolores ipsum, doloremque sunt iste! Qui reprehenderit provident quibusdam pariatur!
                    Reiciendis, magni iste!
                </span>
            </div>
            <!-- end: support -->

            <!-- start: flexible learning -->
            <div class="debug footer-card">
                <h5 class="text-bold col-white">
                    Flexible Learning
                </h5>
                <span class="col-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui molestiae itaque eius consectetur quia
                    modi fugit totam dolores ipsum, doloremque sunt iste! Qui reprehenderit provident quibusdam pariatur!
                    Reiciendis, magni iste!
                </span>
            </div>
            <!-- end: flexible learning -->

        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComp',
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.footer-style {
    width: 80%;
    margin: auto;

    color: #FFFFFF;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.footer-card {
    width: calc(100% / 4 - 1%);
    color: #FFFFFF;
}

.container-footer {
    padding: 10px;
    background-color: #222222;
}
</style>