<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
</script>
<template>
    <div class="newsbg">
        <router-link to="/news/1" class="newsLink" active-class="activeLink">校友会2022中国大学一流专业排名发布 我校跻身中国大学一流专业排名（应用型）50强</router-link>
        <router-link to="/news/2" class="newsLink">新闻</router-link>
        <router-link to="/news/3" class="newsLink">新闻</router-link>
        <router-link to="/news/4" class="newsLink">新闻</router-link>
        <router-link to="/news/5" class="newsLink">新闻</router-link>
        <router-link to="/news/6" class="newsLink">新闻</router-link>
        <router-view/>
    </div>
</template>
<style>
    .activeLink
    {
        color: green;
    }
    .newsbg
    {
        padding: 20px;
    }
    .newsLink
    {
        display: block;
        width: 90%;
        /* height: 20px; */
        margin-bottom: 10px;
        color: #241c1c;
        text-decoration: none;
        /* white-space:no-wrap; */
        /* white-space: nowrap; */
        /* text-overflow:ellipsis; */
        /* overflow: hidden; */
    }
    .newsLink::after{
        content: "...";
        width: 10px;
    }
    .newsLink::before
    {
        content: " *  ";
        /* background-color: #c95712; */
        color: #c95712;
        margin-right: 20px;
    }
</style>