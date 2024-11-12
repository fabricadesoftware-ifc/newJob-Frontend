<script setup>
import {ImageForm, SingUpCompanyView} from '@/components/index';
</script>

<template>
    <div class="container">
    <SingUpCompanyView/>
    <ImageForm side="right" image="https://i.ibb.co/ygh8VM8/image.png"/>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
    }
</style>