<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'华赛工具',path:'/hstools'},
            {name:'实施流程',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div class="cont">
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">为确保华赛研发管理工具能够与企业现行的研发管理流程完美融合，确保公司业务的连续性，华赛研发管理工具在企业分为七个阶段：</span></p>
                <p style="margin-top: 1em; margin-bottom: 1em; padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(51, 51, 51); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; unicode-bidi: embed; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">　　</span><a class="image" title="process" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);"><img alt="process" width="525" height="140" longdesc="@/assets/images/implementationprocess.jpg" src="@/assets/images/implementationprocess.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></a></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">第一阶段：建立实施策略</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">主要从商务和技术上来计划项目的范围，并确定项目的目标。这一阶段的工作，包括建立由公司主要领导为首的项目实施领导小组和各部门有关人员参加的项目实施小组，并开始对员工进行初步的业务管理观念和方法培训。具体制定出企业实施应用管理的策略和目标。</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">第二阶段：业务流程分析</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">主要是定义项目的内容，即对现行的管理进行仔细地回顾和描述，从而认识项目的业务和技术上的具体要求。一般在这个分阶段要编写一个项目定义分析报告，可以更多地是借助于流程图的形式来描述目前的流程，并从中找出希望改进的地方，为进一步解决方案的设计创造条件。为此，需对项目实施小组的成员进行比较系统的业务管理的概念和华赛软件系统功能层次的培训。</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">第三阶段：设计解决方案</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">主要是对上阶段形成的业务分析流程，结合业务管理的基本概念和具体的软件功能，逐项进行回顾、分析，以便对目前每个管理业务流程，提出解决方案。解决方案也许是直接可以套用系统中某些功能，也许是对现行管理流程作一些改进，也可能是对软件系统作一些必要的二次开发。这时一般应编写项目说明书之类的文档，作为一个里程碑也作为建立系统的设计任务书。</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">第四阶段：建立应用系统</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">本阶段需根据前一阶段拟订的方案，对管理上(或组织上)需改进之处制定改进方案，包括调整分工、规范流程、统一方法、标准信息编码等。从软件来讲，系统初始化设计及二次开发工作可开始进行。这样建立起一个符合企业管理思想的应用系统。此时大量的基础数据的整理工作也将着手进行。</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">第五阶段：文档编码</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">在建立应用系统的同时，除了必须对软件进行二次开发，按软件工程要求提供必须的文档以外，对管理要改进的流程及方法等方面，也必须编写或修改原来的制度、职责、流程图。这时，系统一旦已建立起来，可着手对最终用户的主要应用进行培训。</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">第六阶段：系统切换</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">在这个阶段，为了减少系统实施时的风险，各职能部门分别按照自己的日常业务活动，参照已文档化的流程，运行计算机系统进行测试，以证实其系统是基本可行的。这时才开始正式向新系统输入数据、创建初态、定义参数、开始运行。为了保证切换的成功，这时项目领导小组要求及时地发布许多指令，来逐步地进行系统地切换。一般来讲，能有一个新老系统并行的运行期间，风险可更小些。</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">第七阶段：运行维护</span></p>
                <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">在并行一段时间后，事实证明系统是安全、可靠、可行的，那么可以正式投入运行。并在运行中作好有关的记录和报告，并及时地发现运行中的问题，以便进行维护、升级和定制化开发。</span></p>
                <p><br /></p>
            </div>
        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
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