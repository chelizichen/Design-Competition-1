<script setup lang="ts">
import {defineProps, onBeforeMount, onUpdated, reactive} from 'vue'
import { studentType } from '../../../../store/student';
import {signInStore} from '../../../../store/signin/index'
import { log } from 'console';
const resDate = reactive({
    signIn1:[] as any[], // 班级签到
    signIn2:[] as any[], // 寝室签到
    signIn3:[] as any[], // 定位签到
})

// 没有对应store 的姓名
onBeforeMount(()=>{
  signInStore.forEach( el => {
      if(el.type==1)
      {
          resDate.signIn1.push(el)
      }
      if(el.type == 2)
      {
          resDate.signIn2.push(el)
      }
      if(el.type == 3)
      {
          resDate.signIn3.push(el)
      }
  })
  console.log(resDate.signIn3);
  
})
const dealMyDate = (v:any) => {
  // v 是 el 组件传下来的
    let res = '';
    for (let index = 0; index < resDate.signIn3.length; index++) {
        if (resDate.signIn3[index].date == v) {
          res = resDate.signIn3[index].content;
          break;
        }
    }
    return res;
}
</script>
<template>
     <el-calendar>
        <template #dateCell="{data}">
          <div class="calendar-item">
            <div class="calendar-time">
              {{ data.day.split('-').slice(2).join('')}}
            </div>
            <div>
              <span class="remark-text calendar-time" v-for="(item, index) in dealMyDate(data.day)" :key="index">
                {{ item }}
              </span>
            </div>
          </div>
        </template>
      </el-calendar>
</template>

<style>
.remark-text {
  font-size: 8px;
}
.calendar-item {
  flex-direction: column;
}
.calendar-time {
  height: 16px;
  line-height: 16px;
}
</style>