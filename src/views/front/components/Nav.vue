<template>
    <div class="nav" @mouseleave="menuhide">

        <div class="container">
            <div class="logo">
                <img src="@/assets/images/fav.png" alt="logo" height="30px" width="30px">
                <div>
                    <p class="cn">深圳华赛信息咨询有限公司</p>
                    <!-- <p class="en">Shenzhen Huasai lnformation Consulting Co.,Ltd</p> -->
                </div>
                <!-- <div v-else style="font-size:26px;margin-right:50px" @click="$router.push('/home')">logo</div> -->

            </div>
            <div class="menubtn">
                <img src="@/assets/images/icon/i3.png" alt="企业图标" width="30" height="30" @click="show=true">
            </div>
            <!-- <div class="nav-items">
                <div v-for="(item, i) in navList" :key="i" @click="toDetail(item, i)" :class="['nav-item', { 'active': $route.path === item.path }]" @mouseover="menuChange(item)" @mouseleave="menuLeave(item)">
                    <span>{{ item.name }}</span>
                </div>
            </div> -->

        </div>
        <van-overlay :show="show">
            <div style="display:flex">
                <div style="width:20%;height:100vh;" @click="show = false">

                </div>
                <div style="width:80%;height:100vh;background:#fff;padding:20px;" class="mmenu">
                    <!-- <van-collapse v-model="activeNames">
                        <van-collapse-item v-for="(item, i) in navList" :key="i" :title="item.name" :name="item.name">{{item.name}}</van-collapse-item>
                        <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
                        <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
                    </van-collapse> -->
                    <div v-for="(item, i) in navList" :key="i" @click="toDetail(item, i)" class="mmenuItem">
                        <div class="mmenuItemM">
                            <span>{{ item.name }}</span>
                            <img src="@/assets/images/icon/+.png" v-if="item.subMenu" @click="item.showsub = !item.showsub">
                        </div>
                        <template v-if="item.subMenu && item.showsub">
                            <!-- <transition name="fade"> -->
                            <div v-for="mm in item.subMenu" class="msubmenu" @click="toDetail(mm, i)">
                                {{ mm.name }}
                            </div>
                            <!-- </transition> -->
                        </template>

                    </div>
                </div>

            </div>

        </van-overlay>
        <!-- <template v-for="mm in navList">
            <template v-if="mm.name === '关于华赛'||mm.name === '华赛业务'">
                <transition name="fade">
                    <div class="subBox" v-show="mm.showSub&&subMenuData.name===mm.name">
                        <div style="width:50%;text-align:right;margin:40px;display: flex;justify-content: flex-end;align-self: center;">
                            <div style="">
                                <div v-for="subItme in subList" class="subItem" @click="routeto(subItme.path)">
                                    {{subItme.name}}
                                </div>
                            </div>

                        </div>
                        <div style="width:50%;margin-left:40px;background:#eee;padding:10px 40px;">
                            <img :src="require(`@/assets${pic}`)" alt="" width="400" height="" style="margin:60px">
                        </div>
                    </div>
                </transition>
            </template>
            <template v-if="mm.name === '社区建设'||mm.name === '华赛研究'">
                <transition name="fade">
                    <div class="subBox" v-show="mm.showSub&&subMenuData.name===mm.name">
                        <div style="width:50%;text-align:right;background:#eee;padding:10px 40px;">
                            <img :src="require(`@/assets${pic}`)" alt="" width="400" height="" style="margin:60px">
                        </div>
                        <div style="width:50%;text-align:left;margin:40px;display: flex;justify-content: flex-start;align-self: center;">
                            <div style="">
                                <div v-for="subItme in subList" class="subItem" @click="routeto(subItme.path)">
                                    {{subItme.name}}
                                </div>
                            </div>

                        </div>

                    </div>
                </transition>
            </template>
        </template> -->
        <!-- <van-overlay :show="show" @click="show = false" /> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { menuList, menuLista } from '@/config/index'

export default {
    name: 'Nav',
    data() {
        return {
            show: false,
            activeNames: [],
            navList: [],
            pic: '/images/banner1.jpg',
            showSub: false,
            subMenuData: {},
            subList: [{}],
            register: {},
            subType: 1,
            isLogin: null,
            logoImage: null, // 新增 logoImage 数据属性
        }
    },
    computed: {
        ...mapGetters(['avatar', 'name', 'roles', 'isPay']),
    },
    mounted() {
        this.isLogin = localStorage.getItem('token') ? true : false
        const cachedFooterData = localStorage.getItem('footerData')
        if (cachedFooterData) {
            const footerData = JSON.parse(cachedFooterData)
            this.$nextTick(() => {
                this.logoImage = footerData.beianImage // 从缓存中读取 beianImage
            })
        }
        this.$store.dispatch('setType')
        this.navList =
            this.$store.state.type === 'aspice' ? menuLista : menuList
    },

    methods: {
        menuLeave() {
            console.log('__@@')
            // this.showSub = false
        },
        menuChange(item) {
            console.log('__')
            // this.showSub = false
            this.subMenuData = item
            // setTimeout(() => {
            if (item.subMenu) {
                this.subList = item.subMenu
                if (item.pic) {
                    this.pic = item.pic
                }
                item.showSub = true
                this.showSub = true
            } else {
                item.showSub = false
                this.showSub = false
            }
            // if (item.name === '华赛业务' ||item.name === 'guabyu')
            // }, 100)
        },
        menuhide() {
            this.subList = []
            this.showSub = false
            this.navList.forEach((e) => {
                e.showSub = false
            })
        },
        routeto(path) {
            if (path) {
                this.$router.push(path)
            }
        },
        login(e) {
            if (e == 'add') {
                this.$router.push('/register')
            } else {
                this.$router.push('/login')
            }
        },
        info() {
            this.$router.push({
                path: '/info',
            })
        },
        toDetail(item, i) {
            if (item.path) {
                this.$router.push({
                    path: item.path,
                })
            } else {
                // console.log(item.showsub)
                // item.showsub = !item.showsub
            }
        },
    },
}
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}
.mmenu {
    .mmenuItem {
        .mmenuItemM {
            line-height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 900;
            img {
                width: 16px;
                height: 16px;
            }
        }
    }
    .msubmenu {
        padding-left: 20px;
        color: #333;
        font-size: 14px;
        line-height: 33px;
    }
}
.nav {
    position: fixed;
    top: 0;
    height: 56px;
    z-index: 100;
    background: #ffffff;
    width: 100vw;
    margin: 0 auto;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .subBox {
        position: absolute;
        width: 100%;
        height: 400px;
        background: #007dc6;
        display: flex;
        color: #fff;
        .subItem {
            cursor: pointer;
            margin-bottom: 20px;
        }
    }
    .container {
        width: 100%; // 增加容器宽度
        margin: 0 auto;
        display: flex;
        justify-content: space-between; // 使用 space-between 来分配空间
        align-items: center; // 垂直居中对齐
        height: 56px;
        line-height: 56px;
        .logo {
            display: flex;
            align-items: center;
            img {
                margin: 0 5px 0 0;
            }
            .cn {
                font-size: 16px;
            }
            .en {
                font-size: 12px;
            }
        }
        .menubtn {
            line-height: 56px;
            display: flex;
            vertical-align: middle;
        }
        .nav-items {
            display: flex;
            flex-wrap: nowrap;
            position: relative;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* Internet Explorer 10+ */

            &::-webkit-scrollbar {
                display: none; /* WebKit */
            }
        }

        .nav-item {
            flex: 0 0 auto;
            padding: 0 30px;
            height: 90px;
            line-height: 90px;
            text-align: center;
            cursor: pointer;
            white-space: nowrap;
            transition: color 0.3s;

            &:hover,
            &.active {
                color: #4c88ff;
            }
        }

        .login {
            display: flex;
            align-items: center;

            .loginOut {
                line-height: 72px;

                .user-avatar {
                    cursor: pointer;
                    width: 20px;
                    height: 20px;
                    border-radius: 10px;
                    margin: -5px 0 0 5px;
                }

                .avatar-wrapper {
                    display: flex;
                    align-items: center;
                    height: 72px;
                }
            }

            .btn {
                display: flex;

                div {
                    width: 50px;
                    height: 72px;
                    line-height: 72px;
                    text-align: center;
                    cursor: pointer;
                }
            }
        }
        .tel_box {
            label {
                width: 120px;
                display: inline-block;
                text-align: justify;
                text-align-last: justify;
            }
            .tel {
                width: 145ind_header2px;
                display: inline-block;
                text-align: justify;
                text-align-last: justify;
                color: #e86a1e;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }

    .active {
        color: rgb(0, 125, 198);
    }
}
</style>