<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <h1>Newjob</h1>
  </div>
  <router-view />
</template>

<style>
#nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
