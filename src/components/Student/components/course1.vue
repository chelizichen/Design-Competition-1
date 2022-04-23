<template>
    <div class="inpbg">
        <input type="text" v-model="state.INP" class="inp" placeholder="根据学科查找"/>
    </div>
    <div v-if="loading">
        <div v-for="item in search" :key="item.courseId" class="storeBg">
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
import { computed } from 'vue'

import {courseStore,courseType} from '../../../store/course/index'

const state = reactive({
    store:[] as courseType[],
    INP:''
})
const search = computed({
    get:()=>{
        return state.store.filter(el=>{
            return el.courseName.match(state.INP)
        })
    },
    set:(val)=>
    {

    }
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
.inpbg
{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.inp
{
    padding: 5px;
    /* border-radius: 10px; */
    width: 60%;
    border-top: none;
    border-left: none;
    border-right: none;
    cursor: none;
}
.inp:focus
{
    outline: none;
        /* border-top: none;
    border-left: none;
    border-right: none; */
}
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