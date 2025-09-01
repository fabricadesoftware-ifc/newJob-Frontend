<script setup>
import {ImageForm, SignUpForm} from '@/components/index';
</script>

<template>
    <div class="container">
    <SignUpForm/>
    <ImageForm side="right" image="https://i.ibb.co/ygh8VM8/image.png"/>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
    }
</style>