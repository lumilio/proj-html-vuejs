<template>
    <div class="d-flex flex-column cardmodel">
        <img :src="require(`../assets/images/${immagine}.jpg`)" alt="x">
        <div class="cardtext">
            <span>{{categoria}}</span>
            <p class="my-2 titolo">{{titolo}}</p>
            <hr>
            <div class="d-flex justify-content-between align-items-center">
                <p>{{voto}}</p>
                <div class="d-flex flex-column align-items-end">
                    <p class="oldprice my-0">{{prezzo1}}</p>
                    <p class="newprice">{{prezzo2}}</p>
                </div>
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
    props:{
        immagine: String,
        categoria: String,
        titolo: String,
        voto: String,
        prezzo1: String,
        prezzo2: String,
    },
    components: {},
}
</script>




/* -------------------------------------------------------------------------- */

<style scoped lang="scss">
@import '../assets/variables.scss';
img{
    width: 205px;
}
.cardmodel{
    border: 1px solid $mystic;
    width: 207px;
    height: 310px;
}
.cardtext{
    padding: 12px;
    font-size: small;
}
.cardtext .titolo{
    font-size: 12px;
}
span{
    color: $submarine;
    margin-bottom: 18px;
}
hr{
    color: $submarine;
}
.oldprice{
    text-decoration: line-through;
    color: $submarine;
}
.newprice{
    font-size: large;
}
</style>