<template>
    <div>
        <div class="container-fluid d-flex justify-content-center first-part px-0 py-5">
            <div class="box-layout d-flex justify-content-between">
                <div class="content">
                    <h6>ABOUT</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda harum obcaecati quod libero est vel enim odit nesciunt ea.</p>
                </div>
                <div class="content">
                    <h6>CONTACT</h6>
                    <p>USA, California 20, First Avenue, California</p>
                    <p>Tel.: +1 212 458 300 32</p>
                    <p>Fax: +1 212 375 24 14</p>
                    <span></span>
                </div>
                <div class="content">
                    <h6>SOCIAL NETWORK</h6>
                    <div></div>
                </div>
                <img src="../assets/images/Top-udemy-courses-90-percent-off.jpg" id="pic-sale" alt="">
            </div>
        </div>
        <div class="container-fluid d-flex justify-content-center first-part px-0"> 
            <div class="box-layout d-flex">
                <img src="" alt="">
                <span>Copyright C 2020.</span>
                <span>MasterStudy</span>
                <span>Theme by</span>
            </div>
        </div>
    </div>
</template>

/* -------------------------------------------------------------------------- */


<script>
//---------------utilities-------------------
//--------------------------------------------
//---------------components-------------------
//--------------------------------------------

export default {
    name: '',
    components: {},
    data() {
        return {
            FooterSocialIcons:[
                {
                    icon_code:'facebbok',
                    icon_prefix:'',
                    color:'',
                },
                {
                    icon_code:'instagram',
                    icon_prefix:'',
                    color:'',
                },
                {
                    icon_code:'linkedin',
                    icon_prefix:'',
                    color:'',
                },
                {
                    icon_code:'pintarest',
                    icon_prefix:'',
                    color:'',
                },
                {
                    icon_code:'twitter',
                    icon_prefix:'',
                    color:'',
                },
                {
                    icon_code:'',
                    icon_prefix:'',
                    color:'',
                },
                {
                    icon_code:'googleplus',
                    icon_prefix:'',
                    color:'',
                },
                {
                    icon_code:'skype',
                    icon_prefix:'',
                    color:'',
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
    background-color: #273044;
    color: white;
}
.box-layout{
    width: 800px;
}
#pic-sale{
    width: 200px;
    height: 130px;
}
.content p, span{
    font-size: 11px;
    width: 200px;
}


</style>