<template>
    <div class="wl p5">
        <div class="steps_wrap">
            <div class="steps_header">
                实施流程

                <span class="stepHeader" style="color:#666;font-size:16px;cursor:pointer;float: right;top: 0;position: relative;" @click="()=>{$router.push('/carryAspice')}">流程详情
                    <img :src="require('@/assets/images/search.png')" width="16" style="margin:2px 0 0 0">
                </span>
            </div>
            <div class="steps_items">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <div class="steps_item">
                            <div class="stepHeader">现状调研</div>
                            <div>
                                <!-- <p>SCAMPI A对企业的人员覆盖率、项目覆盖率、项目类型覆盖率、业务类型覆盖率、地域覆盖率等等都有严格的要求。在拟订评估计划之前，需要先收集企业相关的具体信息。包括商业目标、评估目标、项目信息、人员信息等等。</p> -->
                            </div>
                            <img :src="icon" class="bkicon">
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="steps_item">
                            <div class="stepHeader">改进计划</div>
                            <div>
                                <!-- <p>主任评估师根据收集到的信息集合SCAMPI A的要求，拟订评估初始计划，并与企业的评估发起人（Sponsor）沟通评估计划，形成正式的评估计划。包括时间、人员、风险、覆盖率等内容。</p> -->

                            </div>
                            <img :src="icon" class="bkicon">
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="steps_item">
                            <div class="stepHeader">流程培训</div>
                            <div>
                                <!-- <p>首先由主任评估师在线（http://sas.cmmiinstitute.com）注册本次评估，然后企业的评估发起人（Sponsor）和评估小组成员（ATMs）都需要在线注册。由于SCAMPI A规定和评估系统的限制，评估注册时能够选择的最早的现场审核日期是一个月之后。</p> -->
                            </div>
                            <img :src="icon" class="bkicon">
                        </div>
                    </el-col>

                </el-row>

                <!-- <div v-for="(item,i) in advList" class="steps_item">
                    <div class="stepHeader">{{item.title}}</div>
                    <div>
                        <p>{{item.dec1}}</p>
                        <p>{{item.dec2}}</p>
                    </div>
                </div> -->

                <!-- <img :src="imageUrl" alt="" width="50px" height="50px"> -->

            </div>
            <div class="steps_items">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <div class="steps_item">
                            <div class="stepHeader">流程定义</div>
                            <div>
                                <!-- <p>主任评估师通过远程或者现场的方式，检查企业对于现场审核的准备情况，包括相关文件的收集、计划的执行情况、后勤协调等各个方面，确保正式的现场评估能够顺利进行。</p> -->
                            </div>
                            <img :src="icon" class="bkicon">
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="steps_item">
                            <div class="stepHeader">流程实施</div>
                            <div>
                                <!-- <p>主任评估师与其他评估小组成员必须到被审企业的办公场地进行为期一周的现场审查，整个评估小组在这一个周之内针对CMMI数百条要求逐一寻找物证（日常工作文件记录）和人证（访谈记录）来证明企业满足或不满足CMMI的要求。并在评估最后一天向全员公布审查结果。</p> -->

                            </div>
                            <img :src="icon" class="bkicon">
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="steps_item">
                            <div class="stepHeader">评估认证</div>
                            <div>
                                <!-- <p>主任评估师整理打包好所有评估的工作产出，通过评估系统提交给官方审查。官方的质量审查小组对全球每一场评估进行审查，判断评估是否满足SCAMPI A评估流程规范的要求。审查周期最多30个工作日，一般都在一个周左右的时间内完成审查。</p> -->
                            </div>
                            <img :src="icon" class="bkicon">
                        </div>
                    </el-col>

                </el-row>
            </div>

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
    padding: 20px;
}
.steps_items {
    display: flex;
    margin-bottom: 20px;
    .steps_item {
        height: 110px;
        border: 2px solid #ccc;
        position: relative;
        border-radius: 10px;
        padding: 20px;
        .stepHeader {
            font-size: 24px;
        }
        .bkicon {
            width: 40px;
            height: 40px;
            position: absolute;
            bottom: 5px;
            right: 5px;
            margin: 0;
            opacity: 0.3;
        }
        p {
            position: relative;
            color: #666;
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
        margin: 26px 25px;
    }
}
</style>