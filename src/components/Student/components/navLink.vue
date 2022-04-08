<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['0'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="学生成绩" name="1">
          <router-link to="/student/course" class="link">查询成绩</router-link>
          <router-link to="/student/resit" class="link">申请补考</router-link>
      </el-collapse-item>
      <el-collapse-item title="临时请假" name="2">
          <router-link to="/student/vacate1" class="link">有事外出</router-link>
          <router-link to="/student/resit" class="link">因病申请</router-link>
      </el-collapse-item>
      <el-collapse-item title="定位签到" name="3">
          <router-link to="/student/signin1" class="link">班级签到</router-link>
          <router-link to="/student/signin2" class="link">寝室签到</router-link>
          <router-link to="/student/signin3" class="link">定位签到</router-link>
      </el-collapse-item>
    </el-collapse>
    <router-view/>
  </div>
</template>
<style scoped>
/* .item
{
  background-color: slateblue;
} */
  .link
  {
    display: block;
    text-align: center;
    text-decoration: none;
    color: #d7e1fe;
    border-top: snow 1px solid;
    background-color: #5989b9;
    padding: 20px 0;
  }
</style>