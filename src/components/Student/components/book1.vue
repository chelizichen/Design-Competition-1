<template>
    <div v-if="loading">
        <div v-for="(item,index) in state.store" :key="index">
             <div class="coreItem">
                <div>{{item.bookName}}</div>
                <div class="coreGreen">{{item.author}}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, ref } from '@vue/runtime-core'

import {bookType,bookStore} from '../../../store/book/index'

const state = reactive({
    store:[] as bookType[]
})

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