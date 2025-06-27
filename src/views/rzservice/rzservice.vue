<template>
    <div class="brands-container">
        <Nav />
       
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'认证服务',path:'/rzservice'},
            ]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>培训服务</h3> -->
            </div>
            <div>

                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item :index="1">什么是CMMI资质认证</el-menu-item>
                    <el-menu-item :index="2">认证流程</el-menu-item>
                    <el-menu-item :index="3">申请条件</el-menu-item>
                </el-menu>
                <div style="padding-top:20px;">
                    <div style="color:#666" v-if="activeIndex === 1">
                        <div class="cont">
                           <img alt="CMMI" width="100%" height="330"  src="@/assets/images/cmmilogo.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                            <p class="pg1">CMMI官方为美国CMMI Institute(http://www.cmmiinstitute.com)。CMMI资质主要包括三种：研发模型CMMI for Development资质,服务模型 CMMI for Serivce资质, 采购模型 CMMI for Acquisition资质。在所有已过级企业中有99.5%以上的企业为研发模型CMMI for Development资质，0.5%以下的企业为服务模型 CMMI for Serivce资质，采购模型 模型 CMMI for Acquisition资质几乎为零。</span></p>
                            <p class="pg1">CMMI研发模型CMMI for Development是目前在全球范围内唯一获得广泛认可的企业研发管理水平资质证明。</span></p>
                            <p class="pg1">CMMI是企业管理的资质认证，它将企业的管理水平划分为五个级别，一级为最低级，五级为最高级别。目前在国内在所有已过级企业中，95%以上的企业为三级资质，全国只有数十家企业达到四级或五级。 其主要原因是因为高等级别企业投入较大，而且官方审查更加严苛，所以第一次申请的企业一般选择申请三级资质。</span></p>
                            <p class="pg1">CMMI Institute在全球范围内授权了一些机构为企业提供评估认证服务（http://http://partners.clearmodel.com），负责执行评估工作的必须是经过官方培训和考核的主任评估师Lead Appraiser，全球所有的主任评估师中99.9%以上的评估师为外籍专家。</span></p>
                            <p class="pg1">评估师必须严格按照官方所规定的评估流程规范（SCAMPI A）到企业内部驻场审核一周的时间，通过文件检查和员工访谈的方式审查企业日常研发流程，对照CMMI模型中数百条检查项逐一评价企业的研发流程是否满足CMMI-DEV模型要求。</span></p>
                            <p class="pg1">官方通过其在线的评估系统（https://sas.cmmiinstitute.com）对全球每场评估进行监控，主任评估师在整个评估期间都要在该系统上操作并提交相关记录和工作产物。官方由专门的质量审查小组通过该评估系统对全球每一场进行质量审查，检查评估工作是否符合评估流程规范（SCAMPI A），若评估工作不符合评估流程规范，将会取消评估结果、甚至吊销主任评估师执照。正因为官方对评估结果严格把关，所以任何主任评估师都严格遵循评估流程规范。</span></p>
                            <p class="pg1">评估结果通过官方审查后，企业资质信息自动在官方全球过级企业名单网页（https://sas.cmmiinstitute.com/pars/pars.aspx）上公布出来，企业是否过级以在该网页上查询到公司名字为准。纸质证书由官方授权评估机构提供，由主任评估师签名后生效。</span></p>
                            <p class="pg1">企业在获取到CMMI资质后，有效期是三年，三年之后企业的名字自动从官方全球过级企业名单网页上移除，企业需要再次评估。CMMI资质没有年审、复审、续证等概念，只有评估一个概念，因此三年之后企业需要重新申请并再次进行评估认证。</span></p>
                            <p><br /></p>
                        </div>
                    </div>
                    <div style="color:#666" v-if="activeIndex === 2">
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
                    <div style="color:#666" v-if="activeIndex === 3">
                        <div class="cont">
                            
                            
                                   <img src="@/assets/images/cmmilogo3.jpg" class="center">
                                  
                                        <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">官方对于申请资质认证的企业没有任何“硬性”条件，任何企业都可以申请CMMI认证。不像国内的一些认证要求营业额、注册资金、人数、办公场地等等要求。</p>
                                        <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">CMMI认证是一个企业管理认证，检查的是企业日常管理流程是否规范，类似于ISO是检查企业日常开展工作的方式。</p>
                                        <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">因此理论上任何研发型的企业都可以申请CMMI for Development 资质认证。</p>
                                        <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">但是因为评估流程需要抽取企业几个项目，并对项目成员进行访谈，接受访谈的人员包括各项目的项目经理、需求调研人员、设计人员、开发人员、测试人员、质量管理人员等等。涉及的人员较多，所以一般而言，如果企业少于10人是难以通过CMMI资质认证的。</p>
                                
                        
                            <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">CMMI并非只支持纯软件企业或团队，CMMI支持所有研发型的组织，既可以针对软件研发型的团队进行评估，也可以针对硬件研发的团队进行评估。</p>
                            <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">通常所说的CMMI评估指的是使用CMMI的阶梯型表达方式Staged Representation，这种表达方式是针对一个组织（Organization）进行评估的，并非一定要是一个企业。即被审对象可以是一个企业，也可以是一个部门、一个研究机构或者一个小的团队、工作室等。</p>
                            <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">大多数CMMI评估都是针对一个或多个研发相关的部门进行评估，如果企业有多个分公司以及分布在不同城市，可以选择一次性进行评估也可以分开为多次进行评估，但如果评估工作量过大，必须分开成次进行。</p>
                            <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">企业最终是否获取到CMMI资质，不是以纸质证书为标准，而是以在官方网站上的全球过级企业名单网页（https://sas.cmmiinstitute.com/pars/pars.aspx）上能够查询到企业过级信息为准。纸质证书由官方授权评估机构制作、由主任评估师签字，并非由官方直接提供。企业在评估通过之后，官方CMMI Institute会发送一个包含本次评估的编号和有效日期的官方Logo给企业负责人（Sponsor）以及主任评估师，官方要求，将该Logo放在纸质证书左下角，并针对纸质证书的样式做出了一些其它的基本规范和要求，在满足该规范和要求的前提下，可以根据企业需要制作不同样式的证书，但该证书是否有效依然以官方的全球过级企业名单网页为准。</p>
                            <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">CMMI资质是三年有效期的，三年到期后，企业的名字自动从官方全球过级企业名单网页上移除，企业若需继续保持资质，必须在过期之前再次进行评估认证。CMMI评估没有年审、复审、续证的概念，只有评估一个概念，即，三年到期后必须完全重新评估一次。</p>
                            <p><br /></p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div style="display:flex;">
                <div class="fwwrap" @click="$router.push('/whatCMMI')">
                    <el-card class="box-card">
                        <div class="fwheader">什么是CMMI资质认证</div>
                        <img src="@/assets/images/fw2.jpg" alt="" width="270" height="210">
                    </el-card>
                </div>
                <div class="fwwrap" @click="$router.push('/pglc')">
                    <el-card class="box-card">
                        <div class="fwheader">CMMI资质认证流程
                        </div>
                        <img src="@/assets/images/al1.jpg" alt="" width="270" height="210">
                    </el-card>
                </div>
                <div class="fwwrap" @click="$router.push('/condition')">
                    <el-card class="box-card">
                        <div class="fwheader">CMMI资质申请条件</div>
                        <img src="@/assets/images/fw1.jpg" alt="" width="270" height="210">
                    </el-card>
                </div>
            </div> -->

        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
import { addBrand } from '@/api/index.js'

export default {
    name: 'Brands',
    data() {
        return {
            activeIndex: 1
        }
    },
    mounted() {},
    methods: {
        handleSelect(index) {
            this.activeIndex = index
        },
    },
}
</script>
  
  <style lang="less" scoped>
.fwwrap {
    cursor: pointer;
    margin-right: 40px;
}
.fwheader {
    height: 60px;
    font-size: 22px;
    text-align: center;
}
</style>