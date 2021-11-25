<template>

    <div>
        <div class="container-fluid d-flex justify-content-center first-part">
            <div class="container d-flex justify-content-between align-items-center py-3">
                <select>
                    <option v-for='item in LenguageOption' :key='item.id' value="item.value">{{item.value}}</option>
                </select>
                <div class="options">
                    <ul class="menu">
                        <li v-for="item in HeaderSection" :key='item.id'> <a href="#">{{item.name}}</a></li>
                    </ul>
                    <ul class="">
                        <li v-for="item in HeaderSocialIcons" :key='item.id'> <a href="#"><font-awesome-icon :icon="[item.icon_prefix, item.icon_code]"/></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container-fluid d-flex justify-content-center second-part">
            <div class="container d-flex justify-content-between align-items-center">
                <HeaderLogo/>
                <a href="#">
                    <font-awesome-icon :icon="['fas', 'bars']" class="content-icon"/>
                    <span>CATEGORY</span>
                </a>
                <form class="example" action="action_page.php">
                    <input type="text" placeholder="Search courses" name="search">
                    <button type="submit">hh</button>
                </form>
                <a href="#">
                    <font-awesome-icon :icon="['fas', 'bullhorn']" class="content-icon"/>
                    <span>Become an Instructor</span>
                </a>
                <a href="#">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="content-icon"/>
                    <span>For Enterprise</span>
                </a>
                <a href="#">
                    <font-awesome-icon :icon="['fas', 'user']" class="content-icon"/>
                    <span>Log in</span>
                </a>
                <button>SIGN UP</button>
                <font-awesome-icon :icon="['far', 'bookmark']"/>
            </div>
        </div>
        
    </div>

</template>

/* -------------------------------------------------------------------------- */

<script>
//---------------components-------------------
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas, far)

import HeaderLogo from './HeaderLogo.vue';
//--------------------------------------------




export default {
    name: '',
    components: {
        HeaderLogo,
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
.first-part{
    border-bottom: 2px solid $mystic;
}
p{
    margin: 0;
    padding: 0;
}
span{
    padding-top: 14px;
}
.options{
    display: flex;
    align-items: center;
}
.options ul {
    margin: 0;
    padding: 0;
}
.options ul li {
    display: inline-block;
    margin: 0 10px;
}
.options ul li a{
    color: $submarine;
    text-decoration: none;
}
.options .menu{
    font-size: small;
    margin-top: 4px;
    margin-right: 20px;
}
select{
    border: none;
    color: $submarine;
    background-color: white;
}
.content-icon{
    margin-bottom: 4px;
    margin-right: 5px;
}
.second-part a{
    color: black;
    text-decoration: none;
}
</style>