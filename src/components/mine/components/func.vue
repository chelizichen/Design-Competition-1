<script setup lang="ts">
import '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus';
import { inject } from "vue";
import { onBeforeRouteLeave } from 'vue-router';

let studentItem = inject("studentItem")
// console.log('studentItem',studentItem);
const isToLogin =(next:Function)=>
{
    ElMessageBox.confirm(
    '是否注销登录，此行为将返回登陆页?',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '注销登录成功',
      })
      next()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '您已取消',
      })
    })
}
onBeforeRouteLeave((to,from,next)=>{
    console.log('to',to);
    console.log('from',from);
    if(localStorage.getItem('id'))
    {
        if(to.path === '/login')
        {
            isToLogin(next)
        }
        else
        {
            next()
        }
    }
    else
    {
        next()
    }
})
</script>
<template>
<!-- a 标签会刷新页面  -->
    <div class="outbg">
        <div class="flex_Between">
            <div class="inBox">
                <el-icon class="inIcon"><delete-location /></el-icon>
                <router-link to="/student/signin1" class="defaultClass">班级签到</router-link>
            </div>
            <div class="inBox">
                <el-icon class="inIcon"><avatar /></el-icon>
                <router-link to="/student/signin2" class="defaultClass">寝室签到</router-link>
            </div>
            <div class="inBox">
                <el-icon class="inIcon"><map-location /></el-icon>
                <router-link to="/student/signin3" class="defaultClass">定位签到</router-link>
            </div>
            <div class="inBox">
                <el-icon class="inIcon"><comment /></el-icon>
                <router-link to="/student/vacate1" class="defaultClass">有事外出</router-link>
            </div>
            <div class="inBox">
                <el-icon class="inIcon"><scissor /></el-icon>
                <router-link to="/student/vacate2" class="defaultClass">因病外出</router-link>
            </div>
            <div class="inBox">
                <el-icon class="inIcon"><reading /></el-icon>
                <router-link to="/student/course1" class="defaultClass">查询成绩</router-link>
            </div>
            <div class="inBox">
                <el-icon class="inIcon"><tickets /></el-icon>
                <router-link to="/student/course2" class="defaultClass">申请补考</router-link>
            </div>
            <div class="inBox">
                <el-icon class="inIcon"><upload /></el-icon>
                <router-link to="/student/course3" class="defaultClass">选修课程</router-link>
            </div>
            <div class="inBox">
                <el-icon class="inIcon"><list /></el-icon>
                <router-link to="/student/book1" class="defaultClass">查看图书</router-link>
            </div>
            <div class="inBox">
                <el-icon class="inIcon"><star /></el-icon>
                <router-link to="/student/book2" class="defaultClass">预定图书</router-link>
            </div>
            <div class="inBox">
                <el-icon class="inIcon"><place /></el-icon>
                <router-link to="/student/book3" class="defaultClass">归还图书</router-link>
            </div>
            <div class="inBox">
                <el-icon class="inIcon"><Help /></el-icon>
                <router-link to="/login" class="defaultClass">注销登录</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .outbg
    {
        padding: 20px 20px;
    }
    .flex_Between
    {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .inBox
    {
        width: 20%;
        margin: 2% 2%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .inIcon
    {
        display: block;
        font-size: 20px;
        color: cornflowerblue;
        margin-bottom: 10px;
    }
    .defaultClass
    {
        color:rgb(33, 132, 156);
        text-decoration: none;
        font-weight: bolder;
    }
</style>