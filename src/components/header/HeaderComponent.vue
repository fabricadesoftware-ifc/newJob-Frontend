<script setup>

</script>

<template>
    <div class="container-header">
        <div class="container-logo">
            <img src="https://i.ibb.co/6g5QTs3/logo-newjob-png.png" alt="" class="logo">
        </div>
        <div class="flex box-mid">
            <p class="border">Início</p>
            <p class="padding-fix">Vagas</p>
        </div>
        <div class="flex box-mid">
            <p class="padding-fix">Login</p>
            <p class="register">Get started</p>
        </div>
    </div>
</template>

<style scoped>
.container-header{
    display: flex;
    justify-content: space-evenly; 
    /* justify-content: space-around;  */
    /* background-color: transparent; Talvez isso funcione dps */
    padding: 2.5em 1em 1em 1em;
}
.flex{
    display: flex;
    gap: 0.5em;
}
.logo{
    width: 35%;
}
.box-mid{
    background-color: white;
    border-radius: 5em;
    padding: 0.5em 1em 0.5em 1em;
   
}
.box-mid > p {
    color: black;
    font-size: 15px;
    cursor: pointer;
}
.border{
    border: solid 1.5px black;
    border-radius: 5em;
    padding: 0.3em 1em 0.3em 1em;
}
.padding-fix{
    padding: 0.3em 0.7em 0.3em 0.7em;
}
.register{
    background-color: #1D4734;
    color: white !important;
    padding: 0.3em 0.7em 0.3em 0.7em;
    border-radius: 5em;
}
</style>