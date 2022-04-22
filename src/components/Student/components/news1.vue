<template>
    <div class="newsbg">
        <router-link v-for="item in state.store" :key="item.index" :to="'/news/'+item.index" class="newsLink" @click="choose8" v-loading="chooseVal8">{{item.title}}</router-link>
        <router-view/>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue'
import { newsStore,news} from '../../../news/index'

onBeforeMount(()=>{
  state.store = newsStore
})

const state = reactive({
  store:[] as news[]
})
</script>

<style scoped>
.activeLink
    {
        color: green;
    }
    .newsbg
    {
        padding: 10px 20px;
    }
    .newsLink
    {
        display: block;
        width: 100%;
        /* height: 20px; */
        margin-bottom: 10px;
        color: #241c1c;
        text-decoration: none;
        /* white-space:no-wrap; */
        /* white-space: nowrap; */
        /* text-overflow:ellipsis; */
        /* overflow: hidden; */
    }
    .newsLink:hover
    {
        color: chocolate;
    }
    .newsLink::after{
        content: "...";
        width: 10px;
    }
    .newsLink::before
    {
        content: " *  ";
        /* background-color: #c95712; */
        color: #c95712;
        margin-right: 20px;
    }
</style>