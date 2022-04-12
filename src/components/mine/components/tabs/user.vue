<script setup lang="ts">
import {defineProps} from 'vue'
import { studentType } from '../../../../store/student';
const props = defineProps({
    user:Object 
})
console.log(props.user);
const {name,department,major,class_var,id} = props.user as studentType
</script>
<template>
    <div>
        <el-descriptions title="登陆信息">
            <el-descriptions-item label="姓名:">{{name}}</el-descriptions-item>
            <el-descriptions-item label="学号:">{{id}}</el-descriptions-item>
            <el-descriptions-item label="学部:">{{department}}</el-descriptions-item>
            <el-descriptions-item label="学校:">
                <el-tag size="small">武汉城市学院</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="专业:">{{major}}</el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<style>

</style>