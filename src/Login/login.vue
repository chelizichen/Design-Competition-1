<script setup lang="ts">
import {onMounted, reactive,ref} from 'vue'
import {studentStore} from '../store/student/index'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
import { useRouter } from 'vue-router'
const state = reactive({
    studentId:''
})
let store = studentStore
let router = useRouter()

let loginIn =() =>{
    console.log(state.studentId);
    console.log(store);
    store.forEach(el=>{
        if( el.id == state.studentId)
        {
            console.log('匹配上了');
            localStorage.setItem("id",state.studentId)
            ElMessageBox.alert('登陆成功', 'Title', {
                confirmButtonText: 'OK',
                callback: (action: Action) => {
                    ElMessage({
                        type:'success',
                        message: `欢迎您,${el.name}`,
                    })
                    router.push('/home')
                },
            })
        }
    })
}
</script>
<template>
<div class="login">
    <div>登陆页面</div>
    <input type="text" v-model="state.studentId">
    <hr>
    <button @click="loginIn()">登陆</button>
</div>
</template>

<style scoped>
    .login
    {
        position: fixed;
        top: 50%;
        left: 50%;
    }
</style>>
        