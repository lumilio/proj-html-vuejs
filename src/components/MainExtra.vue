<template>
    <div class="container-fluid d-flex justify-content-center"> 
        <div class="container d-flex justify-content-center around">
            <ExtraCardModel v-for="item in ExtraCards" :key='item.id'
            :immagine='item.image'
            :titolo='item.title'
            :info='item.text_info'
            :testobtn='item.text_button'/>
        </div>
    </div>
</template>

/* -------------------------------------------------------------------------- */


<script>
//---------------utilities-------------------
//--------------------------------------------
//---------------components-------------------
import ExtraCardModel from './ExtraCardModel.vue';
//--------------------------------------------

export default {
    name: '',
    components: {
        ExtraCardModel,
    },
    data() {
        return {
            ExtraCards:[
                {
                    title:'Become an Istructor',
                    text_info:'Teach what you love. Masterstudy gives you the tools to create a course.',
                    text_button:'START TEACHING',
                    image:'image_box_1-221x231',
                },
                {
                    title:'Access For Business',
                    text_info:'Get unlimited access to 2,500 of top courses for your team.',
                    text_button:'DOING BUSINESS',
                    image:'image_box_2-234x231',
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
    margin-top: 60px;
    margin-bottom: 50px;
}
</style>