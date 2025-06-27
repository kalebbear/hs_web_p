<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'认证服务',path:'/rzservice'},
            {name:'CMMI资质申请条件及资质维护',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div class="cont">
                <table width="650" border="0" align="center" cellpadding="0" cellspacing="10" style="color: rgb(84, 84, 84); font-family: 宋体; ">
                    <tr>
                        <td><a href="#"><img src="@/assets/images/cmmilogo3.jpg"></a></td>
                        <td>
                            <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">官方对于申请资质认证的企业没有任何“硬性”条件，任何企业都可以申请CMMI认证。不像国内的一些认证要求营业额、注册资金、人数、办公场地等等要求。</p>
                            <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">CMMI认证是一个企业管理认证，检查的是企业日常管理流程是否规范，类似于ISO是检查企业日常开展工作的方式。</p>
                            <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">因此理论上任何研发型的企业都可以申请CMMI for Development 资质认证。</p>
                            <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">但是因为评估流程需要抽取企业几个项目，并对项目成员进行访谈，接受访谈的人员包括各项目的项目经理、需求调研人员、设计人员、开发人员、测试人员、质量管理人员等等。涉及的人员较多，所以一般而言，如果企业少于10人是难以通过CMMI资质认证的。</p>
                        </td>
                    </tr>
                </table>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">CMMI并非只支持纯软件企业或团队，CMMI支持所有研发型的组织，既可以针对软件研发型的团队进行评估，也可以针对硬件研发的团队进行评估。</p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">通常所说的CMMI评估指的是使用CMMI的阶梯型表达方式Staged Representation，这种表达方式是针对一个组织（Organization）进行评估的，并非一定要是一个企业。即被审对象可以是一个企业，也可以是一个部门、一个研究机构或者一个小的团队、工作室等。</p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">大多数CMMI评估都是针对一个或多个研发相关的部门进行评估，如果企业有多个分公司以及分布在不同城市，可以选择一次性进行评估也可以分开为多次进行评估，但如果评估工作量过大，必须分开成次进行。</p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">企业最终是否获取到CMMI资质，不是以纸质证书为标准，而是以在官方网站上的全球过级企业名单网页（https://sas.cmmiinstitute.com/pars/pars.aspx）上能够查询到企业过级信息为准。纸质证书由官方授权评估机构制作、由主任评估师签字，并非由官方直接提供。企业在评估通过之后，官方CMMI Institute会发送一个包含本次评估的编号和有效日期的官方Logo给企业负责人（Sponsor）以及主任评估师，官方要求，将该Logo放在纸质证书左下角，并针对纸质证书的样式做出了一些其它的基本规范和要求，在满足该规范和要求的前提下，可以根据企业需要制作不同样式的证书，但该证书是否有效依然以官方的全球过级企业名单网页为准。</p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal;">CMMI资质是三年有效期的，三年到期后，企业的名字自动从官方全球过级企业名单网页上移除，企业若需继续保持资质，必须在过期之前再次进行评估认证。CMMI评估没有年审、复审、续证的概念，只有评估一个概念，即，三年到期后必须完全重新评估一次。</p>
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