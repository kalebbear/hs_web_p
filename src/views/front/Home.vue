<template>
    <div>
        <Nav />
        <!-- <Banner :type="1" /> -->

        <div class="wp1360" style="margin:20px auto">
            <el-card class="card">
                <div class="flex">
                    <img src="@/assets/images/wbq/sw5.jpg" alt="" height="280">
                    <div style="align-self: flex-start;padding:20px">
                        <h3 class="main_header" style="margin:10px;">
                            什么是CMMI?
                        </h3>
                        <div class="pg1">
                            CMMI（Capability Maturity Model Integration）即能力成熟度模型集成，其前身为CMM，原本是当年美国军方为了评估自己的软件产品供应商的过程质量水平，而委托美国卡内基梅隆大学软件工程学院（SEI）开发的一套过程评估体系，后来又被推广到全世界，成为全球软件企业重要的过程改进方法之一，后因其衍生品的派系林立（如：SW-CMM、SE-CMM、IPT-CMM等等），SEI决定在SW-CMM、SE-CMM的基础上，加入委外采购、IPPD等相关内容，并融合ISO9000部分理念，形成了今天我们看到的CMMI，这也就是CMMI中的“I”的由来。
                        </div>
                        <div class="moreBtn" @click="()=>{$router.push('/cmmijs')}">查看更多>></div>
                    </div>
                </div>
            </el-card>
        </div>

        <div class="wp1360">
            <Adv />
        </div>

        <Steps />
        <!-- <el-card class="top"> -->
        <Fea />
        <!-- </el-card> -->

        <ind />
        <div>
            <!-- <Adv /> -->
            <Jxal />
        </div>

        <div class="wp1360" style="overflow:visible;">
            <el-card class="top" style="background:#;">
                <div style="">
                    <img src="@/assets/images/fa.jpg" alt="" class="service-icon" width="100%" />
                    <div style="padding:20px;position:relative">
                        <div style="font-size:20px; text-align:center;font-weight:bold;margin-bottom:10px">典型案例</div>
                        <div style="font-size:14px; text-align:left;text-indent: 2rem;color: #666;line-height: 28px;">
                            某通讯电子产品研发企业实施IPD三年多来，取得了一定的成效。在产品层面已有了良好的总体规划和掌控，但对专业领域级别工作的可控性不强，经常出现进度一再延期、产品质量不能达标等问题。为了进一步提升其研发管理水平，决定导入CMMI，巩固和深化其IPD实施成效。
                        </div>
                        <div style="font-size:14px; text-align:right;color: #666;line-height: 32px;cursor:pointer;" @click="$router.push('/al')">更多>></div>
                    </div>
                </div>
            </el-card>
        </div>
        <Footer class="top" />
    </div>
</template>

<script>
import Banner from './components/Banner'
import Adv from './components/Adv'
import Steps from './components/Steps'
import Fea from './components/Fea'
import Ind from './components/Ind'
// import Adv from './components/Adv.vue'
export default {
    name: 'Home',
    components: {
        Banner, // 轮播图
        Adv,
        Steps,
        Fea,
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
        showHotline() {
            this.hotlineVisible = true
        },
        copyToClipboard(text) {
            const input = document.createElement('input')
            input.value = text
            document.body.appendChild(input)
            input.select()
            document.execCommand('copy')
            document.body.removeChild(input)
            this.$message.success('复制成功')
        },

        showQRCode() {
            this.qrCodeVisible = true
        },
    },
}
</script>

<style lang="less" scoped>
.hotline-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hotline-text {
    font-size: 18px;
    /* Increase font size */
    user-select: text;
    /* Make text selectable */
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