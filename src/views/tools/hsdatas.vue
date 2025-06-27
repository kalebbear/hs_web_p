<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'参考资料',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <ul class="list">
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i><a href="http://www.sei.cmu.edu/reports/09sr018.pdf" target="_blank">The Personal Software Process (PSP)</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i><a href="http://www.sei.cmu.edu/reports/02tn016.pdf" target="_blank">Using CMMI to Improve Earned Value Management</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i><a href="http://www.sei.cmu.edu/reports/96hb002.pdf" target="_blank">Goal-Driven Software Measurement: A Guidebook</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i><a href="http://www.sei.cmu.edu/reports/08tn010.pdf" target="_blank">CMMI or Agile: Why Not Embrace Both!</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i><a href="http://www.sei.cmu.edu/reports/04tr014.pdf" target="_blank">Mapping TSP to CMMI</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i><a href="http://www.sei.cmu.edu/reports/10tr020.pdf" target="_blank">Team Software Process (TSP) Body of Knowledge</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i><a href="http://www.sei.cmu.edu/reports/11tr006.pdf" target="_blank">ARC, Version 1.3</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i><a href="http://www.sei.cmu.edu/library/assets/presentations/2461-sazama-debou-chgmgt.pdf" target="_blank">Managing Change: the Human Factor in Process Improvement Initiatives讲义</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i><a href="http://www.sei.cmu.edu/library/assets/presentations/2800_Doyle.pdf" target="_blank">CMMI, ITIL, and ISO 20000: A Mutually Supportive Relationship讲义</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i> <a href="http://www.sei.cmu.edu/library/assets/presentations/2756_Foegen.pdf" target="_blank">Agile Process Improvement讲义</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i> <a href="http://www.sei.cmu.edu/library/assets/presentations/2565_Turgeon.pdf" target="_blank">SCRUMP (Scrum + RUP) and CMMI讲义</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i> <a href="http://www.sei.cmu.edu/reports/10tr034.pdf" target="_blank">CMMI for Services, Version 1.3</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i> <a href="http://www.sei.cmu.edu/reports/01mm001.pdf" target="_blank">P-CMM, Version 2.0</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i> <a href="http://www.sei.cmu.edu/reports/10tr032.pdf" target="_blank">CMMI for Acquisition, Version 1.3</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i> <a href="http://www.sei.cmu.edu/reports/11hb001.pdf" target="_blank">SCAMPI, Version 1.3</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i> <a href="http://www.sei.cmu.edu/cmmi/casestudies/profiles/pdfs/upload/2011marCMMI.pdf" target="_blank">2010年末全球CMMI实施情况统计报告</a>
                </li>
                <li>
                    <i class="el-icon-paperclip" style="color:#007DC6"></i> <a href="http://www.sei.cmu.edu/reports/10tr033.pdf" target="_blank"> CMMI for Development, Version 1.3</a>
                </li>
            </ul>
        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
import { wkjson } from '@/config/wk.js'

export default {
    name: 'Brands',
    data() {
        return {
            wkjson: wkjson,
        }
    },
    mounted() {
        console.log(this.wkjson)
    },
    methods: {},
}
</script>
  
  <style lang="less" scoped>
.list {
    a {
        color: #666;
        line-height: 30px;
        font-size: 14px;
        text-decoration: #007dc6; /* 去除下划线 */
        padding: 0; /* 去除内边距 */
        margin: 0; /* 去除外边距 */
        border: none; /* 去除边框 */
    }
}
</style>