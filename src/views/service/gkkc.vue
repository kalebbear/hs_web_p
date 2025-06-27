<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'培训服务',path:'/training'},
            {name:'公开课程',path:''}]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>公开课程</h3> -->
            </div>
            <el-collapse accordion v-model="active">
                <el-collapse-item :name="1">
                    <template slot="title">
                        <!-- <div> -->
                        <div style="font-size:16px;color:#666;">需求工程<i class="header-icon el-icon-info"></i></div>

                    </template>
                    <div>
                        <p class="pg1">一个项目成功与否往往取决于它是否符合需求，对于需求及其变更的管理是项目成功最关键的因素。本课程多个实际案例进行分析，讲解需求管理的概念及内容，探讨需求管理应当遵循的原则及当前存在的问题。我们把所有与需求相关的活动统称为需求工程。需求工程的活动又可分为两大类，即需求开发和需求管理。需求分析师通过需求调查(调研)、需求分析和需求定义，完成需求开发工作。而项目经理则通过对需求确认、需求跟踪和需求变更控制的主导，实现需求管理。</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">课程目标</strong></span></p>
                        <p class="pg1">加强需求管理意识，提升需求调研、需求分析、需求跟踪、变更管理的能力。</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">学员对象</strong></span></p>
                        <p class="pg1">市场分析人员、需求调研人员、产品经理、项目经理、测试人员、开发人员</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">课程收益</strong></span></p>
                        <p class="pg1">了解常见需求开发和管理工作中的问题</span></p>
                        <p class="pg1">了解需求开发和管理的知识和方法</span></p>
                        <p class="pg1">了解业界常用需求开发和管理工具</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">课程内容</strong></span></p>
                        <p class="pg1">需求开发知识</span></p>
                        <p class="pg1">需求管理知识</span></p>
                        <p class="pg1">需求管理工具</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">课程安排</strong></span></p>
                        <table width="600" bgcolor="#00000" border="1" cellspacing="1" cellpadding="5" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; line-height: 22px; white-space: normal;">
                            <tbody style="margin: 0px; padding: 0px;">
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td width="13%" align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第一天 上午<br style="margin: 0px; padding: 0px;" />8:30-12:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">需求工程基本概念<br style="margin: 0px; padding: 0px;" />•常见的需求问题<br style="margin: 0px; padding: 0px;" />•需求工程的重要性<br style="margin: 0px; padding: 0px;" />•需求工程的基本概念<br style="margin: 0px; padding: 0px;" />•需求开发<br style="margin: 0px; padding: 0px;" />•需求管理</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第一天 下午<br style="margin: 0px; padding: 0px;" />2:00-5:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">需求调研的方法<br style="margin: 0px; padding: 0px;" />•需求获取策略&nbsp;<br style="margin: 0px; padding: 0px;" />•需求获取的常见问题分析<br style="margin: 0px; padding: 0px;" />•需求获取的方法<br style="margin: 0px; padding: 0px;" />•用户场景分析<br style="margin: 0px; padding: 0px;" />•原型法操作要点<br style="margin: 0px; padding: 0px;" />•产品交互设计<br style="margin: 0px; padding: 0px;" />•需求获取工具</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第二天 上午<br style="margin: 0px; padding: 0px;" />8:30-12:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">业务建模<br style="margin: 0px; padding: 0px;" />•业务建模常用方法<br style="margin: 0px; padding: 0px;" />•UML方法<br style="margin: 0px; padding: 0px;" />•OCL描述语言</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第二天 下午<br style="margin: 0px; padding: 0px;" />2:00-5:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">需求描述方法<br style="margin: 0px; padding: 0px;" />•功能性需求的描述<br style="margin: 0px; padding: 0px;" />•非功能性需求的描述<br style="margin: 0px; padding: 0px;" />•需求的优先级<br style="margin: 0px; padding: 0px;" />•编写需求说明书</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第三天 上午<br style="margin: 0px; padding: 0px;" />8:30-12:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">需求管理<br style="margin: 0px; padding: 0px;" />•需求管理的重要性<br style="margin: 0px; padding: 0px;" />•需求基线<br style="margin: 0px; padding: 0px;" />•需求变更管理<br style="margin: 0px; padding: 0px;" />• 产品规划与需求范围管理</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;">第三天 下午<br style="margin: 0px; padding: 0px;" />2:00-5:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">需求跟踪<br style="margin: 0px; padding: 0px;" />•需求跟踪的意义和现状<br style="margin: 0px; padding: 0px;" />•根据实际需要定义需求跟踪链<br style="margin: 0px; padding: 0px;" />•需求跟踪工具</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><br /></p>

                    </div>
                </el-collapse-item>

                <el-collapse-item :name="2">
                    <template slot="title">
                        <!-- <div> -->
                        <div style="font-size:16px;color:#666;">测试工程<i class="header-icon el-icon-info"></i></div>

                    </template>
                    <div>
                        <p class="pg1">本课程通过实际测试案例讲解测试工程的知识、方法。 包括计划和用例的制定、测试需求的分析、性能测试，自动化测试技术，以及不同行业所特有的测试方法和策略。 同时，本课程还结合实际企业案例讲述了测试团队的建设和测试方法的改进。本课程还展示业界常用测试工具的使用方法，以及自动化用例的开发方法。通过本课程的学习学员能够从无到有基本胜任一般企业的测试工作，也可以帮助有经验的测试工作人员发现日常工作中的问题，找到提升测试效率和效果的方法。</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">课程目标</strong></span></p>
                        <p class="pg1">• 提高测试人员的测试能力</span></p>
                        <p class="pg1">• 提升管理人员的产品质量控制能力</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">学员对象</strong></span></p>
                        <p class="pg1">• 测试工程师和质量管理工程师、测试主管、测试经理、质量管理、经理、其他相关项目管理人员和开发人员</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">课程收益</strong></span></p>
                        <p class="pg1">• 掌握测试工程理论知识</span></p>
                        <p class="pg1">• 了解常见测试工具</span></p>
                        <p class="pg1">• 掌握缺陷数据的分析与测试工作的改进方法</span></p>
                        <p class="pg1">• 了解常见测试工作中的问题和要点</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">课程内容</strong></span></p>
                        <p class="pg1">• 产品测试的基本方法和相关概念</span></p>
                        <p class="pg1">• 常见测试流程及有效的测试管理</span></p>
                        <p class="pg1">• 性能测试及自动化测试</span></p>
                        <p class="pg1">• 测试的质量保证</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">课程安排</strong></span></p>
                        <table width="600" bgcolor="#00000" border="1" cellspacing="1" cellpadding="5" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; line-height: 22px; white-space: normal;">
                            <tbody style="margin: 0px; padding: 0px;">
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td width="13%" align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第一天 上午<br style="margin: 0px; padding: 0px;" />8:30-12:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">测试工程基本概念。<br style="margin: 0px; padding: 0px;" />•测试的目的<br style="margin: 0px; padding: 0px;" />•测试的重要性<br style="margin: 0px; padding: 0px;" />•常见测试工作中的问题<br style="margin: 0px; padding: 0px;" />•测试流程<br style="margin: 0px; padding: 0px;" />•测试团队</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第一天 下午<br style="margin: 0px; padding: 0px;" />2:00-5:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">测试流程<br style="margin: 0px; padding: 0px;" />•测试与需求&nbsp;<br style="margin: 0px; padding: 0px;" />•单元测试<br style="margin: 0px; padding: 0px;" />•集成测试<br style="margin: 0px; padding: 0px;" />•系统测试<br style="margin: 0px; padding: 0px;" />•验收测试</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第二天 上午<br style="margin: 0px; padding: 0px;" />8:30-12:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">测试方法<br style="margin: 0px; padding: 0px;" />•测试用例的编写<br style="margin: 0px; padding: 0px;" />•缺陷数据的分析<br style="margin: 0px; padding: 0px;" />•测试计划与测试报告</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第二天 下午<br style="margin: 0px; padding: 0px;" />2:00-5:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">测试方法<br style="margin: 0px; padding: 0px;" />•功能测试<br style="margin: 0px; padding: 0px;" />•压力测试<br style="margin: 0px; padding: 0px;" />•易用性测试<br style="margin: 0px; padding: 0px;" />•健壮性测试</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第三天 上午<br style="margin: 0px; padding: 0px;" />8:30-12:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">测试工具<br style="margin: 0px; padding: 0px;" />•Winrunner<br style="margin: 0px; padding: 0px;" />•Loadrunner<br style="margin: 0px; padding: 0px;" />•TestDirector<br style="margin: 0px; padding: 0px;" />• Rational 系列</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;">第三天 下午<br style="margin: 0px; padding: 0px;" />2:00-5:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">质量回溯<br style="margin: 0px; padding: 0px;" />•缺陷库的建立<br style="margin: 0px; padding: 0px;" />•测试用例的积累和改进<br style="margin: 0px; padding: 0px;" />•测试流程和检查单的改进</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><br /></p>
                    </div>
                </el-collapse-item>

                <el-collapse-item :name="3">
                    <template slot="title">
                        <!-- <div> -->
                        <div style="font-size:16px;color:#666;">Introduction to CMMI<i class="header-icon el-icon-info"></i></div>

                    </template>
                    <div>
                        <p class="pg1">CMMI模型帮助组织提高其开发和维护高质量产品与服务的能力，目前在全球范围内被广泛认可、最流行的的研发流程改进模型，国内已有数千家企业实施了CMMI。本课程是由CMMI官方机构SEI授权的课程，成功完成本次培训是成为SCAMPI评估组成员的前提条件，是企业通过SEI认证的前提条件，同时也是参加其他SEI课程的前提条件，包括CMMI中级概念，SCAMPI主任评估师培训、CMMI讲师培训等课程。本次三天的课程将向系统及软件工程管理者与实践者、评估组成员和工程过程组(SEPG,EPG)成员介绍能力成熟度模型集成(CMMI)基本概念。</span></p>
                        <p class="pg1">本次课程将采用CMMI for Development 1.3版本,详尽介绍CMMI以及CMMI IPPD，包括了阶段表示法和连续表示法。</span></p>
                        <p class="pg1">本次课程包含讲演和课堂练习，并为参加的人员提供丰富的提问、讨论和交流机会。完成本次课程后,学员能够理解如何将CMMI模型应用于其组织内的过程改进项目。</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">课程目标</strong></span></p>
                        <p class="pg1">本课程旨在向研发领域的管理人员介绍CMMI模型及其实践方法，通过本课程的学习，学员可以了解如何一步步的持续改善企业研发流程，以及一个良好的研发型组织应该具备的特性。CMMI是SEI对全球数百家知名企业、数前个项目进行调查后总结的模型。包括IBM，波音公司，美国航空局，摩托罗拉公司等。通过学习本课程可以了解业界知名企业是如何进行研发管理的，如何一步步提升其研发管理水平的。</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">学员对象</strong></span></p>
                        <p class="pg1">本课程适用于所有研发领域的、对研发管理工作感兴趣的员工，尤其对企业CEO、技术总监、研发部负责人、质量部负责人、质量管理工作者、过程改进工作者等日常工作有极大的启发作用。</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训语言</strong></span></p>
                        <p class="pg1">英文教材、英语讲师、中文翻译</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训时长</strong></span></p>
                        <p class="pg1">3天</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">课程收益</strong></span></p>
                        <p class="pg1">通过本课程，可以获得由美国软件工程组织SEI颁发的课程证书。同时本课程帮助学员：</span></p>
                        <p class="pg1">• 了解CMMI的基本概念、模型结构和作用。</span></p>
                        <p class="pg1">• 掌握CMMI模型的各级别、过程域、目标和实践。</span></p>
                        <p class="pg1">• 了解CMMI评估方法的基本概念。</span></p>
                        <p class="pg1">• 了解优秀的研发管理流程和业界最佳的管理方法。</span></p>
                        <p class="pg1">• 了解如何引导研发组织进行管理变革，持续、有效的进行过程改进。</span></p>
                        <p class="pg1">• 了解先进的项目管理、需求工程、质量管理、配置管理、过程改进、量化管理知识。</span></p>
                        <p class="pg1">• 了解先进的产品设计、测试和评审方法。</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">课程内容</strong></span></p>
                        <p class="pg1">• CMMI的历史背景</span></p>
                        <p class="pg1">• CMMI的模型结构</span></p>
                        <p class="pg1">• CMMI的各组成元素</span></p>
                        <p class="pg1">• CMMI各过程域讲解</span></p>
                        <p class="pg1">• 在企业中推行CMMI的方法</span></p>
                        <p class="pg1">• 进行CMMI评估的方法</span></p>
                        <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训日程安排</strong></span></p>
                        <table width="600" bgcolor="#00000" border="1" cellspacing="1" cellpadding="5" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; line-height: 22px; white-space: normal;">
                            <tbody style="margin: 0px; padding: 0px;">
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td width="13%" align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第一天 上午<br style="margin: 0px; padding: 0px;" />8:30-12:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">CMMI的基本概念。<br style="margin: 0px; padding: 0px;" />•什么是CMMI模型<br style="margin: 0px; padding: 0px;" />•成功失败项目的特性<br style="margin: 0px; padding: 0px;" />•CMMI的发展历史和现状<br style="margin: 0px; padding: 0px;" />•CMMI的作用<br style="margin: 0px; padding: 0px;" />•CMMI与其它模型的关系</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第一天 下午<br style="margin: 0px; padding: 0px;" />2:00-5:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">CMMI模型结构<br style="margin: 0px; padding: 0px;" />•CMMI连续和阶梯型表达法<br style="margin: 0px; padding: 0px;" />•CMMI的公共目标、特定目标、公共实践、特定实践<br style="margin: 0px; padding: 0px;" />•CMMI使用方法<br style="margin: 0px; padding: 0px;" />•CMMI模型文档结构</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第二天 上午<br style="margin: 0px; padding: 0px;" />8:30-12:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">CMMI成熟度二级<br style="margin: 0px; padding: 0px;" />•需求管理、项目计划、项目监控<br style="margin: 0px; padding: 0px;" />•质量保证、配置管理<br style="margin: 0px; padding: 0px;" />•度量与分析、采购管理</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第二天 下午<br style="margin: 0px; padding: 0px;" />2:00-5:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">成熟度三级<br style="margin: 0px; padding: 0px;" />•需求开发、风险管理、<br style="margin: 0px; padding: 0px;" />•技术解决方案、产品集成、验证、确认<br style="margin: 0px; padding: 0px;" />•过程定义、过程聚焦、组织培训<br style="margin: 0px; padding: 0px;" />•集成项目管理、决策分析</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第三天 上午<br style="margin: 0px; padding: 0px;" />8:30-12:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">成熟度四级<br style="margin: 0px; padding: 0px;" />•组织过程性能<br style="margin: 0px; padding: 0px;" />•量化项目管理<br style="margin: 0px; padding: 0px;" />成熟度五级<br style="margin: 0px; padding: 0px;" />•组织创新及部署<br style="margin: 0px; padding: 0px;" />•根因分析与决策</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;">第三天 下午<br style="margin: 0px; padding: 0px;" />2:00-5:00</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">课程回顾与总结<br style="margin: 0px; padding: 0px;" />•CMMI模型<br style="margin: 0px; padding: 0px;" />•CMMI各级别<br style="margin: 0px; padding: 0px;" />•CMMI各过程域</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><br /></p>
                    </div>
                </el-collapse-item>

                <el-collapse-item :name="4">
                    <template slot="title">
                        <!-- <div> -->
                        <div style="font-size:16px;color:#666;">项目管理<i class="header-icon el-icon-info"></i></div>

                    </template>
                    <div>

                        <p><br /></p>
                    </div>
                </el-collapse-item>

                <el-collapse-item :name="5">
                    <template slot="title">
                        <!-- <div> -->
                        <div style="font-size:16px;color:#666;">企业战略管理<i class="header-icon el-icon-info"></i></div>

                    </template>
                    <div>
                        <p class="pg1">本课程的宗旨是培养能适应经济全球化和知识经济时代发展要求的，符合社会主义市场经济需要的，具有理论素养、战略眼光、竞争意识、组织才能以及经济、法律知识的现代管理人才。战略管理是管理科学中综合性、动态性较强的一个领域，是企业管理的核心课程，是管理人员必修课程之一。</span></p>
                        <p class="pg1">本次培训的主要内容是要通过理论讲授、课堂讨论与案例分析，系统的介绍战略分析、战略制定与战略实施的基本理论与方法，并结合国内外企业战略管理的实践，树立规范的战略管理观念，在突出战略思维的基础上重点讲解战略分析和战略决策的技能。</span></p>
                        <p class="pg1">本次培训的特色与创新之处在于：</span></p>
                        <p class="pg1">（1）移植和借鉴MBA案例教学的经验，广泛采用启发性、互动性、实践性的案例教学；</span></p>
                        <p class="pg1">（2）多层次案例组织与管理。不仅组织学生进行小型案例的分析、演讲和讨论，而且组织大案例的准备、讨论和案例分析报告；不仅组织个人准备的案例，而且组织小组讨论的案例；</span></p>
                        <p class="pg1">（3）结合前台演讲全面评价学员的案例分析，帮助学员取得更多体验性收获。</span></p>
                        <p class="pg1">培训日程安排</span></p>
                        <table width="600" bgcolor="#00000" border="1" cellspacing="1" cellpadding="5" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; line-height: 22px; white-space: normal;">
                            <tbody style="margin: 0px; padding: 0px;">
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td width="13%" align="center" valign="middle" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;">第一天 上午<br style="margin: 0px; padding: 0px;" />8:30-12:00</td>
                                    <td width="10%" align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">目<br style="margin: 0px; padding: 0px;" />标</td>
                                    <td width="53%" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;"><label style="margin: 0px; padding: 0px;">建立学员对此门课程和该精品课程的深入、全面理解，了解该精品课程的建设思路、理念及经验。</label></td>
                                    <td width="22%" align="left" valign="top" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;"><label style="margin: 0px; padding: 0px;">主讲教师</label></td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">集<br style="margin: 0px; padding: 0px;" />中<br style="margin: 0px; padding: 0px;" />培<br style="margin: 0px; padding: 0px;" />训</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">•战略管理精品课程的建设思路、理念及经验。<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />•战略管理的课程定位<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />•战略管理的教学目标<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />•教学团队建设<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />•教学资源整合<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />•主讲教师和学员间的互动交流<br style="margin: 0px; padding: 0px;" />&nbsp;</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;">第一天 下午<br style="margin: 0px; padding: 0px;" />2:00-5:00</td>
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">目<br style="margin: 0px; padding: 0px;" />标</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">对此门学科和学科教学过程中的难、重点进行深度剖析，明确解决思路；通过相对细致的案例分析和现场示范课形式，使学员能够掌握实际教学要点。</td>
                                    <td align="left" valign="top" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;">主讲教师或（并）教学团队</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">集<br style="margin: 0px; padding: 0px;" />中<br style="margin: 0px; padding: 0px;" />培<br style="margin: 0px; padding: 0px;" />训</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">•战略管理中常见的工具的方法<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />•企业环境分析的内容和层次<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />•价值链的内涵与应用<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />•企业核心竞争力的内涵和识别<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />•主讲教师和学员间的互动交流<br style="margin: 0px; padding: 0px;" />&nbsp;</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;">第二天 上午<br style="margin: 0px; padding: 0px;" />8:30-12:00</td>
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">目<br style="margin: 0px; padding: 0px;" />标</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">1.&nbsp;对此门学科和学科教学过程中的难、重点进行深度剖析，明确解决思路；通过相对细致的案例分析和现场示范课形式，使学员能够掌握实际教学要点。<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />2.&nbsp;主讲教师提讨论题，各班级进行班级讨论。</td>
                                    <td align="left" valign="top" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;">主讲教师<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />全体学员</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">集<br style="margin: 0px; padding: 0px;" />中<br style="margin: 0px; padding: 0px;" />培<br style="margin: 0px; padding: 0px;" />训</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">•对多元化战略教学过程中的难、重点进行深度剖析，明确教学思路；通过相对细致的案例分析和现场示范课形式，使学员能够掌握实际教学要点。<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />•主讲教师和学员间的互动交流</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;">第二天 下午<br style="margin: 0px; padding: 0px;" />2:00-5:00</td>
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">目<br style="margin: 0px; padding: 0px;" />标</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">1．培训内容的补充<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />2．主讲教师和学员间的互动交流</td>
                                    <td align="left" valign="top" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;">主讲教师</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">集<br style="margin: 0px; padding: 0px;" />中<br style="margin: 0px; padding: 0px;" />培<br style="margin: 0px; padding: 0px;" />训</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">1）–多元化战略的动机与类型<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />2）–多元化战略的实施和控制<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />3）–多元化战略教学的重点和难点<br style="margin: 0px; padding: 0px;" /><br style="margin: 0px; padding: 0px;" />4）–案例分析<br style="margin: 0px; padding: 0px;" />&nbsp;</td>
                                </tr>
                                <tr style="margin: 0px; padding: 0px; font-stretch: normal; font-family: 宋体, Arial, Helvetica, sans-serif;">
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">第三天</td>
                                    <td align="center" valign="middle" bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">&nbsp;</td>
                                    <td bgcolor="#ffffff" style="margin: 0px; padding: 0px; line-height: 16px;">学员完成作业（作业题目会在培训期间公布）<br style="margin: 0px; padding: 0px;" />&nbsp;</td>
                                    <td align="left" valign="top" bgcolor="#ffffff" rowspan="2" style="margin: 0px; padding: 0px; line-height: 16px;">全体学员</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><br /></p>
                    </div>
                </el-collapse-item>

            </el-collapse>
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
            active: '',
        }
    },
    mounted() {},
    methods: {},
}
</script>
  
  <style lang="less" scoped>
</style>