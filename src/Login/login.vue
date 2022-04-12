<script setup lang="ts">
import {onMounted, reactive,ref} from 'vue'
import {studentStore} from '../store/student/index'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
import { useRouter } from 'vue-router'
const state = reactive({
    studentId:'',
    name:'',
    isLogin:false
})
let store = studentStore
let router = useRouter()

let loginIn =() =>{
    console.log(state.studentId);
    console.log(store);
    store.forEach(el=>{
        if( el.id == state.studentId && el.name == state.name)
        {
            state.isLogin = true
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
    if(state.isLogin == false)
    {
        ElMessage({
            type:'error',
            message: `登陆失败，请检查您的学号和姓名是否匹配`,
        })
    }
}

</script>
<template>
<div class="bg">
    <div class="login">
        <input type="text" v-model="state.name" class="inp" placeholder="姓名">
        <input type="text" v-model="state.studentId" class="inp" placeholder="学号">
        <button @click="loginIn()" class="btn">登陆</button>
    </div>
</div>
</template>

<style scoped>
    .bg
    {
        background: url('~@/../src/assets/wallpaper.jpg') no-repeat;
        background-size: cover;
        width: 100%;
        height: 900px;
    }
.login{
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    /* absolute居中的一种方法 */
    background-color: whitesmoke;
    width: 100%;
    height: 250px;
    border-radius: 25px;
    text-align: center;
    padding: 20px 20px;
    box-sizing: border-box;
    /* 这样padding就不会影响大小 */
}

p{
    font-size: 42px;
    font-weight: 600;
}

input{
    background-color: whitesmoke;
    width: 100%;
    height: 48px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 2px solid silver;
    /* 下面的会覆盖上面的步伐 */
    outline: none;
    font-size: 22px;
}

.btn{
    background-color: #59c2c5;
    width: 38%;
    height: 48px;
    border-radius: 8px;
    margin-top: 40px;
    font-size: 28px;
    font-weight: 600;
    color: white;
}
.btn:hover{
    background-color: #59c2a0;
}
</style>>
        