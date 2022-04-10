<script setup lang="ts">
import { onBeforeMount, reactive } from "@vue/runtime-core";
import axios from "axios";
import { ElMessage } from "element-plus";
import { inject } from "vue";
import { signInStore } from '../../../store/signin/index'

interface whereType
{
    adcode:number,
    city:string,
    nation:string,
    province:string,
    district:string
}
const state =reactive({
    where : {} as whereType
})
const form = reactive({
  name: '',
  isIll: false,
  id:'',
  class_var:''
})

const studentItem:any = inject('studentItem')

const getLocation =()=>{
    axios.get('/api/ws/location/v1/ip',{
        params:{
            "key":"DO6BZ-R426J-ZL4F5-KCVRY-4YVSV-2MFS5",
        }
    }).then(res=>{
        state.where = res.data.result.ad_info
    }).catch(err=>{
        console.log(err);
    })
}

const onSubmit = () => {
  const {name,isIll,id,class_var} = form
  let newObj = {name,isIll,id:Number(id),class_var,type:1}
      if(name !== studentItem.name)
    {
        console.log('不是本人');
        
        onpenFail()
    }
    else
    {
        openSuccess()
        signInStore.push(newObj)
        console.log(signInStore);
        
    }
}
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
onBeforeMount(()=>{
    getLocation()
})
</script>
<template>
<div>
    <div class="location" v-cloak></div>
    <div class="formState">
        <el-form :model="form" label-width="120px">
            <el-form-item label="签到人">
                <el-input v-model="form.name" />
            </el-form-item>

            <el-form-item label="有无发烧">
            <el-switch v-model="form.isIll" />
            </el-form-item>
            <el-form-item label="专业班级">
            <el-input v-model="form.class_var" />
            </el-form-item>
            <el-form-item label="学号">
            <el-input v-model="form.id" type="number" />
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