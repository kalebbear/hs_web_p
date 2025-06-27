<template>
    <div class="fea_wrap p5" style="margin-top:20px">
        <!-- <el-card class="top"> -->
        <div class="fea">
            <div class="fea_dec">
                <p>1,与商业目标挂钩，强调适用性</p>
                <p>2,从问题出发，追求实效</p>
                <p>3,关注员工的学习和成长</p>
            </div>
            <div class="fea_tit">华赛咨询服务特色
            </div>
        </div>
        <!-- </el-card> -->
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
            advList: [],
        }
    },

    mounted() {},
    beforeDestroy() {},
    methods: {},
}
</script>

<style lang="less" scoped>
.fea_wrap {
    margin: 0 auto;

    .fea {
        height: 220px;

        background: url(../../../assets/images/ts.png);
        background-repeat: round;
        color: #fff;
        position: relative;
        .fea_dec {
            position: absolute;
            line-height: 44px;
            font-style: italic;
            font-size: 14px;
            top: 60px;
            left: 18px;
        }
        .fea_tit {
            font-weight: 900;
            font-size: 20px;
            position: absolute;
            top: 20px;
            left: 20px;
        }
    }
}
</style>