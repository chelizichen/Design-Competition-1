<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
</script>
<template>
<div class="outBg">
    <div class="more">
        <div class="new">学院新闻</div>
        <a href="http://www.city.wust.edu.cn/syxw/list/24.aspx" target="_self"><el-icon><arrow-right /></el-icon></a>
    </div>
    <div class="newsbg">
        <router-link to="/news/1" class="newsLink">校友会2022中国大学一流专业排名发布 我校跻身中国大学一流专业排名（应用型）50强</router-link>
        <router-link to="/news/2" class="newsLink">新闻</router-link>
        <router-link to="/news/3" class="newsLink">新闻</router-link>
        <router-link to="/news/4" class="newsLink">新闻</router-link>
        <router-link to="/news/5" class="newsLink">新闻</router-link>
        <router-link to="/news/6" class="newsLink">新闻</router-link>
        <router-view/>
    </div>
</div>
</template>
<style scoped>
    .outBg
    {
        padding: 5px 20px;
        background-color:rgb(247 247 247);
        border-radius: 7px;
        margin-bottom: 3px;
        margin-top: 3px;
    }
    .more
    {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        margin-top: 10px;
        border-bottom:3px solid rgb(116, 100, 100)
    }
    .activeLink
    {
        color: green;
    }
    .newsbg
    {
        padding: 10px 20px;
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
    .newsLink:hover
    {
        color: chocolate;
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