<template>
    <div class="adv_wrap">
        <div class="adv_header">实施CMMI的好处</div>
        <el-row :gutter="12">
            <el-col :span="8" v-for="item in advList" :key="item.key" style="margin-bottom:10px;padding:0 10px">
                <el-card shadow="hover">
                    <div class="advbox">
                        <img :src="item.icon" alt="" width="40" height="40">
                        <div class="advInfo">
                            <div class="advtitle">{{item.title}}</div>
                            <!-- <div class="advdec">{{item.dec}}</div> -->
                        </div>
                        <!-- <div class="adv_num">{{item.key}}</div> -->
                    </div>

                </el-card>
            </el-col>

        </el-row>

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
            list: '提升研发效率,降低研发成本,提升产品质量,按时交付,提升客户满意度,提升项目的可控性,规范化管理,提升竞争力,学习和成长',
            advList: [
                {
                    title: '提升研发效率',
                    key: '01',
                    dec: '规范研发流程，减少重复工作和低效环节，提高团队协作效率，加速产品开发周期。',
                    icon: require('@/assets/images/icon/i1.png'),
                },
                {
                    title: '降低研发成本',
                    key: '02',
                    dec: '通过优化流程和资源分配，减少浪费和返工，降低研发过程中的不必要开支。',
                    icon: require('@/assets/images/icon/i2.png'),
                },
                {
                    title: '提升产品质量',
                    key: '03',
                    dec: '引入质量控制机制，减少缺陷和错误，提高产品稳定性和可靠性。',
                    icon: require('@/assets/images/icon/i3.png'),
                },
                {
                    title: '按时交付',
                    key: '04',
                    dec: '明确流程和时间节点，增强项目进度把控能力，确保项目按时交付。',
                    icon: require('@/assets/images/icon/i4.png'),
                },
                {
                    title: '提升客户满意度',
                    key: '05',
                    dec: '高质量的产品和按时交付，增强客户信任，提升客户满意度和忠诚度。',
                    icon: require('@/assets/images/icon/i5.png'),
                },
                {
                    title: '提升项目的可控性',
                    key: '06',
                    dec: '量化指标和标准化流程，让项目进度和风险可控，增强管理透明度。',
                    icon: require('@/assets/images/icon/i6.png'),
                },
                {
                    title: '规范化管理',
                    key: '07',
                    dec: '建立标准化流程，提升企业管理水平，减少因人为因素导致的混乱。',
                    icon: require('@/assets/images/icon/i7.png'),
                },
                {
                    title: '提升竞争力',
                    key: '08',
                    dec: '获得国际认可的CMMI认证，提升企业形象，增强市场竞争力。',
                    icon: require('@/assets/images/icon/i8.png'),
                },
                {
                    title: '学习和成长',
                    key: '09',
                    dec: '员工在实施CMMI过程中学习新知识，提升专业技能，促进个人和团队成长。',
                    icon: require('@/assets/images/icon/i9.png'),
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
.adv_header {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin: 20px;
}
.advbox {
    height: 110px;
    position: relative;
    text-align: center;
    img {
        margin: 10px 0;
    }
    .advInfo {
    }
    .advtitle {
        font-size: 14px;
    }
    .advdec {
        color: #666;
        margin-top: 13px;
        font-size: 14px;
    }
    .adv_num {
        position: absolute;
        color: #999;
        right: 0;
        top: 0;
        font-size: 32px;
        font-style: italic;
    }
}
</style>