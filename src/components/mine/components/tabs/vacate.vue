<template>
    <div>
        <div v-for="(item,index) in state.arr" :key="index">
            <div>{{item}}</div>
        </div>
        <button @click="add">点击</button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue-demi";

const state =reactive({
    arr:[
        {a:1,b:2}
    ]
})
const add=()=>{
    state.arr.push({a:2,b:3})
}
</script>

<style>

</style>