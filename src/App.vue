
<script setup lang="ts">
</script>
<template>
  <div class="NavBar">
    <router-link to="home" class="link" active-class="active"> 首页</router-link>
    <router-link to="vacate" class="link" active-class="active"> 学生中心</router-link>
    <router-link to="mine" class="link" active-class="active"> 个人</router-link>
  </div>
  <router-view/>

</template>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .NavBar
  {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    z-index: 999;
    background-color: cadetblue;
  }
  .link
  {
    /* width: 33%; */
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .active
  {
    background-color: bisque;
  }
</style>
