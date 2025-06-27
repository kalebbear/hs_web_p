<template>
    <div class="brands-container">
        <Nav />
        
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'华赛荣耀',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div class="cont">

                <p class="pg1">CMMI官方每年会对所有审核机构进行评选，华赛因为一直全心全意服务于CMMI社区，华赛的服务质量和专业能力获得了官方人员的普遍认可，每年都被评选为优秀的合作伙伴，多次获得了官方奖项。</p>
                <div class="center">
                    <img alt="awards" width="80%" src="@/assets/images/ry1.png" />
                    <img alt="awards" width="80%" src="@/assets/images/ry2.jpg" />
                    <img alt="awards" width="80%" src="@/assets/images/ry3.jpg" />
                </div>

                <p class="pg1">“2011年软件研发管理高峰论坛”在京举行，活动中对近年来从事CMMI、敏捷等咨询活动的企业为我国软件研发管理领域的发展所起到的积极作用做出了肯定，并评选出了多家优秀的CMMI、Scrum等咨询服务企业。华赛咨询公司凭借在CMMI研发管理咨询领域内强大的综合实力与品牌影响力，荣膺“2011年度最佳CMMI咨询服务提供商”大奖。&nbsp;本活动由中国软件网主办，经由评委专家及广大网友共同投票，从咨询公司的品牌知名度、诚信度、专业能力等多方面综合打分，最终评选出来的。</p>
                <div class="center">
                    <img alt="awards" width="80%" src="@/assets/images/ry0.jpg" />
                </div>

                <p><br /></p>
            </div>
        </div>

        <Footer class=" top" />
    </div>
</template>
  
  <script>
import { addBrand } from '@/api/index.js'

export default {
    name: 'Brands',
    data() {
        return {}
    },
    mounted() {},
    methods: {},
}
</script>
  
  <style lang="less" scoped>
</style>