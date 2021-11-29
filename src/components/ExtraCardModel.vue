<template>
    <div class="extra-card d-flex align-items-center mx-3 py-4">
        <img :src="require(`../assets/images/${immagine}.png`)" alt="x">
        <div>
            <h3>{{titolo}}</h3>
            <p>{{info}}</p>
            <button>{{testobtn}}</button> 
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
    props:{
        titolo: String,
        info: String,
        testobtn: String,
        immagine: String,
    },
    components: {},
}
</script>




/* -------------------------------------------------------------------------- */

<style scoped lang="scss">
@import '../assets/variables.scss';
.extra-card{
    border: 1px solid #eeeeee;
    width: 800px;
}
h3{
    @include font-setup-title;
}
button{
    padding: 15px 25px;
    border-radius: 25px;
    margin-top: 10px;
    border: none;
    background-color: $amaranth;
    color: white;
    font-weight: bolder;
    font-size: small;
}
button:hover{
    background-color: $apple;
    color: white;
}
img{
    width: 170px;
    height: 181px;
    margin: 30px;
}
p{
    margin-top: 20px;
    color:rgb(158, 157, 157);
    max-width: 340px;
}
</style>