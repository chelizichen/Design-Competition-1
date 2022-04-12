<template>
<div class="outBox">
    <div class="inBox">
        <el-carousel height="200px" direction="vertical" interval="3000">
            <el-carousel-item v-for="item in imgUrl.imgSrc" :key="item">
                <img :src="item.src" alt="" style="width:100%;height:100%">
            </el-carousel-item>
        </el-carousel>
    </div>
</div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import img1 from '../../../assets/title/1.jpeg'
import img2 from '../../../assets/title/2.jpeg'
import img3 from '../../../assets/title/3.jpeg'
import img4 from '../../../assets/title/4.jpeg'
import img5 from '../../../assets/title/5.jpeg'
import img6 from '../../../assets/title/6.jpeg'

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
</script>

<style scoped>
.inBox
{
    background-color: #b4c5db;
    border-radius: 10px;
    padding: 30px;
    margin: 10px;
}
.outBox
{
    background-color: rgb(228, 233, 238);
    padding: 10px;
    border-radius: 5px;
}
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
} */

</style>