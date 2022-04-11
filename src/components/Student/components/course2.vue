<template>
    <div v-if="loading">
        <div v-for="item in state.store" :key="item.courseId" class="storeBg">
            <!-- <div>{{item}}</div> -->
            <div v-if="item.isChoose === true && item.core<=60" class="coreItem">
                <div>{{item.courseName}}</div>
                <div class="coreRed">{{item.core}}（未合格）</div>
                <el-button type="danger" @click="submit(item.courseId)">{{item.isMakeUp === true?"已申请":"补考"}}</el-button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { onBeforeMount, reactive } from 'vue-demi'
import {courseStore,courseType} from '../../../store/course/index'
const state = reactive({
    store:[] as courseType[]
})
const submit=(id:number)=>{
    console.log(id);
    courseStore.forEach(el => {
        if( el.courseId === String(id))
        {
            console.log(el);
            el.isMakeUp = true
        }
    });
    state.store = []
    state.store = courseStore

    console.log(courseStore);
    
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