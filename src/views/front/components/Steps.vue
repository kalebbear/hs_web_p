<template>
    <div class="wl p5">
        <div class="steps_wrap">

            <div class="steps_header">实施流程</div>
            <el-row gutter="10" class="steps_items">
                <el-col :span="8">
                    <div class="steps_item">
                        <div class="stepHeader">差距分析</div>
                        <div>
                            <p>识别改进重点</p>
                            <p>设计总体方案</p>
                        </div>
                        <img :src="icon" class="bkicon">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="steps_item">
                        <div class="stepHeader">改进计划</div>
                        <div>
                            <p>拟定改进计划</p>
                            <p>组建改进团队</p>
                        </div>
                        <img :src="icon" class="bkicon">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="steps_item">
                        <div class="stepHeader">基础培训</div>
                        <div>
                            <p>CMMI模型培训</p>
                            <p>改进要点培训</p>
                        </div>
                        <img :src="icon" class="bkicon">
                    </div>
                </el-col>
            </el-row>
            <el-row gutter="10" class="steps_items">
                <el-col :span="8">
                    <div class="steps_item">
                        <div class="stepHeader">过程定义</div>
                        <div>
                            <p>过程标准研讨</p>
                            <p>过程标准修订</p>
                        </div>
                        <img :src="icon" class="bkicon">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="steps_item">
                        <div class="stepHeader">过程实施</div>
                        <div>
                            <p>过程标准试点</p>
                            <p>过程标准实施</p>
                        </div>
                        <img :src="icon" class="bkicon">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="steps_item">
                        <div class="stepHeader">效果验收</div>
                        <div>
                            <p>实施效果总结</p>
                            <p>正式评估认证</p>
                        </div>
                        <img :src="icon" class="bkicon">
                    </div>
                </el-col>
            </el-row>
            <el-row gutter="10" class="steps_items">
                <el-col :span="8">
                    <div class="steps_item">
                        <div class="stepHeader">持续改进</div>
                        <div>
                            <p>解决遗留问题</p>
                            <p>改进效果跟踪</p>
                        </div>
                        <img :src="icon" class="bkicon">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="" style="text-align:center;">
                        <!-- <img :src="require('@/assets/images/xq.png')" class="" width="80" height="80"> -->
                        <div class="stepHeader" style="color:007DC6;font-size:16px;line-height:160px;text-align:center;cursor:pointer;" @click="()=>{$router.push('/shCMMI')}">流程详情
                            <img :src="require('@/assets/images/search.png')" width="16" style="margin:2px 0 0 0">
                        </div>

                    </div>
                </el-col>
            </el-row>

        </div>
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
            icon: require('@/assets/images/right.png'),
            imageUrl: require('@/assets/images/next.png'),
            list: '提升研发效率,降低研发成本,提升产品质量,按时交付,提升客户满意度,提升项目的可控性,规范化管理,提升竞争力,学习和成长',
            advList: [
                {
                    title: '差距分析',
                    key: '01',
                    dec1: '识别改进重点',
                    dec2: '设计总体方案',
                    icon: require('@/assets/images/icon/i1.png'),
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
.wl {
    background: url(../../../assets/images/all_B.jpg);
    background-repeat: round;
}
.steps_wrap {
    margin: 0 auto;
    max-width: 1360px;
    overflow: hidden;
}
.steps_header {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
}
.steps_items {
    display: flex;
    margin-bottom: 20px;
    .steps_item {
        height: 160px;
        border: 1px solid #ccc;
        position: relative;
        border-radius: 10px;
        padding: 10px;
        .stepHeader {
            font-size: 16px;
            font-weight: bold;
        }
        .bkicon {
            width: 40px;
            height: 40px;
            position: absolute;
            bottom: 5px;
            right: 20px;
            margin: 0;
            opacity: 0.3;
        }
        p {
            position: relative;
            color: #666;
            font-size: 14px;
            padding-left: 10px;
            margin-top: 18px;
        }
        p::before {
            content: '';
            position: absolute;
            background: #666;
            width: 5px;
            border-radius: 100%;
            height: 5px;
            top: 10px;
            left: 0;
        }
    }
    img {
        margin: 76px 25px;
    }
}
</style>