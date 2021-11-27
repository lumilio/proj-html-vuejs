<template>
    <div>
        <div class="container-fluid d-flex justify-content-center first-part"> <!-------------------- first part ------------------>
            <div class="container d-flex justify-content-between align-items-center py-3 px-0">
                <select>
                    <option v-for='item in LenguageOption' :key='item.id' value="item.value">{{item.value}}</option>
                </select>
                <div class="options">
                    <ul class="menu">
                        <li v-for="item in HeaderSection" :key='item.id'> <a href="#">{{item.name}}</a></li>
                    </ul>
                    <ul class="social-icons">
                        <li v-for="item in HeaderSocialIcons" :key='item.id'> <a href="#"><font-awesome-icon :icon="[item.icon_prefix, item.icon_code]"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid d-flex justify-content-center second-part"> <!---------------------- second part ----------------------->
            <div class="container d-flex align-items-center py-3 px-0">
                <HeaderLogo/>
                <a href="#" id="link-category">
                    <font-awesome-icon :icon="['fas', 'bars']" class="content-icon"/>
                    <span>CATEGORY</span>
                </a>
                <form class="example" action="action_page.php">
                    <input type="text" placeholder="Search courses" name="search">
                    <button type="submit"><font-awesome-icon :icon="['fas', 'search']" class="content-icon"/></button>
                </form>
                <a href="#" id="link-instructor">
                    <font-awesome-icon :icon="['fas', 'bullhorn']" class="content-icon"/>
                    <span>Become an Instructor</span>
                </a>
                <a href="#" id="link-enterprise">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="content-icon"/>
                    <span>For Enterprise</span>
                </a>
                <a href="#" id="link-login">
                    <font-awesome-icon :icon="['fas', 'user']" class="content-icon"/>
                    <span>Log in</span>
                </a>
                <button id="btn-signup">SIGN UP</button>
                <font-awesome-icon :icon="['far', 'bookmark']" v-if="bookmark == false" @click='bookmark = true' id="btn-bookmark"/>
                <font-awesome-icon :icon="['fas', 'bookmark']" v-else @click='bookmark = false' id="btn-bookmark-full"/>
            </div>
        </div>
    </div>
</template>

/* -------------------------------------------------------------------------- */

<script>
//---------------utilities-------------------
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas, far)
//--------------------------------------------
//---------------components-------------------
import HeaderLogo from './HeaderLogo.vue';
//--------------------------------------------

export default {
    name: '',
    components: {
        HeaderLogo,
    },
    data() {
        return {
            bookmark: false,
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
} 
</script>

/* -------------------------------------------------------------------------- */

<style scoped lang="scss">
@import '../assets/variables.scss';
/* ---------------------- first part ------------------- */
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
    margin-right: -14px;
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
.options .menu a:hover{
    color: black;
}
select{
    border: none;
    color: $submarine;
    background-color: white;
    font-size: small;
}
select:hover{
    cursor: pointer;
}
.content-icon{
    @include icon-place-1;
}
.social-icons li:hover{
    cursor: pointer;
}
.social-icons a:hover{
    color: $chestnut-rose;
}
/* ---------------------- second part --------------------- */
.second-part {
    font-size: small;
}
.second-part a{
    color: $san-juan;
    text-decoration: none;
}
.second-part a:hover{
    color: $san-juan;
    text-decoration: underline;
}
form input{
    background-color: $mystic;
    border: none;
    padding: 7px 20px;
    width: 330px;
}
form button{
    background-color: $boston-blue;
    color: white;
    border: none;
    padding: 7px 15px;
}
#link-category, 
#link-instructor{
    margin-left: 55px;
    margin-right: 15px;
}
#link-enterprise{
    margin-right: 54px;
    margin-left: 10px; 
}
#link-login{
    margin-right: 15px;
}
#btn-signup{
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    background-color: $amaranth;
    color: white;
}
#btn-signup:hover{
    background-color: $apple;
    color: white;
}
#btn-bookmark:hover,
#btn-bookmark-full{
    color: $amaranth;
}
#btn-bookmark:hover,
#btn-bookmark-full:hover{
    cursor: pointer;
}
#btn-bookmark,
#btn-bookmark-full{
    transform: scale(1,1.5);
    margin-left: 20px;
}
</style>