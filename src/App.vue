
<script setup lang="ts">
import { onBeforeMount, onMounted, provide, reactive,nextTick } from "@vue/runtime-core";
import axios from "axios";
const state = reactive({
  loca:{}
})
const getLocation =()=>{
    axios.get('/api/ws/location/v1/ip',{
      params:{
          "key":"DO6BZ-R426J-ZL4F5-KCVRY-4YVSV-2MFS5",
      }
    }).then(res=>{
      state.loca = res.data.result.ad_info
      console.log(state.loca);
      // console.log('document.body.offsetHeight',document.body.offsetHeight);
      localStorage.setItem('offSetHeight',String(document.body.offsetHeight))
      // provide('currLocation',state.loca)
    }).catch(err=>{
        console.log(err);
    })
}
onBeforeMount(()=>{
  getLocation()
})


// provide('currLocation',state.loca)
// console.log(state.loca);

</script>
<template>
  <div class="NavBar">
    <router-link to="/home" class="link" active-class="active"> 首页</router-link>
    <router-link to="/student" class="link" active-class="active"> 学生中心</router-link>
    <router-link to="/mine" class="link" active-class="active"> 个人</router-link>
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
