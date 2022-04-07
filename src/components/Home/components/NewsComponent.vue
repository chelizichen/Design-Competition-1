<template>
  <div>
        <div v-for="item in state.store" :key="item">
            <div v-if="item.index === state.index">{{item.title}}</div>
        </div>
        <!-- <h1>校友会2022中国大学一流专业排名发布  我校跻身中国大学一流专业排名（应用型）50强</h1>
        <h6>发布时间：2022/4/6 15:37:44 作者：管理员 浏览次数：277</h6>
        <div>
            新闻网讯(记者张佳鑫)3月30日，全国第三方大学评价机构艾瑞深研究院校友会网(Cuaa.Net)发布了校友会2022中国大学一流专业排名、2022中国大学各专业类一流专业排名榜单。我校37个专业获赋星，跻身校友会2022中国大学一流专业排名(应用型)前50强。
        </div>
        <img :src="`../src/assets/news/1.jpeg`" alt="" class="img1"> -->
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, reactive, watch } from "vue";
import { newsStore } from "../../../news";
import { useRouter,useRoute } from 'vue-router'
let router = useRouter()
let route = useRoute()
let state = reactive({
    store:newsStore,
    testArray:[1,2,3,4,5],
    index:Number(route.params.id)
})

// onMounted(()=>{
//     newsStore.forEach((el)=>{
//         if(el.index === Number(route.params.id))
//         {
//             console.log('匹配成功');
//             state.store.push(el)
//         }else
//         {
//             throw new Error("没有相关新闻")
//         }
//     })
// })
onUnmounted(()=>{
    console.log('test');
})
</script>
<style>
    .img1
    {
        width: 100%;
        height: 100%;
    }
</style>