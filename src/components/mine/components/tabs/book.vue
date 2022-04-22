<template>
  <el-table
    :data="state.store"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    border>
    <el-table-column prop="bookName" label="书名" align="center"/>
    <el-table-column prop="author" label="作者" width="80" align="center"/>
    <el-table-column prop="isMakeUp" label="借出情况" align="center" :formatter="typeMakeUp" width="120">
        <!-- <template slot-scope="scope">
            {{scope.isMakeUp}}
        </template> -->
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
        state.store.push(el)
    })
    console.error(state.store);
})
const typeMakeUp = (row:any)=>{
    if(row.core == 0)
    {
      return '已选修'
    }
}
const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: bookType
  rowIndex: number
}) => {
    console.log('row',row);
    console.log('rowIndex',rowIndex);
    
//   if (row.core<=60 && row.isChoose == true && row.isMakeUp == true) {
//     return 'warning-row'
//   } else if (row.core>60) {
//     return 'success-row'
//   }else if (row.core<=60 && row.isChoose == true && row.isMakeUp == false) {
//     return 'error-row'
//   }
  return ''
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
