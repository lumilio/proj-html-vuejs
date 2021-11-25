<template>


    <div>
        <div class="container-fluid d-flex justify-content-center">
            <div class="container d-flex justify-content-between align-items-center">

                <p>xx</p>



                <div>
                    <ul>
                        <li v-for="item in HeaderSection" :key='item.id'> <a href="#">{{item.name}}</a></li>
                    </ul>

                    <ul>
                        <li v-for="item in HeaderSocialIcons" :key='item.id'> <a href="#"><font-awesome-icon :icon="['fas', 'user-secret']"/></a></li>
                    </ul>
                </div>


            </div>
        </div>
        <div class="container-fluid d-flex justify-content-center">
            <div class="container d-flex justify-content-center align-items-center">

            </div>

        </div>
    </div>



</template>

/* -------------------------------------------------------------------------- */

<script>
//---------------components-------------------
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret)
library.add(faFontAwesome)
//--------------------------------------------




export default {
    name: '',
    components: {

    },
    data() {
        return {
            HeaderSection:[
                {
                    name:'Home'
                },
                {
                    name:'Pages'
                },
                {
                    name:'Course Formats'
                },
                {
                    name:'Courses'
                },
                {
                    name:'Demos'
                },
            ],
            HeaderSocialIcons:[
                {
                    icon_prefix:'',
                    icon_code:'',
                },
                {
                    icon_prefix:'',
                    icon_code:'',
                },
                {
                    icon_prefix:'',
                    icon_code:'',
                },
                {
                    icon_prefix:'',
                    icon_code:'',
                },
                {
                    icon_prefix:'',
                    icon_code:'',
                },
            ],
        };
    },
    methods:{},
    created(){},
    mounted(){}
} 
</script>

/* -------------------------------------------------------------------------- */

<style scoped lang="scss">
@import '../assets/variables.scss';
@import "~bootstrap/scss/bootstrap";
</style>s