<template>
    <div>
        <Head/>
        <Func/>
        <Tabs/>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus'
import Head from './components/head.vue'
import Func from './components/func.vue'
import Tabs from './components/tabs.vue'
import { provide } from 'vue';
import { studentStore } from '../../store/student';
let router = useRouter()
onMounted(()=>{
    console.log(localStorage.getItem("id"));
    if(localStorage.getItem("id") === null)
    {
        ElMessageBox.confirm('您还没有登陆，请先完成登陆',{
            confirmButtonText: '登陆',
            cancelButtonText: '取消',
            type: 'warning',
        }).then(() => {
            router.push('/login')
        })
        .catch(() => {
        })
    }
})
let studentItem = {}
let id = localStorage.getItem("id")
studentStore.forEach(el=>{
    if(el.id === id)
    {
        console.log('匹配成功');
        studentItem = el
    } 
})
provide('studentItem',studentItem)
</script>

<style>

</style>