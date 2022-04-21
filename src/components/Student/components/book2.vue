<template>
    <div v-if="loading">
        <div v-for="(item,index) in state.store" :key="index">
             <div v-if="item.isBorrow === false && item.isBook === false" class="coreItem">
                <div>{{item.bookName}}</div>
                <el-button type="success"  @click="submit(item.bookId)">预定</el-button>
            </div>
            <div v-if="item.isBook  === true && item.isBorrow === false" class="coreItem">
                <div>{{item.bookName}}</div>
                <el-button type="danger" @click="cancel(item.bookId)">取消预定</el-button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, ref } from '@vue/runtime-core'
import { ElMessageBox, ElMessage } from 'element-plus'

import {bookType,bookStore} from '../../../store/book/index'

const state = reactive({
    store:[] as bookType[]
})
// 申请预定
const submit=(id:number)=>{
    ElMessageBox.confirm(
    '是否申请预定?',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
        let newStore = [] as any
        bookStore.forEach(el => {
            if( el.bookId === String(id))
            {
                el.isBook = true
            }
        });
        bookStore.forEach((el)=>{
                newStore.push(el) 
        })
        state.store = []
        state.store = newStore
        // console.log(courseStore);
      ElMessage({
        type: 'success',
        message: '申请成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'error',
        message: '申请失败',
      })
    })
}
// 取消预定
const cancel=(id:number)=>{
    ElMessageBox.confirm(
    '是否取消预定?',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
        let newStore = [] as any
        bookStore.forEach(el => {
            if( el.bookId === String(id))
            {
                el.isBook = false
            }
        });
        bookStore.forEach((el)=>{
                newStore.push(el) 
        })
        state.store = []
        state.store = newStore
        // console.log(courseStore);
      ElMessage({
        type: 'success',
        message: '申请成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'error',
        message: '申请失败',
      })
    })
}
const loading = ref(false)
onBeforeMount(()=>{
    state.store = bookStore
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