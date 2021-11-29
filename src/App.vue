<template>
  <div id="app">
      <AppHeader/>
      <AppMain/>
      <AppFooter/>
  </div>
</template>

/* -------------------------------------------------------------------------- */

<script>
//---------------components-------------------
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
//--------------------------------------------
export default {
    name: '',
    components: {
        AppHeader,
        AppMain,
        AppFooter,
    },
    data() {
        return {
            FooterSocialIcons:[
                {
                    image:'',
                    color:'',
                },
                {
                    image:'',
                    color:'',
                },
                {
                    image:'',
                    color:'',
                },
                {
                    image:'',
                    color:'',
                },
                {
                    image:'',
                    color:'',
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

<style lang="scss">
@import './assets/variables.scss';
</style>
