import router from './router'
// import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

function getPageTitle (pageTitle) {
    const title = '华赛'
    if (pageTitle) {
        return `${title} - ${pageTitle}`
    }
    return `${title}`
}

NProgress.configure({ showSpinner: false }) // NProgress Configuration



router.beforeEach(async (to, from, next) => {
    NProgress.start()
    document.title = getPageTitle(to.meta.title)
    next()
   
})

router.afterEach(() => {
    NProgress.done()
})
