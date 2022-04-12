<template>
    <div v-if="loading">
        <div v-for="item in state.store" :key="item.courseId" class="storeBg">
            <!-- <div>{{item}}</div> -->
            <div v-if="item.isChoose === true && item.core>0" class="coreItem">
                <div>{{item.courseName}}</div>
                <div :class="item.core>=60?'coreGreen':'coreRed' ">{{item.core}}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, ref } from '@vue/runtime-core'
import {courseStore,courseType} from '../../../store/course/index'
const state = reactive({
    store:[] as courseType[]
})

const loading = ref(false)
onBeforeMount(()=>{
    console.log(localStorage);
    
    courseStore.forEach((el)=>{
        if(el.studentId == localStorage.getItem("id"))
        {
            state.store.push(el) 
        }
    });
    console.log('被加载了');
})
onMounted(()=>{
    let time = setTimeout(()=>{
        loading.value = true
        clearTimeout(time)
    },1000)
})
// })
</script>

<style scoped>
.coreGreen
{
    color: #eef8e8;
}
.coreRed
{
    color: rgb(143, 19, 19);
    font-weight: 900;
}
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
</style>