<template>
        <div class="container-fluid first-part px-0"> 
            <div class="box-1 px-0">
                <div class="text">
                    <h1> Udemy Affiliate Sales</h1>
                    <p>Monetize your audience and attract new customers with Udemy!</p>
                </div>
            </div>
            <div class="box-2 px-0">
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
    position: relative;
    height: 330px;
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
    z-index: 1;
    left: calc(50% - 500px);
    top: 95px;
    position: absolute;
}
.box-2{
    width: 50%;
    float: right;
}
img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: left;
}
</style>