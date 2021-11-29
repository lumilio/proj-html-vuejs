<template>
        <div class="container-fluid d-flex flex-column align-items-center justify-content-center first-part px-0"> 
            
            <h1>Recent courses</h1>

            <ul class='my-3 py-2'>
                <li v-for="item in CardsCategory" :key='item.id' @click="SelectCategory(item,CardsCategory)" :class ="(item.selected == true )?'selected':''" class='mx-2'>{{item.name}}</li>
            </ul>

            <div class="container d-flex flex-wrap justify-content-between">
                <CardModel v-for="item in Cards" :key='item.id' class="my-3"
                :immagine = 'item.image'
                :categoria = 'item.category'
                :titolo = 'item.course_name'
                :voto = 'item.vote'
                :prezzo1 = 'item.old_price'
                :prezzo2 = 'item.new_price'/>
            </div>
            <button>SHOW ALL</button>
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
            CardsCategory:[
                {
                    selected: true,
                    name:'All Categories'
                },
                {
                    selected: false,
                    name:'Business'
                },
                {
                    selected: false,
                    name:'Design'
                },
                {
                    selected: false,
                    name:'IT & Software'
                },
                {
                    selected: false,
                    name:'Lifestyle'
                },
                {
                    selected: false,
                    name:'Marketing'
                },
                {
                    selected: false,
                    name:'Office Productivity'
                },
            ],
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
                {
                    image:'949316_2a64_11-272x161',
                    category:'Arts & Crafts >',
                    course_name:'Foundation for Mastering Watercolor Painting',
                    vote:'4.5',
                    old_price:'$19.99',
                    new_price:'$10',
                },
                {
                    image:'366802_6fcc-272x161',
                    category:'Food & Beverage >',
                    course_name:'Get Wine-Smart',
                    vote:'4.3',
                    old_price:'$49.99',
                    new_price:'$25',
                },
                {
                    image:'381588_2e6d_4-272x161',
                    category:'Arts & Crafts >',
                    course_name:'The Colored Pencil Drawing Course',
                    vote:'4.3',
                    old_price:'$34.99',
                    new_price:'$18',
                },
                {
                    image:'838056_611a_3-272x161',
                    category:'Arts & Crafts >',
                    course_name:'Paint Realistic Watercolor and Botanicals - STUDIO BASICS',
                    vote:'4.3',
                    old_price:'$69.99',
                    new_price:'$35',
                },
                {
                    image:'1414956_d944_15-272x161',
                    category:'Arts & Crafts >',
                    course_name:'Mastering Brushstrokes - Part 1',
                    vote:'4.4',
                    old_price:'$19.99',
                    new_price:'$10',
                },
                {
                    image:'1109398_4c13-272x161',
                    category:'Arts & Crafts >',
                    course_name:'Paint Realistic Watercolour and Botanicals - MAGNOLIAS',
                    vote:'4.7',
                    old_price:'$69.99',
                    new_price:'$35',
                }, 
            ],
        };
    },
    methods:{
        SelectCategory(x,y){
            if (x.selected == false) {
                x.selected = true;
                for (let i = 0; i < y.length; i++) {
                    const element = y[i];
                    if(element != x){
                        element.selected = false;
                    }
                    console.log(element.selected);
                }
            }
        }
    }
}
</script>



/* -------------------------------------------------------------------------- */

<style scoped lang="scss">
@import '../assets/variables.scss';
.container-fluid{
    margin-top: 100px;
}
h1{
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
    margin-bottom: 80px;
    margin-top: 25px;
}
button:hover{
    background-color: $apple;
    color: white;
}
li{
    display: inline-block;
    color: grey ;
    padding: 5px 10px;
    border-radius: 10px;
}
li:hover{
    cursor: pointer;
}

.selected{
    background-color: $mystic;
}
</style>