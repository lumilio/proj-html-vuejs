<template>
        <div class="container-fluid d-flex justify-content-center first-part px-0"> 
            <div class="box-center d-flex align-items-center justify-content-start">
                <div>
                    <h1>Limitless learning, more possibilities</h1>
                    <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.</p>
                    <button>READ MORE</button>
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
    height: 400px;
    background-image: url('../assets/images/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 50px;
}
.box-center{
    width: 800px;
    font-size: small;
}
h1,p{
    max-width: 410px;
}
p{
    margin: 20px 0;
}
button{
    padding: 15px 25px;
    border-radius: 25px;
    margin-top: 10px;
    border: none;
    background-color: $amaranth;
    color: white;
    font-weight: bolder;
}
button:hover{
    background-color: $apple;
    color: white;
}
</style>