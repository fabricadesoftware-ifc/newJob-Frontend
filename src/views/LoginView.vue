<script setup>
import {ImageForm, LoginForm} from '@/components/';
</script>

<template>
    <div class="container">
    <ImageForm side="left" image="https://i.ibb.co/ZVnJqr3/image.png"/>
    <LoginForm/>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
    }
</style>