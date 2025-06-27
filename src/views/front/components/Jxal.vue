<template>
    <div class="banner_wrap2 p5">
        <!-- <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">111</h3>
            </el-carousel-item>
        </el-carousel> -->
        <div class="wp1360 hheader" style="padding: 0 20px;">
            <h3>精选行业应用案例</h3>
            <div class="dec_box">

                <div>专业的软件定制能力，深度匹配企业需求</div>
                <div>
                    <img src="@/assets/images/banners/l.png" alt="" width="20" @click="prev">
                    <img src="@/assets/images/banners/r.png" alt="" width="20" @click="next">

                </div>
            </div>
        </div>
        <el-carousel :interval="5000" :height="carouselHeight" :initial-index="banner_index" type="" arrow="nerver" indicator-position="none" ref="banner1">
            <el-carousel-item v-for="(item, index) in swiperList" :key="index">
                <div class="inner">
                    <el-image :src="item.imageUrl" alt="" style="width:100%;" fit="cover" @error="handleImageError" />
                    <div class="dec">
                        <h3 class="header">{{item.title}}</h3>
                        <div style="line-height:24px;">{{item.dec}}</div>
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
        blist: [],
    },
    watch: {},
    data() {
        return {
            banner_index: 0,
            swiperList: [
                {
                    imageUrl: require('@/assets/images/banners/bb1.jpg'),
                    index: 0,
                    title: '华赛助力某省级医疗信息化平台通过CMMI 3级认证',
                    dec: '华赛为某省级医疗信息化平台提供了全面的CMMI 3级认证咨询与实施服务。在项目中，华赛团队结合医疗行业的特殊需求，对平台的软件开发流程进行了系统优化，重点改进了需求管理、项目策划和质量保证等关键环节。通过引入标准化流程和工具，平台的开发效率显著提升，软件质量得到保障。',
                },
                {
                    imageUrl: require('@/assets/images/banners/bb2.jpg'),
                    index: 1,
                    title: '华赛助力某在线教育平台优化研发流程',
                    dec: '华赛为某知名在线教育平台提供了基于CMMI的流程优化服务。该平台拥有海量的在线课程和用户，但随着业务的快速增长，原有的研发流程逐渐暴露出效率瓶颈。华赛团队结合CMMI模型，对其软件开发流程进行了全面梳理，优化了需求管理、项目策划、质量保证和配置管理等关键环节。通过引入敏捷开发方法和自动化测试工具，平台的开发周期缩短了30%，软件缺陷率降低了40%。',
                },
                {
                    imageUrl: require('@/assets/images/banners/bb3.jpg'),
                    index: 3,
                    title: '华赛助力某金融科技公司通过CMMI 5级认证',
                    dec: '华赛为某金融科技公司提供了CMMI 5级认证的全程咨询与实施支持。通过深入分析公司业务需求和技术现状，华赛为其设计了一套完整的流程改进方案，涵盖需求管理、项目策划、质量保证等多个关键领域。在实施过程中，华赛引入先进的量化管理工具，帮助公司实现了对软件开发过程的精细化监控和持续优化。',
                },
                {
                    imageUrl: require('@/assets/images/banners/bb5.jpg'),
                    index: 3,
                    title: '华赛助力某互联网教育平台通过CMMI 5级认证',
                    dec: '华赛为某互联网教育平台提供了CMMI 5级认证的全程咨询与实施服务。该平台通过在线课程和互动学习工具，为全球用户提供优质的教育资源。华赛团队结合互联网教育行业的特点，对平台的软件开发流程进行了深度优化，引入了先进的量化管理和过程优化工具。通过持续改进，平台在用户体验、课程更新效率、系统稳定性等方面均取得了显著提升。',
                },
            ],
            carouselHeight: '380px', // 默认高度
        }
    },

    mounted() {
        if (this.blist && this.blist.length) {
            console.log('hasblist')
            this.swiperList = [...this.blist]
        }
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
        padding: 20px 32px 30px;

        h3 {
            font-size: 14px;
            margin: 0 0 10px;
        }
        div {
            font-size: 14px;
            color: #666;
            margin-bottom: 20px;
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
            color: #666;
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
        object-position: center; // 确保图片居中显示
    }
}
/deep/ .el-carousel__container {
    height: 330px !important;
}
</style>