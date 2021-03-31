<template>
  <b-dropdown aria-role="list" position="is-bottom-left">
    <template #trigger="{ active }">
      <figure
        class="image is-32x32"
        :icon-right="active ? 'menu-up' : 'menu-down'"
      >
        <b-image
          src="https://randomuser.me/api/portraits/men/34.jpg"
          alt="The Buefy Logo"
          :rounded="true"
        ></b-image>
      </figure>
    </template>

    <b-dropdown-item aria-role="listitem" @click="handleProfile"
      >Profile</b-dropdown-item
    >
    <b-dropdown-item aria-role="listitem" @click="handleLogout"
      ><strong>Logout</strong></b-dropdown-item
    >
  </b-dropdown>
</template>

<script>
export default {
  methods: {
    handleProfile() {
      this.$router.push({ name: 'Profile' })
    },
    handleLogout() {
      localStorage.removeItem('token')
      //Arrumar gambiarra
      this.$router.push({ name: 'Login' })
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style></style>
