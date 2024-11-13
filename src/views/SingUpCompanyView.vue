<script setup>
import {ImageForm, SingUpFormCompany} from '@/components/';
</script>

<template>
    <div class="container">
    <SingUpFormCompany/>
    <ImageForm side="right" image="https://i.ibb.co/ygh8VM8/image.png"/>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
    }
</style>