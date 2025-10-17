<template>
  <div class="container">
    <img src="https://i.ibb.co/bMMxBzS1/logo.png" alt="logo" />
    <div class="right">
      <div class="search-bar">
        <i class="mdi mdi-magnify"></i>
      </div>
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
    max-width: 25vw;
  }

  & .search-bar {
    display: flex;
    align-items: center;
    border: hsl(0, 0%, 63%, 20%) 1px solid;
    padding: 6px 8px;
    border-radius: 8px;
    font-size: 0.8rem;
    height: 18px;
    width: 45vw;
    min-width: 150px;
  }

  & .right {
    display: flex;
    align-items: center;
    gap: 5px;

    & .mdi {
      color: var(--branco-escuro);
      font-size: 25px;
    }
  }
}
</style>
