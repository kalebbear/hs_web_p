<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'基于CMMI的过程改进案例解析',path:''}]" />
        <div class="wp1360">
            <div class="title hsHeader">
                <!-- <h3>基于CMMI的过程改进案例解析</h3> -->
            </div>
            <div class="cont">
                <p class="pg1 ">某通讯电子产品研发企业实施IPD三年多来，取得了一定的成效。在产品层面已有了良好的总体规划和掌控，但对专业领域级别工作的可控性不强，经常出现进度一再延期、产品质量不能达标等问题。为了进一步提升其研发管理水平，决定导入CMMI，巩固和深化其IPD实施成效。</p>
                <p class="pg1">从最初的问题诊断到最终的评估认证工作，企业总共用了两年半的时间，企业针对自主产品研发、客户订制性开发、ODM、OEM、OBM等不同业务模式制定了不同的业务流程，并自主研发了一套PLM系统(Process Lifecycle Management System)加强研发流程细节管控、提升工作效率。></p>
                <p class="pg1 pgheader">实施流程</p>
                <p><img alt="实施流程" width="100%" longdesc="@/assets/images/processsample.jpg" src="@/assets/images/processsample.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></p>
                <p class="pg1">• 启动阶段主要是针对实施CMMI工作进行可行性分析，将目标设定为CMMI三级，成立项目组，立案和开工。</p>
                <p class="pg1">• 然后开始制定改进计划，制定改进计划时为了明确改进的内容、所需的资源、工作量和难度，华赛组织进行了一次详细差距分析，分析当前实际情况与CMMI Level3的差距。</p>
                <p class="pg1">• 差距分析之后，华赛根据识别出来的问题进行了一些专题知识培训，主要包括项目管理、配置管理、质量保证、测试、采购、培训知识等。</p>
                <p class="pg1">• 在过程定义阶段华赛咨询师组织公司过程改进小组开展讨论，明确不同业务采用不同的流程，建立过程体系。</p>
                <p class="pg1">• 在过程标准第一版发布后，首先在小范围内进行试点运行，然后在全公司推行实施。</p>
                <p class="pg1">• 在过程标准推行中进行阶段性的总结，分析和报告过程改进成效，最后进行评估认证工作达到CMMI三级水平。</p>
                <p class="pg1 pgheader">实施前的问题</p>
                <p class="pg1">在过程改进最初的差距分析中，经过华赛咨询师与客户共同组成的调查小组对实施CMMI之前业务流程的调查分析，发现企业对于研发前期的质量控制较为缺乏，在需求和设计阶段引入了大量的缺陷，这些缺陷极大的增加了后续产品集成时的工作量，导致项目延期和产品质量低下等问题。如下图所示：</p>
                <img alt="问题" width="100%" longdesc="@/assets/images/weakness.jpg" src="@/assets/images/weakness.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                <p class="pg1">本次调查共发现了261个问题，其中有八类问题最为突出，占了问题总数的85％。如下图所示：</p>
                <p><img alt="问题比例" width="100%" longdesc="@/assets/images/issues.jpg" src="@/assets/images/issues.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></p>
                <p class="pg1">这几个方面的问题是：</p>
                <p class="pg1">1. 跨部门沟通困难。</p>
                <p class="pg1">2. 项目计划质量低下，对计划未进行严格监控。</p>
                <p class="pg1">3. 需求不稳定。</p>
                <p class="pg1">4. 缺乏前期质量控制。</p>
                <p class="pg1">5. 开发人员自己测试，测试工作缺乏管理。</p>
                <p class="pg1">6. 各种版本漫天飞。</p>
                <p class="pg1">7. 产品集成困难</p>
                <p class="pg1">8. 经验教训未积累。</p>
                <p class="pg1">华赛公司将发现的问题与CMMI模型三级想对照，用以下图形描述实施CMMI之前的企业现状。其中红色为相较CMMI三级有较大差距的地方，黄色为有少量问题，绿色为满足CMMI模型。</p>
                <img alt="差距分析结果" width="100%" longdesc="@/assets/images/gap.jpg" src="@/assets/images/gap.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                <p class="pg1 pgheader">实施后的效果</p>
                <p class="pg1">经过两年多时间的推行，企业成功达到CMMI三级水平，下图是正式评估时的分析结果：</p>
                <img alt="实施结果" width="100%" longdesc="@/assets/images/result.jpg" src="@/assets/images/result.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                <p class="pg1">企业的研发管理水平有较大的提升，主要表现在以下几点：</p>
                <p class="pg1">1.工作流程规范化。</p>
                <p class="pg1">以往项目工作需要较多管理层的干预，遇到问题往往需要升级到管理部门，然后有管理部门做出决策。过程改进之后各岗位，尤其是跨部门间的分工明确，什么时候谁负责做什么事情，应该产出什么工作产品，都有明确的规程进行限制和作业指南进行引导。由以往的“人治”逐渐转为了“法治”。因为有一些简明扼要的报告向管理层反馈项目信息，管理层可以将以往花费在了解项目情况的时间和精力用到一些更重要的事情上，例如人才力提升和企业发展规划等工作。</p>
                <p class="pg1">2.更多的经验教训积累。</p>
                <p class="pg1">以往项目结案后，该项目的经验教训都留在项目成员的大脑里，不能充分的将这些经验教训共享给其它人或其它项目组，一旦这些项目成员离职后，这些经验教训就随之离开了公司。尤其是一些代码文件，换个人接手后很难读懂这些文件，需要花费大量的时间研究，也增加了出错的几率。现在项目中产生了很多文档，尤其是一些设计文档和一些项目管理经验教训总结的文档和数据，逐渐积累形成了公司的过程资产库，将经验教训进行管理，为公司的发展提供了坚实的基石。</p>
                <p class="pg1">3.研发绩效明显提升></p>
                <p class="pg1">研发绩效明显得到了提升，虽然在引入CMMI进行过程改进之前公司因忽视度量工作而缺乏数据积累，但我们为了展现过程改进绩效对以往的项目进行了回顾和调查得到以下数据：</span></p>
                <img alt="实施效果" width="375" height="180" longdesc="@/assets/images/Table.jpg" src="@/assets/images/table.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                <p class="pg1">由上表可以看出进度偏差上限降低了80%，进度偏差波动范围缩小了23%，遗留缺陷率上限降低了0.13%，波动范围缩小了2%，需求稳定度下限提升了20%，波动范围缩小了13%。上下限改变说明项目研发能力提升，波动范围缩小说明项目更加受控。</p>
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