<template>
  <b-navbar-item @click="$router.push(to)">
    <slot></slot>
  </b-navbar-item>
</template>

<script>
export default {
  name: 'NavbarButton',
  props: {
    to: String
  }
}
</script>

<style></style>
