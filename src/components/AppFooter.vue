<template>
    <div>
        <div class="container-fluid d-flex justify-content-center first-part px-0 py-5 first-part">
            <div class="box-layout d-flex justify-content-between">
                <div class="content">
                    <h6>ABOUT</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda harum obcaecati quod libero est vel enim odit nesciunt ea.</p>
                </div>
                <div class="content">
                    <h6>CONTACT</h6>
                    <p>USA, California 20, First Avenue, California</p>

                    <p class="m-0">Tel.: +1 212 458 300 32</p>
                    <p>Fax: +1 212 375 24 14</p>

                    <p id="mail">info@masterstudy.com</p>
                    <span></span>
                </div>
                <div class="content">
                    <h6>SOCIAL NETWORK</h6>
                    <div class="d-flex">
                        <div v-for="item in FooterSocialIcons" :key="item.id"><a href="#"><font-awesome-icon :icon="[item.icon_prefix, item.icon_code]"/></a></div>
                    </div>
                </div>
                <img src="../assets/images/Top-udemy-courses-90-percent-off.jpg" id="pic-sale" alt="">
            </div>
        </div>
        <div class="container-fluid d-flex justify-content-center first-part px-0 second-part"> 
            <div class="box-layout d-flex align-items-center">
                <img src="../assets/images/footer-logo2x-50x56.png" id="logo" alt="">
                <p>Copyright &copy; 2020. <a href="#">MasterStudy</a> Theme by <a href="#">StylemixThemes</a></p>
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
                    icon_prefix:'fab',
                    color:'#3b5998',
                },
                {
                    icon_code:'instagram',
                    icon_prefix:'fab',
                    color:'#c32aa3',
                },
                {
                    icon_code:'linkedin',
                    icon_prefix:'fab',
                    color:'#0077b5',
                },
                {
                    icon_code:'pintarest',
                    icon_prefix:'fab',
                    color:'#bd081c',
                },
                {
                    icon_code:'twitter',
                    icon_prefix:'fab',
                    color:'#1da1f2',
                },
                {
                    icon_code:'snapchat-ghost',
                    icon_prefix:'fab',
                    color:'',
                },
                {
                    icon_code:'google-plus',
                    icon_prefix:'fab',
                    color:'#db4437',
                },
                {
                    icon_code:'skype',
                    icon_prefix:'fab',
                    color:'#26bbf2',
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
    width: 900px;
}
#pic-sale{
    width: 200px;
    height: 130px;
}
.content p, span{
    font-size: 11px;
    width: 200px;
}
h6{
    margin-bottom:20px
}
.second-part{
    padding: 20px 0;
    border-top: 1px solid #eeeeee;
}
.second-part p{
    margin-bottom: 0;
    margin-left: 17px;
    font-size: 11px;
}
.second-part a{
    color: white;
}
#logo{
    width: 20px;
    height: 23px;
}
#mail{
    color: grey;
}
</style>