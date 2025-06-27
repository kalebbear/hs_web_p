<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path:'/home'},
            {name:'什么是CMMI能力成熟度模型',path:''}]" />
        <div class="wp1360">
            <div class="title hsHeader">
                <!-- <h3>什么是CMMI能力成熟度模型?</h3> -->
            </div>
            <div class="cont">
                <p class="pg1">一、CMMI的来源</span></p>
                <p class="pg1">CMMI（Capability Maturity Model Integration）即能力成熟度模型集成，其前身为CMM，原本是当年美国军方为了评估自己的软件产品供应商的过程质量水平，而委托美国卡内基梅隆大学软件工程学院（SEI）开发的一套过程评估体系，后来又被推广到全世界，成为全球软件企业重要的过程改进方法之一，后因其衍生品的派系林立（如：SW-CMM、SE-CMM、IPT-CMM等等），SEI决定在SW-CMM、SE-CMM的基础上，加入委外采购、IPPD等相关内容，并融合ISO9000部分理念，形成了今天我们看到的CMMI，这也就是CMMI中的“I”的由来。</span></p>
                <p class="pg1">目前CMMI最新版本为2021年发布的V3.0版本。</span></p>
                <!-- <img alt="CMMI模型" width="700" height="" longdesc="@/assets/images/pas2.jpg" src="@/assets/images/pas2.jpg" /> -->

                <div class="pg1">CMMI发展历史:</div>

                <img src="@/assets/images/cmmils.png" alt="" width="100%">
                <p class="pg1">二、什么是CMMI？</p>
                <p class="pg1">CMMI是一个评估模型，它将研发机构的研发能力划分为5个级别。</span></p>
                <p class="pg1">CMMI也是一个过程改进模型，它指导企业逐步进行过程改进。</span></p>
                <p class="pg1">CMMI是业界先进的管理方法，它是SEI对数千个项目进行调查总结后得出的最佳实践的集合。</span></p>
                <p class="pg1">CMMI是全面质量管理方法，它通过对过程的控制来确保最终输出高质量的产品。</span></p>
                <p class="pg1">CMMI产品包由CMMI模型、培训课程和评估方法三部分组成。</span></p>
                <p class="pg1">三、CMMI的构成</span></p>
                <p class="pg1">CMMI是由一系列的目标所构成，CMMI有一个总目标，那就是组织的过程的持续改进，这也是CMMI的愿景。在这个总目标之下，CMMI又细分为多个子目标，子目标又分为特定目标（SG）和通用目标（GG）两种；每一个G（子目标）下设有不同的实践（P）对G（子目标）的实现进行支持；SG下的实践被称为特定实践（SP），GG下的实践则被称通用实践（GP）。</span></p>
                <p class="pg1">CMMI除有一整套目标体系外，还根据项目管理、质量管理的关键点，建立了过程域（PA），过程域分为四个类别：过程管理类、项目管理类、工程类、以及支持类等，每一个PA都有若干个不同地SG予以支持，而GG则是支持于所有的PA实现。</span></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed;"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" title="CMMI结构" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);" href="http://"><img alt="CMMI结构" width="385" height="290" longdesc="@/assets/images/aCMMI-Structure.jpg" src="@/assets/images/aCMMI-Structure.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p class="pg1">四、CMMI的实施与Level</span></p>
                <p class="pg1">CMMI的实施可以有两种方法来完成：一种是连续型，另一种是阶段型，被评估企业结合自身实际选择不同的实施方法。 连续型体现的是企业的能力度等级。</span></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed;"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" title="CMMI连续模型" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);" href="http://"><img alt="CMMI连续模型" width="385" height="290" longdesc="@/assets/images/aCMMI-Continuous.jpg" src="@/assets/images/aCMMI-Continuous.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p class="pg1">分为六个等级：</span></p>
                <p class="pg1">0.不完整级</span></p>
                <p class="pg1">1.执行级</span></p>
                <p class="pg1">2.管理级</span></p>
                <p class="pg1">3.定义级</span></p>
                <p class="pg1">4.量化管理級</span></p>
                <p class="pg1">5.佳化管理級</span></p>
                <p class="pg1">实施企业可选择自己比较薄弱的，或是需要加强的一个或几个PA进行实施。</span></p>
                <p class="pg1">阶段式体现了企业的成熟度等级。</span></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed;"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" title="CMMI阶梯模型" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);" href="http://"><img alt="CMMI阶梯模型" width="385" height="290" longdesc="@/assets/images/aCMMI-Staged.jpg" src="@/assets/images/aCMMI-Staged.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p class="pg1">分为五个等级：</span></p>
                <p class="pg1">1.初始级</span></p>
                <p class="pg1">2.管理级</span></p>
                <p class="pg1">3.定义级</span></p>
                <p class="pg1">4.量化管理級</span></p>
                <p class="pg1">5.优化管理級</span></p>
                <p class="pg1">这也是目前国内软件企业选择最多的实施方式。</span></p>
                <p class="pg1">这里暂以阶段式为例，将五个等级的关键特征进行一下简单的描述。</span></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed;"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" title="CMMI模型" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);" href="http://"><img alt="CMMI模型" width="385" height="290" longdesc="@/assets/images/cmmi-level.jpg" src="@/assets/images/cmmi-level.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p class="pg1">1、初始级。处在这一级别企业的项目开发过程始终处于黑盒状态，项目经常失控，对于关键开发人员的依赖性极大，项目组也始终处于一种救火式的状态。</span></p>
                <p class="pg1">2、管理级。在这一级别时，企业的项目基本保持可控状态，项目组开始建立项目级的管理机制，开发过程由黑盒状态开始转向比较清晰的阶段化和里程碑化。</span></p>
                <p class="pg1">3、定义级。企业由项目组级管理机制转向组织级管理机制，组织内的每一个项目组都遵循组织级开发过程进行开发工作。</span></p>
                <p class="pg1">4、量化管理级。从这一级开始为CMMI的高成熟度级别，此时企业已建立了基本稳定地组织级开发过程，并对重要的子过程建立PPB（过程能力基线），再根据PPB间的数据逻辑关系建立PPM（过程能力模型），PPM是用于对项目开发过程进行预测的数学模型。在建立PPB同时，还须通过对过程的量化分析，消除因过程执行异常造成的可归属原因偏差，保持PPB对组织过程能力的代表性。</span></p>
                <p class="pg1">5、优化管理级。企业通过PPB、PPM的量化分析，找到组织开发过程中的公共原因偏差，并通过组织级的优化、改进、以及变革，逐步加以解决，来达到企业自我改进的目的。</span></p>
                <p class="pg1">五、CMMI的评估</span></p>
                <p class="pg1">目前CMMI的评估方法采用的是SCAMPI(Standard CMMI Appraisal Method for Process Improvement)评估方法，主要检查企业实际项目和日常运作中产生的数据、文档、邮件、会议纪要、项目报告、自动化工具等各方面的记录，并对员工进行抽样访谈，了解企业员工实际开展项目的方式。</span></p>
                <p class="pg1">CMMI评估由SEI授权主任评估师(Lead Appraiser)组织ATM(Appraisal Team Members)成立评估小组执行。评估全程受SEI监控，最终在SEI官方网站上通报评估结果。</span></p>
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