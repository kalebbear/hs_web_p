<template>
    <div class="brands-container">
        <Nav />
        
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'关于华赛',path:''},
            {name:'咨询团队',path:''}]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>咨询团队</h3> -->
            </div>
            <div>
                <p class="pg1">华赛的咨询师团队全部具有十年以上的大型企业研发管理经验，所有的咨询顾问都具备硕士和MBA及以上学历。其中一部分来自于国内外知名咨询机构的资深顾问，还有一部分来自华为、联想、西门子等大型企业的资深高管。</p>
                <p class="pg1">华赛的咨询团队为众多企业提供了咨询和培训服务，涉及电力、能源、电信、电子、软件等行业。</p>
                <p class="pg1">华赛咨询团队秉承“为客户创造价值”的宗旨，迅速融入到企业内部，踏实巧干，协助客户解决实际管理难题。凭借其敬业的工作态度和丰富管理知识，帮助一个又一个企业突破了管理瓶颈，克服了成长过程中的障碍，受到客户一致好评。</p>
                <p><br /></p>
            </div>
            <!-- <div class="cont newAboutUs">
                <div class="pg1 flex-container">
                    <img src="@/assets/images/teamwt.png" alt="">
                    吴涛，武汉大学计算机本科、北邮软件工程硕士、A SPICE Principal Assessor（国内仅7位）、CMMI官方授权评估师、CMMI授权讲师。18年研发行业经验，曾于世界五百企业担任研发经理职务。曾经在多家企业内部主导过程改进工作，擅长企业管理变革、推动管理流程落地，熟悉IPD、ASPICE、CMMI、SRUM、IATF16949、PSP，TSP等业界最佳管理方法，从事过软件工程师、项目经理、部门经理等职，有丰富的软件工程和部门管理经验，为200多家企业提供过研发管理相关咨询服务，其中包括艾默生、微软、华为、腾讯、TCL、美的、金山、旷视、南网、平安、康美等知名企业。
                </div>
                <div style="display: flex;justify-content: space-around;margin:20px;">
                    <img src="@/assets/images/teamwt1.png" alt=""><img src="@/assets/images/teamwt2.png" alt=""><img src="@/assets/images/teamwt3.png" alt="">
                </div>
                <el-divider><i class="el-icon-coffee-cup"></i></el-divider>

       
                <div class="pg1 flex-container">
                    <img src="@/assets/images/zwq1.png" alt="">
                    <div>
                        <div class="pg1 ">
                            张伟强，日本早稻田大学机电工程博士、ASPICE Principal Assessor（国内仅7位）、ISO26262功能安全认证专家（CFSE），中国唯一一位同时具备ASPICE审核员和ISO26262审核员资质。10多年ASPICE和功能安全实施经验，是中国最早研究功能安全的专家之一，早在ISO26262发布之前就参与国际功能安全（IEC61508，ISO26262的前身）研讨并为多家厂商提供功能安全培训，包括比亚迪等。</div>
                        <div class="pg1 ">服务过的客户包括广州汽车、惠州华阳通用电子，三花智能，德赛西威汽车电子，欣锐科技等等。
                            <br>
                            <div>
                                <div><i class="el-icon-s-help" style="color:#007DC6"></i>iNtacsTM 认证ASPICE Principal Assessor</div>
                                <div><i class="el-icon-s-help" style="color:#007DC6"></i>ISO26262认证功能安全专家(CFSE)</div>
                                <div><i class="el-icon-s-help" style="color:#007DC6"></i>IATF 16949:2016审核员</div>
                                <div><i class="el-icon-s-help" style="color:#007DC6"></i>需求工程认证专家(CPRE)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: flex;justify-content: space-around;margin:20px;">
                    <img src="@/assets/images/zwq2.png" alt=""><img src="@/assets/images/zwq3.png" alt=""><img src="@/assets/images/zwq4.png" alt=""><img src="@/assets/images/zwq5.png" alt="">
                </div>

                <el-divider><i class="el-icon-coffee-cup"></i></el-divider>
          
                <div class="pg1 flex-container">
                    <img src="@/assets/images/yd.png" alt="">
                    <div>
                        Ravindra Nath，印度人，ASPICE的6位创始人之一。CMMI主任评估师、ASPICE Principal Assessor。20多年研发行业经验，在全球范围内为数百家企业提供过CMMI及ASPICE咨询、培训及评估服务。包括西门子美国和新加坡研发中心、IBM新加坡研究中心、HP惠普新加坡研究中心、EDS等。其中包括大量国内的汽车行业客户及国内主板上市公司。例如：东软、惠州德赛等。
                        <br>
                        <div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>CMMI官方授权主任评估师</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>CMMI官方授权讲师</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>iNtacsTM 认证 ASPICE Principal Assessor </div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>iNtacsTM 认证ASPICE讲师</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>ISO/TS 16949 主任审核员</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>CSQA</div>
                        </div>
                    </div>

                </div>
                <div style="display: flex;justify-content: space-around;margin:20px;">
                    <img src="@/assets/images/yd2.png" alt=""><img src="@/assets/images/yd3.png" alt=""><img src="@/assets/images/yd4.png" alt="">
                </div>

                <el-divider><i class="el-icon-coffee-cup"></i></el-divider>
          
                <div class="pg1 flex-container">
                    <img src="@/assets/images/hg.png" alt="">
                    <div>
                        Sangwook Jeong，韩国人，ASPICE Competent Assessor，CMMI高成熟评估师（全球仅30多位）。20多年质量管理经验，曾任现代汽车前质量部经理。在韩国、中国、日本为50多家企业提供过ASPICE咨询及认证服务，包括，华为终端事业部等。为100多家企业提供过CMMI咨询及认证服务。
                        <br>
                        <div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>CMMI官方授权高成熟评估师</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>CMMI官方授权讲师</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>iNtacsTM 认证 ASPICE Principal Assessor </div>
                        </div>
                    </div>

                </div>
                <div style="display: flex;justify-content: space-around;margin:20px;">
                    <img src="@/assets/images/hg2.png" alt=""><img src="@/assets/images/hg3.png" alt=""><img src="@/assets/images/hg4.png" alt="">
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
        return {}
    },
    mounted() {},
    methods: {},
}
</script>
  
  <style lang="less" scoped>
</style>