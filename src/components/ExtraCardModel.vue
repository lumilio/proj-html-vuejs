<template>

    <div class="d-flex">
        <img :src="require(`../assets/images/${immagine}.png`)" alt="x">
        <div>
            <h1>{{titolo}}</h1>
            <p>{{titolo}}</p>
            <button>{{titolo}}</button> 
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
</style>