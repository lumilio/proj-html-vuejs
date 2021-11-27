<template>
        <div class="container-fluid d-flex align-iyrms-center flex-column first-part px-0"> 
            <div class="container d-flex justify-content-start align-items-center px-0">
                <h5>Popular Development Courses</h5>
            </div>
            <div class="container d-flex justify-content-between my-4 px-0">

                <CardModel v-for="item in Cards" :key='item.id'
                :immagine = 'item.image'
                :categoria = 'item.category'
                :titolo = 'item.course_name'
                :voto = 'item.vote'
                :prezzo1 = 'item.old_price'
                :prezzo2 = 'item.new_price'/>

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
                    image:'246154_d8b0_3-272x161',
                    category:'Development >',
                    course_name:'Web Design for Beginners: Real World Coding in HTML & CSS',
                    vote:'4.6',
                    old_price:'$129.99',
                    new_price:'$65',
                },
                {
                    image:'752950_b773-272x161',
                    category:'Development >',
                    course_name:'GitHub Ultimate: Master Git and GitHub - Beginner to Expert',
                    vote:'4.4',
                    old_price:'$99.99',
                    new_price:'$50',
                },
                {
                    image:'1253188_58f7_2-272x161',
                    category:'Development >',
                    course_name:'The Complete iOS 11 & Swift Developer Course - Build 20 Apps',
                    vote:'4.4',
                    old_price:'$199.99',
                    new_price:'$100',
                },
                {
                    image:'919872_ed54_6-272x161',
                    category:'Development >',
                    course_name:'Android Java Masterclass - Become an App Developer',
                    vote:'4.4',
                    old_price:'$99.99',
                    new_price:'$50',
                },
                {
                    image:'951684_9c1a_2-272x161',
                    category:'Development >',
                    course_name:'Xamarin Forms: Build Native Cross-platform Apps with C#',
                    vote:'4.4',
                    old_price:'$109.99',
                    new_price:'$95',
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
    margin-top: 70px;
}
</style>