<template>
    <div v-if="loading">
        <div v-for="(item,index) in state.store" :key="index">
          <div v-if="item.isBorrow === true" class="coreItem">
                <div>{{item.bookName}}</div>
                <el-button type="danger" @click="submit(item.bookId)">{{item.isBorrow === true?"归还":"已归还"}}</el-button>
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
const submit=(id:number)=>{
    ElMessageBox.confirm(
    '是否申请归还?',
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
                el.isBorrow = false
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
        message: '归还成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'error',
        message: '您已取消',
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