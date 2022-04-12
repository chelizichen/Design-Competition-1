<template>
    <div class="box">
        <Head/>
        <NewsLink/>
        <Swapper/>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import Head from './components/head.vue'
import NewsLink from './components/NewsLink.vue'
import Footer from './components/footer.vue'
import Swapper from './components/swapper.vue'
</script>

<style>
    .box
    {
        margin-bottom: 50px;
    }
    .bg
    {
        background-color: rgb(37, 161, 161);
    }
</style>