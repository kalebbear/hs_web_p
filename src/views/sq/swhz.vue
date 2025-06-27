<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'商务合作',path:''}]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div>
                <header class="cooperation-header">
                    <div class="main-container">
                        <!-- <h1>商务合作</h1> -->
                        <p>华赛诚邀各界合作伙伴共同构建研发管理领域的专业生态圈，通过资源共享、优势互补，为客户创造更大价值。</p>
                    </div>
                </header>

                <div class="main-container">
                    <section class="cooperation-section">
                        <h2 class="section-title">合作伙伴类型</h2>
                        <p class="section-description">华赛致力于构建多元化的合作生态，欢迎以下类型的合作伙伴加入我们的专业网络：</p>

                        <div class="partner-grid">
                            <div class="partner-card">
                                <div class="partner-icon">
                                    <img src="@/assets/images/icon/i3.png" alt="企业图标" width="40" height="40">
                                </div>
                                <h3>咨询机构</h3>
                                <p>与专注于软件开发、项目管理、质量管理等领域的咨询机构合作，互相推荐客户，共享行业资源。</p>
                                <a href="#">了解合作方式 &rarr;</a>
                            </div>

                            <div class="partner-card">
                                <div class="partner-icon">
                                    <img src="@/assets/images/icon/i9.png" alt="培训图标" width="40" height="40">
                                </div>
                                <h3>培训机构</h3>
                                <p>与IT培训、管理培训机构合作，共同开发CMMI、ASPICE相关课程，为企业提供全面的能力提升解决方案。</p>
                                <a href="#">了解合作方式 &rarr;</a>
                            </div>

                            <div class="partner-card">
                                <div class="partner-icon">
                                    <img src="@/assets/images/icon/i2.png" alt="高校图标" width="40" height="40">
                                </div>
                                <h3>高校合作</h3>
                                <p>与高等院校合作，开展v研究项目，为学生提供实习机会，培养过程改进领域的专业人才。</p>
                                <a href="#">了解合作方式 &rarr;</a>
                            </div>

                            <div class="partner-card">
                                <div class="partner-icon">
                                    <img src="@/assets/images/icon/i4.png" alt="软件工具图标" width="40" height="40">
                                </div>
                                <h3>工具厂商</h3>
                                <p>与软件开发工具、项目管理工具、测试工具等供应商合作，为客户提供工具与方法论结合的整体解决方案。</p>
                                <a href="#">了解合作方式 &rarr;</a>
                            </div>

                            <div class="partner-card">
                                <div class="partner-icon">
                                    <img src="@/assets/images/icon/i6.png" alt="渠道图标" width="40" height="40">
                                </div>
                                <h3>渠道合作</h3>
                                <p>与区域代理商、行业垂直服务商合作，扩大华赛服务的地域覆盖和行业深度，为更多客户提供专业服务。</p>
                                <a href="#">了解合作方式 &rarr;</a>
                            </div>

                            <div class="partner-card">
                                <div class="partner-icon">
                                    <img src="@/assets/images/icon/i7.png" alt="营销图标" width="40" height="40">
                                </div>
                                <h3>营销合作</h3>
                                <p>与行业媒体、活动组织方合作，共同举办论坛、研讨会等活动，分享专业知识，提升品牌影响力。</p>
                                <a href="#">了解合作方式 &rarr;</a>
                            </div>
                        </div>
                    </section>

                    <section class="cooperation-section">
                        <h2 class="section-title">合作优势</h2>
                        <p class="section-description">选择与华赛合作，您将获得专业、可靠的支持与丰富的资源共享：</p>

                        <div class="benefits-container">
                            <div class="benefits-image">
                                <img src="@/assets/images/wbq/sw1.jpg" alt="合作优势" width="600" height="400">
                            </div>
                            <div class="benefits-content">
                                <ul class="benefits-list">
                                    <li><strong>专业背书：</strong>华赛作为研发管理领域的专业机构，将为合作伙伴提供权威背书，增强市场信任度。</li>
                                    <li><strong>客户资源：</strong>共享优质客户资源，通过互相推荐拓展业务机会，实现合作共赢。</li>
                                    <li><strong>知识共享：</strong>获取研发管理领域的最新研究成果、实施经验和行业动态。</li>
                                    <li><strong>联合营销：</strong>共同举办行业活动，联合发布白皮书，提升品牌影响力。</li>
                                    <li><strong>技术支持：</strong>获得华赛专家团队在研发管理领域的专业技术支持。</li>
                                    <li><strong>优惠政策：</strong>合作伙伴享受华赛服务的优惠价格和定制化支持。</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section class="cooperation-section">
                        <h2 class="section-title">合作流程</h2>
                        <p class="section-description">华赛提供清晰、高效的合作对接流程，确保合作顺利开展：</p>

                        <div class="steps-container">
                            <div class="steps-grid">
                                <div class="step-card">
                                    <div class="step-number">1</div>
                                    <h3>初步接洽</h3>
                                    <p>通过官网、电话或邮件联系华赛商务部门，说明合作意向和基本需求。</p>
                                </div>

                                <div class="step-card">
                                    <div class="step-number">2</div>
                                    <h3>需求沟通</h3>
                                    <p>华赛商务团队与您深入沟通，了解详细需求，探讨潜在合作模式。</p>
                                </div>

                                <div class="step-card">
                                    <div class="step-number">3</div>
                                    <h3>方案制定</h3>
                                    <p>根据沟通结果，华赛提供定制化的合作方案，包括合作内容、权益与义务等。</p>
                                </div>

                                <div class="step-card">
                                    <div class="step-number">4</div>
                                    <h3>签约合作</h3>
                                    <p>双方确认方案后签署合作协议，正式建立合作关系。</p>
                                </div>
                            </div>
                        </div>

                        <div class="benefits-container">
                            <div class="benefits-content">
                                <h3>长期合作保障</h3>
                                <ul class="benefits-list">
                                    <li><strong>专属对接人：</strong>为每位合作伙伴指定专属对接人员，确保沟通畅通和问题快速解决。</li>
                                    <li><strong>定期回访：</strong>华赛团队定期与合作伙伴沟通，了解合作情况，收集反馈与建议。</li>
                                    <li><strong>合作升级：</strong>随着合作深入，可升级合作级别，获取更多资源支持和商业机会。</li>
                                    <li><strong>伙伴大会：</strong>每年举办华赛合作伙伴大会，分享行业趋势，表彰优秀合作伙伴。</li>
                                </ul>
                            </div>
                            <div class="benefits-image">
                                <img src="@/assets/images/wbq/sw2.jpg" alt="长期合作" width="600" height="400">
                            </div>
                        </div>
                    </section>

                    <section class="cooperation-section">
                        <h2 class="section-title">成功案例</h2>
                        <p class="section-description">探索华赛与各类合作伙伴的成功合作案例，了解我们如何通过合作创造共赢：</p>

                        <div class="case-studies">
                            <div class="case-grid">
                                <div class="case-card">
                                    <div class="case-image">
                                        <img src="@/assets/images/wbq/sw3.jpg" alt="培训机构合作案例" width="650" height="250">
                                    </div>
                                    <div class="case-content">
                                        <h3>与领先IT培训机构的课程合作</h3>
                                        <p>华赛与国内领先IT培训机构合作，共同开发CMMI实施课程体系，培训学员超过2000人，为企业输送大量CMMI实施人才，提升了行业整体水平。</p>
                                        <a href="#" class="case-button">查看详情</a>
                                    </div>
                                </div>

                                <div class="case-card">
                                    <div class="case-image">
                                        <img src="@/assets/images/wbq/sw4.jpg" alt="咨询机构合作案例" width="650" height="250">
                                    </div>
                                    <div class="case-content">
                                        <h3>与管理咨询公司的整合服务</h3>
                                        <p>华赛与知名管理咨询公司合作，将CMMI过程改进与精益管理方法相结合，为多家大型企业提供整合解决方案，显著提升客户的运营效率和项目成功率。</p>
                                        <a href="#" class="case-button">查看详情</a>
                                    </div>
                                </div>

                                <div class="case-card">
                                    <div class="case-image">
                                        <img src="@/assets/images/wbq/sw5.jpg" alt="工具厂商合作案例" width="650" height="250">
                                    </div>
                                    <div class="case-content">
                                        <h3>与软件工具厂商的技术融合</h3>
                                        <p>华赛与项目管理工具供应商合作，将CMMI最佳实践融入工具功能，帮助用户在使用工具的同时自然实施CMMI过程，大幅降低了CMMI实施的学习曲线。</p>
                                        <a href="#" class="case-button">查看详情</a>
                                    </div>
                                </div>

                                <div class="case-card">
                                    <div class="case-image">
                                        <img src="@/assets/images/wbq/sw1.jpg" alt="高校合作案例" width="650" height="250">
                                    </div>
                                    <div class="case-content">
                                        <h3>与重点高校的产学研合作</h3>
                                        <p>华赛与国内某重点工科大学合作，共建"软件过程改进研究中心"，开展CMMI在敏捷开发中的应用研究，成果获得国家级奖项并在多家企业成功应用。</p>
                                        <a href="#" class="case-button">查看详情</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="cooperation-section">
                        <h2 class="section-title">我们的合作伙伴</h2>
                        <p class="section-description">华赛已与众多行业领先机构建立了紧密的合作关系：</p>

                        <div class="partner-logos">
                            <div class="logo-item">
                                <img src="@/assets/images/qy/01.png" alt="合作伙伴logo" width="180" height="90">
                            </div>
                            <div class="logo-item">
                                <img src="@/assets/images/qy/02.png" alt="合作伙伴logo" width="180" height="90">
                            </div>
                            <div class="logo-item">
                                <img src="@/assets/images/qy/03.png" alt="合作伙伴logo" width="180" height="90">
                            </div>
                            <div class="logo-item">
                                <img src="@/assets/images/qy/04.png" alt="合作伙伴logo" width="180" height="90">
                            </div>
                            <div class="logo-item">
                                <img src="@/assets/images/qy/05.png" alt="合作伙伴logo" width="180" height="90">
                            </div>
                            <div class="logo-item">
                                <img src="@/assets/images/qy/06.png" alt="合作伙伴logo" width="180" height="90">
                            </div>
                            <div class="logo-item">
                                <img src="@/assets/images/qy/07.png" alt="合作伙伴logo" width="180" height="90">
                            </div>
                            <div class="logo-item">
                                <img src="@/assets/images/qy/08.png" alt="合作伙伴logo" width="180" height="90">
                            </div>
                        </div>
                    </section>
                </div>

                <!-- <section class="contact-section">
                    <div class="main-container">
                        <h2>联系我们，开启合作</h2>
                        <p>如果您对与华赛建立合作关系感兴趣，请填写以下表单，我们的商务团队将在1-2个工作日内与您联系。</p>

                        <div class="contact-form">
                            <form action="#" method="post">
                                <div class="form-row">
                                    <label for="company">公司/机构名称</label>
                                    <input type="text" id="company" name="company" required>
                                </div>

                                <div class="form-row">
                                    <label for="name">联系人姓名</label>
                                    <input type="text" id="name" name="name" required>
                                </div>

                                <div class="form-row">
                                    <label for="position">职位</label>
                                    <input type="text" id="position" name="position">
                                </div>

                                <div class="form-row">
                                    <label for="email">电子邮箱</label>
                                    <input type="email" id="email" name="email" required>
                                </div>

                                <div class="form-row">
                                    <label for="phone">联系电话</label>
                                    <input type="tel" id="phone" name="phone" required>
                                </div>

                                <div class="form-row">
                                    <label for="type">合作类型</label>
                                    <select id="type" name="type">
                                        <option value="">-- 请选择 --</option>
                                        <option value="consulting">咨询机构合作</option>
                                        <option value="training">培训机构合作</option>
                                        <option value="university">高校合作</option>
                                        <option value="tool">工具厂商合作</option>
                                        <option value="channel">渠道合作</option>
                                        <option value="marketing">营销合作</option>
                                        <option value="other">其他合作</option>
                                    </select>
                                </div>

                                <div class="form-row">
                                    <label for="message">合作意向描述</label>
                                    <textarea id="message" name="message" required></textarea>
                                </div>

                                <div class="form-row" style="text-align: center;">
                                    <button type="submit" class="submit-button">提交合作意向</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section> -->
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

.cooperation-header {
    background-color: #007dc6;
    color: white;
    padding: 60px 20px;
    text-align: center;
}

.cooperation-header h1 {
    font-size: 30px;
    margin-bottom: 20px;
}

.cooperation-header p {
    font-size: 18px;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

.cooperation-section {
    padding: 60px 20px;
    border-bottom: 1px solid #eaeaea;
}

.cooperation-section:last-child {
    border-bottom: none;
}

.section-title {
    font-size: 28px;
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

.section-description {
    font-size: 14px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 40px;
    max-width: 900px;
}

.partner-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.partner-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-size: 14px;
}

.partner-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.partner-icon {
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
}

.partner-icon img {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

.partner-card h3 {
    color: #007dc6;
    font-size: 20px;
    margin-bottom: 15px;
}

.partner-card p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

.partner-card a {
    display: inline-block;
    color: #007dc6;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
}

.partner-card a:hover {
    border-color: #007dc6;
}

.benefits-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 40px 0;
}

@media (min-width: 768px) {
    .benefits-container {
        grid-template-columns: 1fr 1fr;
        gap: 50px;
    }
}

.benefits-image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.benefits-image img {
    max-width: 100%;
    height: auto;
}

.benefits-content {
    padding: 20px 0;
}

.benefits-list {
    padding-left: 20px;
}

.benefits-list li {
    margin-bottom: 15px;
    line-height: 1.6;
    position: relative;
    padding-left: 25px;
}

.benefits-list li:before {
    content: '✓';
    color: #007dc6;
    position: absolute;
    left: 0;
    font-weight: bold;
}

.steps-container {
    margin: 50px 0;
}

.steps-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
}

@media (min-width: 576px) {
    .steps-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
}

@media (min-width: 992px) {
    .steps-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.step-card {
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 8px;
    text-align: center;
    position: relative;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.step-number {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background-color: #007dc6;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
}

.step-card h3 {
    margin-top: 15px;
    color: #007dc6;
    margin-bottom: 15px;
}

.step-card p {
    color: #666;
    line-height: 1.6;
}

.case-studies {
    margin: 50px 0;
}

.case-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
}

@media (min-width: 768px) {
    .case-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.case-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.case-image {
    height: 250px;
    overflow: hidden;
}

.case-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.case-card:hover .case-image img {
    transform: scale(1.05);
}

.case-content {
    padding: 25px;
    background-color: #fff;
}

.case-content h3 {
    color: #007dc6;
    margin-bottom: 15px;
    font-size: 20px;
}

.case-content p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
}

.case-button {
    display: inline-block;
    background-color: #007dc6;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.case-button:hover {
    background-color: #15387c;
}

.contact-section {
    background-color: #f5f5f5;
    padding: 60px 20px;
    text-align: center;
    margin-top: 60px;
}

.contact-section h2 {
    font-size: 28px;
    color: #007dc6;
    margin-bottom: 20px;
}

.contact-section p {
    font-size: 14px;
    color: #555;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.contact-form {
    max-width: 700px;
    margin: 0 auto;
    text-align: left;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-row {
    margin-bottom: 20px;
}

.form-row label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
}

.form-row input,
.form-row textarea,
.form-row select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
}

.form-row textarea {
    height: 120px;
    resize: vertical;
}

.submit-button {
    background-color: #007dc6;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #15387c;
}

.partner-logos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 50px 0;
}

@media (min-width: 576px) {
    .partner-logos {
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
    }
}

@media (min-width: 992px) {
    .partner-logos {
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
    }
}

.logo-item {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.logo-item img {
    max-width: 100%;
    height: auto;
}
</style>