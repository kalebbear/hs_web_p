<template>
    <div class="brands-container">
        <Nav />
        <Bred :mdata="[
            {name:'首页',path:'/aspice'},
            {name:'什么是ASPICE',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div class="cont">
                <div class="xbox">
                    <img src="@/assets/images/aspice/1.png" width="100">
                    <div class="xbox-right">
                        <p class="pg1"> ASPICE全称是“Automotive Software Process Improvement and Capacity dEtermination”，汽车软件过程改进及能力评定，是汽车行业用于评价软件开发团队的研发能力水平的模型框架。最初由欧洲20多家主要汽车制造商共同制定，于2005年发布，目的是为了指导汽车零部件研发厂商的软件开发流程，从而改善车载软件的质量。
                        <p>
                        <p class="pg1">多年以来，ASPICE在欧洲汽车行业内被广泛用于研发流程改善及供应商的研发能力评价。</p>
                    </div>
                </div>
                <!-- <div> -->
                <p class="pg1">随着近年车联网、智能驾驶、新能源汽车的迅速发展，软件在汽车研发中的占比激增，企业对软件质量管理的需求不断增强，ASPICE逐渐被引入到国内，被国内的企业所熟知。另一方面随着TS16949的改版，对企业提出定期审核的要求，也对ASPICE在国内的应用起到的极大的促进作用。</p>
                <!-- </div> -->
                <img class="center w100" src="@/assets/images/aspice/2.png">
                <p class="pg1">【1986年CMM】ASPICE模型最初是在CMM基础上发展起来的，最初的ASPICE模型几乎与CMM完全一致，评估结果可直接转换、CMMI评估师也可以直接获得ASPICE审核员资质（近年已改变）。CMM全称是Capability Maturity Model，是由卡耐基梅隆大学（CMU)的软件工程研究所（SEI）于1986年在美国防部（DOD）的赞助下开发的一个用于评价企业研发能力水平的模型，被广泛用于软件流程改善和软件研发团队能力评价</p>
                <img class="center w100" src="@/assets/images/aspice/3.png">
                <p class="pg1">【1994年SPICE】 1994年国际标准化组织ISO、国际电工委员会IEC、信息技术委员会JTC1联合制定并发布了国际标准ISO/IEC15504，又称SPICE。 包括：</p>
                <ul>
                    <li style="list-style-type:disc">汽车行业的SPICE</li>
                    <li style="list-style-type:disc">医疗设备行业的SPICE</li>
                    <li style="list-style-type:disc">航天行业的SPICE</li>
                </ul>
                <img class="center" src="@/assets/images/aspice/4.png" style="width: 200px;
                        position: relative;
                        top: -50px;">
                <p class="pg1">【2005年ASPICE】2005年汽车行业的SPICE：Automotive SPICE从ISO体系中独立出来，由德国汽车工业联合会（VDA）的质量管理中心（QMC）运营发展，发布了ASPICE第一个版本：ASPICE V2.0。</p>
                <img class="center" src="@/assets/images/aspice/5.png">
                <p class="pg1">【2010年V3.0】2010对ASPICE做了一些结构上的修订，包括将PRM和PAM合二为一、将ENG工程过程组拆分为SYS系统工程组和SWE软件工程组、五级名称变化等。</p>
                <p class="pg1">【2018年V3.1】2018年发布了当前最新版本ASPICE V3.1，v3.1在v3.0的基础上做了一些微小改动，并将HIS SCOPE改名为了VDA SCOPE。</p>
                <img class="center" src="@/assets/images/aspice/6.png">
                <p class="pg1">ASPICE根据企业管理的细致和严谨程度不同，将企业的软件研发能力划分为6个级别，0级为最低级，5级为最高级。级别越高代表研发项目出现意外情况的可能性更低，企业对项目和产品的成功掌控力越强，越有能力按时向客户交付高质量的产品。</p>
                <p class="pg1">【0级】代表一种混乱的状态。</p>
                <p class="pg1">【1级】代表企业已经能够完成产品研发相关的工作，但缺乏管理，虽然偶尔能够成功，但项目中存在大量不确定的因素，对项目缺乏掌控能力，无法确保一定能够按时交付高质量的产品。</p>
                <p class="pg1">【2级】代表企业不仅能够完成产品研发相关工作还能有提前制定严谨和周全的工作计划，并能有效根据计划实施项目监控和管理，各项目能够有序进行。</p>
                <p class="pg1">【3级】代表不仅各项目能够管理得很好，而且能够有效的从历史项目中积累经验和教训，形成公司的知识资产和标准工作流程，用于对今后项目的参考和指导以及公司管理的持续改善。</p>
                <p class="pg1">【4级】引入统计学知识和技术，对项目相关各项数据进行统计和分析，并将之运用于未来的项目管理之中，达到对项目结果的预测，并根据预测结果对项目进行实时的调整，确保达成项目目标。</p>
                <p class="pg1">【5级】代表企业能够基于商业目标的需要，主动的对过程进行调整，对变革管理有很强的管理能力，能够基于对过程的量化分析设定明确有效的过程改进目标，并能对过程改进结果进行有效的量化监控和分析。</p>
                <img class="center" width="500" src="@/assets/images/aspice/7.png">
                <p class="pg1">ASPICE将汽车系统研发过程划分为了32个过程，并将这32个过程归类到3大类、8个过程组。其有17个过程被推荐为重点过程，叫VDA Scope（以前的HIS Scope)，多数审核选择对这17个过程进行审核。</p>
                <img class="center w100" src="@/assets/images/aspice/8.png">
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
.cont .xbox {
    display: flex;
}
.cont .xbox-right {
    margin-left: 10px;
}
.cont p {
    line-height: 23px;
    white-space: normal;
}
.cont .center {
    /* width: 100%; */
    text-align: center;
    /* margin: 0 auto; */
    margin-left: 50%;
    transform: translateX(-50%);
}
.cont .w100 {
    width: 100%;
}
</style>