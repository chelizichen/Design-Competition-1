<template>
  <el-table
    :data="state.store"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    border>
    <el-table-column prop="courseName" label="课程名" align="center"/>
    <el-table-column prop="core" label="分数" width="80" align="center"/>
    <el-table-column prop="isMakeUp" label="区间" align="center" :formatter="typeMakeUp" width="120">
        <!-- <template slot-scope="scope">
            {{scope.isMakeUp}}
        </template> -->
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive } from "vue-demi"
import {courseStore,courseType} from '../../../../store/course/index'
const state = reactive({
    store:[] as courseType[]
})
onBeforeMount(()=>{
    courseStore.forEach((el)=>{
        if(el.studentId == localStorage.getItem("id") && el.isChoose == true)
        {
            state.store.push(el)
        }
    })
    console.error(state.store);
})
const typeMakeUp = (row:any)=>{
    // console.log('row',row);
    if(row.core>=90)
    {
        return '优秀'
    }
    if(row.core>=80)
    {
        return '良好'
    }
    if(row.core>=60)
    {
        return '及格'
    }
    if(row.core>0&&row.core<60)
    {
        switch(row.isMakeUp)
        {
            case false:
                return '不合格'
            case true:
                return '已申请补考'
            default:
                return '未申请'
        }
    }
    if(row.core == 0)
    {
      return '已选修'
    }
}
const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: courseType
  rowIndex: number
}) => {
    console.log('row',row);
    console.log('rowIndex',rowIndex);
    
  if (row.core<60 && row.isChoose == true && row.isMakeUp == true) {
    return 'warning-row'
  } else if (row.core>=60) {
    return 'success-row'
  }else if (row.core<60 && row.isChoose == true && row.isMakeUp == false) {
    return 'error-row'
  }
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
