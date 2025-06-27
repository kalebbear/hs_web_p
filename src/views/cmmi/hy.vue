<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'覆盖行业',path:''}]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>覆盖行业</h3> -->
            </div>
            <div class="cont newAboutUs pg1">

                <p>
                    华赛公司业务覆盖国内绝大部分城市，在多个城市设有办事处和子公司，目前业务主要集中在广东和北京。
                </p>
                <div class="small_margin" style="line-height:32px;">
                    <p>公司业务覆盖各行各业，例如：</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>能源设备：艾默生、山特电子、维帝</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>应用软件：微软、金山、万兴</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>机场：白云机场、深圳机场</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>人工智能：旷视</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>教育行业：全通教育、视源、能龙、鹰硕、翰杰教育</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>家电行业：TCL，美的</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>汽车电子：比亚迪、欣旺达、未来汽车、有感、佑驾、四方光电、欧克蓝、上富电技、健创、云动智能</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>企业管理：致远互联</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>税务系统：百旺金赋、中润四方、旋极百旺</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>仪器仪表：科陆电子、银河表计、思达仪表、中兴仪表、拓安信、派诺</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>金融银行：金证集团、广电运通、银之杰、北辰德、多元世纪、新达通</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>信息安全：北京CA、数字认证、兆日、任子行、华域数安</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>医疗医药：康美、易特科</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>制造行业：技研新阳</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>通信设备：瑞斯康达</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>智慧城市：中电数通、智慧园区</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>停车场管理：捷顺科技、停简单</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>电力行业：南方电网、穗能通、鼎信</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>电网设备：许继</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>软件外包：法本</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>智能制造：新络</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>农业信息：中农易讯</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>公安警用：警翼</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>智能语音客服：客知音</p>
                    <p><i class="el-icon-s-help" style="color:#007DC6"></i>综合：招商局集团、华强集团、中集集团</p>
                </div>
                <br>
                <p>另有电子政务、林业、水利、土地、应急办、档案管理等行业</p>
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