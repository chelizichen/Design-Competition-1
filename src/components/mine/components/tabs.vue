<script setup lang="ts">
import axios from "axios";
import { inject, onBeforeMount, reactive } from "vue";
import User from './tabs/user.vue'
import Location from './tabs/location.vue'
import SignIn from './tabs/signIn.vue'
import Vacate from './tabs/vacate.vue'
let studentItem = inject("studentItem")
let location = reactive({
    where:{}
})
console.log('studentItem',studentItem);
// onBeforeMount(()=>{
//     axios.get('/api/ws/location/v1/ip',{
//         params:{
//             "key":"DO6BZ-R426J-ZL4F5-KCVRY-4YVSV-2MFS5",
//         }
//     }).then(res=>{
//         location.where = res.data
//     }).catch(err=>{
//         console.log(err);
//     })
// })


</script>
<template>
    <el-tabs type="border-card">
    <el-tab-pane label="用户信息"><User :user="studentItem"/></el-tab-pane>
    <el-tab-pane label="所在位置"><Location /></el-tab-pane>
    <el-tab-pane label="签到记录"><SignIn/></el-tab-pane>
    <el-tab-pane label="请假记录"><Vacate/></el-tab-pane>
  </el-tabs>
</template>
<style>

</style>