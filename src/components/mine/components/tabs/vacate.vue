<template>
<div v-for="(item,index) in state.vacateArr" :key="index">
    <div class="title">{{item.type ==0?"校内申请":"离校申请"}}</div>
    <el-steps  align-center>
        <el-step title="未通过" :status="item.progress == 0?'error':'wait'" icon="close"/>
        <el-step title="请假"  :status="item.progress == 1?'process':'wait'" icon="cloudy"/>
        <el-step title="审批" :status="item.progress == 2?'finish':'wait'" icon="loading"/>
        <el-step title="通过" :status="item.progress == 3?'success':'wait'" icon="check"/>
    </el-steps>
</div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, reactive } from "vue-demi";
import {vacateDest, vacateStore, vacateType} from '../../../../store/vacate/index'

const state =reactive({
    vacateArr:[] as vacateType[]
})

onBeforeMount(()=>{
    vacateStore.forEach(el=>{
        let vacateObj = {} as vacateType
        state.vacateArr.push(el)
    })
    // 处理vacateStore 的数据
    console.log(state.vacateArr);
    
})
</script>

<style scoped>
    .title
    {
        color:royalblue;
        margin-bottom: 5px;
    }
</style>