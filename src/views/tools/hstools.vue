<template>
    <div class="brands-container">
        <Nav />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'华赛工具',path:''},
            ]" />
        <div class="wp1360">
            <div class="wp1360">
                <div class="hsHeader">
                    <!-- <h3>培训服务</h3> -->
                </div>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item :index="1">工具介绍</el-menu-item>
                    <el-menu-item :index="2">实施流程</el-menu-item>
                </el-menu>

                <div style="color:#666" v-if="activeIndex === 1">
                    <div class="cont">
                        <p class="pg1">PLMStar研发企业管理平台是华赛公司总结多年来的咨询和培训经验，为中国研发企业打造的管理平台，目的是快速提升研发管理水平、提升研发工作效率。</p>
                        <p class="pg1">PLMStar融合了业界先进的研发管理理念，包括IPD、CMMI、TS16949、APQP、PMBOK等，覆盖产品研发全过程，包括产品规划、产品开发与维护过程的管理和支撑模块，涵盖产品研发的组合管理、需求管理、项目管理、产品数据管理（文档、BOM、零部件）、工程变更管理、质量管理、成本管理、研发知识管理、研发绩效管理等领域。&nbsp;</p>
                        <p class="pg1">企业实施PLM可以迅速建立一套满足CMMI三级的流程体系，是的流程和IT系统有机结合，确保研发管理流程的有效“落地和固化”，提高流程的透明性和可操作性；真正实现端到端的需求管理、高效规范的研发项目管理、产品数据管理以及研发绩效管理，促进人员知识技能的积累、共享和提升，有效提升公司研发管理水平。</p>
                        <img width="100%" longdesc="@/assets/images/PLMStar/advantage01.jpg" alt="" src="@/assets/images/PLMStar/advantage01.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                        <img width="100%" longdesc="@/assets/images/PLMStar/advantage02.jpg" alt="" src="@/assets/images/PLMStar/advantage02.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                       <img width="100%" longdesc="@/assets/images/PLMStar/advantage03.jpg" alt="" src="@/assets/images/PLMStar/advantage03.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                       <img width="100%"" longdesc="@/assets/images/PLMStar/advantage04.jpg" alt="" src="@/assets/images/PLMStar/advantage04.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                       <img width="100%" longdesc="@/assets/images/PLMStar/advantage05.jpg" alt="" src="@/assets/images/PLMStar/advantage05.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                       <img width="100%" longdesc="@/assets/images/PLMStar/advantage06.jpg" alt="" src="@/assets/images/PLMStar/advantage06.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                      <img width="100%" longdesc="@/assets/images/PLMStar/advantage07.jpg" alt="" src="@/assets/images/PLMStar/advantage07.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                        <img width="100%" longdesc="@/assets/images/PLMStar/advantage08.jpg" alt="" src="@/assets/images/PLMStar/advantage08.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                        <p><br /></p>
                    </div>
                </div>
                <div style="color:#666" v-if="activeIndex === 2">

                    <div class="cont">
                        <p class="pg1">为确保华赛研发管理工具能够与企业现行的研发管理流程完美融合，确保公司业务的连续性，华赛研发管理工具在企业分为七个阶段：</span></p>
                        <img alt="process" width="100%"longdesc="@/assets/images/implementationprocess.jpg" src="@/assets/images/implementationprocess.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                        <p class="pg1">第一阶段：建立实施策略</span></p>
                        <p class="pg1">主要从商务和技术上来计划项目的范围，并确定项目的目标。这一阶段的工作，包括建立由公司主要领导为首的项目实施领导小组和各部门有关人员参加的项目实施小组，并开始对员工进行初步的业务管理观念和方法培训。具体制定出企业实施应用管理的策略和目标。</span></p>
                        <p class="pg1">第二阶段：业务流程分析</span></p>
                        <p class="pg1">主要是定义项目的内容，即对现行的管理进行仔细地回顾和描述，从而认识项目的业务和技术上的具体要求。一般在这个分阶段要编写一个项目定义分析报告，可以更多地是借助于流程图的形式来描述目前的流程，并从中找出希望改进的地方，为进一步解决方案的设计创造条件。为此，需对项目实施小组的成员进行比较系统的业务管理的概念和华赛软件系统功能层次的培训。</span></p>
                        <p class="pg1">第三阶段：设计解决方案</span></p>
                        <p class="pg1">主要是对上阶段形成的业务分析流程，结合业务管理的基本概念和具体的软件功能，逐项进行回顾、分析，以便对目前每个管理业务流程，提出解决方案。解决方案也许是直接可以套用系统中某些功能，也许是对现行管理流程作一些改进，也可能是对软件系统作一些必要的二次开发。这时一般应编写项目说明书之类的文档，作为一个里程碑也作为建立系统的设计任务书。</span></p>
                        <p class="pg1">第四阶段：建立应用系统</span></p>
                        <p class="pg1">本阶段需根据前一阶段拟订的方案，对管理上(或组织上)需改进之处制定改进方案，包括调整分工、规范流程、统一方法、标准信息编码等。从软件来讲，系统初始化设计及二次开发工作可开始进行。这样建立起一个符合企业管理思想的应用系统。此时大量的基础数据的整理工作也将着手进行。</span></p>
                        <p class="pg1">第五阶段：文档编码</span></p>
                        <p class="pg1">在建立应用系统的同时，除了必须对软件进行二次开发，按软件工程要求提供必须的文档以外，对管理要改进的流程及方法等方面，也必须编写或修改原来的制度、职责、流程图。这时，系统一旦已建立起来，可着手对最终用户的主要应用进行培训。</span></p>
                        <p class="pg1">第六阶段：系统切换</span></p>
                        <p class="pg1">在这个阶段，为了减少系统实施时的风险，各职能部门分别按照自己的日常业务活动，参照已文档化的流程，运行计算机系统进行测试，以证实其系统是基本可行的。这时才开始正式向新系统输入数据、创建初态、定义参数、开始运行。为了保证切换的成功，这时项目领导小组要求及时地发布许多指令，来逐步地进行系统地切换。一般来讲，能有一个新老系统并行的运行期间，风险可更小些。</span></p>
                        <p class="pg1">第七阶段：运行维护</span></p>
                        <p class="pg1">在并行一段时间后，事实证明系统是安全、可靠、可行的，那么可以正式投入运行。并在运行中作好有关的记录和报告，并及时地发现运行中的问题，以便进行维护、升级和定制化开发。</span></p>
                        <p><br /></p>
                    </div>
                </div>
                <!-- <div style="display:flex;">
                    <div class="fwwrap" @click="$router.push('/gjjs')">
                        <el-card class="box-card">
                            <div class="fwheader">工具介绍</div>
                            <img src="@/assets/images/fw1.jpg" alt="" width="270" height="210">
                        </el-card>
                    </div>
                    <div class="fwwrap" @click="$router.push('/sslc')">
                        <el-card class="box-card">
                            <div class="fwheader">实施流程
                            </div>
                            <img src="@/assets/images/fw2.jpg" alt="" width="270" height="210">
                        </el-card>
                    </div>

                </div> -->

            </div>

        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
export default {
    name: 'hstools',
    data() {
        return {
            activeIndex: 1
        }
    },
    mounted() {},
    methods: {
        handleSelect(index) {
            this.activeIndex = index
        },
    },
}
</script>
  
  <style lang="less" scoped>
.fwwrap {
    cursor: pointer;
    margin-right: 40px;
}
.fwheader {
    height: 60px;
    font-size: 22px;
    text-align: center;
}
</style>