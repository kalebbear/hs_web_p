<template>

    <div class="wt_wrap" style="margin-top:10px">
        <el-card class="box-card">
            <div class="main_header" style="margin-bottom:12px;">常见问题</div>
            <!-- <div class="main_header2" style="text-align:center;margin-bottom:20px;color:#999">我们服务过2000+企业，感谢客户的选择和信任，我们将与这些优秀企业共同成长。</div> -->
            <div class="">
                <el-collapse accordion v-model="active">
                    <el-collapse-item v-for="(item,i) in list" :key="i" :name="item.title">
                        <template slot="title">
                            <!-- <div> -->
                            <div style="font-size:16px;color:#333;margin:10px 0 0 10px;;" :class="{'active':item.title===active}">{{item.title}}<i class="header-icon el-icon-info" color="red"></i></div>
                            <!-- <br> -->
                            <div style="font-size:14px;color:#666;margin:0 0 0 10px;;">{{item.wt}}</div>
                            <!-- </div> -->

                        </template>
                        <div v-html="item.jd"></div>
                    </el-collapse-item>
                    <!-- <el-collapse-item>
                        <template slot="title">
                            一致性 Consistency<i class="header-icon el-icon-info"></i>
                        </template>
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="反馈 Feedback">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="效率 Efficiency">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item> -->
                </el-collapse>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    components: {},
    props: {},
    watch: {},
    data() {
        return {
            active: '',
            list: [
                {
                    title: '申请条件',
                    wt: '什么样的公司可以申请？',
                    jd: `<p class="pg1">CMMI认证适用于几乎所有涉及软件开发、系统集成、产品开发和相关服务的公司。无论是小型初创企业，还是大型跨国公司，只要具备一定的项目基础和改进意愿，都可以申请。</p>
<p class="pg1">通常，申请CMMI认证的公司需要有稳定的业务流程、明确的业务目标以及管理层的支持。此外，公司应具备一定的项目和团队规模，以便展示过程管理的实践。</p>
<p class="pg1">CMMI认证不仅适用于软件和高科技行业，还广泛应用于金融、医疗、制造业、航空航天、国防以及政府项目承包商等领域。通过认证，企业可以提升管理能力、优化流程、提高产品质量和市场竞争力。</p>`,
                },
                {
                    title: '认证周期',
                    wt: '审核需要多长时间？',
                    jd: `<p class="pg1">CMMI认证审核的时间通常取决于企业的规模和成熟度。一般来说，从准备到完成审核可能需要3-6个月。具体时间包括前期的差距分析、过程改进、文档准备以及正式的评估阶段。</p>
<p class="pg1">对于小型企业，审核周期可能较短，大约1-2个月；而对于大型企业，可能需要3-6个月甚至更久，因为需要更全面的流程梳理和文档审查。</p>
<p class="pg1">此外，企业在审核前的准备情况也会影响时间。如果企业已有较好的过程管理基础，审核时间会相对较短。</p>`,
                },
                {
                    title: '资源投入',
                    wt: '需要投入多少人力和工作量？',
                    jd: `<p class="pg1">CMMI认证所需的人力和工作量因企业规模和成熟度而异。一般来说，小型企业（少于50人）可能需要投入3-5人月的工作量，中型企业（50-200人）可能需要5-10人月，大型企业（200人以上）可能需要10-20人月甚至更多。</p>
<p class="pg1">工作量主要包括差距分析、流程优化、文档编写、培训、内部审核和正式评估准备等环节。如果企业已有较好的过程管理体系，工作量会相对减少；否则，可能需要更多时间和人力进行梳理和改进。</p>
<p class="pg1">建议企业在启动CMMI认证前，进行详细的规划和资源评估，以确保顺利推进认证工作。</p>`,
                },
                {
                    title: '资质维护',
                    wt: '证书有效期是多久？',
                    jd: `<p class="pg1">CMMI认证证书的有效期为三年。在这三年内，企业需要持续遵循CMMI模型的要求，并在必要时进行过程改进和优化，以确保符合标准。</p>
<p class="pg1">为了保持证书的有效性，企业在三年期满后需要重新进行评估。重新评估时，评估团队会检查企业在认证期间的实践情况，确认企业是否持续符合CMMI模型的要求。</p>
<p class="pg1">建议企业在认证期间定期进行内部审核和自我评估，以确保持续符合CMMI标准，为顺利通过重新评估做好准备。</p>`,
                },
                {
                    title: '申请级别',
                    wt: '我应该申请哪个级别？',
                    jd: `<p class="pg1">选择CMMI认证级别应基于企业的现状和目标。CMMI共有五个级别：1级（初始级）、2级（已管理级）、3级（已定义级）、4级（量化管理级）和5级（优化级）。</p>
<p class="pg1">如果企业刚起步，流程尚未规范，可从2级开始，重点在于项目管理和基本流程的规范化。有一定基础的企业可申请3级，提升组织级流程的标准化和文档化。追求更高效率和质量的企业可考虑4级和5级，通过量化管理和优化流程，实现持续改进。</p>
<p class="pg1">建议企业根据自身需求和资源，选择合适的级别，并在实施前进行差距分析，确保目标明确且可达成。</p>`,
                },
                {
                    title: '模型选择',
                    wt: '应该采用哪个模型？',
                    jd: `<p class="pg1">选择CMMI模型应根据企业的业务需求和目标。CMMI主要有三种模型：CMMI for Development（CMMI-DEV）、CMMI for Services（CMMI-SVC）和CMMI for Acquisition（CMMI-ACQ）。</p>
<p class="pg1">如果企业专注于软件开发、产品开发或系统工程，应选择CMMI-DEV模型。对于提供服务的企业，如运维、咨询或技术支持，CMMI-SVC模型更为适用。若企业主要负责采购、外包或项目外包管理，则CMMI-ACQ模型是最佳选择。</p>
<p class="pg1">建议企业在选择模型前，明确自身业务核心和改进目标，必要时可咨询专业顾问，确保选择的模型与企业实际需求相匹配，从而实现最佳的改进效果。</p>`,
                },
                {
                    title: '过级企业名单',
                    wt: '如何判断企业是否通过CMMI认证？',
                    jd: `<p class="pg1">企业是否通过CMMI认证主要由评估结果决定。CMMI认证通过专业的评估团队进行审核，评估团队会根据CMMI模型的要求，检查企业的过程实践是否符合相应级别标准。</p>
<p class="pg1">评估过程中，企业需要展示实际的项目文档、流程记录和实践案例，评估团队会通过访谈、文件审查和现场观察等方式验证企业是否有效实施了相关过程。如果企业在大多数关键过程领域达到了模型要求，评估团队会给出通过的结论。</p>
<p class="pg1">最终，评估结果会形成一份正式的报告，报告中明确指出企业是否通过认证。通过认证的企业将获得CMMI认证证书，证书上会标注认证级别和有效期。</p>`,
                },
                {
                    title: '审核资质',
                    wt: '如何判断咨询公司是否具备评估资质？',
                    jd: `<p class="pg1">判断咨询公司是否具备CMMI评估资质，首先要查看其是否获得SEI（软件工程研究所）授权。只有SEI授权的咨询公司才有资格进行CMMI评估。</p>
<p class="pg1">其次，检查咨询公司是否有具备资质的主任评估师（LEAD APPRAISER）。主任评估师需通过SEI培训和认证，并具备丰富的评估经验。</p>
<p class="pg1">此外，了解咨询公司的行业经验和客户案例也很重要。经验丰富且口碑良好的咨询公司通常更可靠。建议向咨询公司索要资质证明和过往项目案例，必要时可联系其客户进行验证。</p>`,
                },
                {
                    title: '审核员资质',
                    wt: '如何判断审核员是否具备审核资质？',
                    jd: `<p class="pg1">判断CMMI审核员是否具备审核资质，首先需确认其是否为认证的主任评估师（Lead Appraiser）。主任评估师必须通过SEI（软件工程研究所）授权的培训并获得资质认证。</p>
<p class="pg1">审核员应具备丰富的行业经验和实际评估案例。他们需要熟悉CMMI模型，并能够准确地应用评估方法论，如SCAMPI（Standard CMMI Appraisal Method for Process Improvement）。</p>
<p class="pg1">此外，审核员应持续接受专业培训以保持其资质的有效性。建议企业要求审核员提供资质证书和相关证明，并了解其过往的评估经验和客户反馈，以确保其具备专业的审核能力。</p>`,
                },
            ],
        }
    },

    mounted() {},
    beforeDestroy() {},
    methods: {},
}
</script>

<style lang="less" scoped>
.wt_wrap {
    margin: 0 auto;
    max-width: 1360px;
    /deep/ .el-collapse-item__header {
        height: auto;
        line-height: auto;
        display: block;
        position: relative;
    }
    .active {
        color: #007dc6 !important;
    }
    /deep/ .el-collapse-item__arrow {
        position: absolute;
        right: 10px;
        top: 20px;
    }
    /deep/ .el-collapse-item__content {
        color: #999;
        margin: 0 0 0 10px;
    }
}
</style>