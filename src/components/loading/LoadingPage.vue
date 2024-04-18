<template>
    <div class="container-loading">
        <img src="https://i.ibb.co/Hg2Rp5M/logo-new-Job-loading-4x.png" alt="" class="logo">
        <div class="border"></div>
    </div>
</template>

<style scoped>
.container-loading {
    background-color: #22513C;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container-loading img {
    max-width: 45%;
    max-height: 45%;
}

.border {
    width: 45%;
    height: auto;
    border: 5px solid #C9CBBD;
    margin-top: 4em; 
    border-radius: 5px;
    overflow: hidden;
}
</style>
