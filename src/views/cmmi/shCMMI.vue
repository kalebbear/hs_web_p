<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'华赛是如何为客户实施CMMI的',path:''}]" />
        <div class="wp1360">
            <div class="title hsHeader">
                <!-- <h3>华赛是如何为客户实施CMMI的?</h3> -->
            </div>
            <div class="cont">
                <p class="pg1">华赛公司基于SEI的IDEAL模型总结了一套CMMI实施方法论，其最大的特色是适合国内实际情况，能够最大程度确保过程改进不会流于形式，真正为企业带来实效。华赛咨询服务坚持以“人”为核心，从实际问题出发提升企业研发能力，促使企业商业目标的达成。</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;"><span style="margin: 0px; padding: 0px; font-size: 14px;"></span></p>
                <p class="pg1 pgheader">咨询服务流程</p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed;"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" title="Implement Process" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);"><img alt="Implement Process" width="100%" longdesc="@/assets/images/huasai-process.jpg" src="@/assets/images/huasai-process.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p class="pg1">1.差距分析</span></p>
                <p class="pg1">差距分析阶段的目的是深入调查了解企业当前研发管理情况，以便识别企业改进重点，确定总体改进思路。</span></p>
                <p class="pg1">2.改进计划</span></p>
                <p class="pg1">根据前一阶段差距分析结果，对问题优先级进行排序，建立过程改进总体规划，拟定最近三年过程改进路标。</span></p>
                <p class="pg1">3.基础培训</span></p>
                <p class="pg1">根据第一阶段差距分析结果，对公司过程改进小组和中层管理人员进行有针对性的讲解和练习。</span></p>
                <p class="pg1">4.过程定义</span></p>
                <p class="pg1">结合第一阶段差距分析结果和培训内容，华赛咨询顾问与EPG一起就现有公司过程体系进行讨论，制定修订方案，并组织修改、完善和评审。</span></p>
                <p class="pg1">5.过程实施</span></p>
                <p class="pg1">过程标准完善后，EPG在华赛咨询顾问的指导下，进行试点实施。针对试点实施中收集的问题与建议修改过程体系后全面推广到全公司。</span></p>
                <p class="pg1">6.效果验证</span></p>
                <p class="pg1">在实施阶段结束后，华赛咨询顾问将协助EPG对实施效果进行分析和总结，验证实施效果，向公司汇报实施效果报告，并根据公司需要开展正式评估。</span></p>
                <p class="pg1">7.持续改进</span></p>
                <p class="pg1">正式评估结束后，华赛咨询顾问将组织EPG对评估结果进行讨论，分析正式评估中发现的公司流程中的不足之处，制定解决方案和下一步改进计划。EPG根据改进计划修订过程标准并在公司内实施。实施中如有任何问题，华赛咨询顾问将通过邮件、电话等进行远程辅导，对于重大问题将安排上门服务，组织专题研讨。</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">&nbsp;</p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;"><span style="margin: 0px; padding: 0px; font-size: 14px;"></span></p>
                <p class="pg1 pgheader">咨询服务特色</span></p>
                <p class="pg1">● 以促使企业达成其战略目标为目的</span></p>
                <p class="pg1">● 从企业面临的实际问题出发</span></p>
                <p class="pg1">● “学习”为过程改进第一要素</span></p>
                <p class="pg1">● 强调适用、灵活、快捷和易用性</span></p>
                <p class="pg1">● 分小步走、系统性的持续改进</span></p>
                <p class="pg1">● 强调经验教训积累</span></p>
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