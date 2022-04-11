<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['0'])
const handleChange = (val: string[]) => {
  console.log(val)
}
const chooseVal = ref<boolean>(false)
const choose = ()=>{
  chooseVal.value = true
  let cleartimeVal = setTimeout(()=>{
    chooseVal.value = false
    clearTimeout(cleartimeVal)
  },1000) 
}
const chooseVal1 = ref<boolean>(false)
const choose1 = ()=>{
  chooseVal1.value = true
  let cleartimeVal = setTimeout(()=>{
    chooseVal1.value = false
    clearTimeout(cleartimeVal)
  },1000) 
}
const chooseVal2 = ref<boolean>(false)
const choose2 = ()=>{
  chooseVal2.value = true
  let cleartimeVal = setTimeout(()=>{
    chooseVal2.value = false
    clearTimeout(cleartimeVal)
  },1000) 
}
const chooseVal3 = ref<boolean>(false)
const choose3 = ()=>{
  chooseVal3.value = true
  let cleartimeVal = setTimeout(()=>{
    chooseVal3.value = false
    clearTimeout(cleartimeVal)
  },1000) 
}
const chooseVal4 = ref<boolean>(false)
const choose4 = ()=>{
  chooseVal4.value = true
  let cleartimeVal = setTimeout(()=>{
    chooseVal4.value = false
    clearTimeout(cleartimeVal)
  },1000) 
}
const chooseVal5 = ref<boolean>(false)
const choose5 = ()=>{
  chooseVal5.value = true
  let cleartimeVal = setTimeout(()=>{
    chooseVal5.value = false
    clearTimeout(cleartimeVal)
  },1000) 
}
const chooseVal6 = ref<boolean>(false)
const choose6 = ()=>{
  chooseVal6.value = true
  let cleartimeVal = setTimeout(()=>{
    chooseVal6.value = false
    clearTimeout(cleartimeVal)
  },1000) 
}
const chooseVal7 = ref<boolean>(false)
const choose7 = ()=>{
  chooseVal7.value = true
  let cleartimeVal = setTimeout(()=>{
    chooseVal7.value = false
    clearTimeout(cleartimeVal)
  },1000) 
}
</script>
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item title="学生课程" name="1">
          <router-link to="/student/course1" class="link" @click="choose" v-loading="chooseVal">查询成绩</router-link>
          <router-link to="/student/course2" class="link" @click="choose1" v-loading="chooseVal1">申请补考</router-link>
          <router-link to="/student/course3" class="link" @click="choose2" v-loading="chooseVal2">选修课程</router-link>
      </el-collapse-item>
      <el-collapse-item title="临时请假" name="2">
          <router-link to="/student/vacate1" class="link" @click="choose3" v-loading="chooseVal3">有事外出</router-link>
          <router-link to="/student/vacate2" class="link" @click="choose4" v-loading="chooseVal4">因病申请</router-link>
      </el-collapse-item>
      <el-collapse-item title="定位签到" name="3">
          <router-link to="/student/signin1" class="link" @click="choose5" v-loading="chooseVal5">班级签到</router-link>
          <router-link to="/student/signin2" class="link" @click="choose6" v-loading="chooseVal6">寝室签到</router-link>
          <router-link to="/student/signin3" class="link" @click="choose7" v-loading="chooseVal7">定位签到</router-link>
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