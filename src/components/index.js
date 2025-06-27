import Vue from 'vue'
import Search from './Search'
import Nav from '@/views/front/components/Nav.vue'
import Footer from '@/views/front/components/Footer.vue'
import Banner from '@/views/front/components/Banner.vue'
import Bred from '@/views/front/components/Bred.vue'
import Jxal from '@/views/front/components/Jxal.vue'
import { returnValue } from '@/utils/index'
function piugin () {
    Vue.component('Search', Search)
    Vue.component('Nav', Nav)
    Vue.component('Footer', Footer)
    Vue.component('Banner', Banner)
    Vue.component('Bred', Bred)
    Vue.component('Jxal', Jxal)
    Vue.prototype.returnValue = returnValue
}

export default piugin
