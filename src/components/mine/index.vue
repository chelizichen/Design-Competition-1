<template>
    <div>
        <Head/>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus'
import Head from './components/head.vue'
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
</script>

<style>

</style>