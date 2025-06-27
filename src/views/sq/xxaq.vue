<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'信息安全',path:''}]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div>
                <header class="security-header">
                    <div class="main-container">
                        <p>华赛致力于在研发管理咨询服务中保护客户敏感信息，实施全面的信息安全管理体系，确保信息资产的机密性、完整性和可用性。</p>
                    </div>
                </header>

                <div class="main-container">
                    <section class="security-section">
                        <h2 class="section-title">信息安全政策</h2>
                        <p class="section-description">华赛建立了完善的信息安全管理体系，严格遵循国际标准和最佳实践，为客户提供安全可靠的咨询服务环境。</p>

                        <div class="image-container">
                            <img src="@/assets/images/wbq/aq1.jpeg" alt="信息安全体系" width="800" height="450">
                        </div>

                        <div class="security-card-container">
                            <div class="security-card">
                                <h3>
                                    <img src="@/assets/images/icon/i7.png" alt="安全策略图标" width="40" height="40">
                                    安全策略
                                </h3>
                                <p>华赛建立了全面的信息安全策略和管理制度，覆盖数据保护、访问控制、安全培训等各个方面，确保信息安全工作有章可循。</p>
                            </div>

                            <div class="security-card">
                                <h3>
                                    <img src="@/assets/images/icon/i1.png" alt="风险管理图标" width="40" height="40">
                                    风险管理
                                </h3>
                                <p>定期开展信息安全风险评估，识别潜在威胁和脆弱点，制定针对性的风险控制措施，降低信息安全事件发生的可能性。</p>
                            </div>

                            <div class="security-card">
                                <h3>
                                    <img src="@/assets/images/icon/i2.png" alt="合规认证图标" width="40" height="40">
                                    合规认证
                                </h3>
                                <p>华赛通过ISO 27001信息安全管理体系认证，确保信息安全管理符合国际标准，并定期接受第三方审核，持续改进安全措施。</p>
                            </div>
                        </div>
                    </section>

                    <div class="security-highlight">
                        <div class="main-container">
                            <h2>客户信息保护承诺</h2>
                            <p>华赛将客户信息视为最重要的资产，我们承诺采取一切必要措施保护客户信息的安全，严格遵循数据保护法规和行业最佳实践。</p>
                        </div>
                    </div>

                    <section class="security-section">
                        <h2 class="section-title">数据保护措施</h2>
                        <p class="section-description">华赛实施多层次的数据保护措施，确保客户敏感信息在收集、传输、存储和处理全生命周期中的安全：</p>

                        <div class="two-columns">
                            <div>
                                <img src="@/assets/images/wbq/aq2.jpeg" alt="数据保护" width="600" height="400">
                            </div>
                            <div>
                                <ul class="security-list">
                                    <li><strong>数据加密：</strong>对敏感数据进行强加密处理，确保数据即使在泄露情况下也无法被非授权方解读</li>
                                    <li><strong>访问控制：</strong>实施严格的身份认证和权限管理，确保只有授权人员可以访问客户数据</li>
                                    <li><strong>安全传输：</strong>使用SSL/TLS等安全协议保护数据传输过程，防止中间人攻击和数据窃取</li>
                                    <li><strong>数据备份：</strong>定期对重要数据进行加密备份，确保在系统故障情况下能够快速恢复</li>
                                    <li><strong>数据销毁：</strong>在数据使用期限结束后，按照安全标准彻底销毁数据，防止数据残留</li>
                                    <li><strong>安全审计：</strong>定期对数据访问和处理活动进行审计，及时发现并处理异常情况</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section class="security-section">
                        <h2 class="section-title">安全管理体系</h2>
                        <p class="section-description">华赛建立了ISO 27001标准的信息安全管理体系，涵盖以下关键领域：</p>

                        <div class="security-measures">
                            <div class="measure-item">
                                <div class="measure-icon">P</div>
                                <div class="measure-content">
                                    <h4>物理安全</h4>
                                    <p>实施严格的办公环境物理安全控制，包括访问控制系统、监控系统和环境安全措施，防止未授权的物理访问和环境威胁。</p>
                                </div>
                            </div>

                            <div class="measure-item">
                                <div class="measure-icon">N</div>
                                <div class="measure-content">
                                    <h4>网络安全</h4>
                                    <p>部署多层次的网络安全防护措施，包括防火墙、入侵检测系统、VPN和网络隔离，防止网络攻击和未授权访问。</p>
                                </div>
                            </div>

                            <div class="measure-item">
                                <div class="measure-icon">S</div>
                                <div class="measure-content">
                                    <h4>系统安全</h4>
                                    <p>对所有信息系统实施安全加固，定期更新安全补丁，部署防病毒软件，并进行安全配置管理，降低系统漏洞风险。</p>
                                </div>
                            </div>

                            <div class="measure-item">
                                <div class="measure-icon">A</div>
                                <div class="measure-content">
                                    <h4>应用安全</h4>
                                    <p>在应用开发和使用过程中融入安全需求，进行安全代码审查和渗透测试，确保应用系统的安全性和可靠性。</p>
                                </div>
                            </div>

                            <div class="measure-item">
                                <div class="measure-icon">H</div>
                                <div class="measure-content">
                                    <h4>人员安全</h4>
                                    <p>对所有员工进行安全背景调查，签署保密协议，提供定期的安全意识培训，培养员工的安全责任意识。</p>
                                </div>
                            </div>

                            <div class="measure-item">
                                <div class="measure-icon">I</div>
                                <div class="measure-content">
                                    <h4>事件响应</h4>
                                    <p>建立安全事件响应机制，定期进行演练，确保在安全事件发生时能够快速、有效地响应和处理，最小化影响。</p>
                                </div>
                            </div>
                        </div>

                        <div class="security-phases">
                            <div class="phase">
                                <div class="phase-number">1</div>
                                <h4>规划</h4>
                                <p>制定安全策略和风险评估</p>
                            </div>

                            <div class="phase">
                                <div class="phase-number">2</div>
                                <h4>实施</h4>
                                <p>部署安全控制措施</p>
                            </div>

                            <div class="phase">
                                <div class="phase-number">3</div>
                                <h4>检查</h4>
                                <p>安全审计和监控</p>
                            </div>

                            <div class="phase">
                                <div class="phase-number">4</div>
                                <h4>改进</h4>
                                <p>持续优化安全体系</p>
                            </div>
                        </div>
                    </section>

                    <div class="security-commitment">
                        <div class="main-container">
                            <h2>我们的安全承诺</h2>
                            <p>华赛将信息安全视为企业的核心价值之一，我们承诺：</p>

                            <div class="commitment-grid">
                                <div class="commitment-item">
                                    <h3>完全合规</h3>
                                    <p>严格遵循国家和国际信息安全法规和标准</p>
                                </div>

                                <div class="commitment-item">
                                    <h3>全员参与</h3>
                                    <p>培养全体员工的安全意识和责任感</p>
                                </div>

                                <div class="commitment-item">
                                    <h3>主动防御</h3>
                                    <p>主动识别和应对潜在的安全威胁</p>
                                </div>

                                <div class="commitment-item">
                                    <h3>持续改进</h3>
                                    <p>不断优化和提升信息安全管理体系</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="security-section">
                        <h2 class="section-title">信息安全认证</h2>
                        <p class="section-description">华赛已获得多项信息安全相关的认证，证明我们在信息安全管理方面的专业能力和承诺：</p>

                        <div class="certification-logos">
                            <div class="certification-logo">
                                <img src="@/assets/images/wbq/aq3.jpeg" alt="ISO 27001" width="200" height="150">
                                <p>ISO 27001信息安全管理体系</p>
                            </div>

                            <div class="certification-logo">
                                <img src="@/assets/images/wbq/aq4.jpeg" alt="CCRC" width="200" height="150">
                                <p>信息系统安全等级保护认证</p>
                            </div>

                            <div class="certification-logo">
                                <img src="@/assets/images/wbq/aq5.jpeg" alt="GDPR" width="200" height="150">
                                <p>GDPR合规认证</p>
                            </div>
                        </div>
                    </section>

                    <section class="security-section">
                        <h2 class="section-title">常见问题</h2>
                        <div class="faq-section">
                            <div class="faq-item">
                                <h3>华赛如何保护在CMMI和ASPICE评估过程中收集的客户敏感信息？</h3>
                                <p>华赛实施严格的信息分类管理，对评估过程中收集的所有客户信息进行安全等级划分，并根据不同安全等级采取相应的保护措施，包括加密存储、访问权限控制、传输保护等。同时，我们与客户签署详细的保密协议，明确信息使用范围和保护责任。</p>
                            </div>

                            <div class="faq-item">
                                <h3>华赛员工如何接受信息安全培训？</h3>
                                <p>所有华赛员工在入职时必须接受信息安全培训，并签署保密协议。此后，员工每年需要参加至少两次信息安全培训更新，内容包括最新的安全威胁、防护措施和公司安全政策更新等。对于直接接触客户敏感信息的员工，还将接受额外的专业安全培训。</p>
                            </div>

                            <div class="faq-item">
                                <h3>华赛如何处理信息安全事件？</h3>
                                <p>华赛建立了完整的信息安全事件响应流程，包括事件报告、分级、调查、处置和恢复等环节。一旦发生安全事件，响应团队将立即启动调查和处置程序，并根据事件影响评估结果，向相关客户和监管机构通报情况，同时采取必要的补救措施。</p>
                            </div>

                            <div class="faq-item">
                                <h3>客户如何确认华赛的信息安全能力？</h3>
                                <p>华赛欢迎客户在合作前对我们的信息安全管理体系进行审核。我们可以提供ISO 27001认证证书、安全政策摘要、最近的安全审计报告等文件，也可以根据客户需求安排安全团队进行详细介绍和回答问题。</p>
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
.main-container {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
}

.security-header {
    background-color: #007dc6;
    color: white;
    padding: 40px 20px;
    text-align: center;
}

@media (min-width: 768px) {
    .security-header {
        padding: 60px 40px;
    }
}

.security-header h1 {
    font-size: 28px;
    margin-bottom: 20px;
}

@media (min-width: 768px) {
    .security-header h1 {
        font-size: 36px;
    }
}

.security-header p {
    font-size: 16px;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

@media (min-width: 768px) {
    .security-header p {
        font-size: 18px;
    }
}

.security-section {
    padding: 40px 20px;
    border-bottom: 1px solid #eaeaea;
}

@media (min-width: 768px) {
    .security-section {
        padding: 60px 40px;
    }
}

.security-section:last-child {
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

.section-description {
    font-size: 14px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 30px;
    max-width: 900px;
}

@media (min-width: 768px) {
    .section-description {
        font-size: 16px;
        margin-bottom: 40px;
    }
}

.security-highlight {
    background-color: #f5f5f5;
    padding: 40px 20px;
    text-align: center;
    margin: 30px 0;
}

@media (min-width: 768px) {
    .security-highlight {
        padding: 50px 40px;
        margin: 40px 0;
    }
}

.security-highlight h2 {
    color: #007dc6;
    font-size: 24px;
    margin-bottom: 20px;
}

@media (min-width: 768px) {
    .security-highlight h2 {
        font-size: 28px;
    }
}

.security-highlight p {
    font-size: 16px;
    color: #555;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

@media (min-width: 768px) {
    .security-highlight p {
        font-size: 18px;
    }
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

.security-card-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 30px 0;
}

@media (min-width: 576px) {
    .security-card-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 992px) {
    .security-card-container {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin: 40px 0;
    }
}

.security-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

@media (min-width: 768px) {
    .security-card {
        padding: 30px;
    }
}

.security-card h3 {
    color: #007dc6;
    font-size: 18px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}

@media (min-width: 768px) {
    .security-card h3 {
        font-size: 20px;
    }
}

.security-card h3 img {
    margin-right: 15px;
    width: 30px;
    height: 30px;
}

@media (min-width: 768px) {
    .security-card h3 img {
        width: 40px;
        height: 40px;
    }
}

.security-card p {
    color: #666;
    line-height: 1.6;
    font-size: 14px;
}

.security-list {
    margin: 20px 0;
}

@media (min-width: 768px) {
    .security-list {
        margin: 30px 0;
    }
}

.security-list li {
    margin-bottom: 15px;
    line-height: 1.6;
    padding-left: 25px;
    position: relative;
}

.security-list li:before {
    content: '✓';
    color: #007dc6;
    position: absolute;
    left: 0;
    font-weight: bold;
}

.security-measures {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 30px 0;
}

@media (min-width: 768px) {
    .security-measures {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        margin: 40px 0;
    }
}

.measure-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    font-size: 14px;
}

@media (min-width: 768px) {
    .measure-item {
        gap: 20px;
    }
}

.measure-icon {
    min-width: 50px;
    height: 50px;
    background-color: #007dc6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
}

@media (min-width: 768px) {
    .measure-icon {
        min-width: 60px;
        height: 60px;
        font-size: 20px;
    }
}

.measure-content h4 {
    color: #007dc6;
    margin-bottom: 10px;
    font-size: 16px;
}

.measure-content p {
    color: #666;
    line-height: 1.6;
}

.security-commitment {
    background-color: #007dc6;
    color: white;
    padding: 40px 20px;
    text-align: center;
    margin: 40px 0;
}

@media (min-width: 768px) {
    .security-commitment {
        padding: 60px 40px;
        margin: 50px 0;
    }
}

.security-commitment h2 {
    font-size: 20px;
    margin-bottom: 20px;
}

.security-commitment p {
    font-size: 14px;
    max-width: 800px;
    margin: 0 auto 30px;
    line-height: 1.6;
}

.commitment-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 30px;
}

@media (min-width: 576px) {
    .commitment-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 992px) {
    .commitment-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 40px;
    }
}

.commitment-item {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 8px;
}

.commitment-item h3 {
    font-size: 16px;
    margin-bottom: 10px;
}

@media (min-width: 768px) {
    .commitment-item h3 {
        font-size: 18px;
    }
}

.commitment-item p {
    font-size: 14px;
    margin: 0;
}

.faq-section {
    margin: 30px 0;
}

@media (min-width: 768px) {
    .faq-section {
        margin: 40px 0;
    }
}

.faq-item {
    margin-bottom: 20px;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 20px;
}

.faq-item h3 {
    color: #007dc6;
    margin-bottom: 10px;
    font-size: 16px;
}

.faq-item p {
    color: #666;
    line-height: 1.6;
}

.certification-logos {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 30px 0;
    justify-items: center;
}

@media (min-width: 576px) {
    .certification-logos {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 992px) {
    .certification-logos {
        grid-template-columns: repeat(3, 1fr);
        margin: 40px 0;
    }
}

.certification-logo {
    text-align: center;
}

.certification-logo img {
    max-width: 100%;
    height: auto;
}

.certification-logo p {
    margin-top: 10px;
    font-weight: bold;
    color: #555;
}

.contact-section {
    background-color: #f5f5f5;
    padding: 30px 20px;
    border-radius: 8px;
    margin: 30px 0;
}

@media (min-width: 768px) {
    .contact-section {
        padding: 40px;
        margin: 40px 0;
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
        min-width: 100px;
    }
}

.security-phases {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
    position: relative;
    gap: 30px;
}

@media (min-width: 576px) {
    .security-phases {
        flex-direction: row;
        justify-content: space-between;
        margin: 50px 0;
    }
    
    .security-phases:before {
        content: '';
        position: absolute;
        top: 70px;
        left: 60px;
        right: 60px;
        height: 2px;
        background-color: #eaeaea;
        z-index: 1;
        display: block;
    }
}

.phase {
    text-align: center;
    position: relative;
    z-index: 2;
    width: 140px;
}

.phase-number {
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

.phase h4 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #007dc6;
}

.phase p {
    font-size: 14px;
    color: #666;
}
</style>