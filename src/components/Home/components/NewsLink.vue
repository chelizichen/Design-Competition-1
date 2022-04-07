<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
</script>
<template>
    <div>
        <router-link to="/news/1">新闻</router-link>
        <router-link to="/news/2">新闻</router-link>
        <router-link to="/news/3">新闻</router-link>
        <router-link to="/news/4">新闻</router-link>
        <router-link to="/news/5">新闻</router-link>
        <router-link to="/news/6">新闻</router-link>
        <router-view/>
    </div>
</template>
<style>

</style>