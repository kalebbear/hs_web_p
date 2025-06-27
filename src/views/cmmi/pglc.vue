<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'认证服务',path:'/rzservice'},
            {name:'CMMI资质认证流程',path:''}]" />
        <div class="wp1360">
            <div class="title hsHeader">
                <!-- <h3>CMMI资质认证流程</h3> -->
            </div>
            <div class="cont">
                <p class="pg1">官方制定了一套评估流程规范（SCAMPI A）来规范全球授权评估师的行为。所有授权主任评估师（Lead Appraiser）都必须严格遵守评估流程规范SCAMPI A的要求，SCAMPI A针对评估流程做了非常细致和全面的规定。</span></p>
                <p class="pg1">CMMI Institute根据SCAMPI A评估流程规范，建立了一个在线的评估系统（http://sas.cmmiinstitute.com）。官方授权的主任评估师在整个评估过程中都要在该系统上操作并提交相关记录和工作产物。</span></p>
                <p class="pg1">根据官方评估流程规范（SCAMPI A）的要求，官方授权评估师必须到被审企业驻场审查一周（On-site Appraisal）。评估师带领几位评估小组成员（ATMs）通过审阅企业日常项目中产生的文件记录以及进行员工访谈来了解企业日常的研发管理流程，将企业日常研发管理流程，结合CMMI数百条检查项逐一进行检查。</span></p>
                <img alt="CMMI" width="100%" longdesc="@/assets/images/cmmilogo22.jpg" src="@/assets/images/cmmilogo22.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                <p class="pg1">Step1：信息收集</span></p>
                <p class="pg1">SCAMPI A对企业的人员覆盖率、项目覆盖率、项目类型覆盖率、业务类型覆盖率、地域覆盖率等等都有严格的要求。在拟订评估计划之前，需要先收集企业相关的具体信息。包括商业目标、评估目标、项目信息、人员信息等等。</span></p>
                <p class="pg1">Step2：评估计划</span></p>
                <p class="pg1">主任评估师根据收集到的信息集合SCAMPI A的要求，拟订评估初始计划，并与企业的评估发起人（Sponsor）沟通评估计划，形成正式的评估计划。包括时间、人员、风险、覆盖率等内容。</span></p>
                <p class="pg1">Step3：在线注册</span></p>
                <p class="pg1">首先由主任评估师在线（http://sas.cmmiinstitute.com）注册本次评估，然后企业的评估发起人（Sponsor）和评估小组成员（ATMs）都需要在线注册。由于SCAMPI A规定和评估系统的限制，评估注册时能够选择的最早的现场审核日期是一个月之后。</span></p>
                <p class="pg1">Step4：准备度检查</span></p>
                <p class="pg1">主任评估师通过远程或者现场的方式，检查企业对于现场审核的准备情况，包括相关文件的收集、计划的执行情况、后勤协调等各个方面，确保正式的现场评估能够顺利进行。</span></p>
                <p class="pg1">Step5：正式评估</span></p>
                <p class="pg1">主任评估师与其他评估小组成员必须到被审企业的办公场地进行为期一周的现场审查，整个评估小组在这一个周之内针对CMMI数百条要求逐一寻找物证（日常工作文件记录）和人证（访谈记录）来证明企业满足或不满足CMMI的要求。并在评估最后一天向全员公布审查结果。</span></p>
                <p class="pg1">Step6：官方审计</span></p>
                <p class="pg1">主任评估师整理打包好所有评估的工作产出，通过评估系统提交给官方审查。官方的质量审查小组对全球每一场评估进行审查，判断评估是否满足SCAMPI A评估流程规范的要求。审查周期最多30个工作日，一般都在一个周左右的时间内完成审查。</span></p>
                <p class="pg1">Step7：官网发布</span></p>
                <p class="pg1">官方审查通过之后，会以邮件形式通知到主任评估师和企业的评估发起人（Sponsor），并在全球过级企业名单网址（https://sas.cmmiinstitute.com/pars/pars.aspx）上公布企业过级信息。</span></p>
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