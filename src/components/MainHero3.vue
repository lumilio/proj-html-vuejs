<template>
        <div class="container-fluid d-flex justify-content-center align-items-center first-part px-0"> 
            <div class="box-layout">
                <div class="box-center">
                    <h2>Investing for Your Future</h2>
                    <p>It is no exagegeration to say this MasterStudy experience was transformative both professionally and personally. this workshop will long remain a high point of my life. Thanks again.... I am feeling energized and eager to start teaching my class next week. I cant't wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!</p>
                    <h6>Linda Green</h6>
                    <span>Product Manager, Apple Inc</span>
                    <img src="../assets/images/triangolusreal.png" alt="">
                </div>
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
    height: 500px;
    background-image: url('../assets/images/testimonial-1-1917x640-1-1914x639.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 50px;
}
p{
    color: grey;
    margin: 20px 0;
    line-height: 25px;
}
h6{
    margin:0
}
span{
    font-size: small;
    color: grey;
}
.box-layout{
    width: 900px;
}
.box-center{
    font-size: small;
    background-color: white;
    width: 610px;
    padding: 60px 60px;
    position: relative;
}
img{
    position: absolute;
    right: -20px;
    top: 165px;
    width: 20px;
}
</style>