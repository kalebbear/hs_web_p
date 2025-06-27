<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'廉洁声明',path:''}]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div>
                <header class="integrity-header">
                    <div class="page-container">
                        <!-- <h1>廉洁声明</h1> -->
                        <p>华赛承诺在研发管理咨询与评估过程中，恪守商业道德，坚持公正公平原则，杜绝一切不正当行为，为客户提供真实、可靠、透明的专业服务。</p>
                    </div>
                </header>

                <div class="page-container">
                    <section class="integrity-section">
                        <h2 class="section-title">廉洁承诺</h2>
                        <div class="image-container">
                            <img src="@/assets/images/wbq/lj1.jpeg" alt="廉洁诚信" width="800" height="400">
                        </div>
                        <div class="section-content">
                            <p>作为专业的{{ $store.state.type==='aspice'?'ASPICE咨询认证':'CMMI实施评估'}}服务提供商，华赛深知廉洁对专业服务机构的重要性。我们承诺在所有业务活动中恪守诚信原则，坚持以下廉洁标准：</p>

                            <div class="integrity-principles">
                                <div class="principle-card">
                                    <h3><span>1</span>公正评估</h3>
                                    <p>在评估过程中，华赛团队坚持客观公正原则，严格按照模型要求和评估方法开展工作，不因任何商业利益而影响评估结果的真实性。</p>
                                </div>

                                <div class="principle-card">
                                    <h3><span>2</span>杜绝回扣</h3>
                                    <p>华赛明确禁止员工在业务过程中收受客户或合作伙伴的回扣、礼金或其他不正当利益，保持业务合作的纯洁性。</p>
                                </div>

                                <div class="principle-card">
                                    <h3><span>3</span>拒绝商业贿赂</h3>
                                    <p>华赛严格遵守反商业贿赂法规，不通过提供不正当利益来获取业务机会，坚持凭借专业能力和服务质量赢得客户信任。</p>
                                </div>

                                <div class="principle-card">
                                    <h3><span>4</span>透明收费</h3>
                                    <p>华赛的收费标准公开透明，严格按照合同约定收费，不存在隐形收费或不合理加价行为，确保客户知情权。</p>
                                </div>

                                <div class="principle-card">
                                    <h3><span>5</span>信息保密</h3>
                                    <p>华赛严格保护客户商业秘密和敏感信息，不利用客户信息谋取不正当利益，不违规泄露客户信息给第三方。</p>
                                </div>

                                <div class="principle-card">
                                    <h3><span>6</span>利益冲突回避</h3>
                                    <p>华赛员工在发现与客户存在潜在利益冲突时，主动向公司报告并回避相关业务活动，确保服务的公正性和独立性。</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="quote-box">
                        <h3>华赛廉洁理念</h3>
                        <p>"诚信为本，廉洁行事，是我们的核心价值观，也是我们对每一位客户的庄严承诺。"</p>
                    </div>

                    <section class="integrity-section">
                        <h2 class="section-title">廉洁管理体系</h2>
                        <div class="two-columns">
                            <div class="section-content">
                                <p>为确保廉洁承诺得到有效落实，华赛建立了完善的廉洁管理体系：</p>
                                <ul class="integrity-list">
                                    <li><strong>廉洁委员会</strong>：由公司高管组成，负责制定廉洁政策，监督政策执行，处理廉洁问题。</li>
                                    <li><strong>行为准则</strong>：制定明确的员工行为准则，规范员工在业务活动中的行为标准。</li>
                                    <li><strong>培训教育</strong>：定期开展廉洁教育培训，提高员工廉洁意识。</li>
                                    <li><strong>举报机制</strong>：设立独立的廉洁举报渠道，鼓励内部员工和外部合作伙伴对不当行为进行举报。</li>
                                    <li><strong>定期审计</strong>：对公司业务活动进行定期廉洁审计，发现并纠正潜在问题。</li>
                                    <li><strong>责任追究</strong>：对违反廉洁规定的员工实行零容忍政策，严格追究责任。</li>
                                </ul>
                            </div>
                            <div class="image-container">
                                <img src="@/assets/images/wbq/lj2.jpeg" alt="廉洁管理体系" width="550" height="400">
                            </div>
                        </div>

                        <h3 style="color: #007dc6; margin-top: 40px; margin-bottom: 20px;">廉洁监督落实</h3>
                        <div class="commitment-steps">
                            <div class="step-card">
                                <div class="step-number">1</div>
                                <h4>预防为主</h4>
                                <p>通过培训教育、制度建设等预防性措施，从源头上防止廉洁问题发生。</p>
                            </div>

                            <div class="step-card">
                                <div class="step-number">2</div>
                                <h4>过程监督</h4>
                                <p>在业务活动全过程中实施监督，及时发现并纠正不当行为。</p>
                            </div>

                            <div class="step-card">
                                <div class="step-number">3</div>
                                <h4>问题处理</h4>
                                <p>对发现的廉洁问题，快速响应、认真调查、公正处理。</p>
                            </div>

                            <div class="step-card">
                                <div class="step-number">4</div>
                                <h4>持续改进</h4>
                                <p>总结经验教训，不断完善廉洁管理体系，提升廉洁水平。</p>
                            </div>
                        </div>
                    </section>

                    <section class="integrity-section">
                        <h2 class="section-title">廉洁举报</h2>
                        <div class="section-content">
                            <p>华赛鼓励员工、客户、合作伙伴及社会各界对我们的廉洁行为进行监督。如发现华赛员工存在违反廉洁承诺的行为，欢迎通过以下渠道进行举报：</p>

                            <div class="contact-section">
                                <h3>举报渠道</h3>
                                <div class="contact-details">
                                    <div class="contact-item">
                                        <strong>举报电话：</strong>
                                        <span>0755-29656825</span>
                                    </div>
                                    <div class="contact-item">
                                        <strong>举报邮箱：</strong>
                                        <span>tony@huasaiinfo.com</span>
                                    </div>
                                    <div class="contact-item">
                                        <strong>邮寄地址：</strong>
                                        <span>深圳市宝安区新安街道兴东社区留仙大道2号汇聚创新园2栋2403室</span>
                                    </div>
                                </div>
                            </div>

                            <p>我们承诺：</p>
                            <ul class="integrity-list">
                                <li>对所有举报信息严格保密，保护举报人隐私</li>
                                <li>对举报事项认真调查，及时反馈处理结果</li>
                                <li>对打击报复举报人的行为零容忍</li>
                                <li>对查实的违规行为严肃处理，绝不姑息</li>
                            </ul>
                        </div>
                        <div class="image-container">
                            <img src="@/assets/images/wbq/lj3.jpeg" alt="团队合作与廉洁文化" width="800" height="400">
                        </div>
                    </section>

                    <section class="integrity-section">
                        <h2 class="section-title">合规认证</h2>
                        <div class="section-content">
                            <p>华赛已通过多项合规认证，彰显我们对廉洁经营的坚定承诺：</p>
                            <ul class="integrity-list">
                                <li><strong>ISO 37001反贿赂管理体系认证</strong>：华赛建立并实施了符合ISO 37001标准的反贿赂管理体系，有效预防和控制贿赂风险。</li>
                                <li><strong>《商业道德与合规承诺书》签署</strong>：华赛与所有员工签署了《商业道德与合规承诺书》，明确廉洁要求和责任。</li>
                                <li><strong>行业协会道德规范认可</strong>：华赛遵循并获得了软件与信息技术服务业协会的道德规范认可。</li>
                            </ul>
                        </div>
                    </section>

                    <section class="integrity-section">
                        <h2 class="section-title">声明生效</h2>
                        <div class="section-content">
                            <p>本廉洁声明自发布之日起生效，华赛保留对本声明进行更新的权利。更新后的廉洁声明将在华赛官网公布，恕不另行通知。</p>
                            <p>华赛承诺将廉洁理念融入企业文化，落实到每一位员工的日常工作中，以实际行动践行廉洁经营的承诺，为客户提供真实、可靠、透明的专业服务，共同营造风清气正的商业环境。</p>

                            <div class="signature-section">
                                <p>华赛科技有限公司</p>
                                <p>2012年3月</p>
                            </div>
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
.page-container {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
}

.integrity-header {
    background-color: #007dc6;
    color: white;
    padding: 60px 20px;
    text-align: center;
}

.integrity-header h1 {
    font-size: 30px;
    margin-bottom: 20px;
}

.integrity-header p {
    font-size: 18px;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

.integrity-section {
    padding: 60px 20px;
    border-bottom: 1px solid #eaeaea;
}

.integrity-section:last-child {
    border-bottom: none;
}

.section-title {
    font-size: 20px;
    color: #007dc6;
    margin-bottom: 30px;
    position: relative;
    padding-bottom: 15px;
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

.section-content {
    font-size: 14px;
    line-height: 1.8;
    color: #444;
    max-width: 1200px;
}

.section-content p {
    margin-bottom: 20px;
}

.image-container {
    display: flex;
    justify-content: center;
    margin: 40px 0;
}

.image-container img {
    max-width: 100%;
    height: auto;
}

.two-columns {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin: 40px 0;
}

@media (min-width: 768px) {
    .two-columns {
        grid-template-columns: 1fr 1fr;
    }
}

.integrity-principles {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 40px 0;
}

@media (min-width: 576px) {
    .integrity-principles {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
}

@media (min-width: 992px) {
    .integrity-principles {
        grid-template-columns: repeat(3, 1fr);
    }
}

.principle-card {
    background-color: #f8f8f8;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.principle-card h3 {
    color: #007dc6;
    margin-bottom: 15px;
    font-size: 16px;
    display: flex;
    align-items: center;
}

.principle-card h3 span {
    width: 32px;
    height: 32px;
    background-color: #007dc6;
    color: white;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    font-size: 14px;
}

.principle-card p {
    color: #555;
    line-height: 1.6;
}

.integrity-list {
    margin: 30px 0;
    padding-left: 20px;
}

.integrity-list li {
    margin-bottom: 15px;
    line-height: 1.6;
    position: relative;
    padding-left: 15px;
}

.integrity-list li:before {
    content: '•';
    color: #007dc6;
    position: absolute;
    left: -10px;
    font-weight: bold;
}

.contact-section {
    background-color: #f5f5f5;
    padding: 30px 20px;
    margin: 40px 0;
    border-radius: 8px;
}

@media (min-width: 576px) {
    .contact-section {
        padding: 40px;
    }
}

.contact-section h3 {
    color: #007dc6;
    margin-bottom: 20px;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.contact-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

@media (min-width: 576px) {
    .contact-item {
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    .contact-item strong {
        min-width: 80px;
    }
}

.signature-section {
    margin: 40px 0;
    text-align: right;
}

.signature-section p {
    margin-bottom: 10px;
}

.quote-box {
    background-color: #007dc6;
    color: white;
    padding: 30px 20px;
    border-radius: 8px;
    margin: 40px 0;
    text-align: center;
}

@media (min-width: 576px) {
    .quote-box {
        padding: 40px;
    }
}

.quote-box h3 {
    font-size: 20px;
    margin-bottom: 20px;
}

.quote-box p {
    font-size: 16px;
    font-style: italic;
    max-width: 800px;
    margin: 0 auto;
}

.commitment-steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 40px 0;
}

@media (min-width: 576px) {
    .commitment-steps {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 992px) {
    .commitment-steps {
        grid-template-columns: repeat(4, 1fr);
    }
}

.step-card {
    padding: 25px;
    background-color: #f8f8f8;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.step-number {
    width: 40px;
    height: 40px;
    background-color: #007dc6;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: 0 auto 15px;
}

.step-card h4 {
    color: #007dc6;
    margin-bottom: 10px;
}

.step-card p {
    color: #555;
    font-size: 14px;
    line-height: 1.6;
}
</style>