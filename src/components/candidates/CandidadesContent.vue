<script setup>
import ListComponent from "./candidatesComponents/ListComponent.vue";
import SearchComponent from "./candidatesComponents/SearchComponent.vue";
import UserComponent from "./candidatesComponents/UserComponent.vue";
</script>

<template>
  <main>
  <h1>Candidatos</h1>
      <SearchComponent />
    <div class="content-container">
      <ListComponent />
      <UserComponent />
    </div>
  </main>
</template>

<style scoped>
main{
 max-width: 100vw;
 padding: 15vh 2vw;
}

h1{
    margin-bottom: 5vh;
}

.content-container {
    display: flex;
}
</style>
