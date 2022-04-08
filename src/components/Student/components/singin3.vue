<script setup lang="ts">
import { onBeforeMount, reactive } from "@vue/runtime-core";
import axios from "axios";

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
  region: '',
  isIll: false,
  type: [],
  desc: '',
})

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
  console.log('submit!')
  console.log(form.name);
  console.log(form.region);
  console.log(form.isIll);
  console.log(form.type);
  console.log(form.desc);

  
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
            <el-form-item label="签到地点">
                <el-select v-model="form.region" placeholder="选择签到地点">
                    <el-option label="居家" value="home" />
                    <el-option label="学校" value="school" />
                </el-select>
            </el-form-item>

            <el-form-item label="有无发烧">
            <el-switch v-model="form.isIll" />
            </el-form-item>
            <el-form-item label="请假原因">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="感冒" name="type" />
                <el-checkbox label="发烧" name="type" />
                <el-checkbox label="其他" name="type" />
            </el-checkbox-group>
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