<script setup lang="ts">
import axios from 'axios';
import { defineProps, onBeforeMount, onMounted, reactive } from 'vue'
const location = reactive({
    where:{} as any,
    Ip:''
})
onBeforeMount(async ()=>{
    await getData()
    console.log(location.where);
    
})
const getData = async ()=>{
    await axios.get('/api/ws/location/v1/ip',{
        params:{
            "key":"DO6BZ-R426J-ZL4F5-KCVRY-4YVSV-2MFS5",
        }
    }).then(res=>{
        location.where = res.data.result.ad_info
        location.Ip = res.data.result.ip
        // console.log(location.where);
        // console.log(location.Ip);

        
    }).catch(err=>{
        console.log(err);
    })
}

</script>
<template>
    <div class="login">登陆地址</div>
    <el-descriptions border>
        <el-descriptions-item label="国家">{{location.where.nation}}</el-descriptions-item>
        <el-descriptions-item label="省">{{location.where.province}}</el-descriptions-item>
        <el-descriptions-item label="市">{{location.where.city}}</el-descriptions-item>
        <el-descriptions-item label="邮政编码">
            <el-tag size="small">{{location.where.adcode}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="IP" >{{location.Ip}}</el-descriptions-item>
    </el-descriptions>
</template>

<style scoped>
    .login
    {
        margin-top: 5px;
        margin-bottom: 10px;
        font-size: 22px;
        font-weight: 900;
        text-align: center;
        color: cornflowerblue;
    }
    .footerBox
    {
        padding-top: 10px;
        width: 100%;
        height: auto;
        background-color: #5bb6df;
        padding-bottom: 20px;
    }
</style>