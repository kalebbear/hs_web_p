<template>
    <div class="brands-container">
        <Nav />
        <Bred :mdata="[
            {name:'首页',path:'/aspice'},
            {name:'ASPICE认证流程',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div class="cont">
                <p class="pg1">ASPICE认证包括“准备审核”和“执行审核”两部分：</p>
                <p class="pg1">【准备审核】包含五个活动：1.分析需求，2.制定评估计划，3.选择和准备评估团队，4.获取和准备客观证据，5.评估实施准备。如下图所示：</p>
                <img class="center" width="100%" src="@/assets/images/aspice/61.png">
                <p class="pg1">1.1.分析需求</p>
                <p class="pg1">由Competent Assesor（以下简称CA）与公司负责人沟通了解企业基本情况明确评估相关需求，包括：</p>
                <ul style="padding-left:40px">
                    <li style="list-style-type:disc">评估目标</li>
                    <li style="list-style-type:disc">评估的组织范围</li>
                    <li style="list-style-type:disc">评估所采用的ASPICE模型范围</li>
                    <li style="list-style-type:disc">评估的目标级别</li>
                    <li style="list-style-type:disc">评估的时间和成本限制</li>
                </ul>
                <p class="pg1">1.2.制定评估计划</p>
                <p class="pg1">由CA制定评估计划，对项目和人员进行抽样选择，制定相关的证据收集和覆盖计划，评估相关活动的人员和时间计划等，并与公司负责人沟通确定评估计划。</p>
                <p class="pg1">1.3.选择和准备评估团队</p>
                <p class="pg1">正式审核需要由CA牵头选择一或多位Provisional Assesor（以下简称PA）成立一个评估团队来对公司进行审核，所有PA必须通过Intacs认证，由CA根据他们的知识和经验进行选择，成立评估团队。由CA对PA进行必要的评估工作培训，确保PA能够顺利开展评估相关工作。</p>
                <p class="pg1">1.4.获取和准备客观证据</p>
                <p class="pg1">企业在正式评估之前组织人员收集评估所需的文件或记录，用于证明公司日常研发管理流程中实施了ASPICE所要求的相关活动。每个项目（或公司层面的支持小组）对于ASPICE中的每一个Practice都至少准备一条文件证据。</p>
                <p class="pg1">1.5.评估实施准备</p>
                <p class="pg1">评估团队在正式评估之前检查准备工作完成情况，包括检查后勤准备情况、人员准备情况、评估团队的知识技能准备情况、文档证据的准备完成情况等。</p>
                <p class="pg1">【执行审核】现场审核一般一周时间，从周一到周五，完成8个方面的活动：1.开工会，2.文档检查，3.员工访谈，4.整理汇总，5.活动打分，6.级别打分，7.团队评审，8，评估报告</p>
                <img class="center" width="100%" src="@/assets/images/aspice/62.png">
                <p class="pg1">2.1.开工会</p>
                <p class="pg1">由CA主持，公司负责人及所有与评估相关的人员参加，由CA介绍评估目标、评估范围、评估流程、职责、评估计划、评估注意事项等。</p>
                <p class="pg1">2.2.文档检查</p>
                <p class="pg1">CA与PA一起对前期收集的文件证据进行检查，基于文件证据判断ASPICE相关活动执行情况，同时检查文件证据对ASPICE要求的覆盖度是否满足要求。根据文件检查结果，准备访谈问题单。</p>
                <p class="pg1">2.3.员工访谈</p>
                <p class="pg1">CA与PA根据评估计划对员工进行逐一提问，针对ASPICE每一条要求向相关人员收集访谈证据，确认相关活动执行情况的同时收集被访谈人员的改进建议。</p>
                <p class="pg1">2.4.整理汇总</p>
                <p class="pg1">CA与PA将文档证据和访谈证据与ASPICE要求建立映射关系，整理文件检查和访谈中发现的强项、弱项和改进建议。</p>
                <p class="pg1">2.5.活动打分</p>
                <p class="pg1">评估团队根据ASPICE打分规则，结合已经前面整理出来的强项、弱项和改进建议对ASPICE各活动进行评价打分。</p>
                
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