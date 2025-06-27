<template>
    <div class="ind_wrap p5">
        <!-- <el-card shadow="hover" style="padding:0"> -->
        <div style="padding:20px">
            <div class="ind_header">全行业解决方案
            </div>
            <div class="ind_header2">华赛公司为上千家企业提供过研发管理咨询服务，涉及到各行各业</div>
            <div class="hy_box">
                <div v-for="(item,i) in swiperList" :key="i" class="hy_item" @click="changeBanner(i)">
                    <img :src="item.icon" alt="" width="20" height="20">
                    <!-- <div>{{item.label}}</div> -->
                </div>
                <div class="hy_item" @click="readMore">
                    <img :src="require('@/assets/images/icon/more.png')" alt="" width="20" height="20">
                    <!-- <div>查看更多</div> -->
                </div>
            </div>
        </div>

        <el-carousel :interval="5000" ref="banner" arrow="always" :height="carouselHeight" @change="bannerChange">
            <el-carousel-item v-for="(item, index) in swiperList" :key="index">
                <el-image :src="item.imageUrl" alt="" fit="cover" @error="handleImageError" style="height:230px" />
                <div>
                    <div class="ind_info">
                        <p class="big_font">{{swiperList[banner_index].label}}行业解决方案</p>
                        <p class="small_font">研发管理提升之道，过程改进指导模型、研发管理国际标准</p>
                    </div>
                </div>

            </el-carousel-item>

        </el-carousel>
        <!-- </el-card> -->
    </div>
</template>

<script>
import { getSwiperList } from '@/api/index.js' // 导入API方法

export default {
    name: 'Banner',
    components: {},
    props: {},
    watch: {},
    data() {
        return {
            banner_index: 0,
            swiperList: [
                {
                    imageUrl: require('@/assets/images/wbq/qc.png'),
                    icon: require('@/assets/images/icon/qiche.png'),
                    index: 0,
                    label: '汽车',
                    dec: '助力汽车行业业务的展开，提升移动办公效率',
                },
                {
                    imageUrl: require('@/assets/images/wbq/jr.png'),
                    icon: require('@/assets/images/icon/jinrong.png'),
                    index: 1,
                    label: '金融',
                    dec: '助力汽车行业业务的展开，提升移动办公效率',
                },
                {
                    imageUrl: require('@/assets/images/wbq/p11.jpg'),
                    icon: require('@/assets/images/icon/yiliao.png'),
                    index: 2,
                    label: '医疗',
                    dec: '助力汽车行业业务的展开，提升移动办公效率',
                },
                {
                    imageUrl: require('@/assets/images/wbq/dl.png'),
                    icon: require('@/assets/images/icon/dianli.png'),
                    index: 3,
                    label: '电力',
                    dec: '助力汽车行业业务的展开，提升移动办公效率',
                },
                {
                    imageUrl: require('@/assets/images/wbq/p2.jpg'),
                    icon: require('@/assets/images/icon/wangzhan.png'),
                    index: 4,
                    label: '互联网',
                    dec: '助力汽车行业业务的展开，提升移动办公效率',
                },
                {
                    imageUrl: require('@/assets/images/wbq/rgzn.png'),
                    icon: require('@/assets/images/icon/rgzn.png'),
                    index: 5,
                    label: '人工智能',
                    dec: '助力汽车行业业务的展开，提升移动办公效率',
                },
                // {
                //     imageUrl: require('@/assets/images/banner3.jpg'),
                //     index: 2,
                // },
            ],
            carouselHeight: '230px', // 默认高度
        }
    },

    mounted() {
        console.log('Component mounted') // 确认组件挂载

        window.addEventListener('resize', this.setCarouselHeight)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.setCarouselHeight)
    },
    methods: {
        changeBanner(i) {
            this.banner_index = i
            this.$refs.banner.setActiveItem(i)
        },
        readMore() {
            this.$router.push('/hy')
        },
        bannerChange(i) {
            this.banner_index = i
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
.ind_wrap {
    margin: 10px auto;
    position: relative;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .ind_info {
        position: absolute;
        padding: 10px;
        left: 10px;
        bottom: 10px;
        z-index: 999;
        color: #fff;
        .big_font {
            font-size: 16px;
        }
        .small_font {
            margin-top: 10px;
            font-size: 14px;
        }
        .read_more {
            position: absolute;
            bottom: 10px;
            right: 20px;
            cursor: pointer;
        }
    }
    .ind_header {
        font-size: 20px;
        font-weight: bold;
    }
    .ind_header2 {
        font-size: 14px;
        color: #666;
        margin: 10px 0 20px;
    }
    .el-card__body {
        padding: 0 !important;
    }
    .hy_box {
        display: flex;
        margin-bottom: 10px;
        font-size: 14px;
        .hy_item {
            margin-right: 40px;
            text-align: center;
            cursor: pointer;
        }
    }
}
.banner_box {
    img {
        width: 100%;
        height: 230px;
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
</style>