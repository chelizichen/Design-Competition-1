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
        <router-link to="/news/2" class="newsLink">新闻观察：疫情下运输物流如何保畅通</router-link>
        <router-link to="/news/3" class="newsLink">天津市宝坻区新冠肺炎疫情防控工作指挥部向我校致感谢信</router-link>
        <router-link to="/news/4" class="newsLink">我校学生团队在中国国际“互联网+”大学生创新创业大赛中获奖</router-link>
        <router-link to="/news/5" class="newsLink">《湖北电视台》教育频道专题报道我校“青马晨曦”志愿队爱心支教项目</router-link>
        <router-link to="/news/6" class="newsLink">【教坛新秀】邵靖婷：学生心中的“暖阳姐姐</router-link>
        
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
        padding: 10px 20px;
        margin-top: 10px;
        border-bottom:3px solid rgb(116, 100, 100);
        
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