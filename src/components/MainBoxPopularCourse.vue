<template>
        <div class="container-fluid d-flex flex-column align-items-center justify-content-center first-part px-0"> 
            
            <h1>Recent courses</h1>

            <p>Discover our most popular courses for self learning</p>

            <div class="container d-flex justify-content-between">
                <CardModel v-for="item in Cards" :key='item.id' class="my-3"
                :immagine = 'item.image'
                :categoria = 'item.category'
                :titolo = 'item.course_name'
                :voto = 'item.vote'
                :prezzo1 = 'item.old_price'
                :prezzo2 = 'item.new_price'/>
            </div>
            <div class="d-flex buttons">
                <div class="form-arrow"><font-awesome-icon :icon="['fas', 'chevron-left']" class="content-icon"/></div>
                <div class="form-arrow"><font-awesome-icon :icon="['fas', 'chevron-right']" class="content-icon"/></div>
            </div>
        </div>
</template>

/* -------------------------------------------------------------------------- */


<script>
//---------------utilities-------------------
//--------------------------------------------
//---------------components-------------------
import CardModel from './CardModel.vue';
//--------------------------------------------

export default {
    name: '',
    components: {
        CardModel,
    },
    data() {
        return {
            Cards:[
                {
                    image:'895786_7b4b_2-272x161',  
                    category:'Development >',
                    course_name:'The Complete iOS 10 & Swift 3 Developer Course',
                    vote:'4.4',
                    old_price:'$199.99', 
                    new_price:'$100',
                },
                {
                    image:'1561458_7f3b-272x161',  
                    category:'Design >',
                    course_name:'CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)',
                    vote:'5',
                    old_price:'$199.99',
                    new_price:'$100',
                },
                {
                    image:'246154_d8b0_3-272x161',  
                    category:'Development >',
                    course_name:'Web Design for Beginners: Real World Coding in HTML & CSS',
                    vote:'4.6',
                    old_price:'$129.99',
                    new_price:'$65',
                },
                {
                    image:'1208228_d61c_4-272x161',  
                    category:'Design >',
                    course_name:'Digitally Painting Light and Color: Ameteur to Master',
                    vote:'4.4',
                    old_price:'$139.99',
                    new_price:'$70',
                },
                {
                    image:'186792_41e4_4-272x161',  
                    category:'Arts & Crafts >',
                    course_name:'Become an Arabic Calligraphy Artist from Scratch',
                    vote:'4.5',
                    old_price:'',
                    new_price:'$199.99',
                },
                {
                    image:'1776542_30b1-272x161',  
                    category:'Google >',
                    course_name:'Google Searching Ninja!',
                    vote:'3.7',
                    old_price:'$89.99',
                    new_price:'$45',
                },
            ],
        };
    },
}
</script>



/* -------------------------------------------------------------------------- */

<style scoped lang="scss">
@import '../assets/variables.scss';
.container-fluid{
    padding-top: 80px;
    background-color: $mystic;
}
p{
    color: grey;
    margin-bottom: 30px;
}
.buttons{
    margin-bottom: 70px;
    margin-top: 30px;
}
.form-arrow{
    color: rgb(187, 187, 187);
    font-size: small;
    padding: 10px 15px;
    background-color: white;
    border: 1px solid rgb(204, 204, 204);
}
.form-arrow:hover{
    color: white;
    background-color: $boston-blue;
    border: 1px solid $boston-blue;
}
</style>