<script setup lang="ts">
import { inject, onBeforeMount, reactive } from "@vue/runtime-core";
import axios from "axios";
import { signInStore } from '../../../store/signin/index'
import { ElMessage } from 'element-plus'
import {currTime} from '../../../store/public/time'
const form = reactive({
  name: '',
  isIll: false,
  desc: '',
  where:'',
  id:Number(),
  time:currTime()
})

const re = /^([\u0931-\uFFE5]{2,4})$/
const studentItem:any = inject('studentItem')
const getLocation =()=>{
    axios.get('/api/ws/location/v1/ip',{
        params:{
            "key":"DO6BZ-R426J-ZL4F5-KCVRY-4YVSV-2MFS5",
        }
    }).then(res=>{
        form.where = res.data.result.ad_info.city
    }).catch(err=>{
        console.log(err);
    })
}
const onSubmit = () => {
    console.log('submit!')
    // 失去响应式
    const {name,isIll,desc,where,id,time} = form
    let newObj = {name,isIll,desc,where,type:3,id:Number(id),content:'✔️',date:time}
    if(name !== studentItem.name)
    {
        console.log('不是本人');
        onpenFail()
    }
    else
    {
        openSuccess()
        signInStore.push(newObj)
    }
    console.log(signInStore);
}

onBeforeMount(()=>{
    getLocation()
    console.log('studentItem',studentItem);
    form.id =  studentItem.id
})

// 消息成功弹出框 
const openSuccess = () => {
      ElMessage({
        type: 'success',
        message: `签到成功`,
      })
}
// 消息失败弹出框
const onpenFail = () => {
      ElMessage({
        type: 'error',
        message: `签到失败`,
      })
}
</script>
<template>
<div>
    <div class="location" v-cloak></div>
    <div class="formState">
        <el-form :model="form" label-width="120px">
            <el-form-item label="签到人">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="签到地点">
                <el-input v-model="form.where" />
            </el-form-item>
            <el-form-item label="学号">
                <el-input v-model="form.id" />
            </el-form-item>

            <el-form-item label="有无发烧">
            <el-switch v-model="form.isIll" />
            </el-form-item>
            <el-form-item label="备注">
            <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="onSubmit">签到</el-button>
            <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>

</div>
</template>

<style scoped>
    .location
    {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .formState
    {
        margin-top: 20px;
        padding-right: 40px;
    }
</style>