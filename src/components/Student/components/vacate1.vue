<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'
import { vacateStore, vacateType } from '../../../store/vacate/index'
// do not use same name with ref
const state = reactive({
    form:{} as vacateType,
    addstr:""
})

const onSubmit = () => {
    console.log('submit!')
    // 解除响应式
    const {name,type,desc} = state.form
    let newVacateItem : vacateType= {
        name,
        type,
        desc,
        progress:'1'
    }
    console.log(newVacateItem);
    vacateStore.push(newVacateItem)
    openSuccess()
}
const openSuccess = () => {
      ElMessage({
        type: 'success',
        message: `签到成功`,
      })
}

</script>
<template>
<div>
    <div class="location" v-cloak></div>
    <div class="formState">
        <el-form :model="state.form" label-width="120px">
            <el-form-item label="请假人">
            <el-input v-model="state.form.name" />
            </el-form-item>
            <el-form-item label="目的地">
            <el-input v-model="state.form.type" />

            </el-form-item>
                <el-form-item label="请假原因">
                <el-input v-model="state.form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<style scoped>
    .location
    {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .formState
    {
        margin-top: 20px;
        padding-right: 40px;
    }
</style>