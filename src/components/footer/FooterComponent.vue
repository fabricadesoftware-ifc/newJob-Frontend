<script setup>
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from '../icons';
</script>

<template>
    <div class="container-footer">
        <div class="footer-top">
          <img src="https://i.ibb.co/6g5QTs3/logo-newjob-png.png" alt="" class="logo">
          <div>
          <p class="text">  Seja você um engenheiro agrônomo, um técnico em irrigação ou alguém com</p>
          <p class="text">habilidades manuais para o trabalho no campo, a NewJob tem algo para você.</p>
          </div>
          <div class="icons">
            <Facebook class="icon"/>
            <Twitter class="icon"/>
            <Instagram class="icon"/>
            <Linkedin class="icon"/>
          </div>
        </div>
        <div class="border"></div>
        <div class="footer-bot">
            <div class="box-bottom">
                <p>INíCIO</p>
                <div class="border-bottom"></div>
                <p>VAGAS</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-footer{
    max-width: 100%; 
    background: linear-gradient(45deg,#1E4835 25%, #2a694c 55%, #1E4835 80%);
    color: white;
    padding: 4%;
}
.footer-top{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.5em;
    padding-bottom: 3%;
}
.logo{
    width: 11.5%;
}
.text{
    font-size: 1.1em;
    color: #A0A0A0;
    letter-spacing: 0.09em;
}
.icons{
    display: flex;
    gap: 1em;
    font-size: 1.2em;
}
.icons > .icon {
    cursor: pointer;
}
.border {
  border-top: 0.1em solid #ffffff; 
  border-left: 0.3em solid transparent;
  border-right: 0.3em solid transparent; 
    width: 91%;
}

.footer-bot{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 3%;
}
.box-bottom{
    display: flex;
    gap: 3em;
}
.box-bottom > p {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 1.2em;
    cursor: pointer;
}
.border-bottom{
    border-right: solid #A0A0A0 1.5px;
}
</style>