<template>
    <div class="qy_wrap p5" style="margin-top:20px">
        <!-- <el-card class="top"> -->
        <div class="main_header" style="margin-bottom:10px;">华赛客户</div>
        <div class="main_header2" style="text-align:center;margin-bottom:10px;color:#999;font-size:14px">我们服务过2000+企业，感谢客户的选择和信任，我们将与这些优秀企业共同成长。</div>
        <div class="">
            <el-row :gutter="12">
                <el-col :span="8" v-for="item in advList" :key="item.key" style="margin-bottom:10px">
                    <el-card shadow="hover">
                        <img :src="require(`@/assets/images/qy/${item}.png`)" alt="" width="100%">
                    </el-card>
                </el-col>

            </el-row>
            <div class="center">
                <el-button type="primary" @click="$router.push('/hy')">分行业查看</el-button>
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
            advList: [
                '01',
                '02',
                '03',
                '04',
                '05',
                '06',
                '07',
                '08',
                '09',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
                '24',
            ],
        }
    },

    mounted() {},
    beforeDestroy() {},
    methods: {},
}
</script>

<style lang="less" scoped>
.qy_wrap {
    margin: 0 auto;
    max-width: 1360px;
}
</style>