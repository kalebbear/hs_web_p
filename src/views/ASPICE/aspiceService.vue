<template>
    <div class="brands-container">
        <Nav />
        <!-- <Banner /> -->

        <Bred :mdata="[
            {name:'首页',path:'/aspice'},
            {name:'华赛业务',path:''},
            {name:'咨询服务',path:''}]" />
        <div class="wp1360">

            <div class="title hsHeader">
                <!-- <h3>咨询服务</h3> -->
            </div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="font-size:14px;">
                <el-menu-item :index="1">什么是ASPICE</el-menu-item>
                <el-menu-item :index="2">认证流程</el-menu-item>
                <el-menu-item :index="3">ASPICE与其它标准</el-menu-item>
            </el-menu>

            <div style="padding-top:20px;">
                <div style="color:#666" v-if="activeIndex === 1">
                    <div class="cont">
                        <div class="xbox">
                            <img src="@/assets/images/aspice/1.png" width="100">
                            <div class="xbox-right">
                                <p class="pg1"> ASPICE全称是“Automotive Software Process Improvement and Capacity dEtermination”，汽车软件过程改进及能力评定，是汽车行业用于评价软件开发团队的研发能力水平的模型框架。最初由欧洲20多家主要汽车制造商共同制定，于2005年发布，目的是为了指导汽车零部件研发厂商的软件开发流程，从而改善车载软件的质量。
                                <p>
                                <p class="pg1">多年以来，ASPICE在欧洲汽车行业内被广泛用于研发流程改善及供应商的研发能力评价。</p>
                            </div>
                        </div>
                        <!-- <div> -->
                        <p class="pg1">随着近年车联网、智能驾驶、新能源汽车的迅速发展，软件在汽车研发中的占比激增，企业对软件质量管理的需求不断增强，ASPICE逐渐被引入到国内，被国内的企业所熟知。另一方面随着TS16949的改版，对企业提出定期审核的要求，也对ASPICE在国内的应用起到的极大的促进作用。</p>
                        <!-- </div> -->
                        <img class="center w100" src="@/assets/images/aspice/2.png">
                        <p class="pg1">【1986年CMM】ASPICE模型最初是在CMM基础上发展起来的，最初的ASPICE模型几乎与CMM完全一致，评估结果可直接转换、CMMI评估师也可以直接获得ASPICE审核员资质（近年已改变）。CMM全称是Capability Maturity Model，是由卡耐基梅隆大学（CMU)的软件工程研究所（SEI）于1986年在美国防部（DOD）的赞助下开发的一个用于评价企业研发能力水平的模型，被广泛用于软件流程改善和软件研发团队能力评价</p>
                        <img class="center w100" src="@/assets/images/aspice/3.png">
                        <p class="pg1">【1994年SPICE】 1994年国际标准化组织ISO、国际电工委员会IEC、信息技术委员会JTC1联合制定并发布了国际标准ISO/IEC15504，又称SPICE。 包括：</p>
                        <ul>
                            <li style="list-style-type:disc">汽车行业的SPICE</li>
                            <li style="list-style-type:disc">医疗设备行业的SPICE</li>
                            <li style="list-style-type:disc">航天行业的SPICE</li>
                        </ul>
                        <img class="center" src="@/assets/images/aspice/4.png" style="width: 200px;
                        position: relative;
                        top: -50px;">
                        <p class="pg1">【2005年ASPICE】2005年汽车行业的SPICE：Automotive SPICE从ISO体系中独立出来，由德国汽车工业联合会（VDA）的质量管理中心（QMC）运营发展，发布了ASPICE第一个版本：ASPICE V2.0。</p>
                        <img class="center" src="@/assets/images/aspice/5.png">
                        <p class="pg1">【2010年V3.0】2010对ASPICE做了一些结构上的修订，包括将PRM和PAM合二为一、将ENG工程过程组拆分为SYS系统工程组和SWE软件工程组、五级名称变化等。</p>
                        <p class="pg1">【2018年V3.1】2018年发布了当前最新版本ASPICE V3.1，v3.1在v3.0的基础上做了一些微小改动，并将HIS SCOPE改名为了VDA SCOPE。</p>
                        <img class="center" src="@/assets/images/aspice/6.png">
                        <p class="pg1">ASPICE根据企业管理的细致和严谨程度不同，将企业的软件研发能力划分为6个级别，0级为最低级，5级为最高级。级别越高代表研发项目出现意外情况的可能性更低，企业对项目和产品的成功掌控力越强，越有能力按时向客户交付高质量的产品。</p>
                        <p class="pg1">【0级】代表一种混乱的状态。</p>
                        <p class="pg1">【1级】代表企业已经能够完成产品研发相关的工作，但缺乏管理，虽然偶尔能够成功，但项目中存在大量不确定的因素，对项目缺乏掌控能力，无法确保一定能够按时交付高质量的产品。</p>
                        <p class="pg1">【2级】代表企业不仅能够完成产品研发相关工作还能有提前制定严谨和周全的工作计划，并能有效根据计划实施项目监控和管理，各项目能够有序进行。</p>
                        <p class="pg1">【3级】代表不仅各项目能够管理得很好，而且能够有效的从历史项目中积累经验和教训，形成公司的知识资产和标准工作流程，用于对今后项目的参考和指导以及公司管理的持续改善。</p>
                        <p class="pg1">【4级】引入统计学知识和技术，对项目相关各项数据进行统计和分析，并将之运用于未来的项目管理之中，达到对项目结果的预测，并根据预测结果对项目进行实时的调整，确保达成项目目标。</p>
                        <p class="pg1">【5级】代表企业能够基于商业目标的需要，主动的对过程进行调整，对变革管理有很强的管理能力，能够基于对过程的量化分析设定明确有效的过程改进目标，并能对过程改进结果进行有效的量化监控和分析。</p>
                        <img class="center" width="500" src="@/assets/images/aspice/7.png">
                        <p class="pg1">ASPICE将汽车系统研发过程划分为了32个过程，并将这32个过程归类到3大类、8个过程组。其有17个过程被推荐为重点过程，叫VDA Scope（以前的HIS Scope)，多数审核选择对这17个过程进行审核。</p>
                        <img class="center w100" src="@/assets/images/aspice/8.png">
                    </div>
                </div>
                <div style="color:#666" v-if="activeIndex === 2">
                    <div class="cont">
                        <p class="pg1">ASPICE认证包括“准备审核”和“执行审核”两部分：</p>
                        <p class="pg1">【准备审核】包含五个活动：1.分析需求，2.制定评估计划，3.选择和准备评估团队，4.获取和准备客观证据，5.评估实施准备。如下图所示：</p>
                        <img class="center" width="100%" src="@/assets/images/aspice/61.png">
                        <p class="pg1">1.1.分析需求</p>
                        <p class="pg1">由Competent Assesor（以下简称CA）与公司负责人沟通了解企业基本情况明确评估相关需求，包括：</p>
                        <ul style="padding-left:40px">
                            <li style="list-style-type:disc">评估目标</li>
                            <li style="list-style-type:disc">评估的组织范围</li>
                            <li style="list-style-type:disc">评估所采用的ASPICE模型范围</li>
                            <li style="list-style-type:disc">评估的目标级别</li>
                            <li style="list-style-type:disc">评估的时间和成本限制</li>
                        </ul>
                        <p class="pg1">1.2.制定评估计划</p>
                        <p class="pg1">由CA制定评估计划，对项目和人员进行抽样选择，制定相关的证据收集和覆盖计划，评估相关活动的人员和时间计划等，并与公司负责人沟通确定评估计划。</p>
                        <p class="pg1">1.3.选择和准备评估团队</p>
                        <p class="pg1">正式审核需要由CA牵头选择一或多位Provisional Assesor（以下简称PA）成立一个评估团队来对公司进行审核，所有PA必须通过Intacs认证，由CA根据他们的知识和经验进行选择，成立评估团队。由CA对PA进行必要的评估工作培训，确保PA能够顺利开展评估相关工作。</p>
                        <p class="pg1">1.4.获取和准备客观证据</p>
                        <p class="pg1">企业在正式评估之前组织人员收集评估所需的文件或记录，用于证明公司日常研发管理流程中实施了ASPICE所要求的相关活动。每个项目（或公司层面的支持小组）对于ASPICE中的每一个Practice都至少准备一条文件证据。</p>
                        <p class="pg1">1.5.评估实施准备</p>
                        <p class="pg1">评估团队在正式评估之前检查准备工作完成情况，包括检查后勤准备情况、人员准备情况、评估团队的知识技能准备情况、文档证据的准备完成情况等。</p>
                        <p class="pg1">【执行审核】现场审核一般一周时间，从周一到周五，完成8个方面的活动：1.开工会，2.文档检查，3.员工访谈，4.整理汇总，5.活动打分，6.级别打分，7.团队评审，8，评估报告</p>
                        <img class="center" width="100%" src="@/assets/images/aspice/62.png">
                        <p class="pg1">2.1.开工会</p>
                        <p class="pg1">由CA主持，公司负责人及所有与评估相关的人员参加，由CA介绍评估目标、评估范围、评估流程、职责、评估计划、评估注意事项等。</p>
                        <p class="pg1">2.2.文档检查</p>
                        <p class="pg1">CA与PA一起对前期收集的文件证据进行检查，基于文件证据判断ASPICE相关活动执行情况，同时检查文件证据对ASPICE要求的覆盖度是否满足要求。根据文件检查结果，准备访谈问题单。</p>
                        <p class="pg1">2.3.员工访谈</p>
                        <p class="pg1">CA与PA根据评估计划对员工进行逐一提问，针对ASPICE每一条要求向相关人员收集访谈证据，确认相关活动执行情况的同时收集被访谈人员的改进建议。</p>
                        <p class="pg1">2.4.整理汇总</p>
                        <p class="pg1">CA与PA将文档证据和访谈证据与ASPICE要求建立映射关系，整理文件检查和访谈中发现的强项、弱项和改进建议。</p>
                        <p class="pg1">2.5.活动打分</p>
                        <p class="pg1">评估团队根据ASPICE打分规则，结合已经前面整理出来的强项、弱项和改进建议对ASPICE各活动进行评价打分。</p>

                    </div>
                </div>
                <div style="color:#999" v-if="activeIndex === 3">
                    <div class="cont">
                        <img class="center" src="@/assets/images/aspice/31.png">
                        <p class="pg1">ASPICE 最初是完全沿用CMMI的初始版本CMM（能力成熟度模型，Capability Maturity Model ），ASPICE与CMM相似程度99%，最初的CMMI审核结果与ASPICE的审核结果可以直接互相转化，而CMMI的审核员可以直接获得ASPICE审核员资质。</p>
                        <p class="pg1">CMMI目前由美国的CMMI Institute运营，ASPICE由欧洲的VDA QMS运营。而随着多年的发展，两个标准已经逐渐发展成了独立的体系。CMMI适用于所有研发团队，ASPICE仅用于汽车行业的软件研发团队。</p>
                        <p class="pg1">ASPICE模型相对于CMMI模型其针对系统需求到软件需求、系统设计到软件设计、软件测试到系统测试、需求跟踪等流程给出了更细节的要求。另外针对竞标、采购、交付等环节也提出了更细节的要求。总体而言，截止目前最新版本，ASPICE与CMMI模型依然有极大的相似程度，通常而言，企业实施两者中任何一个模型，都可以同时满足另一个模型的要求。</p>
                        <img class="center" src="@/assets/images/aspice/32.png">
                        <p class="pg1"> ISO15504是ASPICE的前身，ISO15504又称SPICE，包含三个SPICE标准：汽车行业的SPICE、医疗设备行业的SPICE、航天行业的SPICE。2005年汽车行业的SPICE从ISO体系中独立出来，由德国汽车行业联合会独立运作，即为现在ASPICE。</p>
                        <img class="center" src="@/assets/images/aspice/33.png">
                        <p class="pg1"> ISO33020是一个过程评估的标准，适用于ISO体系下所有过程评估。该标准参考CMM模型和CMMI的评估流程标准SCAMPI（Standard CMMI Appraisal Method for Process Improvement）而制定。目前最新版ASPICE已经既包含了流程要求（PRM）也包含了评估要求（PAM），而其中的评估要求完全符合ISO33020标准。即，执行ASPICE审核完全满足ISO33020标准。</p>
                        <img class="center" src="@/assets/images/aspice/34.png">
                        <p class="pg1">ISO26262是道路车辆功能安全标准，针对与安全相关功能的研发活动中如何进行安全管理，给出了具体操作标准，包含具体的流程和方法。ISO26262中明确要求企业建立可以持续的实施改善活动组织体系和环境。ASPICE三级中明确要求建立相关流程体系和组织环境，因此实施ASPICE同时有助于满足ISO26262中相关要求。而另一方便ISO26262中给出了研发生命周期的具体流程和方法指引也有助于企业实施ASPICE。</p>
                        <img class="center" src="@/assets/images/aspice/35.png">
                        <p class="pg1">TS16949是根据汽车行业特定需要在ISO9001上的扩充，加入了汽车行业的特定技术规范。对汽车零部件开发的流程和质量控方法给出了具体要求，其完全满足ISO9001。最新版的TS16949中对企业定期进行过程评估进行了明确要求，企业可以选择采用CMMI评估或者ASPICE评估。即，实施ASPICE可以满足TS16949中关于过程评估相关要求。</p>
                    </div>
                </div>
            </div>

            <el-collapse-item :name="1">
                <template slot="title">
                    <div style="font-size:24px">定制化服务<i class="el-icon-s-flag"></i></div>
                </template>
                <div style="color:#666">
                    <div class="cont">

                        <p class="pg1">华赛咨询服务流程采用国际先进的管理变革模型IDEAL模型，它是由SEI在PDCA循环理论上研究得出的。专门用于指导企业逐步提升管理能力。</p>
                        <p class="pg1">IDEAL模型关注于建立一个持续改善机制，它包含5个阶段:初始化阶段(Initiating),诊断阶段(Diagnosing),建立阶段(Establishing),行动阶段(Acting),经验教训总结阶段(Learning)。每个阶段由多个活动组成，IDEAL正是采用这五个阶段的首字母命名的。</p>
                        <p class="pg1">　<img alt="IDEAL模型" width="435" height="290" longdesc="@/assets/images/ideal_full_color.gif" src="@/assets/images/ideal_full_color.gif" style="margin: 0px; padding: 0px; border: 0px solid rgb(51, 51, 51);" /></p>
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
            </el-collapse-item>
            <el-collapse-item :name="2">
                <template slot="title">
                    <div style="font-size:24px">服务特色<i class="el-icon-s-flag"></i></div>
                </template>
                <div style="color:#666">
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

            </el-collapse-item>
            <el-collapse-item :name="3">
                <template slot="title">
                    <div style="font-size:24px">定制化服务<i class="el-icon-s-flag"></i></div>
                </template>
                <div style="color:#999">
                    <div class="cont">
                        <br>
                        <el-tag class="pointer mr20" type="" @click="drawerOpen(1)">
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
                        </el-tag>
                    </div>
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
.cont .xbox {
    display: flex;
}
.cont .xbox-right {
    margin-left: 10px;
}
.cont p {
    line-height: 23px;
    white-space: normal;
}
.cont .center {
    /* width: 100%; */
    text-align: center;
    /* margin: 0 auto; */
    margin-left: 50%;
    transform: translateX(-50%);
}
.cont .w100 {
    width: 100%;
}
</style>