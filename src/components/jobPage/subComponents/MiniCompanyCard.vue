<script setup></script>
<template>
  <div class="box">
    <img src="https://i.ibb.co/fdxgSVGQ/Ellipse-7-1.png" alt="" />
    <p>Bioagric</p>
  </div>
</template>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 10px 6px;
  border-radius: 10px;
}

.box:hover {
  background-color: var(--preto-claro);
  transition: 200ms linear;
  cursor: pointer;
}

img {
  pointer-events: none;
  user-select: none;
}
</style>
