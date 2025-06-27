<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'华赛业务',path:''},
            {name:'咨询服务',path:''}]" />
        <div class="wp1360">

            <div class="title hsHeader">
                <!-- <h3>咨询服务</h3> -->
            </div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item :index="1">咨询流程</el-menu-item>
                <el-menu-item :index="2">服务特色</el-menu-item>
                <el-menu-item :index="3">定制化服务</el-menu-item>
            </el-menu>

            <div style="padding-top:20px;">
                <div style="color:#666" v-if="activeIndex === 1">
                    <div class="cont">

                        <p class="pg1">华赛咨询服务流程采用国际先进的管理变革模型IDEAL模型，它是由SEI在PDCA循环理论上研究得出的。专门用于指导企业逐步提升管理能力。</p>
                        <p class="pg1">IDEAL模型关注于建立一个持续改善机制，它包含5个阶段:初始化阶段(Initiating),诊断阶段(Diagnosing),建立阶段(Establishing),行动阶段(Acting),经验教训总结阶段(Learning)。每个阶段由多个活动组成，IDEAL正是采用这五个阶段的首字母命名的。</p>
                        <img alt="IDEAL模型" width="100%" longdesc="@/assets/images/ideal_full_color.gif" src="@/assets/images/ideal_full_color.gif" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                        <p class="pg1">IDEAL模型为我们提供了以各浅显易懂的、标准的、流程改善的方法，它详细描述流程改善的步骤，指导企业建立一个长期的、持续的流程改善机制。经过广泛应用证明IDEAL模型能够为企业带来巨大价值。</p>
                        <p class="pg1">以下详细描述IDEAL各阶段活动</p>
                        <p class="pg1 pgheader">1. 起始阶段 (Initiating)</p>
                        <p class="pg1"><img alt="initiating" width="253" height="86" longdesc="@/assets/images/initiating.color.gif" src="@/assets/images/initiating.color.gif" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></p>
                        <p class="pg1">本阶段是 IDEAL 模式的起点，在这个阶段，要构建流程改善的基础架构，定义组织内每个角色及其职责，根据组织的愿景、策略及过去的经验，拟定改进计划。 可分为下面四个部分：</p>
                        <p class="pg1">(1) 变革的刺激 (Stimulus for Change)</p>
                        <p class="pg1">对企业而言，了解组织变革的诱因是非常重要的。 它可能来自内部管理阶层的命令，亦可能是一个突发事件，不论这个刺激是什么，它都可能影响所投入的人力，执行的方法及最后的结果。 为改变而改变，通常不会有明显的改善；唯有要求变革的动机越强，成功的机率才越大。</p>
                        <p>(2) 设定工作内容 (Set Context)</p>
                        <p class="pg1">一旦了解变革的动机，管理阶层就必须设定工作内容。 工作内容表示要改进哪些问题以及如何改进，需符合组织的策略和经营目标，变革是否影响其他的工作，所得到的回收是多少。工作的内容及可能的影响会随着变革的进行而越来越明显，但我们尽可能在初期定义越清楚越好。</p>
                        <p class="pg1">(3) 高层的支持 (Build Sponsorship)</p>
                        <p class="pg1">来自高层的支持是变革的重要因素之一，尤其在变革初期，常会面对许多不确定的因素及混乱的情况，管理阶层的支持在初期是非常重要的。 尤其是管理层需要为管理改善投入足够的资源，这对是否能取得成功尤其重要。</p>
                        <p class="pg1">(4) 建立基础架构 (Charter infrastructure)</p>
                        <p class="pg1">一旦变革的的动机和工作内容都已了解，高层亦承诺支持这项行动，便可建立一个机制来管理变革的实施细节。 这个机制可能是临时或永久的，它的大小和复杂度亦随着变革的特性而变，对于一个小的变革，可能只需要一个兼职的员工；对于一个大的变革，可能需要整个组织 2% - 3% 的人力。</p>
                        <p class="pg1 pgheader">2. 诊断阶段 (Diagnosing</p>
                        <p img alt="diagnosing" width="157" height="126" longdesc="@/assets/images/diagnosing.color.gif" src="@/assets/images/diagnosing.color.gif" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                        </p>
                        <p class="pg1">诊断目前的工作模式，由此确定管理改善的工作目标。 首先要确定用于诊断的检查标准，以确保流程改善的要点与企业的战略目标一致。 然后规划并收集企业运营相关信息，包括人力资源水平、历史习惯、强项、弱项等，最后制作诊断结果及改进建议报告。 主要分为下面两个部分工作：</p>
                        <p class="pg1">(1) 了解目前的状况及期望的目标 (Characterize Current &amp; Desired Status)</p>
                        <p class="pg1">了解目前的状况及期望的目标就好像旅程的起点与终点，主要专注在与变革相关的项目上。</p>
                        <p class="pg1">(2) 发展建议方案 (Develop Recommendations)</p>
                        <p class="pg1">诊断工作通常由华赛公司具有丰富经验的专家在企业管理人员的协助下进行，后续改善工作将在此调查结果的基础上开展。</p>
                        <p class="pg1 pgheader">3. 建立阶段 (Establishing)</p>
                        <p class="pg1"><img alt="establishing" width="197" height="115" longdesc="@/assets/images/establishing.color.gif" src="@/assets/images/establishing.color.gif" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></p>
                        <p class="pg1">拟定一个计划，说明需如何达到目标。 在此阶段企业需决定改善的行动和其优先顺序，并寻找适当的解决方案，将起始阶段所定义的一般流程改善目标细化为更为明确的目标，并配置行动所需的资源。 可分为下面三个部分：</p>
                        <p class="pg1">(1) 设定优先顺序 (Set priorities)</p>
                        <p class="pg1">根据问题的影响大小、紧急程度、可用的资源等各方面的因素设定改进的优先顺序</p>
                        <p class="pg1">(2) 研究可行的方法 (Develop Approach)</p>
                        <p class="pg1">结合对工作的了解及优先顺序拟定改进策略方案。 技术方面要考虑引入新的技术、方法和知识；非技术方面要考虑：企业文化、可能遇到的阻力、管理者的支持力度及市场环境的影响。</p>
                        <p class="pg1">(3) 规划行动方案 (Plan Actions)</p>
                        <p class="pg1">总体方案确定后，就可以规划详细的执行计划，它包含进度安排、工作内容和里程碑、资源、角色和职责、度量、风险管理策略等等。</p>
                        <p class="pg1 pgheader">4.行动阶段(Acting)</p>
                        <p class="pg1" <img alt="acting" width="130" height="236" longdesc="@/assets/images/acting.color.gif" src="@/assets/images/acting.color.gif" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                        </p>
                        <p class="pg1">实施行动计划。 持续细化行动计划，逐一解决诊断阶段所发现的问题。 试行解决方案后，选出最适合企业的方案，最后全面推广和实施。 可分为下面四个部分：</p>
                        <p class="pg1">(1) 提出解决方案 (Create Solution)</p>
                        <p class="pg1">结合所有可用的资源，提出一个可行的最佳方案，这些资源可能是工具、流程、人员，或者是新的技术，外界的资源。 这个方案可能非常复杂，通常由流程改善工作小组共同研究后提出。</p>
                        <p sclass="pg1">(2) 试行可能的解决方案 (Pilot/Test Solution)</p>
                        <p class="pg1">将设计的解决方案在小范围内试行和测试，确保方案的有效性，收集方案的建议。</p>
                        <p class="pg1">(3) 修正解决方案 (Refine Solution)</p>
                        <p class="pg1">根据试行中所得到的经验和改善建议，修正解决方案，直到达成一个满意的方案。</p>
                        <p class="pg1">(4) 推展解决方案 (Implement Solution)</p>
                        <p class="pg1">一旦解决方案经过验证是可行的，就可以将其推广至整个组织。 可使用不同的方法来执行，如由上而下 (Top-down) ：从组织的最高层往下推广；及时 (just-in-time) ：一个专案接着一个专案推动。 没有哪一种方法是最好的，根据组织的环境和改善的特性来决定使用哪种方法。</p>
                        <p class="pg1 pgheader">5.经验教训总结阶段(Learning)</p>
                        <p class="pg1"></p><img alt="learning" width="158" height="113" longdesc="@/assets/images/learning.color.gif" src="@/assets/images/learning.color.gif" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></p>
                        <p class="pg1">总结过程改进的经验和教训，以供 IDEAL 模式下一个循环时使用，确保所使用的策略、方法及组织架构是最佳的；修正或调整改善流程，使下一循环的流程改善工作更有效率。 可分为下面两个部分：</p>
                        <p class="pg1">(1) 分析与验证 (Analyze and Validate)</p>
                        <p class="pg1">在这个过程中，我们要检讨下列问题，改善的努力是否达到预期的目标？哪些问题得到了改善？哪些方面的工作变得更有效率了？在整个过程所获得的经验教训，都要进行收集，分析，汇总及记录成文件。</p>
                        <p class="pg1">(2) 提出未来行动建议 (Propose Future Actions)</p>
                        <p class="pg1">根据分析与验证的结果，提出未来的改善方案建议。</p>
                        <p><br /></p>
                    </div>
                </div>
                <div style="color:#666" v-if="activeIndex === 2">
                    <div class="cont">
                        <p class="pg1">对于任何一家专业服务机构而言，根据目标客户群的需求特点形成各自的服务特色是其能否在行业领域内长期处于领先地位的关键要素。</p>
                        <p class="pg1">准备创建华赛时，创始人便曾经对国际著名咨询机构的服务能力和服务特点进行过分析。</p>
                        <p class="pg1">在中国经济高速发展的今天，大多数研发企业的业务发展迅速，规模迅速扩大，企业面临巨大的挑战和机会。华赛致力于提升企业研发能力和管理能力，协助企业打造其核心竞争力。</p>
                        <p class="pg1">华赛创建伊始，便注重于将“为客户创造价值”的理念与服务方式设计、员工技能培训和专业服务实践相结合，而专业服务实践又使得华赛的服务特色日渐丰富：</p>
                        <p class="pg1">※华赛有大约60％的项目经验是战略咨询与流程改善相结合的；</p>
                        <p class="pg1">※华赛有大约40％的项目经验涉及人力资源管理改善；</p>
                        <p class="pg1">※华赛有大约30％的项目经验涉及组织架构调整、企业管理变革和流程自动化建设；</p>
                        <p class="pg1">※华赛有大约10％的项目经验涉及融资管理和企业上市辅导。</p>
                        <p class="pg1">……</p>
                        <p class="pg1">多样化的业务领域，使华赛初步具备快速理解企业业务模式及其所面临的各种问题，并能按照不同的改进需求进行有针对性的咨询服务的能力，也使得华赛的服务团队能够结合多个方面的因素提出综合的解决方案，更有效的帮助企业达成业务目标，实现快速发展。</p>
                        <p class="pg1">华赛具有为不同规模、不同业务领域、不同运营模式的企业提供咨询服务的经验；</p>
                        <p class="pg1">华赛与众多国内外企业建立了良好的战略合作伙伴关系；</p>
                        <p class="pg1">华赛的客户满意度极高，因此回头率最高，华赛与大多数客户建立了长期合作关系；</p>
                        <p class="pg1">华赛为客户提供从市场分析到内部管理人员培养、研发技术和管理改善、到融资上市辅导等全方位的服务。</p>
                        <p class="pg1">大量的国内咨询服务实践使华赛提练出属于自己的服务特点：</p>
                        <p class="pg1">※强调学习——咨询师总有一天要离开企业，企业最终要靠自身能力持续改善，管理层综合素质的提升尤为重要；</p>
                        <p class="pg1">※强调沟通——在独立分析和判断的基础上以大量、不同形式的沟通方式形成对客户问题的深刻理解；</p>
                        <p class="pg1">※从问题出发——从问题出发的咨询服务模式目标明确、验收标准清晰，最大程度确保为企业带来实效，避免流于形式；</p>
                        <p class="pg1"></p>※专家支持——在不同行业领域内根据解决问题的深度和行业特点，构建外部专家支持体系，包括与国际著名咨询公司合作；</p>
                        <p class="pg1">※方案灵活——不生搬硬套，也不追求完美。为企业设计“最适合”、“最轻便”、“最灵活”的解决方案。</p>
                        <p class="pg1">※强调总结——定期的总结可以明确工作中的不足，展示已经取得得成效，激励变革士气，明确后续工作方向。</p>
                        <p><br /></p>
                    </div>
                </div>
                <div style="color:#999" v-if="activeIndex === 3">
                    <div class="cont">
                        <br>
                        <!-- <el-tag class="pointer mr20" type="" @click="drawerOpen(1)">
                            <div style="font-size:18px">市场分析服务<i class="el-icon-search"></i></div>
                        </el-tag>
                        <el-tag class="pointer mr20" type="warning" @click="drawerOpen(2)">
                            <div style="font-size:18px">产品规划服务<i class="el-icon-search"></i></div>
                        </el-tag>
                        <el-tag class="pointer mr20" type="success" @click="drawerOpen(3)">
                            <div style="font-size:18px">产品设计改善<i class="el-icon-search"></i></div>
                        </el-tag>
                        <el-tag class="pointer mr20" type="info" @click="drawerOpen(4)">
                            <div style="font-size:18px">研发管理改善<i class="el-icon-search"></i></div>
                        </el-tag>
                        <el-tag class="pointer mr20" type="warning" @click="drawerOpen(5)">
                            <div style="font-size:18px">外包管理改善
                                <i class="el-icon-search"></i>
                            </div>
                        </el-tag>
                        <el-tag class="pointer mr20" type="danger" @click="drawerOpen(6)">

                            <div style="font-size:18px">⼈⼒资源管理
                                <i class="el-icon-search"></i>
                            </div>
                        </el-tag> -->
                        <el-tabs tab-position="left" type="border-card" style="min-height:500px">
                            <el-tab-pane label="市场分析服务">
                                <div class="cont">
                                    <p class="pg1">准备开发新产品</p>
                                    <p class="pg1">准备投资新行业？</span></p>
                                    <p class="pg1">策划新的业务模式？</span></p>
                                    <p class="pg1">探索用户需求？</span></p>
                                    <p class="pg1">准备开展新的营销活动？</span></p>
                                    <p class="pg1">准备向新的区域拓展？</span></p>
                                    <p class="pg1">准备向新的细分市场拓展？</span></p>
                                    <p class="pg1">策划新的组合营销策略？</span></p>
                                    <p class="pg1">需要进行营销效果评估？</span></p>
                                    <p class="pg1">……</span></p>
                                    <p class="pg1">华赛公司积累了大量的高新技术产品的行业数据和市场分析人才，能够根据您的需求提供有针对性的服务。</span></p>
                                    <img alt="Market Research" width="100%" longdesc="@/assets/images/MarketResearch.jpg" src="@/assets/images/MarketResearch.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                                    <p class="pg1">华赛分析师根据企业业务特性采用定性和定量相结合的方法进行：</p>
                                    <img alt="ResearchMethod" width="100%" longdesc="@/assets/images/ResearchMethod.jpg" src="@/assets/images/ResearchMethod.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                                    <p><br /></p>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="产品规划服务">
                                <div class="cont">
                                    <p class="pg1">产品规划服务是对企业现有产品、未来可能引入的产品通过宏观性和微观性、历史性和前瞻性的分析，结合企业自身实际发展状况与特点，为企业产品未来发展作出加强、保持、进入、退出等规划结论。</span></p>
                                    <p class="pg1">为什么许多企业开发了最具发展力的产品，但却无法占领市场，最终倒闭？</span></p>
                                    <p class="pg1">为什么某个产品在这家企业中销售不畅，而在另一家企业却立刻成为畅销品？</span></p>
                                    <p class="pg1">为什么某个产品在所谓的市场淡季中热销，而在所谓的市场旺季中滞销？</span></p>
                                    <p class="pg1">为什么一个睿智的经营者经营产品时，采用多种市场手段而未达到理想效果？</span></p>
                                    <p class="pg1">为什么同样经营这个产品，并未采用好的营销手段，却出其不意的热销了？</span></p>
                                    <p class="pg1">很多企业对于其经营产品的选择处于盲目的状态，通常是以机械逻辑思维指导下的观念来选择产品。比如，社会上流行什么，就选什么当产品，但当把流行的作为产品后，却错过了最好的经营周期，或者结合本身条件来选择产品，由于这种选择并不是真正适合企业的，造成先天不足，拓展能力低下；而有些企业也选择了好的产品，但由于经营者对产品内涵没有真正理解造成了产品经营上的失败。</span></p>
                                    <p class="pg1">华赛协助企业</span></p>
                                    <p class="pg1">1.首先进行市场调研和分析</span></p>
                                    <p class="pg1">2.明确企业发展方向和商业目标</span></p>
                                    <p class="pg1">3.分析企业研发和生产能力</span></p>
                                    <p class="pg1">4.设计组合产品线路图的宽度和长度</span></p>
                                    <p class="pg1">5.设计每款产品的发展路线</span></p>
                                    <p class="pg1">6.设计各版本产品的生命周期，明确上市和退市策略</span></p>
                                    <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; font-size: 16px;"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);"><strong style="margin: 0px; padding: 0px;">产品线长度和宽度</strong></span></span></p>
                                    <p class="pg1">产品线长度指最低和最高价所覆盖的价格区间，产品线宽度指在某一价位段所提供机型的款式数量。</span></p>
                                    <p class="pg1">产品线过短过窄不利于市场竞争，但产品线过长过宽也会出问题，首先，终端售点可提供的产品陈列空间是有限的，太长产品线并不能在终端完全展现；其次，顾客的注意力也是有限的，产品线太长，则顾客需花费更多的时间来了解产品信息，增加顾客的选购时间和选购的犹豫度，并不利于实际销售成交。最后，更重要的是，每一款产品的推出都需要开发，生产，广告各个环节付出相应的成本，产品线过长无疑导致总运营成本增长，但销售额和市场竞争力却不会同比例增长，超过一定的增长限度后甚至会呈反比例增长。</span></p>
                                    <p class="pg1">因此,一个合理适度的产品线长宽度规划须在尽可能地提高市场竞争力的前提下实现成本投入和利润产出最优化，并考虑终端售点等限制条件。</span></p>
                                    <p class="pg1">产品线的长度规划可以主要竞争对手为参考，采取高端稍高，低端稍低的策略，高端稍高有利于提升形象，低端稍低实现价格狙击。</span></p>
                                    <p class="pg1">产品线宽度规划反应不同价位段产品投入的力度。各价位段产品线宽度应和该价位段销售额占有率成正比。即主销价位区间产品线宽度应加大，所提供机型款式数量占产品线总机型数量比例应等于或稍大于该价位段所占销售额比例，充分保证该价位段产品线的竞争力度；而占销售比例较小的高端和低端价位区间，产品线宽度须适度紧缩，减小成本投入，也给主销价位区间产品让出终端售点陈列空间。</span></p>
                                    <p class="pg1">生命周期</span></p>
                                    <p class="pg1">产品从面市到退市之间所经历的过程即为产品的生命周期。对产品生命周期的规划就是对产品更新速度和节奏的把控。 一个产品的生命周期需要经历导入期、成长期、成熟期和退市期四个阶段，新上市处于导入期的产品能给市场带来新意和亮点，毛利丰厚却不一定能很快上量；成长期产品销量上升很快但却依赖不菲的市场费用投入；上市有一段时间处于成熟期的产品是整个销量和利润的支柱，但不断面临价格吃紧，利润缩水的威胁；退市期产品日渐式微，行将末路，在生命期的最后阶段却可贡献自己作为低价狙击竞争对手的绝好武器。每一个（或每个系列）产品所处的生命周期阶段不同，在整个产品线中所起到的作用也不同。如何规划好各系列产品的生命周期，形成新老产品良性有序更替，是把控产品线整体节奏的关键。</span></p>
                                    <p class="pg1">让导入期新产品去探索未来之路，承担尚难定论的市场风险（节奏稍缓）；对已经表现出市场潜力的新品给予市场推广强力支持，拉升其快速成长（节奏加快）；让成熟期产品顶住销售量的大梁，力保城池不失，在保持现状的同时适当调整价格，粘住消费者的胃口（节奏慢）；让退市期老产品在退市之前再实施价格猛攻，狙击对手的同时尽快排空库存（节奏快）。</span></p>
                                    <p><br /></p>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="产品设计改善">
                                <div class="cont">
                                    <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);">&nbsp;</p>
                                    <p class="pg1">华赛公司主要为用户提供设计流程、交互设计方法和设计团队建设的改善咨询服务，提升产品易用性，增进用户体验。其中以软件产品和电子产品为主。</span></p>
                                    <img alt="Design" width="100%" longdesc="@/assets/images/pd.jpg" src="@/assets/images/pd.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                                    <p style="padding: 0px; text-indent: 24px; line-height: 23px; color: rgb(102, 102, 102); font-family: 宋体, &#39;Arial Narrow&#39;; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; font-size: 16px;"><strong style="margin: 0px; padding: 0px;"><span style="margin: 0px; padding: 0px; color: rgb(0, 0, 0);">交互设计</span></strong></span></p>
                                    <p class="pg1">从用户角度来说，交互设计是一种如何让产品易用，有效而让人愉悦的技术，它致力于了解目标用户和他们的期望，了解用户在同产品交互时彼此的行为，了解“人 ”本身的心理和行为特点，同时，还包括了解各种有效的交互方式，并对它们进行增强和扩充。交互设计还涉及到多个学科，以及和多领域多背景人员的沟通。</span></p>
                                    <p class="pg1">通过对产品的界面和行为进行交互设计，让产品和它的使用者之间建立一种有机关系，从而可以有效达到使用者的目标，这就是交互设计的目的</span></p>
                                    <p class="pg1">交互设计的定义：</span></p>
                                    <p class="pg1">简单的说，交互设计是人工制品、环境和系统的行为，以及传达这种行为的外形元素的设计与定义。不像传统的设计学科主要关注形式，最近则是关注内容和内涵，而交互设计首先旨在规划和描述事物的行为方式，然后描述传达这种行为的最有效形式。</span></p>
                                    <p class="pg1">交互设计借鉴了传统设计、可用性及工程学科的理论和技术。它是一个具有独特方法和实践的综合体，而不只是部分的叠加。它也是一门工程学科，具有不同于其它科学和工程学科的方法。</span></p>
                                    <p class="pg1">交互设计是一门特别关注以下内容的学科：</span></p>
                                    <p class="pg1">1、定义与产品的行为和使用密切相关的产品形式。</span></p>
                                    <p class="pg1">2、预测产品的使用如何影响产品与用户的关系，以及用户对产品的理解。</span></p>
                                    <p class="pg1">3、探索产品、人和物质、文化、历史之间的对话。</span></p>
                                    <p class="pg1">交互设计从“目标导向”的角度解决产品设计：</span></p>
                                    <p class="pg1">1、要形成对人们希望的产品使用方式，以及人们为什么想用那个这种产品等问题的见解。</span></p>
                                    <p class="pg1">2、尊重用户及其目标。</span></p>
                                    <p class="pg1">3、对于产品特征与使用属性，要有一个完全的形态，而不能太简单。</span></p>
                                    <p class="pg1">4、展望未来，要看到产品可能的样子，它们并不必然就像当前这样。</span></p>
                                    <p><br /></p>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="研发管理改善">
                                <div class="cont">
                                    <p class="pg1">国内研发型企业普遍遇到如下问题：</span></p>
                                    <p class="pg1">1.如何将用户需求有效的转变为产品需求。</span></p>
                                    <p class="pg1">2.如何管理好频繁变动的需求，确保按时交付高质量的产品。</span></p>
                                    <p class="pg1">3.如何激励、吸引和留住研发人员。</span></p>
                                    <p class="pg1">4.如何提升研发效率，降低产品缺陷。</span></p>
                                    <p class="pg1">5.如何增强研发型项目的可控性。</span></p>
                                    <p class="pg1">6.如何将项目转变为产品，将被动承接项目的方式转变为主动的营销。</span></p>
                                    <p class="pg1">华赛公司由多名研发管理专家共同建立，咨询顾问都具备十多年的从业经验，拥有杰出的开发、设计和管理能力，对研发管理公司的治理有深入研究，为众多国内和国际客户提供了全方位的辅导。</span></p>
                                    <p class="pg1">• 战略管理</span></p>
                                    <p class="pg1">• 产品规划</span></p>
                                    <p class="pg1">• 产品生命周期管理</span></p>
                                    <p class="pg1">• 研发流程改善</span></p>
                                    <p class="pg1">• 组织架构设计</span></p>
                                    <p class="pg1">• 绩效管理</span></p>
                                    <p class="pg1">• 质量管理</span></p>
                                    <p class="pg1">• 知识管理</span></p>
                                    <p class="pg1">• 项目管理</span></p>
                                    <p class="pg1">• 需求管理</span></p>
                                    <p class="pg1">• 设计技术</span></p>
                                    <p class="pg1">• 测试管理</span></p>
                                    <p class="pg1">• 流程自动化建设</span></p>
                                    <p class="pg1">• ……</span></p>
                                    <img alt="RDM-Improvement" width="100%" longdesc="@/assets/images/RDM-Improvement.jpg" src="@/assets/images/RDM-Improvement.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                                    <p class="pg1">结合客户公司的业务情况、历史习惯和人力资源水平，采用IPD\CMMI\Agile等不同模型，从具体问题出发，因地制宜，为客户提供灵活、实效的解决方案。</span></p>
                                    <p class="pg1">1.系统性</span></p>
                                    <p class="pg1">&nbsp;从战略、组织、流程、人力资源四个层面，五个要素（产品规划、组织结构、业务流程、信息系统、人力资源管理）来系统解决问题，避免出现“头痛医头，脚痛医脚”的现象，孤立、片面地进行解决方案的设计。</span></p>
                                    <p class="pg1">2.针对性&nbsp;</span></p>
                                    <p class="pg1">研发管理咨询不是僵化的照搬，需要针对企业研发管理的核心问题提出针对性的解决方案，实现量体裁衣，并让体系落地、生根；&nbsp;应根据企业战略和不同发展阶段，制定不同的业务流程变革策略。&nbsp;</span></p>
                                    <p class="pg1">3.可操作性&nbsp;</span></p>
                                    <p class="pg1">管理不在于“知”，而在于“行”！即使再好的方案也存在如何实现和操作的问题。因此，为了提高流程的可操作性，应重点关注以下几个原则：&nbsp;</span></p>
                                    <p class="pg1">流程（Process）：要系统化、结构化&nbsp;</span></p>
                                    <p class="pg1">查检表（Checklist）：要覆盖到所有技术评审和审计点&nbsp;</span></p>
                                    <p class="pg1">“四化”：模板化、集成化、傻瓜化、IT化，是流程可操作性的关键</span></p>
                                    <p><br /></p>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="外包管理改善">
                                <div class="cont">
                                    <p class="pg1">华赛为在高新技术领域从事外包服务的企业提供管理咨询，协助客户降低成本和风险、提升外包服务的能力，同时帮助企业建立、维持和改善企业与发包商之间的关系。加强发包商对持续合作的依赖性，提升与发包商业务合作的紧密性，建立稳定的合作关系。</span></p>
                                    <p class="pg1">华赛咨询顾问从服务生命周期、能力范围和能力级别三个维度着手，对企业从签订合同到最终交付的全过程进行跟踪和分析，协助服务商循序渐进地改善并保持卓越水平。</span></p>
                                    <img alt="OutsourcingModel" width="100%" longdesc="@/assets/images/outsourcingmodel.jpg" src="@/assets/images/outsourcingmodel.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                                    <p class="pg1">（1）服务生命周期</span></p>
                                    <p class="pg1">在该维度中，外包服务的状态可以划分为以下四种：</span></p>
                                    <img alt="OutsourcingLifeCycle" width="100%" longdesc="@/assets/images/outsourcingstatus.jpg" src="@/assets/images/outsourcingstatus.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                                    <p class="pg1">（2）能力范围</span></p>
                                    <p class="pg1">从以下方面改善外包服务管理的基础建设，提升外包服务能力。</span></p>
                                    <img alt="OutsourcingCapabilityScope" width="100%" longdesc="@/assets/images/outsourcingcapbilityscope.jpg" src="@/assets/images/outsourcingcapabilityscope.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                                    <p class="pg1">（3）能力等级</span></p>
                                    <p class="pg1">识别企业当前外包服务能力情况，分析公司治理和业务流程上存在的问题，循序渐进的提升企业整体管理水平。</span></p>
                                    <img alt="OutsourcingLevel" width="100%" longdesc="@/assets/images/outsourcinglevel.jpg" src="@/assets/images/outsourcinglevel.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                                    <p class="pg1">能力等级1，能够提供服务</span></p>
                                    <p class="pg1">
                                        外包服务提供商能够提供服务，缺乏规范的管理机制，业务成败对个人能力依赖较大，企业存在较大的业务风险。</span></p>
                                    <p class="pg1">能力等级2，已经实施基本的管理，能够持续满足发包商的需求</span></p>
                                    <p class="pg1">外包服务提供商能够持续满足客户要求，大多数时候能够按时交付合格的产品或服务。</span></p>
                                    <p class="pg1">能力等级3，管理组织绩效</span></p>
                                    <p class="pg1">外包服务提供商明确当前企业效率和质量控制能力，并且能够准确分析影响组织绩效的关键因素，能够逐步提升组织绩效。</span></p>
                                    <p class="pg1">能力等级4，主动增值</span></p>
                                    <p class="pg1">
                                        外包服务提供商不仅能够持续获得较高的客户满意度，同时还能够通过持续创新主动为发包商提供增值服务。</span></p>
                                    <p class="pg1">能力等级5，保持卓越</span></p>
                                    <p class="pg1">
                                        外包服务提供商不仅能够达到行业领先水平，还能持续改进自身，在瞬息多变的业务环境下持续保持其领先的业务水平。</span></p>
                                    <p><br /></p>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="⼈⼒资源管理">
                                <div class="cont">
                                    <p class="pg1">“人”是企业的根本，任何产品、流程、技术和业务模式的创新都需要人来执行，因此人力资源管理是企业管理的核心。如何引进人才、留住人才、提升人才力、营造良好的企业文化、维护企业的价值观、打造企业的核心竞争力是人力资源管理需要解决的问题。 目前人力资源管理水平已成为是限制国内企业快速发展的关键问题，常出现类似问题：</span></p>
                                    <p class="pg1">&quot;公司规模迅速扩大的同时利润却迅速下滑，员工效率很低，团队缺乏激情。&quot;</span></p>
                                    <p class="pg1">&quot;员工流动性大、频繁跳槽，业务风险加大， 企业缺乏积累。&quot;</span></p>
                                    <p class="pg1">&quot;业务发展迅速，却总是苦于没有足够的人手开展工作。&quot;</span></p>
                                    <p class="pg1">&quot;各方面工作都需要人，增加人手成本上升导致利润下滑，不增加人手营业额又上不去。&quot;</span></p>
                                    <p class="pg1">&quot;……&quot;</span></p>
                                    <img alt="HRM" width="100%" longdesc="@/assets/images/HR.jpg" src="@/assets/images/HR.jpg" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                                    <p class="pg1">华赛咨询协助企业进行激发员工的工作激情以提升企业运营效率：</span></p>
                                    <p class="pg1">• 人力资源管理现状的诊断及分析</span></p>
                                    <p class="pg1">• 人力资源管理的规划</span></p>
                                    <p class="pg1">• 人力素质模型设计</span></p>
                                    <p class="pg1">• 组织结构的调整和优化</span></p>
                                    <p class="pg1">• 岗位指责分析和建立职位说明书</span></p>
                                    <p class="pg1">• 员工知识技能水平调查和分析</span></p>
                                    <p class="pg1">• 员工职涯规划晋升体系</span></p>
                                    <p class="pg1">• 战略导向薪酬体系设计</span></p>
                                    <p class="pg1">• 战略导向绩效管理设计</span></p>
                                    <p class="pg1">• 战略导向的培训体系设计</span></p>
                                    <p class="pg1">• 人力资源管理制度建设</span></p>
                                <img alt="HRMCONSULTING" width="100%" longdesc="@/assets/images/hr-consulting.gif" src="@/assets/images/hr-consulting.gif" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" />
                                    <p><br /></p>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>

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
            drawer: false,
            drawerType: 1,
            activeIndex: 1,
        }
    },
    mounted() {},
    methods: {
        handleSelect(index) {
            this.activeIndex = index
        },
        drawerOpen(type) {
            this.drawerType = type
            this.drawer = true
        },
    },
}
</script>
  
  <style lang="less" scoped>
</style>