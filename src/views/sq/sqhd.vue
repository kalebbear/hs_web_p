<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'社区活动',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div>

                <header class="page-header">
                    <div class="container">
                        <p>华赛致力于在研发管理社区中创建积极的交流与学习环境，通过各种活动促进行业发展，提升组织过程能力。</p>
                    </div>
                </header>

                <!-- 近期活动 -->
                <section class="container">
                    <h2 class="section-title">近期活动</h2>
                    <div class="events-grid">
                        <div class="event-card">
                            <div class="event-image">
                                <img src="@/assets/images/wbq/sw1.jpg" width="400" height="320" />
                            </div>
                            <div class="event-details">
                                <span class="event-date">2025年3月15日</span>
                                <h3 class="event-title">CMMI V2.0实施经验分享沙龙</h3>
                                <p class="event-description">本次沙龙邀请多位行业专家，分享CMMI V2.0实施过程中的实践经验与挑战应对，为参与者提供宝贵的实践指导。</p>
                                <a href="#" class="event-link">查看详情 &rarr;</a>
                            </div>
                        </div>

                        <div class="event-card">
                            <div class="event-image">
                                <img src="@/assets/images/wbq/sw4.jpg" width="400" height="320" />
                            </div>
                            <div class="event-details">
                                <span class="event-date">2025年4月20日</span>
                                <h3 class="event-title">ASPICE 3.1版本解析线上研讨会</h3>
                                <p class="event-description">深入解析ASPICE 3.1版本的新特性与变化，帮助汽车行业相关企业了解最新标准要求，提升过程改进效果。</p>
                                <a href="#" class="event-link">查看详情 &rarr;</a>
                            </div>
                        </div>

                        <div class="event-card">
                            <div class="event-image">
                                <img src="@/assets/images/wbq/sw3.jpg" width="400" height="320" />
                            </div>
                            <div class="event-details">
                                <span class="event-date">2025年5月10日</span>
                                <h3 class="event-title">软件过程改进案例分析工作坊</h3>
                                <p class="event-description">通过实际案例分析，探讨软件过程改进的方法、策略与最佳实践，帮助组织有效提升过程成熟度。</p>
                                <a href="#" class="event-link">查看详情 &rarr;</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 活动日历 -->
                <section class="calendar-section">
                    <div class="container">
                        <h2 class="section-title">活动日历</h2>
                        <div class="calendar-grid">
                            <div class="calendar-item">
                                <div class="calendar-date">2025年3月15日</div>
                                <div class="calendar-title">CMMI V2.0实施经验分享沙龙</div>
                                <div class="calendar-location">上海市浦东新区张江高科技园区</div>
                            </div>

                            <div class="calendar-item">
                                <div class="calendar-date">2025年3月28日</div>
                                <div class="calendar-title">CMMI评估员培训交流会</div>
                                <div class="calendar-location">线上活动</div>
                            </div>

                            <div class="calendar-item">
                                <div class="calendar-date">2025年4月12日</div>
                                <div class="calendar-title">企业过程改进经验交流会</div>
                                <div class="calendar-location">北京市海淀区中关村软件园</div>
                            </div>

                            <div class="calendar-item">
                                <div class="calendar-date">2025年4月20日</div>
                                <div class="calendar-title">ASPICE 3.1版本解析线上研讨会</div>
                                <div class="calendar-location">线上活动</div>
                            </div>

                            <div class="calendar-item">
                                <div class="calendar-date">2025年5月10日</div>
                                <div class="calendar-title">软件过程改进案例分析工作坊</div>
                                <div class="calendar-location">深圳市南山区科技园</div>
                            </div>

                            <div class="calendar-item">
                                <div class="calendar-date">2025年5月25日</div>
                                <div class="calendar-title">汽车软件ASPICE认证准备研讨会</div>
                                <div class="calendar-location">上海市嘉定区汽车城</div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 社区贡献 -->
                <section class="community-contribution container">
                    <h2 class="section-title">我们的社区贡献</h2>
                    <div class="contribution-grid">
                        <div class="contribution-item">
                            <div class="contribution-icon">📚</div>
                            <div class="contribution-content">
                                <h3>知识分享</h3>
                                <p>通过技术分享会、白皮书发布和案例研究，我们持续向社区贡献研发管理领域的专业知识，促进行业共同发展。</p>
                            </div>
                        </div>

                        <div class="contribution-item">
                            <div class="contribution-icon">🤝</div>
                            <div class="contribution-content">
                                <h3>行业合作</h3>
                                <p>华赛积极与高校、研究机构和企业合作，共同推动过程改进理论研究与实践创新，建立多方共赢的合作模式。</p>
                            </div>
                        </div>

                        <div class="contribution-item">
                            <div class="contribution-icon">🏆</div>
                            <div class="contribution-content">
                                <h3>标准制定</h3>
                                <p>参与国内外相关标准的研讨与制定，将先进的国际经验与中国企业实际情况相结合，推动本土化最佳实践的形成。</p>
                            </div>
                        </div>

                        <div class="contribution-item">
                            <div class="contribution-icon">🎓</div>
                            <div class="contribution-content">
                                <h3>人才培养</h3>
                                <p>通过实习项目、校企合作和专业培训，我们致力于培养更多研发管理领域的专业人才，满足行业发展需求。</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 历史活动展示 -->
                <section class="container">
                    <h2 class="section-title">精彩回顾</h2>
                    <div class="events-grid">
                        <div class="event-card">
                            <div class="event-image">
                                <img src="@/assets/images/wbq/sw5.jpg" width="400" height="320" />
                            </div>
                            <div class="event-details">
                                <span class="event-date">2024年12月</span>
                                <h3 class="event-title">2024华赛CMMI年度峰会</h3>
                                <p class="event-description">汇聚行业专家与优秀企业代表，共同探讨软件过程改进的未来趋势与创新实践。</p>
                                <a href="#" class="event-link">查看回顾 &rarr;</a>
                            </div>
                        </div>

                        <div class="event-card">
                            <div class="event-image">
                                <img src="@/assets/images/asd.png" width="400" height="320" />
                            </div>
                            <div class="event-details">
                                <span class="event-date">2024年9月</span>
                                <h3 class="event-title">汽车行业ASPICE应用论坛</h3>
                                <p class="event-description">聚焦汽车软件开发，分享ASPICE在智能驾驶、车载系统等关键领域的应用经验。</p>
                                <a href="#" class="event-link">查看回顾 &rarr;</a>
                            </div>
                        </div>

                        <div class="event-card">
                            <div class="event-image">
                                <img src="@/assets/images/wbq/sw1.jpg" width="400" height="320" />
                            </div>
                            <div class="event-details">
                                <span class="event-date">2024年6月</span>
                                <h3 class="event-title">CMMI与敏捷开发融合实践研讨会</h3>
                                <p class="event-description">探索CMMI与敏捷方法的有效结合，助力企业在保证过程质量的同时提升开发效率。</p>
                                <a href="#" class="event-link">查看回顾 &rarr;</a>
                            </div>
                        </div>
                    </div>
                </section>

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
.container {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 20px;
}

.page-header {
    background-color: #007dc6;
    color: white;
    padding: 20px 0;
}

.page-header h1 {
    font-size: 30px;
    margin-bottom: 20px;
}

.page-header p {
    font-size: 16px;
}

.section-title {
    text-align: center;
    margin: 60px 0 40px;
    color: #007dc6;
    position: relative;
}

.section-title:after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: #007dc6;
    margin: 15px auto 0;
}

.events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
}

.event-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.event-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.event-details {
    padding: 20px;
}

.event-date {
    display: inline-block;
    background-color: #007dc6;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    margin-bottom: 10px;
    font-weight: bold;
}

.event-title {
    font-size: 16px;
    margin-bottom: 10px;
    color: #333333;
}

.event-description {
    margin-bottom: 15px;
    color: #666;
}

.event-link {
    display: inline-block;
    color: #007dc6;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
}

.event-link:hover {
    border-color: #007dc6;
}

.calendar-section {
    background-color: #f5f5f5;
    padding: 60px 0;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.calendar-item {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.calendar-date {
    font-weight: bold;
    color: #007dc6;
    margin-bottom: 10px;
}

.calendar-title {
    font-weight: bold;
    margin-bottom: 10px;
}

.community-contribution {
    padding: 60px 0;
}

.contribution-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 30px;
}

.contribution-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}

.contribution-icon {
    width: 60px;
    height: 60px;
    background-color: #007dc6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    flex-shrink: 0;
}

.contribution-content h3 {
    color: #007dc6;
    margin-bottom: 10px;
}

.join-community {
    background-color: #007dc6;
    color: white;
    padding: 80px 0;
    text-align: center;
}

.join-community h2 {
    margin-bottom: 30px;
}

.join-community p {
    max-width: 700px;
    margin: 0 auto 40px;
    font-size: 14px;
}

.join-btn {
    display: inline-block;
    background-color: #ffffff;
    color: #007dc6;
    font-weight: bold;
    padding: 12px 30px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s, transform 0.3s;
}

.join-btn:hover {
    background-color: #ffcc00;
    transform: scale(1.05);
}

.page-footer {
    background-color: #333333;
    color: white;
    padding: 40px 0;
    text-align: center;
}

@media (max-width: 768px) {
    .events-grid {
        grid-template-columns: 1fr;
    }

    .contribution-grid {
        grid-template-columns: 1fr;
    }
}
</style>