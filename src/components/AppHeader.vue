<template>

    <div>
        <div class="container-fluid d-flex justify-content-center">
            <div class="container d-flex justify-content-between align-items-center">
                <select>
                    <option v-for='item in LenguageOption' :key='item.id' value="item.value">{{item.value}}</option>
                </select>
                <div class="options">
                    <ul class="section">
                        <li v-for="item in HeaderSection" :key='item.id'> <a href="#">{{item.name}}</a></li>
                    </ul>
                    <ul class="social">
                        <li v-for="item in HeaderSocialIcons" :key='item.id'> <a href="#"><font-awesome-icon :icon="[item.icon_prefix, item.icon_code]"/></a></li>
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
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
//--------------------------------------------




export default {
    name: '',
    components: {

    },
    data() {
        return {
            LenguageOption:[
                {
                    name:'',
                    value:'English',
                },
                {
                    name:'',
                    value:'German',
                },
                {
                    name:'',
                    value:'French',
                },
                {
                    name:'',
                    value:'Spanish',
                },
                {
                    name:'',
                    value:'Italian',
                },
            ],
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
                    icon_prefix:'fab',
                    icon_code:'facebook',
                },
                {
                    icon_prefix:'fab',
                    icon_code:'twitter',
                },
                {
                    icon_prefix:'fab',
                    icon_code:'instagram',
                },
                {
                    icon_prefix:'fab',
                    icon_code:'linkedin',
                },
                {
                    icon_prefix:'fab',
                    icon_code:'youtube',
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

</style>s