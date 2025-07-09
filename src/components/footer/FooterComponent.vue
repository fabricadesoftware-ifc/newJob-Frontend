<script setup>
import { RouterLink } from "vue-router";
import { Github, Instagram, Linkedin } from "../icons";
</script>

<template>
  <div class="container-footer">
    <div class="footer-top">
      <img src="https://i.ibb.co/6g5QTs3/logo-newjob-png.png" alt="" class="logo" />
      <div>
        <p class="text">
          Seja você um engenheiro agrônomo, um técnico em irrigação ou alguém com
        </p>
        <p class="text">
          habilidades manuais para o trabalho no campo, a NewJob tem algo para você.
        </p>
      </div>
    </div>
    <div class="border"></div>
    <div class="footer-bot">
      <div class="icons">
        <a href="https://github.com/fabricadesoftware-ifc" target="_blank">
          <Github class="icon" />
        </a>
        <a href="https://www.instagram.com/fabricadesoftware.ifc/" target="_blank">
          <Instagram class="icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/fabricadesoftware-ifc/posts/?feedView=all"
          target="_blank"
        >
          <Linkedin class="icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-footer {
  width: 100%;
  background: linear-gradient(28deg, #0e301c 15%, #07734b, #0e301c 85%);
  color: white;
  padding: 3vh 0;
}
.footer-top {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3vh;
  padding-bottom: 3vh;
}
.logo {
  width: 10vw;
  min-width: 100px;
}
.text {
  font-size: 0.9em;
  color: var(--cinza-claro);
  letter-spacing: 0.09em;
}
.icons {
  display: flex;
  gap: 1em;
  font-size: 1.2em;

  & a {
    text-decoration: none;
    color: white;
  }
}
.border {
  border-top: 0.1em solid var(--cinza);
  border-left: 0.3em solid transparent;
  border-right: 0.3em solid transparent;
  width: 91%;
  margin: 0 auto;
}

.footer-bot {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 3vh;
}
.box-bottom {
  display: flex;
  gap: 3em;
}
.box-bottom > p {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.2em;
  cursor: pointer;
}
.border-bottom {
  border-right: solid var(--cinza-claro) 1.5px;
}
</style>
