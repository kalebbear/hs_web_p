<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'华赛工具',path:'/hstools'},
            {name:'工具介绍',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div class="cont">
                <p class="pg1">PLMStar研发企业管理平台是华赛公司总结多年来的咨询和培训经验，为中国研发企业打造的管理平台，目的是快速提升研发管理水平、提升研发工作效率。</p>
                <p class="pg1">PLMStar融合了业界先进的研发管理理念，包括IPD、CMMI、TS16949、APQP、PMBOK等，覆盖产品研发全过程，包括产品规划、产品开发与维护过程的管理和支撑模块，涵盖产品研发的组合管理、需求管理、项目管理、产品数据管理（文档、BOM、零部件）、工程变更管理、质量管理、成本管理、研发知识管理、研发绩效管理等领域。&nbsp;</p>
                <p class="pg1">企业实施PLM可以迅速建立一套满足CMMI三级的流程体系，是的流程和IT系统有机结合，确保研发管理流程的有效“落地和固化”，提高流程的透明性和可操作性；真正实现端到端的需求管理、高效规范的研发项目管理、产品数据管理以及研发绩效管理，促进人员知识技能的积累、共享和提升，有效提升公司研发管理水平。</p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);"><img width="400" height="300" longdesc="@/assets/images/PLMStar/advantage01.jpg" alt="" src="@/assets/images/PLMStar/advantage01.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);"><img width="400" height="300" longdesc="@/assets/images/PLMStar/advantage02.jpg" alt="" src="@/assets/images/PLMStar/advantage02.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);"><img width="400" height="300" longdesc="@/assets/images/PLMStar/advantage03.jpg" alt="" src="@/assets/images/PLMStar/advantage03.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);"><img width="400" height="300" longdesc="@/assets/images/PLMStar/advantage04.jpg" alt="" src="@/assets/images/PLMStar/advantage04.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);"><img width="400" height="300" longdesc="@/assets/images/PLMStar/advantage05.jpg" alt="" src="@/assets/images/PLMStar/advantage05.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);"><img width="400" height="300" longdesc="@/assets/images/PLMStar/advantage06.jpg" alt="" src="@/assets/images/PLMStar/advantage06.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);"><img width="400" height="300" longdesc="@/assets/images/PLMStar/advantage07.jpg" alt="" src="@/assets/images/PLMStar/advantage07.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);"><img width="400" height="300" longdesc="@/assets/images/PLMStar/advantage08.jpg" alt="" src="@/assets/images/PLMStar/advantage08.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p><br /></p>
            </div>
        </div>

        <Footer class="top" />
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