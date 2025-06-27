<template>
    <div class="brands-container">
        <Nav />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'培训服务',path:'/training'},
            ]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>培训服务</h3> -->
            </div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item :index="1">企业内训</el-menu-item>
                <el-menu-item :index="2">公开课程</el-menu-item>
                <el-menu-item :index="3">课程目录</el-menu-item>
            </el-menu>
            <div style="padding-top:20px;">
                <div style="color:#666" v-if="activeIndex === 1">
                    <el-collapse accordion v-model="active">
                        <el-collapse-item :name="1">
                            <template slot="title">
                                <!-- <div> -->
                                <div style="font-size:16px;color:#666;">风险管理<i class="header-icon el-icon-info"></i></div>
        
                            </template>
                            <div>
                                <p class="pg1">风险管理是项目管理的重要内容。在进行项目风险管理时，要辩识风险，评估它们出现的概率及产生的影响，然后建立一个规划来管理风险。风险管理的主要目标是预防风险。</span></p>
                                <p class="pg1">项目风险是指在研发过程中遇到的预算和进度等方面的问题以及这些问题对项目的影响。项目风险会影响项目计划的实现，如果项目风险变成现实，就有可能影响项目的进度，增加项目的成本，甚至使项目不能实现。如果对项目进行风险管理，就可以最大限度的减少风险的发生。但是，目前国内的研发企业不太关心项目的风险管理，结果造成项目经常性的延期、超过预算，甚至失败。成功的项目管理一般都对项目风险进行了良好的管理。因此任何一个系统开发项目都应将风险管理作为项目管理的重要内容。</span></p>
                                <p class="pg1">在项目风险管理中，存在多种风险管理方法与工具，项目管理只有找出最适合自己的方法与工具并应用到风险管理中，才能尽量减少项目风险，促进项目的成功。</span></p>
                                <p class="pg1">项目的风险管理是项目管理的重要内容。在进行项目风险管理时，要辩识风险，评估它们出现的概率及产生的影响，然后建立一个规划来管理风险。风险管理的主要目标是预防风险。本课程探讨了风险管理的主要内容和方法，介绍了风险管理的经典理论，比较了几种主流的风险管理策略和模型。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训收益</strong></span></p>
                                <p class="pg1">A、了解常见项目风险</span></p>
                                <p class="pg1">B、了解项目风险识别和评估</span></p>
                                <p class="pg1">C、风险定性和定量的管理方法</span></p>
                                <p class="pg1">C、常见研发项目的风险应对方法</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">参加对象</strong></span></p>
                                <p class="pg1">部门经理、产品经理、项目经理、研发组长、质量管理人员</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">课&nbsp;&nbsp;时：</strong>14小时(2天)&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<strong style="margin: 0px; padding: 0px;">语&nbsp;&nbsp;种：</strong>中文 &nbsp;</span></p>
                                <p><br /></p>
                            </div>
                        </el-collapse-item>
        
                        <el-collapse-item :name="2">
                            <template slot="title">
                                <!-- <div> -->
                                <div style="font-size:16px;color:#666;">绩效管理推行实务<i class="header-icon el-icon-info"></i></div>
        
                            </template>
                            <div>
                                <p class="pg1">绩效管理在诸多500强外企，已然成为企业管理的重点和焦点！追求卓越的工作绩效，变传统绩效考核为现代绩效管理，正成为基业长青企业的领导者、管理者工作过程中的准则。通过制定一套具挑战性而又科学合理的目标，采取全员参与、全过程控制、全方位评估等办法，以对每个部门、个人的工作绩效进行合理评估、及时有效的改进与激励，以提升组织的效率与效益，最终达成组织的战略目标。</span></p>
                                <p class="pg1">培训收益</span></p>
                                <p class="pg1">A、使企业高层领导明了绩效目标如何制订、推行？</span></p>
                                <p class="pg1">B、使企业管理者通晓现代企业绩效管理的方式、方法，并有效实施。</span></p>
                                <p class="pg1">C、使企业广大员工转变思想观念，从“我怕考”到“我要考”实现。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">参加对象</strong></span></p>
                                <p class="pg1">企业CEO/总经理，主管副总，事业部总经理，研发总经理/副总，技术总监/总工程师，研发职能部门经理、产品经理、项目经理等</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">课&nbsp;&nbsp;时：</strong>14小时(2天)&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<strong style="margin: 0px; padding: 0px;">语&nbsp;&nbsp;种：</strong>中文 &nbsp;</span></p>
                                <p><br /></p>
                            </div>
                        </el-collapse-item>
        
                        <el-collapse-item :name="3">
                            <template slot="title">
                                <!-- <div> -->
                                <div style="font-size:16px;color:#666;">配置管理<i class="header-icon el-icon-info"></i></div>
        
                            </template>
                            <div>
                                <p class="pg1">配置管理(CM)是指在开发过程中各阶段，管理计算机程序演变的学科，它作为软件工程的关键元素。已经成为软件开发和维护的重要组成部分。SCM提供了结构化的。有序化的，产品化的管理软件工程的方法。它涵盖了软件生命周期的所有领域并影响所有数据和过程。</span></p>
                                <p class="pg1">配置管理是对产品进行标识、存储和控制。以维护其完整性、可追溯性以及正确性的学科。</span></p>
                                <p class="pg1">本课程将从常见配置管理问题出发，结合多家企业实施配置管理的实践，全面介绍配置管理各环节工作：</span></p>
                                <p class="pg1">•配置管理规划</span></p>
                                <p class="pg1">•配置库结构设计</span></p>
                                <p class="pg1">•配置项标识方案</span></p>
                                <p class="pg1">•变更管理</span></p>
                                <p class="pg1">•配置审计</span></p>
                                <p class="pg1">•基线管理</span></p>
                                <p class="pg1">•配置状态报告</span></p>
                                <p class="pg1">•常见配置管理工具介绍</span></p>
                                <p class="pg1">•配置管理流程设计</span></p>
                                <p class="pg1">•配置管理人才培养</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训收益：</strong></span></p>
                                <p class="pg1">通过学习本课程，可以全面了解配置管理知识。对于已经实施了配置管理的企业来说，可以对目前的配置管理知识进行系统性的梳理，了解其它同类型企业实施配置管理的现状，发掘本企业实施配置管理工作中的不足，从而有针对新的改进。本课程还会着重介绍如何有效发挥企业配置管理工作的效果，如何从配置管理工作中收集数据为项目管理和过程改进提供数据支持。</span></p>
                                <p class="pg1">本课程结合实际案例，讲解业界配置管理最佳实践，组织学员用分组讨论的形式进行实操演练。通过学习本课程不仅可以了解配置管理方法和理论知识，还可以有效提升配置管理人员的实践技能和常用配置管理工具的使用方法，确保通过学习本课程后可以直接应用于日常工作当中。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">参加对象</strong></span></p>
                                <p class="pg1">配置管理员、研发职能部门经理、产品经理、项目经理、研发骨干员工、流程工程师、QA 等</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">课&nbsp;&nbsp;时：</strong>14小时(2天)&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<strong style="margin: 0px; padding: 0px;">语&nbsp;&nbsp;种：</strong>&nbsp;中文 &nbsp;</span></p>
                                <p><br /></p>
                            </div>
                        </el-collapse-item>
        
                        <el-collapse-item :name="4">
                            <template slot="title">
                                <!-- <div> -->
                                <div style="font-size:16px;color:#666;">测试工程<i class="header-icon el-icon-info"></i></div>
        
                            </template>
                            <div>
                                <p class="pg1">随着市场对产品质量要求的不断提高，产品测试越来越受到研发企业的重视。但是由于总体上国内研发项目过程不规范。导致重视编码和轻视测试的现象，对于测试的重要性、测试方法和流程等还存在很多错误的认识。本课程全面介绍测试的方法、测试小组建设、测试工具的使用、测试数据的分析和改进等内容。</span></p>
                                <p class="pg1">目前企业测试工作，普遍存在有如下问题：</span></p>
                                <p class="pg1">•没有足够的测试人员或测试人员测试技能不足</span></p>
                                <p class="pg1">•没有合理的测试计划与安排</span></p>
                                <p class="pg1">•测试工作滞后，在开发基本完成后启动</span></p>
                                <p class="pg1">•没有相关的文档记录和操作指导</span></p>
                                <p class="pg1">•单元测试没有做或方法失当</span></p>
                                <p class="pg1">•忽视测试工作中的分析活动</span></p>
                                <p class="pg1">•测试方案与用例的可重用性不高</span></p>
                                <p class="pg1">•多数为手工测试，缺少适当的测试工具</span></p>
                                <p class="pg1">本课程中将对以上问题的解决思路进行探讨。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训收益：</strong></span></p>
                                <p class="pg1">本课程介绍了当前国际上先进的产品级测试管理的方法和实践经验，并在此基础上，进一步深入地介绍产品测试管理过程（包括测试度量过程、测试工程过程、缺陷分析过程、项目管理过程、质量管理过程等方面）。</span></p>
                                <p class="pg1">结合业界知名公司的成功实践经验和案例，采用模板演示讲解和案例讨论的方式，具体讲述了产品测试管理的方法和具体实践经验、操作技巧以及IT工具，着重于提高学员的产品测试管理实践技能，注重课程的实操性，能有效地借鉴和快速地应用到实际工作中去。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">参加对象</strong></span></p>
                                <p class="pg1">测试经理、测试工程师、研发总经理/ 副总，技术总监/总工程师，研发职能部门经理、产品经理、项目经理、研发骨干员工、流程工程师、QA 等</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">课 时：</strong>14小时(2天)&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<strong style="margin: 0px; padding: 0px;">语 种：</strong>&nbsp;中文 &nbsp;</span></p>
                                <p><br /></p>
                                <p><br /></p>
                            </div>
                        </el-collapse-item>
        
                        <el-collapse-item :name="5">
                            <template slot="title">
                                <!-- <div> -->
                                <div style="font-size:16px;color:#666;">IPD集成产品开发<i class="header-icon el-icon-info"></i></div>
        
                            </template>
                            <div>
                                <p class="pg1">集成产品开发（Integrated Product Development,简称IPD）是一套产品开发的模式、理念与方法。1992年IBM在激烈的市场竞争下，遭遇到了严重的财政困难，公司销售收入停止增长，利润急剧下降。为了重新获得市场竞争优势，IBM公司率先应用了集成产品开发（IPD）的方法，在综合了许多业界最佳实践要素的框架指导下，从流程重整和产品重整两个方面来达到缩短产品上市时间、提高产品利润、有效地进行产品开发、为顾客和股东提供更大价值的目标。IPD来源于PACE（Product And Cycle Excellence，即产品周期优化法，为全球领先的研发咨询机构PRTM公司提出的研发管理模式），是经过IBM等领先企业的实践，总结出来的一套先进、成熟的研发管理思想、模式和方法。在美国，众多著名企业纷纷实施IPD，以提升创新能力。</span></p>
                                <p class="pg1">在国内，华为公司从1998年开始率先引进并实施IPD，使产品创新能力和企业竞争力大幅度提升。之后在电子产品研发行业广泛流行，并取得显著效果。</span></p>
                                <p class="pg1">那么，IPD究竟是一套什么样的系统？IPD如何解决企业研发管理中的一些顽症（如：市场导向不足、规划流于形式、部门协调困难、研发与市场脱节、研发流程执行不力、研发绩效难以评价等等）？为何业界越来越多的企业在学习IPD、实施IPD?为何有些企业实施IPD后效果不佳？IPD是否适合于中小企业？IPD是否适用于各个行业？IPD的精髓是什么？IPD与其它研发管理模式有何关系和不同？IPD的基本方法是什么？应该如何实施IPD?……</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训收益：</strong></span></p>
                                <p class="pg1">•找到解决企业在研发管理中遇到的典型问题的原则和思路</span></p>
                                <p class="pg1">•系统掌握业界领先的研发管理体系——集成产品开发（IPD）的精髓、架构和方法</span></p>
                                <p class="pg1">•对贵公司研发管理成熟度水平进行评估，并找出提升的路径和要点</span></p>
                                <p class="pg1">•掌握制定产品战略及规划的思路，了解产品规划实施中应关注的要点</span></p>
                                <p class="pg1">•学习如何进行以市场为导向的产品研发</span></p>
                                <p class="pg1">•找到跨部门协调困难的解决之道，如何使矩阵结构和研发团队有效运行</span></p>
                                <p class="pg1">•掌握建立研发流程体系的思路和方法，如何使研发流程具有可操作性</span></p>
                                <p class="pg1">•学习如何进行有效的研发绩效管理，如何有效激烈研发人员</span></p>
                                <p class="pg1">•学习领先企业在实施IPD方面的实践经验</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">参加对象</strong></span></p>
                                <p class="pg1">企业 CEO/总经理，主管副总/事业部总经理，研发总经理/ 副总，技术总监/总工程师，研发职能部门经理、产品经理、项目经理、研发骨干员工、流程工程师、QA 等</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">课 时：</strong>14小时(2天)&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<strong style="margin: 0px; padding: 0px;">语 种：</strong>&nbsp;中文 &nbsp;</span></p>
                                <p><br /></p>
                                <p><br /></p>
                                <p><br /></p>
                            </div>
                        </el-collapse-item>
        
                        <el-collapse-item :name="6">
                            <template slot="title">
                                <!-- <div> -->
                                <div style="font-size:16px;color:#666;">产品规划<i class="header-icon el-icon-info"></i></div>
        
                            </template>
                            <div>
                                <p class="pg1">如何发现市场机会？如何才能避免闭门造车、实现市场导向的产品开发？如何解决研发与市场脱节的问题？如何制定有效的市场规划和产品路标规划？如何建立清晰的产品路标、平台路标和技术路标？如何建立投资和资源分配准则？</span></p>
                                <p class="pg1">如果您正被这些问题所困扰，进行有效的产品规划是解决问题的方法。市场管理和产品规划是确定“做正确的事”，是公司战略落实到产品战略上的具体体现，确立公司应该主打的细分市场、产品线战略、从事的项目组合，什么时候从事什么项目等。产品规划过程通过整合各个部门的意见，对公司的产品战略、产品平台、产品路标作出准确的定位，从而确保公司的市场地位及长期的发展战略通过正确的产品在正确的时间推向市场的过程中得以实现。产品规划是保障“做正确的事”，而产品开发管理是指导产品开发团队如何去“正确地做事”。产品规划正确了，产品开发才会产出成果；产品规划错误了，产品开发团队所做的将会是无用功。“做正确的事”比“正确地做事”在市场竞争激烈、客户需求多变的时代显得更为重要。产品规划就像一幅作战地图，有好的方向我们才会夺取一个又一个的堡垒直至赢得最后的胜利；而如果作战地图出现了战略上的失误，无论我们如何的骁勇善战，很有可能全军覆没。</span></p>
                                <p class="pg1">因此，要实现产品在市场上的持续成功，市场管理和产品规划工作至关重要，这是每一个公司高层、营销主管、产品经理和研发主管应该关注和思考的问题。&nbsp;</span></p>
                                <p class="pg1">当前国内企业在产品开发管理方面还是有些方法和经验的，但在市场管理及产品规划方面还十分粗放和薄弱，可能有一些市场调研、市场分析、产品规划方面的活动，但往往非常零散，没有流程，不成体系，很多企业甚至处于凭感觉和拍脑袋阶段。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训收益</strong>&nbsp;</span></p>
                                <p class="pg1">1. 分享讲师十多年著名企业产品规划、产品开发和研发管理实践经验，并通过现场的互动帮助学员理清适合自己企业在市场管理和产品路标规划方面的工作思路以及具体的实践方法和工具；&nbsp;</span></p>
                                <p class="pg1">2. 掌握市场管理的运作流程和一套系统化方法；</span></p>
                                <p class="pg1">3. 掌握企业实现市场导向的运作模式和要点；&nbsp;</span></p>
                                <p class="pg1">4. 了解产品经理的定位、角色及职责；&nbsp;</span></p>
                                <p class="pg1">5. 学习先进企业在市场管理和产品路标规划方面的经验；&nbsp;</span></p>
                                <p class="pg1">6. 学习如何实现市场管理流程与产品开发流程的整合；&nbsp;</span></p>
                                <p class="pg1">7. 掌握制定、优化和监控产品线规划的流程、方法和工具</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">参加对象</strong></span></p>
                                <p class="pg1">企业 CEO/总经理，主管副总/事业部总经理，研发总经理/ 副总，技术总监/总工程师，研发职能部门经理、产品经理、项目经理、研发骨干员工、流程工程师、QA 等</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">课 时：</strong>14小时(2天)&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<strong style="margin: 0px; padding: 0px;">语 种：</strong>&nbsp;中文 &nbsp;</span></p>
                                <p><br /></p>
                            </div>
                        </el-collapse-item>
        
                        <el-collapse-item :name="7">
                            <template slot="title">
                                <!-- <div> -->
                                <div style="font-size:16px;color:#666;">CMMI实务<i class="header-icon el-icon-info"></i></div>
        
                            </template>
                            <div>
                                <p class="pg1">随着软件业的深入发展和市场竞争的不断加剧，以及软件产品/系统复杂度的增加，很多企业都意识到能够快速高效地开发出高质量的软件产品/系统是一个企业的核心竞争力所在。而要开发出高质量的软件，必须有效改进软件开发过程。</span></p>
                                <p class="pg1">目前，业界公认由 CMU/SEI 制定的 CMMI （能力成熟度模型）是最好的系统化过程改进模型。 CMMI 是基于 SW-CMM 模型，并随着系统复杂性的不断增长、工程实践越来越依赖于交叉学科群组、并行工程以及其它一些高度自动化的过程而产生的。并且 CMMI 已经成为事实上的软件过程工业标准。</span></p>
                                <p class="pg1">但是，很多企业尽管都在按 CMMI 标准建立软件研发管理体系并通过了相应的认证，却并没有真正提高研发管理水平，对此存在非常大的困惑。分析其根本原因在于：</span></p>
                                <p class="pg1">1.CMMI 标准是从不同软件企业的最佳实践中提炼出来的管理要素，它只告诉我们“应该做什么”，而没有告诉我们“应该怎么做”，未能提供有关实现过程域所需要的具体知识和技能，“标准”不等于“实践”；</span></p>
                                <p class="pg1">2.并且，由于 CMMI 模型本身也很复杂，使得 CMMI 的应用实施比较困难；</span></p>
                                <p class="pg1">3.而且，由于“模型”是基于现实世界的抽象，不可避免地存在“所有的模型都是错误的，但有一些是有用的”这个问题， CMMI 也不例外。因此，要正确实施 CMMI 还必须“量体裁衣”，而这也是最困难的部分。</span></p>
                                <p class="pg1">因此，若要真正解决企业的软件研发管理问题、有效提升软件研发管理水平，其关键在于如何把“标准”落实转变成可操作的一套“实践”。</span></p>
                                <p class="pg1">鉴于这些原因，本课程的目的就是希望在各个企业进行 CMMI 应用实施之前，有必要全面了解和掌握 CMMI 的基本知识、基本原理以及如何成功实践等，真正建立起一套规范高效和“可操作”的软件研发管理体系，有效达成提升软件研发管理水平的目的。</span></p>
                                <p class="pg1">另外， CMMI 标准起源于软件行业，但它不仅仅适用于软件行业，其基本方法也完全可以应用于其他行业，尤其是机械、电子行业。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训收益</strong></span></p>
                                <p class="pg1">1.分享讲师十多年著名企业产品研发管理的实战经验，以及从事培训 / 咨询所总结的 1000 多家业界知名企业成功案例和资料（如：流程、模板、查检表等）；</span></p>
                                <p class="pg1">2.理解 CMMI 的基本原理和核心管理思想；</span></p>
                                <p class="pg1">3.深入理解 CMMI 模型的基本结构；</span></p>
                                <p class="pg1">4.掌握 CMMI 过程域 PA 的基本要求及相互关系；</span></p>
                                <p class="pg1">5.掌握 CMMI 如何成功实践，特别是与 IPD( 集成产品开发 ) 实践的借鉴和融合；</span></p>
                                <p class="pg1">6.针对软件研发管理的常见问题，通过案例和现场互动的方式，帮助学员理清如何建立一套可操作的软件研发管理体系，帮助学员“学以致用”。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">参加对象</strong></span></p>
                                <p class="pg1">企业 CEO/总经理，主管副总/事业部总经理，研发总经理/ 副总，技术总监/总工程师，研发职能部门经理、产品经理、项目经理、研发骨干员工、流程工程师、QA 等</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">课 时：</strong>14小时(2天)&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<strong style="margin: 0px; padding: 0px;">语 种：</strong>&nbsp;中文&nbsp;</span></p>
                                <p><br /></p>
                            </div>
                        </el-collapse-item>
        
                        <el-collapse-item :name="8">
                            <template slot="title">
                                <!-- <div> -->
                                <div style="font-size:16px;color:#666;">需求工程<i class="header-icon el-icon-info"></i></div>
        
                            </template>
                            <div>
                                <p class="pg1">客户的需求不断变化，如何快速高效地推出满足客户需求、具有差异化优势和竞争优势的产品，并最终获得市场的成功，这是每一个公司高层和研发管理者们思考的问题；&nbsp;</span></p>
                                <p class="pg1">通过多年的研发管理及其咨询实践，我们发现国内许多科技型企业在产品需求分析和产品规划中主要存在如下方面的问题：</span></p>
                                <p class="pg1">1.产品开发没有实现市场驱动，只是“闭门造车”，关注技术而不关心客户；产品开发出来后才找客户、找卖点；&nbsp;</span></p>
                                <p class="pg1">2.对客户/市场需求分析不充分、不透彻、不完整，导致产品需求变化频繁，产品开发大量返工，“计划不如变化快”，开发过程“失控”；&nbsp;</span></p>
                                <p class="pg1">3.缺乏完备的需求收集、汇总、整理和分析机制，导致研发和市场脱节，需求无法有效传递和落实，相关环节和部门（如：客户、市场部、开发部、测试部等）对需求的理解也不一致，经常针对需求“吵成一锅粥”。&nbsp;</span></p>
                                <p class="pg1">4.需求管理各个阶段的职责不清晰，也缺乏组织支撑；往往了解市场的不懂技术，懂技术的不了解市场，不知道需求应该由谁负责。&nbsp;</span></p>
                                <p class="pg1">5.没有能够站在市场营销的角度，对市场需求和机会点进行分析，无法制定有效的产品路标规划，没有明确产品的市场定位和差异化优势？&nbsp;</span></p>
                                <p class="pg1">6.需求没有有效地分级分层，没有明确不同阶段需求的范围，如何进行需求转换，以及需求分析的目的和方法。更不清楚业界众多需求分析方法和工具如何在不同需求分析阶段进行恰当运用。</span></p>
                                <p class="pg1">7.没有明确规定不同阶段需求应详细到什么程度，需求的表达不规范，需求质量不高，直接影响了不同团队对需求理解的一致性；&nbsp;</span></p>
                                <p class="pg1">8.对需求分析工作不重视，认为“不画图/不编码就等于没有干活”，产品需求分析工作持续时间短，需求分析不充分；</span></p>
                                <p class="pg1">9.需求在产品开发流程中的分解分配和产品的设计过程不规范，也缺乏对需求的跟踪，导致需求没有得到有效的实现；</span></p>
                                <p class="pg1">10.由于需求分析的不充分，使得需求无法成为产品测试的有效输入，导致测试方案和测试用例设计无法保证产品测试的完备性，影响产品质量。</span></p>
                                <p class="pg1">……&nbsp;</span></p>
                                <p class="pg1">根据权威部门统计，超过 50% 的项目缺陷来源于不完善的、不正确的、不准确的和/ 或不明确的需求； 80% 以上的缺陷修复成本用于修复需求导致的错误。需求的正确与否直接影响产品开发周期、产品开发成本，甚至直接决定产品最终的市场成败。&nbsp;</span></p>
                                <p class="pg1">本课程在总结产品需求分析和产品路标规划的实践经验基础上，针对上述困惑和问题进行深入和透彻的讲解，以帮助企业正确理解和应用产品需求分析和产品规划方法，以确保公司“做正确的事”。&nbsp;</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训收益&nbsp;</strong></span></p>
                                <p class="pg1">1.分享讲师十多年著名企业产品开发、产品规划和研发管理实践经验，并通过现场的互动帮助学员理清适合自己企业在产品需求分析和产品规划方面的工作思路以及具体的实践方法和工具；</span></p>
                                <p class="pg1">2.了解需求工程和系统工程的有机融合方法，以及需求管理流程实践；</span></p>
                                <p class="pg1">3.了解需求管理流程与产品规划、产品开发流程的接口关系；&nbsp;</span></p>
                                <p class="pg1">4.掌握从市场角度进行有效的客户需求收集的机制和方法，形成高质量的客户需求，提高需求分析的充分性和有效性；&nbsp;</span></p>
                                <p class="pg1">5.掌握构建需求收集长效机制，加强市场和研发的有效结合，提升公司整体产品需求分析和产品规划能力的机制和方法；</span></p>
                                <p class="pg1">6.掌握对客户需求进行解释、整理、分类和排序的方法，提高相关环节和部门对需求理解的一致性；</span></p>
                                <p class="pg1">7.掌握市场管理和产品路标规划的流程和方法，构建产品的差异化优势和竞争优势，形成有效的产品路标规划；&nbsp;</span></p>
                                <p class="pg1">8.掌握外部需求和内部需求一体化管理的机制，形成完整的产品包需求，为后续产品设计和产品开发过程打下基础；&nbsp;</span></p>
                                <p class="pg1">9.掌握产品包需求的分析方法，形成更为细致的产品需求规格 ( 设计需求 ) ；&nbsp;</span></p>
                                <p class="pg1">10.掌握产品需求规格（设计需求）的分解分配，以及架构设计和权衡分析的方法，确保需求与设计协同一致；&nbsp;</span></p>
                                <p class="pg1">11. 掌握对客户需求、市场需求、产品包需求、设计需求、设计规格进行持续验证和跟踪的机制和方法；</span></p>
                                <p class="pg1">12.掌握支撑需求管理流程各个阶段活动的一系列操作方法和工具；</span></p>
                                <p class="pg1">13.分享讲师 1000 多家企业的培训 / 咨询经验案例，具体涉及产品需求分析和产品规划方面的全方位的案例资料（如：流程、模板、查检表等），帮助学员“学以致用”。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">参加对象</strong></span></p>
                                <p class="pg1">研发总经理/ 副总，技术总监/总工程师，研发职能部门经理、产品经理、项目经理、研发骨干员工、流程工程师、QA 等</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">课 时：</strong>14小时(2天)&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<strong style="margin: 0px; padding: 0px;">语 种：</strong>&nbsp;中文 &nbsp;</span></p>
                                <p><br /></p>
                            </div>
                        </el-collapse-item>
        
                        <el-collapse-item :name="9">
                            <template slot="title">
                                <!-- <div> -->
                                <div style="font-size:16px;color:#666;">产品开发<i class="header-icon el-icon-info"></i></div>
        
                            </template>
                            <div>
                                <p class="pg1">在21 世纪，持续的竞争优势将不仅是新产品技术，更多地出自新产品的开发流程。在产品开发的过程中，到底有哪些角色应该参与到产品开发中，他们都清楚在不同的阶段应当开展哪些活动，用什么方法来完成，在什么时间开始这些活动，什么时间结束这些活动，这些活动之间的先后关系、关联程度是什么样的，如何安排这些角色和活动才能使具有成本优势的产品快速转量产、投放市场，并把质量问题消灭在实验室避免产品上市后的批量质量事故，从而在与竞争对手的较量中保持持续竞争优势。</span></p>
                                <p class="pg1">因此，企业通过成功实施优秀的产品开发流程，可以提高企业适应当前快速的、波浪式的、多样化和差异化的市场需求变化以及技术的不断更新的能力；可以缩短产品开发周期、提高产品开发生产率、提高产品生命周期收入、减少开发浪费、提升市场竞争力；并能提高研发资源的利用率、降低研发成本。</span></p>
                                <p class="pg1">然而，很多企业缺乏一套可以操作的产品开发流程体系，在产品开发过程中经常会面临如下问题：</span></p>
                                <p class="pg1">1.产品开发流程定义较粗，层次化不够，缺少模板和内容示例，可操作性差，还不能真正做到以流程指导工作的程度，不能保证“不同的人/项目组能做好同样的事”；</span></p>
                                <p class="pg1">2.产品开发流程的适宜性不够，没有针对不同产品类型和客户要求的流程裁剪指南，不能在质量和进度之间取得平衡；</span></p>
                                <p class="pg1">3. 产品开发过程中的角色和职责没有层次化结构化，角色职责不清晰，跨部门协作困难，沟通效率低；</span></p>
                                <p class="pg1">4.产品开发过程没有完全做到并行开发，研发周边部门的参与度不够；同时，可制造性、可测试性、可维护性等问题先期考虑不足；</span></p>
                                <p class="pg1">5.缺乏必要的系统工程技能，设计要素考虑不全，导致后续设计更改频繁。同时没有充分考虑产品平台、公共模块 / 零件的共享，导致研发效率不高，影响产品开发的进度、质量和成本；</span></p>
                                <p class="pg1">6.缺乏规范的技术规划和技术开发流程，对新技术的开发及预研投入较少，技术积累不够，导致技术问题成为整个项目的拦路虎；</span></p>
                                <p class="pg1">7.开发过程中缺乏规范产品需求管理流程，没有需求跟踪和变更管理，既无法保证需求的有效落实并得到完备的测试和验证；也使得需求变更频繁，开发过程不受控；</span></p>
                                <p class="pg1">8.产品开发缺乏有效的质量控制手段，评审不规范或流于形式，产品测试不充分不规范，部分工作缺失，过程质量无法保障；</span></p>
                                <p class="pg1">9.组织上缺乏 QA ，产品开发过程缺乏监督，开发流程执行力度不够，流于形式；</span></p>
                                <p class="pg1">10.项目开发过程缺少详细完备的输出文档和项目变更记录，智力资产保存在开发人员头脑中，对研发人员依赖性大，人员流动对项目影响大，没法进行知识传递。需要进行规范有效的配置管理。</span></p>
                                <p class="pg1">缺乏有效的研发知识经验积累的流程和手段。没有例行的经验教训总结活动，也没有研发知识经验数据库，研发知识经验的积累和共享机制也没有，导致不同人 / 项目组“不断重复同样的错误”，“成功不能被有效复制”，“技能提升慢”，也导致产品开发过于依赖个人。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训收益</strong></span></p>
                                <p class="pg1">1. 分享讲师十多年著名企业产品研发管理的实战经验，以及从事培训 / 咨询所总结的 1000 多家业界知名企业成功案例和资料（如：流程、模板、查检表等）。并通过现场的互动帮助学员理清如何建立一套可操作的、可落地的产品开发流程体系，帮助学员“学以致用”；</span></p>
                                <p class="pg1">2. 理解产品开发的先进理念和产品开发的关键成功要素，建立市场导向、对客户闭环管理的产品开发管理体系框架，并正确理解各要素之间的关系；</span></p>
                                <p class="pg1">3. 掌握产品开发流程的结构化思想和具体实践方法；</span></p>
                                <p class="pg1">4. 理解支撑产品开发流程运作的各种研发组织结构的优缺点及其演变过程，掌握如何根据企业实际情况构建高效的研发组织模式；</span></p>
                                <p class="pg1">5. 理解和掌握结构化的产品开发流程的最佳实践；以及如何借鉴 PACE 和 CPD （协同产品开发）的思想、 TS16949 APQP 和 CMMI 等质量体系，来建立规范高效和可操作的产品开发流程体系；</span></p>
                                <p class="pg1">6. 掌握如何在产品开发过程中实现研发部门与周边部门（如：市场、销售、售后服务、采购、生产等）之间的并行开发和有效协同；明确各部门之间的角色和职责分工；</span></p>
                                <p class="pg1">7. 掌握系统工程 SE （System Engineering）方法在产品开发过程中的具体实践应用，包括产品需求分析和方案设计的方法、要素； DFX （可靠性设计、可制造性设计、可测试性设计、可服务性设计）的方法和应用；以及产品测试的过程、种类和具体实践方法和要素；</span></p>
                                <p class="pg1">8. 理解建立产品开发过程中阶段业务决策评审机制的意义、内容、形式和原则；</span></p>
                                <p class="pg1">9. 掌握产品开发过程中关键技术评审点设置的意义、内容、方法和要素；</span></p>
                                <p class="pg1">10. 理解和掌握产品开发的支撑性子流程的最佳实践和具体应用，包括技术开发流程、项目管理流程、需求管理流程、配置管理流程、质量保证流程、度量管理流程、知识管理流程等；</span></p>
                                <p class="pg1">11. 掌握如何提高产品开发流程的适宜性以取得规范与高效的平衡；</span></p>
                                <p class="pg1">12. 理解如何构建流程的持续改进机制，掌握产品开发流程设计和优化的步骤、方法；</span></p>
                                <p class="pg1">13. 理解如何成功推行实施产品开发流程体系的过程、方法和关键要素；正确理解变更管理的具体方法。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">参加对象</strong></span></p>
                                <p class="pg1">企业 CEO/总经理，主管副总/事业部总经理，研发总经理/ 副总，技术总监/总工程师，研发职能部门经理、产品经理、项目经理、研发骨干员工、流程工程师、QA 等</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">课 时：</strong>14小时(2天)&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<strong style="margin: 0px; padding: 0px;">语 种：</strong>&nbsp;中文 &nbsp;</span></p>
                                <p><br /></p>
                            </div>
                        </el-collapse-item>
        
                        <el-collapse-item :name="10">
                            <template slot="title">
                                <!-- <div> -->
                                <div style="font-size:16px;color:#666;">产品管理<i class="header-icon el-icon-info"></i></div>
        
                            </template>
                            <div>
                                <p class="pg1">企业管理的核心都是围绕如何在产品的交换（销售）上得到更多的附加值，企业效益直接由公司产品的市场竞争力和客户满意度所决定，产品管理支撑和实现了公司的价值链（价值创造、价值分配）和商务模式，是所有企业管理中的核心。</span></p>
                                <p class="pg1">产品经理是执行产品管理活动的责任人，是带领团队实现长期的客户满意及竞争优势、并为企业创造长期价值的领军人物。产品经理如同一个以单一产品线、产品为公司的总经理，负责该产品从创意到开发、制造以及销售的全流程。产品经理的能力往往决定了该产品线、产品的竞争能力和盈利能力。因此，为支撑业务的快速发展，很多企业必须突破的一个至关重要的瓶颈问题就是如何培养出更多的合格的产品经理。&nbsp;</span></p>
                                <p class="pg1">业界公司在产品管理和培养产品经理的过程中常见如下问题和困惑：&nbsp;</span></p>
                                <p class="pg1">1. 产品经理该如何定位？产品经理的职责和价值是什么？&nbsp;</span></p>
                                <p class="pg1">2. 产品经理和项目经理有什么区别？如何作好分工？&nbsp;</span></p>
                                <p class="pg1">3. 产品经理究竟应该具有什么样的素质模型？任职资格要求是什么？&nbsp;</span></p>
                                <p class="pg1">4. 产品经理如何参与市场管理和产品路标规划工作，如何使产品与市场有效结合，如何让产品定位更准确，更具差异化优势和市场竞争力，确保产品的市场成功和客户满意？&nbsp;</span></p>
                                <p class="pg1">5. 如何做好市场需求收集和分析工作，有效减少后续产品开发过程中的需求变更？&nbsp;</span></p>
                                <p class="pg1">6. 如何推动产品开发全流程的工作？如何确保产品从创意到产品定义、从产品开发到产品生产和产品上市推广的全过程的价值实现？如何有效平衡产品的需求、进度、质量和成本之间的关系？&nbsp;</span></p>
                                <p class="pg1">7. 如何协调跨部门资源，在没有行政权的情况下如何与其它部门协同工作？&nbsp;</span></p>
                                <p class="pg1">8. 如何协调产品的市场管理、开发管理、财经管理之间的关系？&nbsp;</span></p>
                                <p class="pg1">9. 如何有效管理、评价和激励产品管理团队？</span></p>
                                <p class="pg1">10.如何建立产品经理的培养体系，以规范、有效地培养产品经理？&nbsp;</span></p>
                                <p class="pg1">。。。&nbsp;</span></p>
                                <p class="pg1">本课程在总结研发管理实践经验，特别是业界成功企业在产品管理和产品经理培养方面的经验和教训的基础上，针对上述困惑和问题进行深入和透彻的讲解，以帮助企业正确理解和应用产品管理实践，建立有效的产品经理培养机制，从而支撑公司业务的快速发展。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训收益</strong></span></p>
                                <p class="pg1">1. 分享讲师十多年著名企业产品管理、产品开发和市场管理实践经验，并通过现场的互动帮助学员理清适合自己企业产品管理的思路和产品经理的培养方案。&nbsp;</span></p>
                                <p class="pg1">2. 分析业界公司在产品经理培养和管理中的误区，并分享成功经验；&nbsp;</span></p>
                                <p class="pg1">3. 了解产品经理的定位、职责、素质模型与任职资格标准；&nbsp;</span></p>
                                <p class="pg1">4. 理解市场管理和产品路标规划的流程实践；&nbsp;</span></p>
                                <p class="pg1">5. 掌握市场需求收集和分析、产品需求分析的具体方法，以及学会如何构建产品概念；&nbsp;</span></p>
                                <p class="pg1">6. 掌握产品开发管理（包括产品开发流程、项目管理、成本管理等）的技巧和方法；&nbsp;</span></p>
                                <p class="pg1">7. 掌握产品上市管理和产品生命周期管理的技巧和方法，以及正确理解保障产品市场成功的关键因素；&nbsp;</span></p>
                                <p class="pg1">8. 学会如何打造一个成功的产品管理团队，并进行有效的团队管理和绩效管理；&nbsp;</span></p>
                                <p class="pg1">9. 学会如何建立产品经理的培养机制，实现人力资本的增值，有效支撑企业业务的快速发展；</span></p>
                                <p class="pg1">10.分享讲师 1000 多家企业的培训/咨询经验案例，具体涉及产品管理和产品经理培养方面的全方位的案例资料（如：流程、模板 、查检表等），帮助学员“学以致用”。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">参加对象</strong></span></p>
                                <p class="pg1">企业 CEO/总经理，主管副总/事业部总经理，研发总经理/ 副总，技术总监/总工程师，研发职能部门经理、产品经理、项目经理、研发骨干员工、流程工程师、QA 等</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">课 时：</strong>14小时(2天)&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<strong style="margin: 0px; padding: 0px;">语 种：</strong>&nbsp;中文 &nbsp;</span></p>
                                <p><br /></p>
                            </div>
                        </el-collapse-item>
        
                        <el-collapse-item :name="11">
                            <template slot="title">
                                <!-- <div> -->
                                <div style="font-size:16px;color:#666;">项目管理<i class="header-icon el-icon-info"></i></div>
        
                            </template>
                            <div>
                                <p class="pg1">为适应当前快速的、波浪式的、多样化和差异化的市场需求变化以及技术的不断更新，能够快速地推出满足客户需求的高质量产品的能力是一个企业的核心竞争力所在。同时，随着产品项目规模与复杂度以及项目数量的不断增长，公司研发资源日益紧张，资源利用率下降，只有通过项目管理的方式才能有效缩短产品开发周期、提高产品开发效率、减少开发浪费、提高产品生命周期收入、提升市场竞争力；才能有效提高研发资源的利用率、降低研发成本；从而在与竞争对手的较量中保持持续竞争优势。因此，产品研发项目管理的水平直接影响到企业核心竞争力的提高，甚至决定着企业的兴衰成败。</span></p>
                                <p class="pg1">一项调查表明，大约 70% 的研发项目超出了估算的时间进度，大型项目平均超出计划交付时间 20% 至 50% ， 90% 以上的研发项目开发费用超出预算，并且项目越大，超出项目计划的程度越高。</span></p>
                                <p class="pg1">在研发项目管理方面，企业经常会面临如下问题：</span></p>
                                <p class="pg1">1. 缺乏结构化的规范的项目管理体系，缺少项目管理工具，项目整体计划控制较弱，进度经常延期；</span></p>
                                <p class="pg1">2. 项目职责不清晰，项目领导者管理事情过于琐碎；项目成功比较依赖于项目经理的个人能力和经验；</span></p>
                                <p class="pg1">3. 部门职责不清，缺乏有效的沟通；项目在各职能部门间协作力度比较弱，效率低；</span></p>
                                <p class="pg1">4. 产品开发项目的组织不健全，责、权、利不清晰、不对等，不能支撑跨部门高效运作；</span></p>
                                <p class="pg1">5. 项目计划不准确、不合理；计划缺乏沟通，流于形式，可操作性较差；</span></p>
                                <p class="pg1">6. 项目控制过程不规范，缺乏有效和例行化的项目控制方法；项目沟通和交流的方法和技巧不够；</span></p>
                                <p class="pg1">7. 过多的不可控变动导致“计划不如变化快”，计划延迟；</span></p>
                                <p class="pg1">8. 缺乏有效的项目资源调配，人员没有得到最优化的配置，利用率不高，导致人员紧张；</span></p>
                                <p class="pg1">9. 项目经理个人领导能力不足，缺乏经验和影响力，没有明确的项目经理培养机制；</span></p>
                                <p class="pg1">10.人员考核不客观、不公正，缺乏依据；绩效评价没有与项目管理结合起来，做好做坏一个样。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">培训收益</strong></span></p>
                                <p class="pg1">分享讲师十多年国内知名企业研发管理的实战经验，以及五年来对国内 1000 多家知名企业进行研发管理培训/咨询的实施经验；并通过现场的互动帮助学员理清适合自己企业研发项目管理的思路和实践方案。</span></p>
                                <p class="pg1">1. 理解研发管理体系架构，建立研发管理系统化思维方式；</span></p>
                                <p class="pg1">2. 理解产品开发的先进理念，掌握研发管理各要素之间的关联关系；掌握产品开发的结构化思想和并行工程方法，理解产品开发流程与研发项目管理的关系；理解</span></p>
                                <p class="pg1">3. 产品规划、技术规划以及产品、技术开发之间的关系；</span></p>
                                <p class="pg1">4. 掌握如何建立规范的、可操作的研发项目管理体系；</span></p>
                                <p class="pg1">5. 理解研发项目管理中存在的主要问题及其原因，以便在工作中有效规避；</span></p>
                                <p class="pg1">6. 理解各种研发组织的优缺点，掌握根据企业自身情况选择合适的组织结构模式，及产品开发团队的构成及角色职责；</span></p>
                                <p class="pg1">7. 掌握在研发项目管理中如何制定全面有效的项目计划以及计划的内容要素，如何有效开展风险管理等活动；</span></p>
                                <p class="pg1">8. 掌握在研发项目管理中如何对项目计划进行有效全面的监控，使项目控制活动更具可操作性；</span></p>
                                <p class="pg1">9. 掌握产品开发过程中的质量控制方法，包括业务决策评审和技术评审的过程、方法、内容要素；</span></p>
                                <p class="pg1">10. 掌握产品开发过程中的成本控制方法，包括设计成本的控制过程、降低设计成本的具体方法等；</span></p>
                                <p class="pg1">11. 掌握如何把研发项目管理和研发人员的绩效管理有机结合起来，使研发人员的考核激励更有效；</span></p>
                                <p class="pg1">12. 掌握如何建立项目管理 IT 工具，真正提升研发管理水平；</span></p>
                                <p class="pg1">13. 分享讲师 1000 多家知名企业的培训/ 咨询经验案例，具体涉及研发项目管理方面的案例资料（如：流程、模板、查检表等），帮助学员“学以致用”。</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">参加对象</strong></span></p>
                                <p class="pg1">企业 CEO/总经理，主管副总/事业部总经理，研发总经理/ 副总，技术总监/总工程师，研发职能部门经理、产品经理、项目经理、研发骨干员工、流程工程师、QA 等</span></p>
                                <p class="pg1"><strong style="margin: 0px; padding: 0px;">课 时：</strong>14小时(2天)&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<strong style="margin: 0px; padding: 0px;">语 种：</strong>&nbsp;中文 &nbsp;</span></p>
                                <p><br /></p>
                            </div>
                        </el-collapse-item>
        
                    </el-collapse>
                </div>
                <div style="color:#666" v-if="activeIndex === 2">
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
                <div style="color:#666" v-if="activeIndex === 3">
                    <el-row :gutter="20">
                        <el-col :span="24">
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
                        <el-col :span="24">
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
                        <el-col :span="24">
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
                        <el-col :span="24">
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
                        <el-col :span="24">
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
                        <el-col :span="24">
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
                </div>
            </div>
            <!-- <div style="display:flex;">
                <div class="fwwrap" @click="$router.push('/qynx')">
                    <el-card class="box-card">
                        <div class="fwheader">企业内训</div>
                        <img src="@/assets/images/fw1.jpg" alt="" width="270" height="210">
                    </el-card>
                </div>
                <div class="fwwrap" @click="$router.push('/gkkc')">
                    <el-card class="box-card">
                        <div class="fwheader">公开课程
                        </div>
                        <img src="@/assets/images/fw2.jpg" alt="" width="270" height="210">
                    </el-card>
                </div>
                <div class="fwwrap" @click="$router.push('/kcml')">
                    <el-card class="box-card">
                        <div class="fwheader">课程⽬录</div>
                        <img src="@/assets/images/al1.jpg" alt="" width="270" height="210">
                    </el-card>
                </div>
            </div> -->

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
    margin-right: 20px;
}
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