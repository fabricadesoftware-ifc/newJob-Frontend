<template>
  <div class="container">
    <img src="https://i.ibb.co/bMMxBzS1/logo.png" alt="logo" />
    <div class="right">
      <i class="mdi mdi-magnify"></i>
      <i class="mdi mdi-weather-sunny"></i>
    </div>
  </div>
</template>
<style scoped>
.container {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  & img {
    width: 100px;
  }

  & .right {
    display: flex;
    gap: 5px;

    & .mdi {
      color: var(--branco-escuro);
      font-size: 25px;
    }
  }
}
</style>
