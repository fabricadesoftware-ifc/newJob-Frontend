<template>
  <div class="container">
    <div class="cel">
      <i class="mdi mdi-home-outline"></i>
      <p>Início</p>
    </div>
    <div class="cel">
      <i class="mdi mdi-briefcase-outline"></i>
      <p>Vagas</p>
    </div>
    <div class="cel">
      <img src="https://i.ibb.co/G4hJhmq2/image.png" alt="" />
      <p>Perfil</p>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: fixed;
  z-index: 4;
  bottom: 0;
  width: 100%;
  max-width: 100vw;
  background-color: var(--preto);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 49px;
  border-radius: 20px 20px 0 0;
}

.cel {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--cinza-claro);

  & img {
    width: 24px;
    height: 24px;
  }

  & .mdi {
    font-size: 24px;
    height: 20px;
  }

  & p {
    color: var(--branco-escuro);
    font-size: 12px;
  }
}
</style>
