<template>
    <div class="banner_wrap2">
        <!-- <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">111</h3>
            </el-carousel-item>
        </el-carousel> -->
        <div class="wp1360 hheader">
            <h3>汽车行业各种软件产品
                <div style="float:right;margin-top:5px">
                    <img src="@/assets/images/banners/l.png" alt="" width="20" @click="prev">
                    <img src="@/assets/images/banners/r.png" alt="" width="20" @click="next">

                </div>
            </h3>
            <div class="dec_box">
                <div>
                    <div>华赛公司的客户包括主机厂、Tier1、Tier2等各种类型的厂商</div>
                    <div>业务覆盖自动驾驶、新能源汽车和互联网汽车等各种产品类型
                    </div>
                </div>

            </div>
        </div>
        <el-carousel :interval="5000" :height="carouselHeight" :initial-index="banner_index" type="card" arrow="nerver" indicator-position="none" ref="banner1">
            <el-carousel-item v-for="(item, index) in swiperList" :key="index">
                <div class="inner">
                    <el-image :src="item.imageUrl" alt="" style="width:100%;" fit="" @error="handleImageError" height="" />
                    <div class="dec">
                        <h3 class="header">{{item.title}}</h3>
                        <!-- <div style="line-height:28px;">{{item.dec}}</div> -->
                    </div>
                </div>

            </el-carousel-item>

        </el-carousel>

    </div>
</template>

<script>
import { getSwiperList } from '@/api/index.js' // 导入API方法

export default {
    name: 'Banner',
    components: {},
    props: {
        type: 0,
    },
    watch: {},
    data() {
        return {
            banner_index: 0,
            swiperList: [
                {
                    imageUrl: require('@/assets/images/wbq/2_副本.jpg'),
                    index: 0,
                    title: '自动驾驶',
                    dec: '华赛为某省级医疗信息化平台提供了全面的CMMI 3级认证咨询与实施服务。在项目中，华赛团队结合医疗行业的特殊需求，对平台的软件开发流程进行了系统优化，重点改进了需求管理、项目策划和质量保证等关键环节。通过引入标准化流程和工具，平台的开发效率显著提升，软件质量得到保障。',
                },
                {
                    imageUrl: require('@/assets/images/wbq/qc111.png'),
                    index: 0,
                    title: '智能座舱',
                    dec: '华赛为某省级医疗信息化平台提供了全面的CMMI 3级认证咨询与实施服务。在项目中，华赛团队结合医疗行业的特殊需求，对平台的软件开发流程进行了系统优化，重点改进了需求管理、项目策划和质量保证等关键环节。通过引入标准化流程和工具，平台的开发效率显著提升，软件质量得到保障。',
                },
                {
                    imageUrl: require('@/assets/images/wbq/p144.png'),
                    index: 0,
                    title: 'T-BOX车载智能互联终端',
                    dec: '华赛为某省级医疗信息化平台提供了全面的CMMI 3级认证咨询与实施服务。在项目中，华赛团队结合医疗行业的特殊需求，对平台的软件开发流程进行了系统优化，重点改进了需求管理、项目策划和质量保证等关键环节。通过引入标准化流程和工具，平台的开发效率显著提升，软件质量得到保障。',
                },
                {
                    imageUrl: require('@/assets/images/wbq/bb1.jpg'),
                    index: 0,
                    title: 'BSM电池管理系统',
                    dec: '华赛为某省级医疗信息化平台提供了全面的CMMI 3级认证咨询与实施服务。在项目中，华赛团队结合医疗行业的特殊需求，对平台的软件开发流程进行了系统优化，重点改进了需求管理、项目策划和质量保证等关键环节。通过引入标准化流程和工具，平台的开发效率显著提升，软件质量得到保障。',
                },
                {
                    imageUrl: require('@/assets/images/wbq/jr.png'),
                    index: 0,
                    title: 'MCU电机控制器',
                    dec: '华赛为某省级医疗信息化平台提供了全面的CMMI 3级认证咨询与实施服务。在项目中，华赛团队结合医疗行业的特殊需求，对平台的软件开发流程进行了系统优化，重点改进了需求管理、项目策划和质量保证等关键环节。通过引入标准化流程和工具，平台的开发效率显著提升，软件质量得到保障。',
                },
                {
                    imageUrl: require('@/assets/images/abanners/11111.jpg'),
                    index: 0,
                    title: 'VCU整车控制器',
                    dec: '华赛为某省级医疗信息化平台提供了全面的CMMI 3级认证咨询与实施服务。在项目中，华赛团队结合医疗行业的特殊需求，对平台的软件开发流程进行了系统优化，重点改进了需求管理、项目策划和质量保证等关键环节。通过引入标准化流程和工具，平台的开发效率显著提升，软件质量得到保障。',
                },
                {
                    imageUrl: require('@/assets/images/abanners/111.png'),
                    index: 0,
                    title: '中控系统',
                    dec: '华赛为某省级医疗信息化平台提供了全面的CMMI 3级认证咨询与实施服务。在项目中，华赛团队结合医疗行业的特殊需求，对平台的软件开发流程进行了系统优化，重点改进了需求管理、项目策划和质量保证等关键环节。通过引入标准化流程和工具，平台的开发效率显著提升，软件质量得到保障。',
                },
                {
                    imageUrl: require('@/assets/images/abanners/111.jpg'),
                    index: 0,
                    title: '仪表盘',
                    dec: '华赛为某省级医疗信息化平台提供了全面的CMMI 3级认证咨询与实施服务。在项目中，华赛团队结合医疗行业的特殊需求，对平台的软件开发流程进行了系统优化，重点改进了需求管理、项目策划和质量保证等关键环节。通过引入标准化流程和工具，平台的开发效率显著提升，软件质量得到保障。',
                },
                {
                    imageUrl: require('@/assets/images/wbq/pqc.png'),
                    index: 0,
                    title: '高精度定位',
                    dec: '华赛为某省级医疗信息化平台提供了全面的CMMI 3级认证咨询与实施服务。在项目中，华赛团队结合医疗行业的特殊需求，对平台的软件开发流程进行了系统优化，重点改进了需求管理、项目策划和质量保证等关键环节。通过引入标准化流程和工具，平台的开发效率显著提升，软件质量得到保障。',
                },
            ],
            carouselHeight: '128px', // 默认高度
        }
    },

    mounted() {
        window.addEventListener('resize', this.setCarouselHeight)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.setCarouselHeight)
    },
    methods: {
        prev() {
            this.$refs.banner1.prev()
        },
        next() {
            this.$refs.banner1.next()
        },
        handleImageError(event) {
            console.error('图片加载失败:', event.target.src)
            // event.target.src = require('@/assets/banner/default.jpg') // 替换为默认图片路径
        },
        setCarouselHeight() {
            if (window.innerWidth <= 768) {
                this.carouselHeight = '200px' // 将移动端高度调整为200px
            } else {
                this.carouselHeight = '500px'
            }
        },
    },
}
</script>

<style lang="less" scoped>
.inner {
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    .dec {
        padding: 10px;

        h3 {
            font-size: 14px;
            color: #666;
            font-weight: normal;
        }
        div {
            font-size: 14px;
            color: #666;
            margin-bottom: 120px;
        }
    }
}
.banner_wrap2 {
    background: #f5f6f7;
    position: relative;
    padding: 20px 0;

    .hheader {
        h3 {
            font-size: 20px;
        }
        .dec_box {
            color: #999;
            margin-bottom: 20px;
            font-size: 14px;
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            img {
                cursor: pointer;
            }
        }
    }
    .banner_info {
        position: absolute;
        padding: 20px;
        right: 0;
        bottom: 0;
        z-index: 999;
        height: 230px;
        width: 700px;
        color: #fff;
        .big_font {
            font-size: 20px;
        }
        .read_more {
            position: absolute;
            bottom: 30px;
            right: 100px;
            cursor: pointer;
        }
    }
}
.banner_box {
    img {
        width: 100%;
        height: 600px;
    }
}
.banner {
    width: 100%;
    overflow: hidden;
}

.el-carousel {
    width: 100%;
}

.el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.el-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {
    .el-image {
    }
}
</style>