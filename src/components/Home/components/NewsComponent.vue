<template>
  <div class="outbg">
        <div v-for="item in state.store" :key="item">
            <div v-if="item.index === state.index">
                <div class="title">{{item.title}}</div>
                <div>{{item.author}}</div>
                <img :src="item.pic1" alt="" style="width:100%;height:100%">
                <div class="content">
                    <div>{{item.content1}}</div>
                    <div>{{item.content2}}</div>
                    <img :src="item.pic2" alt="" style="width:100%;height:100%">

                    <div>{{item.content3}}</div>
                    <img :src="item.pic3" alt="" style="width:100%;height:100%">
                    <div>{{item.content4}}</div>
                    <img :src="item.pic4" alt="" style="width:100%;height:100%">

                    <div>{{item.content5}}</div>
                </div>

            </div>
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
onUnmounted(()=>{
    console.log('test');
})
</script>
<style scoped>
.outbg
{
    margin-bottom: 50px;
}
.content
{
    text-indent: 32px;
    padding: 10px;
}

    .title
    {
        font-size: 20px;
        text-align: justify;
        font-weight: 800;
        color: tomato;
        margin-bottom: 10px;
    }
    .img1
    {
        width: 100%;
        height: 100%;
    }
</style>