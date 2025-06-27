<template>

    <div class="wp1360" style="overflow: visible;">
        <!-- <el-card class="box-card"> -->
        <div class="bred_box">
            <el-breadcrumb separator="/" class="">
                <template v-if="mdata[0]">
                    <el-breadcrumb-item v-if="mdata[0].path" :to="{ path: mdata[0].path }">{{mdata[0].name}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="!mdata[0].path">{{mdata[0].name}}</el-breadcrumb-item>
                </template>
                <template v-if="mdata[1]">
                    <el-breadcrumb-item v-if="mdata[1].path" :to="{ path: mdata[1].path }">{{mdata[1].name}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="!mdata[1].path">{{mdata[1].name}}</el-breadcrumb-item>
                </template>
                <!-- <el-breadcrumb-item  :to="{ path: '/1' }">111</el-breadcrumb-item> -->
                <template v-if="mdata[2]">
                    <el-breadcrumb-item v-if="mdata[2].path" :to="{ path: mdata[2].path }">{{mdata[2].name}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="!mdata[2].path">{{mdata[2].name}}</el-breadcrumb-item>
                </template>
            </el-breadcrumb>
            <!-- </el-card> -->
        </div>
    </div>

</template>
  
  <script>
export default {
    name: 'Brands',
    props: {
        mdata: [],
    },
    data() {
        return {}
    },
    mounted() {},
    methods: {},
}
</script>
  
  <style lang="less" scoped>
.bred_box {
    border: 1px solid #eee;
    line-height: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-top: 20px;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.06);
}
</style>