<script lang="ts" setup>
import { ElMessageBox } from 'element-plus';
import { onMounted, provide, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { studentStore } from '../../store/student';
import StutendBar from './components/navLink.vue'
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

<template>
    <div>
        <StutendBar/>
    </div>
</template>
<style>

</style>