<template>
<div class="container">
    <div class="title">个人中心</div>
    <div class="avatbg" v-for="item in state.student" :key="item.id">
        <img :src="`../src/assets/avat.jpeg`" alt="" class="avat">
        <div>
            <div>姓名：{{item.name}}</div>
            <div>学部：{{item.department}}学部</div>
            <div>专业：{{item.major}}</div>
            <div>学号：201910137816</div>
        </div>
        <!-- <img :src="`../src/assets/avat.jpeg`" alt="" class="avat">
        <div>
            <div>姓名：彭城</div>
            <div>学部：信工学部</div>
            <div>专业班级：计算机科学与技术8班</div>
            <div>学号：201910137816</div>
        </div> -->

    </div>
    <div class="welcome">
      <div class="svgOut">
          <svg class="svgItem" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"></path></svg>
      </div>
      <div class="msg1">
        欢迎您
      </div>
      <div class="msg2">
        今日城院给您带来最优质的体验
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, reactive } from "@vue/runtime-core";
import { studentStore, studentType } from '../../../store/student/index'
import axios from 'axios'
const store = studentStore

const state = reactive({
    student:[] as studentType[]
})
onBeforeMount(()=>{
    console.log('localStorage',localStorage);
    
    store.forEach((el)=>{
        if(Number(el.id) === Number(localStorage.getItem("id")))
        {
            state.student.push(el)
            console.log('匹配成功');
        }
    })
    axios.get('/api/ws/location/v1/ip',{
        params:{
            "key":"DO6BZ-R426J-ZL4F5-KCVRY-4YVSV-2MFS5",
        }
    }).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })

    
})
</script>

<style scoped>
.avatbg
{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
}
.avatbg:nth-child(2)
{
    color: aliceblue;
}
.avat
{
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin-right: 50px;
}
/* .svgOut
{
    position: absolute;
    top: 20px;
    left: 20px;
} */
.msg2
{
    color: aliceblue;
}
.msg1
{
    font-size: 18px;
    color: white;
}
.svgItem
{
    width: 30px;
    height: 30px;
    color: #fff;
}
.container
{
  width: 100%;
  height: 250px;
  background-color: #5AC3D9;
  /* border-radius: 0 0 10% 10%;   */
  position: relative;
  margin-bottom: 20px;
  clip-path: ellipse(130% 52% at 50% 48%);
}
.title
{
  font-size: 34px;
  color: #FFFFFF;
  text-align: center;
}


.welcome
{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 40px;
    padding: 10px;
    margin: 0 8%;
    background-color: #17BAC2;
    border-radius: 40px;
}

</style>