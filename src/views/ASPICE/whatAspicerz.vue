<template>
    <div class="brands-container">
        <Nav />
        <Bred :mdata="[
            {name:'首页',path:'/aspice'},
            {name:'什么是ASCPIE认证',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div class="cont">
                <p class="pg1">虽然任何人都可以使用ASPICE的PAM（过程评估模型）基于PRM（过程参考模型）来对企业的研发管理流程进行评估。但为了区分评估结果的可信程度，只有经过特定授权的人遵照特定规则所开展评估，其评估结果才能被采信。</p>
                <p class="pg1">一般有如下Class1，Class2，Class3三类评估，Class3一般用于内部分析，以启动一次改进，Class2一般用于阶段性的审查，以便发现问题进行改善，Class1为最严格和正式的评估方式，只有Class1评估可以发放证书。</p>
                <img class="center w100" width="100%" src="@/assets/images/aspice/41.png">
                <p class="pg1">目前审核员相关资质由INTACS（International Assessor Certification Scheme）进行管理。</p>
                <img class="center" width="100%" src="@/assets/images/aspice/42.png">
                <p class="pg1">Provisional Assessor指通过官方基础课程掌握ASPICE模型，可以作为评估小组成员参与对企业的ASPICE审核的人员，不能直接签发证书。但ASPICE审核必须有数位Provisional Assessor成员参加，可以是被评估公司的外部成员也可以是被评估公司的内部成员。</p>
                <p class="pg1">Competent Assessor指通过官方的评估方法课程培训的审核员，可以作为评估小组长组织开展一场评估，可以签发证书。因为ASPICE在欧洲发展的早，在欧洲Compentent Assessor数量最多，有数十位，而亚洲地区因为ASPICE发展较晚，目前在日本、韩国和中国分别只有为数不多的几位。</p>
                <p class="pg1">Principal Assessor指对A Spice发展贡献较多的审核员，可以培养其他审核员（包括Competent Assessor和Provisional Assessor），目前全球只有几位。</p>
                <p class="pg1">通常所说的ASPICE认证指的是由Competent Assessor按照ASPICE要求开展的评估，最终对企业的研发能力给出客观的评价结果。并且为了保证审核的客观性，要求Competent Assessor必须独立于被评估公司以外，并以寻找证据的方式进行审核。所有的评估结果依赖于“人证”和“物证”。“物证”指项目中的相关文件记录能够证明企业实施了ASPICE相关活动，“人证”指相关活动执行人在评估期间的访谈时口头证实其执行了ASPICE相关活动。</p>
                <p class="pg1">评估小组根据对证据的审查，对企业实施ASPICE各活动的情况进行打分，以下是ASPICE中定义的四个打分结果尺度：</p>
                <img class="center" width="100%" src="@/assets/images/aspice/43.png">
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