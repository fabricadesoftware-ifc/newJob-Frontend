<script setup></script>
<template>
  <div class="container">
    <img src="https://i.ibb.co/fdxgSVGQ/Ellipse-7-1.png" alt="" />
    <p>Bioagric</p>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 10px 6px;
  border-radius: 10px;
}

.container:hover {
  background-color: #282828;
  transition: 200ms linear;
  cursor: pointer;
}

img {
  pointer-events: none;
  user-select: none;
}
</style>
