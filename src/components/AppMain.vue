<template>
    <div>
        <MainBannerOption1/>
        <MainHero1/>
        <MainBoxPopularDev/>
        <MainHero2/>
        <MainBannerOption2/>
        <MainBoxRecent/>
        <MainSearchBox/>
        <MainBoxPopularCourse/>
        <MainExtra/>
        <MainHero3/>
    </div>
</template>

/* -------------------------------------------------------------------------- */


<script>
//---------------components-------------------
import MainBannerOption1 from './MainBannerOption1.vue';
import MainHero1 from './MainHero1.vue';
import MainBoxPopularDev from './MainBoxPopularDev.vue';
import MainHero2 from './MainHero2.vue';
import MainBannerOption2 from './MainBannerOption2.vue';
import MainBoxRecent from './MainBoxRecent.vue';
import MainSearchBox from './MainSearchBox.vue';
import MainBoxPopularCourse from './MainBoxPopularCourse.vue';
import MainExtra from './MainExtra.vue';
import MainHero3 from './MainHero3.vue';
//--------------------------------------------

export default {
    name: '',
    components: {
        MainBannerOption1,
        MainHero1,
        MainBoxPopularDev,
        MainHero2,
        MainBannerOption2,
        MainBoxRecent,
        MainSearchBox,
        MainBoxPopularCourse,
        MainExtra,
        MainHero3,
    },
}
</script>




/* -------------------------------------------------------------------------- */

<style scoped lang="scss">
@import '../assets/variables.scss';
</style>