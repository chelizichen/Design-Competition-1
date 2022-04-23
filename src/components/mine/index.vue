<template>
    <div class="content">
        <Head/>
        <Func/>
        <Tabs/>
        <!-- <User/> -->
        <div class="outBox">
            <div class="inBox">
            <User :user="studentItem"/>
            </div>
        </div>
        <Footer/>
        <!-- <Location/> -->
    </div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus'
import Head from './components/head.vue'
import Func from './components/func.vue'
import Tabs from './components/tabs.vue'
import Location from './components/tabs/location.vue'
import Footer from '../../components/Home/components/footer.vue'
import User from './components/tabs/user.vue'
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

<style scoped>
    .content
    {
        margin-bottom: 50px;
    }
    .inBox
    {
        background-color: #fdfdfd;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
    }
    .outBox
    {
        background-color: rgb(236, 236, 236);
        padding: 10px;
        border-radius: 5px;
    }
</style>