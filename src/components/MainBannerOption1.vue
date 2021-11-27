<template>
        <div class="container-fluid d-flex justify-content-center first-part"> 
            <div class="container d-flex justify-content-center align-items-center py-4 px-0">
                <a v-for="item in BannerCategory" :key="item.id">
                    <font-awesome-icon :icon="[item.icon_prefix, item.icon_code]" class='icon'/>
                    <span>{{item.name}}</span>
                </a>
            </div>
        </div>
</template>

/* -------------------------------------------------------------------------- */


<script>
//---------------utilities-------------------
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
//--------------------------------------------
//---------------components-------------------
//--------------------------------------------

export default {
    name: '',
    components: {},
        data() {
        return {
            BannerCategory:[
                {
                    name:'Business',
                    icon_code:'chart-line',
                    icon_prefix:'fas',
                },
                {
                    name:'Design',
                    icon_code:'palette',
                    icon_prefix:'fas',
                },
                {
                    name:'Development',
                    icon_code:'cog',
                    icon_prefix:'fas',
                },
                {
                    name:'Lifestyle',
                    icon_code:'smile',
                    icon_prefix:'fas',
                },
                {
                    name:'Office Productivity',
                    icon_code:'mail-bulk',
                    icon_prefix:'fas',
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
    margin-top: 10px;
    background-color: $ebony-clay;
    color: white;
}
a{
    padding: 0 20px;
}
span:hover{
    text-decoration: underline;
    cursor: pointer;
}
.icon{
    @include icon-place-1;
}
</style>