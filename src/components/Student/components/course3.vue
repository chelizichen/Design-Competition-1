<template>
    <div v-if="loading">
        <div v-for="item in state.store" :key="item.courseId" class="storeBg">
            <!-- <div>{{item}}</div> -->
            <div v-if="item.isChoose === false" class="coreItem">
                <div>{{item.courseName}}</div>
                <el-button type="danger" @click="submit(item.courseId)">申请选修</el-button>
            </div>

            <div v-if="item.isChoose === true && item.core === 0" class="coreItem">
                <div>{{item.courseName}}</div>
                <el-button type="danger" @click="submit(item.courseId)" disable>已申请</el-button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, onMounted } from 'vue';
import { onBeforeMount, reactive } from 'vue-demi'
import {courseStore,courseType} from '../../../store/course/index'
const state = reactive({
    store:[] as courseType[]
})
const submit=(id:number)=>{
    ElMessageBox.confirm(
    '是否申请选修?',
    'Warning',
    {
      confirmButtonText: '申请',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
        let newStore = [] as any
        courseStore.forEach(el => {
            if( el.courseId === String(id) && el.studentId == localStorage.getItem("id"))
            {
                console.log(el);
                el.isChoose = true
            }
        });
        courseStore.forEach((el)=>{
            if(el.studentId == localStorage.getItem("id"))
            {
                newStore.push(el) 
            }
        });
        // 重新换地址已达到渲染目的
        state.store = []
        state.store = newStore

        console.log(courseStore);
      ElMessage({
        type: 'success',
        message: '申请选修成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'error',
        message: '取消申请',
      })
    })

    
}
onBeforeMount(()=>{
    courseStore.forEach((el)=>{
        if(el.studentId == localStorage.getItem("id"))
        {
            state.store.push(el) 
        }
    });
    console.log('被加载了');
})
const loading = ref(false)
onMounted(()=>{
    let time = setTimeout(()=>{
        loading.value = true
        clearTimeout(time)
    },1000)
})
</script>

<style scoped>
.coreItem
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    background-color: cornflowerblue;
}
.storeBg
{
    padding: 3px 10px;
}
.coreRed
{
    color: rgb(143, 19, 19);
    font-weight: 900;
}
</style>