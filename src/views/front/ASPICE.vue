<template>
    <div>
        <Nav />

        <!-- <div class="wp1360"> -->
        <!-- <el-image src="@/assets/images/wbq/qc.png" alt="" style="width:100%;height:100%" fit="cover" @error="handleImageError" /> -->
        <!-- <div class="wp1360 banner_wrap">
                <div class="banner_info">
                    <p class="en_font">Automotive Software Process Improvement and Capacity dEtermination</p>
                    <p class="big_font">汽车软件过改进和能力认定</p>
                    <p class="small_font">汽车行业软件开发过程标准、汽车行业软件研发能力水平认定、汽车行业研发类型供应商的必备资质</p>
                    <div class="read_more" @click="()=>{$router.push('/whatAspice')}">【进一步了解ASPICE】</div>
                </div>
            </div> -->
        <!-- </div> -->

        <!-- <div class="sp">
            <div class="wp1360 banner_wrap">
                <div class="banner_info">
                    <p class="en_font">Automotive Software Process Improvement and Capacity dEtermination</p>
                    <p class="big_font">汽车软件过改进和能力认定</p>
                    <p class="small_font">汽车行业软件开发过程标准、汽车行业软件研发能力水平认定、汽车行业研发类型供应商的必备资质</p>
                    <div class="read_more" @click="()=>{$router.push('/whatAspice')}">【进一步了解ASPICE】</div>
                </div>
            </div>
        </div> -->

        <div class="wp1360 p5" style="margin:10px auto">
            <el-card class="card">
                <div class="flex">
                    <img src="@/assets/images/wbq/sw1.jpg" alt="" width="100%">
                    <div style="align-self: flex-start;padding:10px">
                        <h3 class="main_header" style="margin:10px;">
                            什么是ASPICE?
                        </h3>
                        <div class="pg1">
                            ASPICE全称是“Automotive Software Process Improvement and Capacity dEtermination”，汽车软件过程改进及能力评定，是汽车行业用于评价软件开发团队的研发能力水平的模型框架。最初由欧洲20多家主要汽车制造商共同制定，于2005年发布，目的是为了指导汽车零部件研发厂商的软件开发流程，从而改善车载软件的质量。
                        </div>
                        <div class="pg1">
                            多年以来，ASPICE在欧洲汽车行业内被广泛用于研发流程改善及供应商的研发能力评价。
                        </div>
                        <div class="moreBtn" @click="()=>{$router.push('/whatAspice')}">查看更多>></div>
                    </div>
                </div>
            </el-card>
        </div>
        <div class="wp1360 whyBox" style="margin:20px auto">
            <el-card class="card">
                <h3 class="center">
                    为什么要做ASPICE?
                </h3>
                <p class="more" @click="()=>{$router.push('/whyAspice')}" style="font-size:14px;">
                    了解更多>>
                </p>
                <el-row :gutter="20">
                    <el-col :span="12" style="margin-bottom:10px">
                        <div class="whyItem">
                            <img src="@/assets/images/icon/i1.png" alt="" width="60">
                            <div class="res">内部管理改善</div>
                            <div class="dec">实施ASPICE提升软件产品质量和软件项目的可控性。
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="whyItem" style="margin-bottom:10px">
                            <img src="@/assets/images/icon/i3.png" alt="" width="60">
                            <div class="res">主机厂要求</div>
                            <div class="dec">上游车厂对下游供应商的软件开发流程的检查标准。
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="whyItem">
                            <img src="@/assets/images/icon/i9.png" alt="" width="60">
                            <div class="res">相关标准要求</div>
                            <div class="dec">为满足相关研发管理标准提供软件开发流程支撑。
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="whyItem">
                            <img src="@/assets/images/icon/i8.png" alt="" width="60">
                            <div class="res">企业形象
                            </div>
                            <div class="dec">建立规范化管理的企业形象，为客户提供产品质量信心。
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-card>
        </div>

        <Steps />
        <!-- <el-card class="top"> -->

        <div class="wp1360">
            <div class="infoBox">
                <el-card>
                    <div class="card">
                        <div class="lbox">
                            <img src="@/assets/images/wbq/p144.png" alt="" width="100%">
                        </div>
                        <div class="rbox">
                            <div class="rboxi">
                                <el-button type="text" style="font-size:18px;" @click="()=>{$router.push('/whatAspicerz')}"><i class="el-icon-thumb"></i>了解ASPICE认证</el-button>
                            </div>
                            <div class="rboxi">
                                <el-button type="text" style="font-size:18px;" @click="()=>{$router.push('/carryAspicerz')}"><i class="el-icon-discount"></i>ASPICE认证流程</el-button>

                            </div>
                        </div>
                    </div>

                </el-card>
            </div>

        </div>

        <!-- <ind /> -->
        <div>
            <!-- <Adv /> -->
            <Jxal2 />
        </div>

        <div class="wp1360">
            <el-card style="padding:30px">
                <h3 style="font-size:30px">ASPICE与其它标准</h3>
                <div class="center">
                    <img src="@/assets/images/wbq/aspice1.jpg" alt="" width="100%">
                </div>

            </el-card>
        </div>

        <div class="wp1360">
            <div class="ljbox">
                <div class="main_header" style="margin-bottom:30px;">相关链接</div>

                <div class="lj_box">
                    <a href="https://vdaqmc.de/en/" target="_blank">
                        <div class="img_box">
                            <img src="@/assets/images/icon/lj1.png" alt="" width="80%">
                        </div>

                        <div>
                            <el-button type="text" style="font-size:16px;">VDA-QMC</el-button>
                        </div>

                        <div class="lj_dec">ASPICE版权方，考试管理、书籍发行</div>
                        <div class="lj_site">https://vdaqmc.de/en/</div>
                    </a>
                </div>

                <div class="lj_box">
                    <a href="https://intacs.info" target="_blank">
                        <div class="img_box">
                            <img src="@/assets/images/icon/lj2.png" alt="" width="80%">
                        </div>
                        <div>
                            <el-button type="text" style="font-size:16px;">iNtacs</el-button>
                        </div>

                        <div class="lj_dec">ASPIC官方、资质管理、活动发布、社区发展</div>
                        <div class="lj_site">https://intacs.info</div>
                    </a>
                </div>

                <div class="lj_box">
                    <a href="https://www.automotivespice.com" target="_blank">
                        <div class="img_box">
                            <img src="@/assets/images/icon/lj3.png" alt="" width="80%">
                        </div>
                        <div>
                            <el-button type="text" style="font-size:16px;">AutomotiveSpice</el-button>
                        </div>

                        <div class="lj_dec">ASPCIE标准发布网站</div>
                        <div class="lj_site">https://www.automotivespice.com</div>
                    </a>
                </div>

            </div>
        </div>
        <Footer class="top" />
    </div>
</template>

<script>
import Banner from './components/Banner'
import Adv from './components/Adv'
import Steps from './components/Steps3'
import Fea from './components/Fea'
import Ind from './components/Ind'
import Jxal2 from './components/Jxal2'
// import Adv from './components/Adv.vue'
export default {
    name: 'Home',
    components: {
        Banner, // 轮播图
        Adv,
        Steps,
        Fea,
        Jxal2,
        Ind,
    },
    props: {},
    watch: {},
    data() {
        return {
            homeTitle: '',
            homeDescription: '',
            hotlineVisible: false, // 服务支持弹窗
            certificates: [], // 存储证书数据
            qrCodeVisible: false,
            footerData: null,
        }
    },
    mounted() {},
    created() {},
    methods: {
        navigateTo(url) {
            // window.location.href = url;
            this.$router.push(url)
        },
    },
}
</script>

<style lang="less" scoped>
.sp {
    width: 100%;
    height: 500px;
    background-image: url(../../assets/images/wbq/qcff.jpg);
    background-size: 100% 100%;
}
.ljbox {
    margin-bottom: 20px;
}
.lj_box {
    text-align: center;
    margin-bottom: 20px;
    .img_box {
    }
    .lj_dec {
        color: #999;
        font-size: 14px;
    }
    .lj_site {
        color: #999;
    }
}
.infoBox {
    margin: 20px 0;
    .card {
        .lbox {
        }
        .rbox {
            .rboxi {
                height: 100px;
                line-height: 100px;
                text-align: center;
            }
        }
    }
}
/deep/ .infoBox .el-card__body {
    padding: 0;
}
.whyBox {
    margin-top: 20px;

    .card {
        background: #f5f6f7;
    }
    h3 {
        font-size: 20px;
        margin: 10px 0 20px;
    }
    .more {
        text-align: right;
        color: #666;
        margin: 0 0 20px;
        cursor: pointer;
    }
    .whyItem {
        background: #fff;
        text-align: center;
        padding: 10px 20px;
        height: 230px;
        cursor: pointer;
        img {
            margin-top: 10px;
        }
        .res {
            color: #000;
            margin: 0 0 20px;
        }
        .dec {
            color: #666;
            font-size: 14px;
            text-align: left;
        }
    }
}
.banner_wrap {
    position: relative;
    color: #fff;
    height: 480px;
    width: 1360px;
    .banner_info {
        position: absolute;
        padding: 20px;
        left: 0;
        top: 30px;
        z-index: 9;
        height: 480px;
        width: 100%;
        color: #fff;
        .en_font {
            font-size: 30px;
        }
        .big_font {
            font-size: 38px;
        }
        .read_more {
            position: absolute;
            bottom: 30px;
            right: 20px;
            cursor: pointer;
        }
    }
}

.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 20px;
    margin-top: 75px;

    @media (max-width: 768px) {
        padding: 10px;
        margin-top: 60px;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
}

.container {
    flex: 1;
    margin-bottom: 100px;
}

.introduce {
    margin: 20px 0;
    text-align: center;
}

.center {
    text-align: center;
}

.about-us {
    margin: 40px 0;
    text-align: center;

    h2 {
        font-size: 24px;
        margin-bottom: 20px;
        position: relative;
    }

    h2::after {
        content: '';
        display: block;
        width: 50px;
        height: 2px;
        background: red;
        margin: 10px auto 0;
    }

    p {
        font-size: 16px;
        color: #666;
        margin-bottom: 40px;
    }
}

.features {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .feature {
        width: 200px;
        text-align: center;
        margin-bottom: 20px;

        .feature-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        }

        h3 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            color: #666;
        }
    }
}

/* 新增样式 */
.info-services {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px 0;

    .service {
        width: 200px;
        text-align: center;
        cursor: pointer;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.05);
        }

        .service-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        }

        h3 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            color: #666;
        }
    }
}

.full-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.scrolling-container {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: relative;
}

.scrolling-content {
    display: inline-block;
    animation: scroll 20s linear infinite;
    text-align: center;
    margin: 0 10px;
}

.certificate-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .scrolling-content {
        animation: scroll 10s linear infinite;
    }
}

@keyframes scroll {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.qr-code-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        margin-top: 10px;
        font-size: 14px;
        color: #666;
    }
}
</style>