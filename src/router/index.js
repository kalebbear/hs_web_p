import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        redirect: '/home',
    },

    {
        path: '/aspice',
        name: 'aspice',
        component: () => import('@/views/front/ASPICE.vue'),
        props: true
    },

    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/front/Home.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/service',
        name: 'service',
        component: () => import('@/views/about/Service.vue'),
        meta: {
            title: '行业覆盖'
        }
    },
    // 介绍
    {
        path: '/aboutHS',
        name: 'aboutHS',
        component: () => import('@/views/about/AboutHS.vue'),
        meta: {
            title: '关于华赛'
        }
    },
    {
        path: '/team',
        name: 'team',
        component: () => import('@/views/about/team.vue'),
        meta: {
            title: '咨询团队'
        }
    },
    {
        path: '/khpj',
        name: 'team',
        component: () => import('@/views/about/khpj.vue'),
        meta: {
            title: '客户评价'
        }
    },
    {
        path: '/noPage',
        name: 'noPage',
        component: () => import('@/views/about/XXX.vue'),
        meta: {
            title: '暂无'
        }
    },
    {
        path: '/cmmijs',
        name: 'cmmijs',
        component: () => import('@/views/cmmi/cmmijs.vue'),
        meta: {
            title: '什么是CMMI'
        }
    },
    {
        path: '/whatCMMI',
        name: 'whatCMMI',
        component: () => import('@/views/cmmi/what.vue'),
        meta: {
            title: '什么是CMMI'
        }
    },
    {
        path: '/shCMMI',
        name: 'shCMMI',
        component: () => import('@/views/cmmi/shCMMI.vue'),
        meta: {
            title: '实施CMMI'
        }
    },
    {
        path: '/hy',
        name: 'hy',
        component: () => import('@/views/cmmi/hy.vue'),
        meta: {
            title: '覆盖行业'
        }
    },
    {
        path: '/al',
        name: 'al',
        component: () => import('@/views/cmmi/al.vue'),
        meta: {
            title: '客户案例'
        }
    },
    {
        path: '/pglc',
        name: 'al',
        component: () => import('@/views/cmmi/pglc.vue'),
        meta: {
            title: '评估流程'
        }
    },
    // 华赛服务consultingService
    {
        path: '/consultingService',
        name: 'consultingService',
        component: () => import('@/views/service/consultingService.vue'),
        meta: {
            title: '咨询服务'
        }

    },
    {
        path: '/gkkc',
        name: 'gkkc',
        component: () => import('@/views/service/gkkc.vue'),
        meta: {
            title: '公开课程'
        }

    },
    {
        path: '/kcml',
        name: 'kcml',
        component: () => import('@/views/service/kcml.vue'),
        meta: {
            title: '课程目录'
        }

    },
    {
        path: '/qynx',
        name: 'qynx',
        component: () => import('@/views/service/qynx.vue'),
        meta: {
            title: '企业内训'
        }

    },
    {
        path: '/training',
        name: 'training',
        component: () => import('@/views/service/training.vue'),
        meta: {
            title: '培训服务'
        }

    },
    {
        path: '/rzservice',
        name: 'rzservice',
        component: () => import('@/views/rzservice/rzservice.vue'),
        meta: {
            title: '认证服务'
        }

    },

    {
        path: '/condition',
        name: 'condition',
        component: () => import('@/views/rzservice/condition.vue'),
        meta: {
            title: 'CMMI资质申请条件'
        }

    },

    {
        path: '/flow',
        name: 'flow',
        component: () => import('@/views/rzservice/flow.vue'),
        meta: {
            title: 'CMMI认证流程'
        }

    },
    {
        path: '/whatis',
        name: 'whatis',
        component: () => import('@/views/rzservice/whatis.vue'),
        meta: {
            title: '什么事CMMI资质'
        }

    },

    {
        path: '/cmmi',
        name: 'cmmi',
        component: () => import('@/views/front/CMMI.vue'),
        meta: {
            title: 'CMMI评估'
        }
    },

    // 工具
    {
        path: '/hstools',
        name: 'hstools',
        component: () => import('@/views/tools/hstools.vue'),
        meta: {
            title: '华赛工具'
        }
    },
    {
        path: '/sslc',
        name: 'sslc',
        component: () => import('@/views/tools/sslc.vue'),
        meta: {
            title: '实施流程'
        }
    },
    {
        path: '/gjjs',
        name: 'gjjs',
        component: () => import('@/views/tools/gjjs.vue'),
        meta: {
            title: '工具介绍'
        }
    },
    {
        path: '/hsdocs',
        name: 'hsdocs',
        component: () => import('@/views/tools/hsdocs.vue'),
        meta: {
            title: '华赛文库'
        }
    },
    {
        path: '/hsdatas',
        name: 'hstools',
        component: () => import('@/views/tools/hsdatas.vue'),
        meta: {
            title: '参考资料'
        }
    },



    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/front/About.vue'),
        meta: {
            title: '关于我们'
        }
    },
    {
        path: '/honor',
        name: 'honor',
        component: () => import('@/views/about/honor.vue'),
        meta: {
            title: '华赛荣耀'
        }
    },
    {
        path: '/phone',
        name: 'phone',
        component: () => import('@/views/about/phone.vue'),
        meta: {
            title: '联系我们'
        }
    },
    {
        path: '/carryAspice',
        name: 'carryAspice',
        component: () => import('@/views/ASPICE/carryAspice.vue'),
        meta: {
            title: 'ASPICE实施流程'
        }
    },
    {
        path: '/carryAspicerz',
        name: 'carryAspicerz',
        component: () => import('@/views/ASPICE/carryAspicerz.vue'),
        meta: {
            title: 'ASPICE认证流程'
        }
    },
    {
        path: '/whatAspice',
        name: 'whatAspice',
        component: () => import('@/views/ASPICE/whatAspice.vue'),
        meta: {
            title: '什么是ASPICE'
        }
    },
    {
        path: '/whatAspicerz',
        name: 'whatAspicerz',
        component: () => import('@/views/ASPICE/whatAspicerz.vue'),
        meta: {
            title: '什么是ASCPIE认证'
        }
    },
    {
        path: '/whyAspice',
        name: 'whyAspice',
        component: () => import('@/views/ASPICE/whyAspice.vue'),
        meta: {
            title: '为什么要进行ASPICE认证'
        }
    },
    {
        path: '/aspiceService',
        name: 'aspiceService',
        component: () => import('@/views/ASPICE/aspiceService.vue'),
        meta: {
            title: 'aspice认证服务'
        }
    },
    {
        path: '/fwzc',
        name: 'fwzc',
        component: () => import('@/views/sq/fwzc.vue'),
        meta: {
            title: '服务政策'
        }
    },
    {
        path: '/ljsm',
        name: 'ljsm',
        component: () => import('@/views/sq/ljsm.vue'),
        meta: {
            title: '廉价声明'
        }
    },
    {
        path: '/sqhd',
        name: 'sqhd',
        component: () => import('@/views/sq/sqhd.vue'),
        meta: {
            title: '社区活动'
        }
    },
    {
        path: '/swhz',
        name: 'swhz',
        component: () => import('@/views/sq/swhz.vue'),
        meta: {
            title: '商务合作'
        }
    },
    {
        path: '/xxaq',
        name: 'xxaq',
        component: () => import('@/views/sq/xxaq.vue'),
        meta: {
            title: '信息安全'
        }
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    if (to.path === '/home') {
        // setTimeout(() => { localStorage.setItem('type', 'cmmi') }, 200)
        localStorage.setItem('type', 'cmmi')

    }
    if (to.path === '/aspice') {
        // setTimeout(() => { localStorage.setItem('type', 'aspice') }, 200)
        localStorage.setItem('type', 'aspice')
    }
    // console.log(from.path, to.path, localStorage.getItem('type') === 'aspice');
    // if (localStorage.getItem('type') === 'aspice' && to.path === '/home') {
    //     console.log('__________')
    //     next({ path: '/aspice' })
    // } else {
    //     next();
    // }
    next();
    // `to` 和 `from` 是路由信息对象。`next` 是一个函数，该函数需要被调用来 resolve 这个钩子。调用时可以传递参数。
    // if (to.name !== 'Login' && !isAuthenticated()) { // 假设 isAuthenticated 是检查用户是否认证的函数
    //     next({ name: 'Login' }); // 重定向到登录页面
    // } else {
    //     next(); // 确保一定要调用 next()
    // }
});
export default router

export function resetRouter () {
    router.push({ path: '/login' })
}
