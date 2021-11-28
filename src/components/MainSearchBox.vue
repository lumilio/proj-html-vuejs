<template>
        <div class="container-fluid d-flex justify-content-center first-part px-0 py-4"> 
            <div class="container d-flex justify-content-around ">
                <div class="mx-4 py-2">
                    <h5>Limitless learning, more possibilities</h5>
                    <p>There are many variations of passages of Lorem Ipsum avalible, but the majority have suffered alteration in some form, by injecting humor, or randomaised words.</p>
                </div>
                <div class="mx-4 py-2">
                    <h5>Limitless learning, more possibilities</h5>
                    <form class="example" action="action_page.php">
                        <input type="text" placeholder="Search courses" name="search">
                        <button type="submit">SUBSCRIBE</button>
                    </form>
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
}
</script>



/* -------------------------------------------------------------------------- */

<style scoped lang="scss">
@import '../assets/variables.scss';
.container-fluid{
    background-color: $amaranth;
    color: white;
    font-size: small;
}
p{
    max-width: 570px;
}
h5{
    margin-bottom: 15px;
}
form input{
    background-color: white;
    border: none;
    padding: 8px 15px;
    width: 300px;
}
form button{
    background-color: $boston-blue;
    color: white;
    border: none;
    padding: 8px 15px;
}
</style>