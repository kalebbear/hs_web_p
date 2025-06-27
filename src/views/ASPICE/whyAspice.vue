<template>
    <div class="brands-container">
        <Nav />

        <Bred :mdata="[
            {name:'首页',path:'/aspice'},
            {name:'为什么要进行ASPICE认证',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div class="cont">
                <p class="em pg1">实施ASPICE要求有三个方面的好处：</p>
                <img class="center" width="100%" src="@/assets/images/aspice/51.png">
                <p class="em pg1">【内部管理改善】ASPICE被广泛用于指导企业研发管理改善，用于发现日常研发管理流程中的不足、收集管理改善建议，为后续管理改善确定方向和目标。</p>
                <p class="em pg1">【相关标准要求】随着ISO9001，TS16949，ISO26262等相关标准的改版升级，越来越多的管理标准要求企业建立标准化的研发流程体系并定期进行流程审核。实施ASPICE认证有助于其它相关标准的审核工作，如果不进行ASPICE评估，其它相关标准也无法满足。</p>
                <p class="em pg1">【上游车厂要求】目前大多数欧美汽车厂商都使用ASPICE审核结果对下游供应商进行分层分级。</p>
                <p class="em pg1">欧洲：Automotive SPICE模型起源于欧洲，欧洲几乎所有的OEM及Tie1对其供应商均有Automotive SPICE的要求</p>
                <p class="em pg1">日本：日本紧随欧洲的步伐，日本OEM（如：Nissan, Honda, Mazda等）、Tier 1（如：Denso, AISIN等）对其供应商有Automotive SPICE的要求。</p>
                <p class="em pg1">北美：对其供应商的软件过程有要求，有些是Automotive SPICE要求（Ford），有些是CMMI要求（GE）。</p>
                <p class="em pg1"> ASPICE证书是参加汽车厂商项目竞标时的入门条件。同时车厂也会在项目期间安排审核人员到供应商公司内部使用ASPICE进行流程监控和审核，不能达到制定级别的供应商将会从厂商的合格供应商名单中移除，</p>
                <p class="pg1">例如：大众公司的采购总监F.J. García Sanz和质量总监F. Tuch共同签发的Formal Q文件中明确规定ASPICE审核结果为0级的供应商不允许采用，审核结果为1级的必须立即启动整改措施并且该供应商只能被限制下采用，审核结果为2级的才被认为企业具备基本的质量管理能力可以作为合格供应商采用。即，最低要达到ASPICE一级才能成为大众公司的供应商。</p>
                <img width="150" src="@/assets/images/aspice/52.png">
                <img width="100%" src="@/assets/images/aspice/53.png">
            </div>
        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
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