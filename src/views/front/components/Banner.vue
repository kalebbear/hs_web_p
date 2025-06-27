<template>
    <div class="banner_wrap">
        <el-carousel :interval="5000" :height="carouselHeight" :initial-index="banner_index" arrow="nerver" indicator-position="none">
            <el-carousel-item v-for="(item, index) in swiperList" :key="index">
                <el-image :src="item.imageUrl" alt="" style="width:100%;height:100%" fit="cover" @error="handleImageError" />
                <div>
                    <div class="banner_info" v-if="(index===0 &&type=== 0)||type===1">
                        <p class="big_font">Capability Maturity Model (Integration)</p>
                        <p class="big_font">能力成熟度模型（集成）</p>
                        <p class="small_font">研发管理提升之道，过程改进指导模型、研发管理国际标准</p>
                        <div class="read_more" @click="()=>{$router.push('/cmmijs')}">了解CMMI</div>
                    </div>
                    <div class="banner_info" v-if="(index===1&&type=== 0)||type===2">
                        <p class="big_font">CMMI资质认证</p>
                        <p class="small_font" style="margin-top:20px">研发管理国际标准、研发能力水平认定、研发类供应商的必备资质</p>
                        <div class="read_more" @click="()=>{$router.push('/whatCMMI')}">【查看更多】</div>
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
                    imageUrl: require('@/assets/images/wbq/dl.png'),
                    index: 0,
                },
                {
                    imageUrl: require('@/assets/images/wbq/zx.png'),
                    index: 1,
                },
                // {
                //     imageUrl: require('@/assets/images/banner3.jpg'),
                //     index: 2,
                // },
            ],
            carouselHeight: '500px', // 默认高度
        }
    },

    mounted() {
        console.log('Component mounted') // 确认组件挂载
        if (this.type === 1) {
            this.swiperList = [this.swiperList[0]]
        }
        if (this.type === 2) {
            this.swiperList = [this.swiperList[1]]
        }
        window.addEventListener('resize', this.setCarouselHeight)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.setCarouselHeight)
    },
    methods: {
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
.banner_wrap {
    position: relative;
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
            font-size: 36px;
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
    .el-carousel {
        height: 200px;
    }

    .el-image {
        object-position: center; // 确保图片居中显示
    }
}
</style>