<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'服务政策',path:''}]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div>
                <header class="policy-header">
                    <div class="main-container">
                        <p>华赛致力于为客户提供高品质的{{ $store.state.type==='aspice'?'ASPICE咨询认证':'CMMI实施评估'}}服务，以专业、可靠和诚信为原则，确保客户获得最佳体验。</p>
                    </div>
                </header>

                <div class="main-container">
                    <section class="policy-section">
                        <h2 class="section-title">服务承诺</h2>
                        <div class="image-container">
                            <img src="@/assets/images/wbq/sq1.webp" alt="华赛服务承诺" width="800" height="400">
                        </div>
                        <div class="policy-grid">
                            <div class="policy-card">
                                <h3>专业性承诺</h3>
                                <p>华赛拥有CMMI学院认证的高级评估师团队和ASPICE认证的专业咨询师，确保所有项目由经验丰富的专业人员负责执行，提供高标准的服务质量。</p>
                            </div>
                            <div class="policy-card">
                                <h3>保密性承诺</h3>
                                <p>我们严格遵守信息保密协议，对客户所有业务信息、技术数据和评估结果严格保密，建立完善的信息安全保障机制，确保客户数据安全。</p>
                            </div>
                            <div class="policy-card">
                                <h3>定制化承诺</h3>
                                <p>根据客户的业务特点、组织规模和发展阶段，提供个性化的研发管理实施方案，确保方案符合客户实际需求和长期发展目标。</p>
                            </div>
                            <div class="policy-card">
                                <h3>全程支持承诺</h3>
                                <p>从前期咨询到后期维护，华赛提供全生命周期的服务支持，包括定期回访、持续改进建议和紧急问题响应，确保客户长期受益。</p>
                            </div>
                        </div>
                    </section>

                    <div class="policy-quote">
                        <div class="main-container">
                            <h2>以客户为中心，以质量为生命</h2>
                            <p>华赛秉持"帮助客户持续提升过程能力"的使命，将客户价值放在首位，通过专业服务助力企业实现卓越运营。</p>
                        </div>
                    </div>

                    <section class="policy-section">
                        <h2 class="section-title">服务范围与收费政策</h2>
                        <div class="two-columns">
                            <div class="text-content">
                                <h3>CMMI服务范围</h3>
                                <ul class="policy-list">
                                    <li><strong>CMMI培训：</strong>提供CMMI模型介绍、过程域解读、实施方法等培训课程</li>
                                    <li><strong>差距分析：</strong>评估当前过程与CMMI要求的差距，制定改进计划</li>
                                    <li><strong>实施指导：</strong>协助客户建立符合CMMI要求的过程体系</li>
                                    <li><strong>预评估：</strong>在正式评估前进行模拟评估，发现问题并改进</li>
                                    <li><strong>正式评估：</strong>由授权的主任评估师领导团队进行SCAMPI A类评估</li>
                                    <li><strong>认证后支持：</strong>提供持续改进建议和定期复评服务</li>
                                </ul>
                            </div>
                            <div>
                                <img src="@/assets/images/wbq/sq2.webp" alt="CMMI服务范围" width="600" height="400">
                            </div>
                        </div>

                        <div class="two-columns">
                            <div class="image-column">
                                <img src="@/assets/images/wbq/sq3.jpeg" alt="ASPICE服务范围" width="600" height="400">
                            </div>
                            <div class="text-content">
                                <h3>ASPICE服务范围</h3>
                                <ul class="policy-list">
                                    <li><strong>ASPICE培训：</strong>汽车SPICE模型培训、评估方法培训、过程改进培训</li>
                                    <li><strong>过程诊断：</strong>评估当前开发过程与ASPICE要求的符合度</li>
                                    <li><strong>流程建设：</strong>建立符合ASPICE要求的汽车软件开发流程</li>
                                    <li><strong>内部评估：</strong>进行内部ASPICE能力等级评估，识别改进点</li>
                                    <li><strong>供应商评估：</strong>协助评估供应商的ASPICE符合性</li>
                                    <li><strong>认证支持：</strong>提供正式ASPICE认证的全程支持与辅导</li>
                                </ul>
                            </div>
                        </div>

                        <h3 style="margin-top: 40px; color: #007dc6;">收费政策</h3>
                        <p>华赛的服务收费基于项目复杂度、组织规模、服务内容和持续时间等因素综合确定，我们承诺：</p>
                        <ul class="policy-list">
                            <li><strong>透明定价：</strong>所有服务项目均提供详细报价单，明确各项费用组成</li>
                            <li><strong>阶段付款：</strong>根据项目进度分阶段付款，降低客户风险</li>
                            <li><strong>无隐形费用：</strong>合同明确约定所有费用，不存在额外隐形收费</li>
                            <li><strong>退款保证：</strong>对于未达到合同约定目标的服务，提供相应的退款或补偿方案</li>
                        </ul>
                    </section>

                    <section class="policy-section">
                        <h2 class="section-title">服务流程</h2>
                        <div class="process-steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <h4>需求沟通</h4>
                                <p>深入了解客户需求，明确目标与期望</p>
                            </div>
                            <div class="step">
                                <div class="step-number">2</div>
                                <h4>方案制定</h4>
                                <p>提供定制化服务方案与明确报价</p>
                            </div>
                            <div class="step">
                                <div class="step-number">3</div>
                                <h4>合同签订</h4>
                                <p>明确双方责任、权利与服务内容</p>
                            </div>
                            <div class="step">
                                <div class="step-number">4</div>
                                <h4>服务实施</h4>
                                <p>专业团队按计划执行服务内容</p>
                            </div>
                            <div class="step">
                                <div class="step-number">5</div>
                                <h4>成果交付</h4>
                                <p>提交评估报告或咨询成果文档</p>
                            </div>
                            <div class="step">
                                <div class="step-number">6</div>
                                <h4>持续支持</h4>
                                <p>提供后续改进支持与定期回访</p>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src="@/assets/images/wbq/sq4.webp" alt="华赛服务流程" width="900" height="500">
                        </div>
                    </section>

                    <section class="policy-section">
                        <h2 class="section-title">免责声明</h2>
                        <div class="text-content">
                            <p>华赛致力于为客户提供高质量的研发管理咨询服务，但以下情况需要特别说明：</p>
                            <ul class="policy-list">
                                <li><strong>评估结果：</strong>研发管理评估结果取决于组织实际过程实施情况，华赛不对评估最终结果做出保证，但保证评估过程的公正性与专业性。</li>
                                <li><strong>实施效果：</strong>过程改进效果受多种因素影响，包括组织对改进建议的执行程度、员工参与度、管理层支持等，华赛不对实施后的具体业绩提升做出保证。</li>
                                <li><strong>第三方因素：</strong>由于第三方原因（如认证机构政策变化、评估标准更新等）导致的评估延期或结果变化，华赛不承担相关责任。</li>
                                <li><strong>信息真实性：</strong>华赛的评估与咨询基于客户提供的信息，客户应确保所提供信息的真实性与完整性，华赛不对因客户提供虚假信息导致的后果负责。</li>
                            </ul>
                        </div>
                    </section>

                    <section class="policy-section">
                        <h2 class="section-title">争议解决</h2>
                        <div class="text-content">
                            <p>在服务过程中如遇争议，我们建议按以下步骤处理：</p>
                            <ol class="policy-list">
                                <li>首先与项目负责人沟通，尝试在项目层面解决问题</li>
                                <li>如未能解决，可联系华赛客户服务部门提出正式投诉</li>
                                <li>华赛将在3个工作日内响应投诉，并在15个工作日内提出解决方案</li>
                                <li>对于合同相关争议，将按照合同约定的争议解决机制处理</li>
                                <li>如通过上述途径仍无法解决，可通过法律途径解决</li>
                            </ol>
                        </div>
                    </section>
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
        return {}
    },
    mounted() {},
    methods: {},
}
</script>
  
<style lang="less" scoped>
.main-container {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
}

.policy-header {
    background-color: #007dc6;
    color: white;
    padding: 40px 20px;
    text-align: center;
}

@media (min-width: 768px) {
    .policy-header {
        padding: 60px 0;
    }
}

.policy-header h1 {
    font-size: 28px;
    margin-bottom: 20px;
}

@media (min-width: 768px) {
    .policy-header h1 {
        font-size: 36px;
    }
}

.policy-header p {
    font-size: 16px;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

@media (min-width: 768px) {
    .policy-header p {
        font-size: 18px;
    }
}

.policy-section {
    padding: 40px 0;
    border-bottom: 1px solid #eaeaea;
}

@media (min-width: 768px) {
    .policy-section {
        padding: 60px 0;
    }
}

.policy-section:last-child {
    border-bottom: none;
}

.section-title {
    font-size: 24px;
    color: #007dc6;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 15px;
}

@media (min-width: 768px) {
    .section-title {
        font-size: 28px;
        margin-bottom: 30px;
    }
}

.section-title:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #007dc6;
}

.policy-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
}

@media (min-width: 576px) {
    .policy-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
}

@media (min-width: 992px) {
    .policy-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }
}

.policy-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    font-size: 14px;
}

@media (min-width: 768px) {
    .policy-card {
        padding: 30px;
    }
}

.policy-card h3 {
    color: #007dc6;
    font-size: 20px;
    margin-bottom: 15px;
}

@media (min-width: 768px) {
    .policy-card h3 {
        font-size: 22px;
    }
}

.policy-card p {
    color: #555;
    line-height: 1.6;
}

.policy-list {
    padding-left: 20px;
}

.policy-list li {
    margin-bottom: 15px;
    line-height: 1.6;
}

.policy-quote {
    background-color: #007dc6;
    color: white;
    padding: 40px 20px;
    text-align: center;
    margin: 40px 0;
}

@media (min-width: 768px) {
    .policy-quote {
        padding: 60px 0;
        margin: 60px 0;
    }
}

.policy-quote h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

@media (min-width: 768px) {
    .policy-quote h2 {
        font-size: 32px;
    }
}

.policy-quote p {
    font-size: 16px;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

@media (min-width: 768px) {
    .policy-quote p {
        font-size: 18px;
    }
}

.process-steps {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin: 40px 0;
    position: relative;
}

@media (min-width: 768px) {
    .process-steps {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 992px) {
    .process-steps {
        display: flex;
        justify-content: space-between;
        margin: 50px 0;
    }
    
    .process-steps:before {
        content: '';
        position: absolute;
        top: 70px;
        left: 60px;
        right: 60px;
        height: 2px;
        background-color: #eaeaea;
        z-index: 1;
    }
}

.step {
    text-align: center;
    position: relative;
    z-index: 2;
    width: 100%;
}

@media (min-width: 992px) {
    .step {
        width: 140px;
    }
}

.step-number {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #007dc6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    margin: 0 auto 15px;
}

.step h4 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #007dc6;
}

.step p {
    font-size: 14px;
    color: #666;
}

.policy-footer {
    background-color: #f9f9f9;
    padding: 40px 20px;
    text-align: center;
}

@media (min-width: 768px) {
    .policy-footer {
        padding: 60px 0;
    }
}

.policy-footer h2 {
    font-size: 24px;
    color: #007dc6;
    margin-bottom: 20px;
}

@media (min-width: 768px) {
    .policy-footer h2 {
        font-size: 28px;
        margin-bottom: 30px;
    }
}

.contact-button {
    display: inline-block;
    background-color: #007dc6;
    color: white;
    padding: 12px 25px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

@media (min-width: 768px) {
    .contact-button {
        padding: 15px 30px;
        font-size: 18px;
    }
}

.contact-button:hover {
    background-color: #15387c;
}

.image-container {
    display: flex;
    justify-content: center;
    margin: 30px 0;
}

@media (min-width: 768px) {
    .image-container {
        margin: 40px 0;
    }
}

.image-container img {
    max-width: 100%;
    height: auto;
}

.two-columns {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 30px 0;
}

@media (min-width: 768px) {
    .two-columns {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        margin: 40px 0;
    }
}

.two-columns img {
    max-width: 100%;
    height: auto;
}

.text-content {
    line-height: 1.6;
}

/* Reverse order for the image column on mobile for the second two-columns section */
@media (max-width: 767px) {
    .two-columns .image-column {
        order: -1;
    }
}
</style>