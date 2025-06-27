<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'认证服务',path:'/rzservice'},
            {name:'什么是CMMI资质认证',path:''}]" />
        <div class="wp1360">
            <div class="title hsHeader">
                <!-- <h3>什么是CMMI资质认证?</h3> -->
            </div>
            <div class="cont">
                <img alt="CMMI" width="550" height="330"  src="@/assets/images/cmmilogo.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
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