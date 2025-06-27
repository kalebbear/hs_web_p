<template>
    <div class="footer">
        <div class="container">

            <!-- <div class="flex" style="align-items: flex-start;">
                <div class="info" v-for="(footerData,i) in footList" :key="i">
                    <div class="aMenu">{{ footerData.name }}</div>
                    <div v-if="footerData.subMenu" class="bMenu">
                        <div v-for="subItem in footerData.subMenu" @click="$router.push(subItem.path)">{{subItem.name}}</div>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="other">
            <div class="center">
                <div>咨询热线：0755-29656825
                </div>
                <div>
                    法律声明 &nbsp;&nbsp;&nbsp; 知识产权 &nbsp;&nbsp;&nbsp; ©2010-2025 &nbsp;&nbsp; 深圳华赛版权所有 <a class="item" :href="'https://beian.mps.gov.cn/#/query/webSearch'" target="_blank">粤ICP备 10030527 号</a><img class="img" src="@/assets/beian.png" alt="" style="width: 20px; height: 20px">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getFooterData } from '@/api/index'
import { footList } from '@/config/index'
export default {
    name: 'Footer',

    data() {
        return {
            footList: footList,
            footerData: {
                phone: '123-456-7890',
                email: 'example@example.com',
                address: '默认地址',
                weChatImage: 'default-wechat-image.png',
                icp: '默认ICP',
                beianImage: 'default-beian-image.png',
                publicSecurity: '默认公安信息',
                copyright: '© 2023 默认版权',
            },
        }
    },

    mounted() {
        // 获取缓存的数据
        // const cachedFooterData = localStorage.getItem('footerData')
        // // 如果有缓存的数据，则使用缓存的数据
        // if (cachedFooterData) {
        //     this.footerData = JSON.parse(cachedFooterData)
        // } else {
        //     this.fetchFooterData()
        // }
    },

    methods: {
        // 获取Footer数据
        async fetchFooterData() {
            try {
                // 获取Footer数据
                const response = await getFooterData()
                // 如果请求成功，且数据不为空，则更新数据
                if (response.code === 0 && response.data.length > 0) {
                    this.footerData = response.data[0]
                    // 将数据缓存到localStorage
                    localStorage.setItem(
                        'footerData',
                        JSON.stringify(this.footerData)
                    )
                } else {
                    console.error(
                        'Failed to fetch footer data:',
                        response.message
                    )
                }
            } catch (error) {
                console.error('Failed to fetch footer data:', error)
            }
        },
    },
}
</script>

<style lang="less" scoped>
.footer {
    background: #282c2f;
    padding: 30px 0 0;
    width: 100vw;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    .container {
        margin: 0 auto;
        max-width: 1360px;
        color: #fff;
        .info {
            line-height: 30px;

            .el-icon-location-information,
            .el-icon-message,
            .el-icon-phone {
                margin-right: 5px;
            }

            .el-icon-location-information {
                margin-left: -1px;
            }
        }
        .aMenu {
            font-size: 16px;
        }
        .bMenu {
            font-size: 14px;
            color: #888;
            cursor: pointer;
        }
    }
    .other {
        background: #69645fc2;
        padding: 10px;
        color: #fff;
        font-size: 14px;
        a {
            color: #fff;
        }
    }
    @media (max-width: 768px) {
        .container {
            padding: 0 10px;
        }
        .info {
            font-size: 12px;
        }
        .other {
            .item,
            .copyright {
                font-size: 12px;
            }
        }
    }
}
</style>