<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import img1 from '../../../assets/title/1.jpeg'
import img2 from '../../../assets/title/2.jpeg'
import img3 from '../../../assets/title/3.jpeg'
import img4 from '../../../assets/title/4.jpeg'
import img5 from '../../../assets/title/5.jpeg'
import img6 from '../../../assets/title/6.jpeg'
const router = useRouter()
const imgUrl = reactive({
    imgSrc:[
        {
            src:img1,
        },
        {
            src:img2,
        },
        {
            src:img3,
        },
        {
            src:img4,
        },
        {
            src:img5,
        },
        {
            src:img6,
        },

    ]
})
const routerPush = (num:number)=>
{
    router.push(`/news/${num+1}`)
    console.log(num);
}
// onMounted(()=>{
//     console.log(123);
    
// })
</script>
<template>
  <div>
    <!-- 标题部分 -->
    <div class="head">
        <div class="title">今日城院</div>
    </div>
    <!-- 轮播图 -->
        <el-carousel :interval="5000" type="card" height="120px">
            <el-carousel-item v-for="(item,index) in imgUrl.imgSrc" :key="index">
                <img :src="item.src" alt="" class="imgSwiper" @click="routerPush(index)">
            </el-carousel-item>
        </el-carousel>
        <!-- 提醒 -->
    <div class="bg1">

        <div class="alert">
            <div>
                <svg class="svgItem" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"></path></svg>
            </div>
            <div class="alertItem">
                <p>通知：请各位同学严格按照学校的疫情防控要求按时去做核酸，市疾控后台也有做核酸的数据，学校属于重点区域，发现没做核酸的同学会告知学校，一经发现，学校会严肃处理，绝不姑息，望大家引起为戒
请各位班长在做核酸当天在群里收采样信息，各位同学积极配合。</p>
            </div>
        </div>
    </div>

  </div>
</template>


<style scoped>
.bg1
{
    background-color: rgb(246 246 246);
    padding: 20px 0;
    margin-top: 20px;
}
    .alertItem
    {
        text-indent: 20px;
        margin-left: 30px;
        /* color: seashell; */
        color: #475669;

    }
    .svgItem
    {
        width: 40px;
        height: 40px;
        color: #fbab18;
    }
    .alert
    {
        font-size: 12px;
        margin: 20px;
        padding: 10px;
        /* background-color: rebeccapurple; */
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff7e1;
        border-left: 5px solid #fbab18;

    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
    }
    .imgSwiper
    {
        width: 100%;
        height: 100%;
    }
    .title
    {
        padding-left: 30%;
    }
    .head
    {
        font-size: 26px;
        background-color: rgb(24, 145, 145);
        /* margin-left: 30%; */
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        color: floralwhite;
        margin-bottom: 20px;
    }
</style>