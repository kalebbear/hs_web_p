<template>
    <div class="brands-container">
        <Nav />
       
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'关于华赛',path:''},
            {name:'华赛简介',path:''}]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>华赛简介</h3> -->
            </div>
            <div class="cont newAboutUs">
                <div class="pg1">
                    <!-- <img src="@/assets/ab1.png" alt=""> -->
                    深圳华赛信息咨询有限公司（简称：华赛）公司由多位国内外研发管理专家共同组建，他们分别来自于美国、欧洲、印度和中国，是国际知名的研发管理改善的先行者。华赛的咨询团队为国内外上千家企业提供过研发管理培训和咨询服务，也是国内最早一批专业从事研发管理改善咨询与培训业务的团队。
                </div>
                <div class="pg1">
                    作为研发管理咨询行业的领军企业，华赛积极参与多项研发管理国际标准的制订和推广。华赛拥有多项研发管理国际标准审核资质，包括2名中国籍ASPICE Principal Assessor，目前国内仅7人。公司还拥有8名CMMI Leader Appraiser，目前国内仅30多人，其中一人为CMMI高成熟度评估师，目前国内仅5人。公司还有十多位外籍CMMI、ASPICE以及其它标准的审核员，其中一人是ASPICE创始人之一，另一人是ISO26262的标准的编著者之一。华赛还是CMMI最高级别审核机构（白金），目前国内仅五家。
                </div>
                <div class="pg1">
                    公司的咨询服务经验覆盖各行各业，包括软件研发、通讯设备、电力设备、家电、汽车、地产、教育、医疗、银行、证券、机电设备等。公司为上千家企业提供过研发管理改善相关咨询与认证服务。包括华为、腾讯、微软、艾默生、TCL、美的、金山、南方电网、平安集团等知名企业。
                </div>
                <img src="@/assets/ab2.png" alt="" width="100%">
                <el-divider><i class="el-icon-coffee-cup"></i></el-divider>
                <div class="pg1">
                    公司主营业务有ASPICE、ISO26262、CMMI、SCRUM、IPD等研发管理培训、咨询、认证、工具。
                </div>
                <img src="@/assets/ab3.png" alt="" width="100%">
                <el-divider><i class="el-icon-coffee-cup"></i></el-divider>
                <div class="pg1">
                    华赛公司通过公开课程、企业内训、咨询服务、评估服务、工具研发等方式帮助国内企业提高研发能力。基于对国际先进的研发管理模型、标准、方法论的研究和传播助力国内研发型组织提升产品质量、研发效率、降低研发成本、提升产品竞争力。
                </div>
                <img src="@/assets/ab5.png" alt="" width="100%">
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
        return {
            webtype: '',
        }
    },
    mounted() {
        // this.webtype = localStorage.type
        console.log('asd', this.$store.state.type)
    },
    methods: {},
}
</script>
  
  <style lang="less" scoped>
</style>