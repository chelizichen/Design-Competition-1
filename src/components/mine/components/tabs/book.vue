<template>
  <el-table
    :data="state.store"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    border>
    <el-table-column prop="bookName" label="书名" align="center"/>
    <el-table-column prop="author" label="作者" width="80" align="center"/>
    <el-table-column prop="isBook" label="预定情况" align="center" :formatter="getBookType" width="100">
        <!-- <template slot-scope="scope">
            {{scope.isMakeUp}}
        </template> -->
    </el-table-column>
    <el-table-column prop="isBorrow" label="借出情况" align="center" :formatter="getBorrowType" width="100">
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive } from "vue-demi"
import {bookStore,bookType} from '../../../../store/book/index'
const state = reactive({
    store:[] as bookType[]
})
onBeforeMount(()=>{
    bookStore.forEach((el)=>{
        if(el.isBook === true || el.isBorrow === true)
        {
            state.store.push(el)
        }
    })
    // console.error(state.store);
})
const getBookType = (row:bookType)=>{
    console.log(row);
    if(row.isBook === true || row.isBorrow === true)
    {
        return '已预定'
    }
    else
    {
        return '预定'
    }
    // if(row.core == 0)
    // {
    //   return '已选修'
    // }
}
const getBorrowType = (row:bookType)=>{
    console.log(row);
    if(row.isBorrow === true)
    {
      return '已借出'
    }
    else
    {
        return '未借出'
    }
}
const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: bookType
  rowIndex: number
}) => {
    // console.log('row',row);
    // console.log('rowIndex',rowIndex);
    
  if (row.isBook === true) {
    return 'success-row'
  }else{
    return 'error-row'
  }
}
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.el-table .error-row {
  --el-table-tr-bg-color: var(--el-color-error-light-9);
}
</style>
