<script>
import { reactive } from '@vue/reactivity'
import pic1 from '../../../../assets/news/1.jpeg'
const imgState = reactive({
    pic1
})
</script>
<template>
  <div>
        <h1>校友会2022中国大学一流专业排名发布  我校跻身中国大学一流专业排名（应用型）50强</h1>
        <h6>发布时间：2022/4/6 15:37:44 作者：管理员 浏览次数：277</h6>
        <div>
            新闻网讯(记者张佳鑫)3月30日，全国第三方大学评价机构艾瑞深研究院校友会网(Cuaa.Net)发布了校友会2022中国大学一流专业排名、2022中国大学各专业类一流专业排名榜单。我校37个专业获赋星，跻身校友会2022中国大学一流专业排名(应用型)前50强。
        </div>
        <!-- <img :src="imgState.pic1" alt=""/> -->
        <img :src="`src/assets/news/1.jpeg`" alt="" class="img1">
  </div>
</template>

<style>
    .img1
    {
        width: 100%;
        height: 100%;
    }
</style>