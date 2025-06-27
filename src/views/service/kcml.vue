<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'培训服务',path:'/training'},
            {name:'课程目录',path:''}]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>课程目录</h3> -->
            </div>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card class="box-card bbwrap">
                        <div class="fwheader">研发战略管理</div>
                        <div class="fwli">
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>产品战略管理</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>构建高效的研发管理体系</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>构建市场导向的流程型研发组织</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>研发变革管理</div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card class="box-card bbwrap">
                        <div class="fwheader">产品研发管理</div>
                        <div class="fwli">
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>研发项目管理</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>产品测试管理</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>产品平台建设与技术开发</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>产品数据管理</div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card class="box-card bbwrap">
                        <div class="fwheader">市场管理与产品规划</div>
                        <div class="fwli">
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>成功的产品经理</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>市场管理与产品路标规划</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>产品创新管理</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>市场需求管理</div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card class="box-card bbwrap">
                        <div class="fwheader">软件研发管理</div>
                        <div class="fwli">
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>软件测试管理与技术</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>软件质量管理</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>软件配置管理</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>软件项目管理</div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card class="box-card bbwrap">
                        <div class="fwheader">研发人力资源管理</div>
                        <div class="fwli">
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>情景领导</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>高效人士的7个习惯</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>沟通管理--沟通与聆听的技巧</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>从技术走向管理</div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card class="box-card bbwrap">
                        <div class="fwheader">研发IT规划与管理</div>
                        <div class="fwli">
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>构建高安全度的研发信息系统</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>研发业务流程开发IT工具</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>研发IT规划与实施</div>
                            <div><i class="el-icon-s-help" style="color:#007DC6"></i>研发管理信息化建设</div>
                        </div>
                    </el-card>
                </el-col>

            </el-row>

            <!-- <el-tree :data="data" :props="defaultProps"></el-tree> -->
        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
import { addBrand } from '@/api/index.js'

export default {
    name: 'Brands',
    data() {
        return {
            data: [
                {
                    label: '研发战略管理',
                    children: [
                        {
                            label: '产品战略管理',
                        },
                        {
                            label: '构建高效的研发管理体系',
                        },
                        {
                            label: '构建市场导向的流程型研发组织',
                        },
                        {
                            label: '研发变革管理',
                        },
                    ],
                },
                {
                    label: '一级 2',
                    children: [
                        {
                            label: '二级 2-1',
                            children: [
                                {
                                    label: '三级 2-1-1',
                                },
                            ],
                        },
                        {
                            label: '二级 2-2',
                            children: [
                                {
                                    label: '三级 2-2-1',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: '一级 3',
                    children: [
                        {
                            label: '二级 3-1',
                            children: [
                                {
                                    label: '三级 3-1-1',
                                },
                            ],
                        },
                        {
                            label: '二级 3-2',
                            children: [
                                {
                                    label: '三级 3-2-1',
                                },
                            ],
                        },
                    ],
                },
            ],
            defaultProps: {
                children: 'children',
                label: 'label',
            },
        }
    },
    mounted() {},
    methods: {},
}
</script>
  
  <style lang="less" scoped>
.bbwrap {
    margin-bottom: 20px;
}
.fwheader {
    font-size: 16px;
    line-height: 39px;
    color: #333;
}
.fwli {
    line-height: 28px;
    font-size: 14px;
    color: #666;
}
</style>