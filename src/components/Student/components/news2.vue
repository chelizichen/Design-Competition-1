<template>
    <div class="inpbg">
        <input type="text" v-model="state.INP" class="inp" placeholder="根据标题查找"/>
    </div>
    <div class="newsbg">
        <router-link v-for="item in search" :key="item.index" :to="'/news/'+item.index" class="newsLink">{{item.title}}</router-link>
        <router-view/>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, reactive } from 'vue'
import { newsStore,news} from '../../../news/index'

onBeforeMount(()=>{
  state.store = newsStore
})

const state = reactive({
  store:[] as news[],
  INP:''
})

const search = computed({
    get:()=>{
        if(state.INP == '')
        {
            return null
        }
        else
        {
            return state.store.filter(el=>{
                return el.title.match(state.INP)
        })
        }
    },
    set:(val)=>
    {

    }
})

// const GETSearch = computed(()=>{
    
//     return state.store.filter(el=>{
//         return el.title.match(state.INP)
//     })
// })

// const
</script>

<style scoped>
.inpbg
{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.inp
{
    padding: 5px;
    border-radius: 10px;
    width: 60%;
}
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