<template>
        <div class="container-fluid d-flex justify-content-center first-part px-0"> 

            <div class="d-flex justify-content-end align-items-center box-1 px-0">
                <div class="text">
                    <h1> Udemy Affiliate Sales</h1>
                    <p>Monetize your audience and attract new customers with Udemy!</p>
                </div>
            </div>

            <div class="d-flex justify-content-center align-items-center box-2 px-0">
                <img src="../assets/images/slide-1 (1).png" alt="" class="heropic">
            </div>

        </div>
</template>

/* -------------------------------------------------------------------------- */


<script>
//---------------utilities-------------------
//--------------------------------------------
//---------------components-------------------
//--------------------------------------------

export default {
    name: '',
    components: {},
}
</script>




/* -------------------------------------------------------------------------- */

<style scoped lang="scss">
@import '../assets/variables.scss';
.container-fluid{
    background-color: $amaranth;
    color: white;
    margin-top: 20px;
}
.text{
    margin-bottom: 30px;

}
h1{
    font-weight: bolder;
    @include font-setup-title;
}
p{
    width: 420px;
    @include font-setup-1;
}
.heropic{
    height: 330px;
}
.box-1{
    width: 40%;
}

.box-2{
    width: 60%;
}
img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>