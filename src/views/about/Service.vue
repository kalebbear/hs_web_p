<template>
    <div class="brands-container">
        <Nav />
       
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'关于华赛',path:''},
            {name:'覆盖行业',path:''}]" />
        <div class="wp1360">
            <div class="hsHeader">
                <!-- <h3>行业覆盖</h3> -->
            </div>
            <div class="">
                <div>软件行业</div>
                <div>通讯行业</div>
                <div>电子产品</div>
                <div>电力设备</div>
                <div>工程车辆</div>
                <div>钢铁加工</div>
                <div>医疗仪器</div>
                <div>银行设备</div>
                <div>电子芯片</div>
                <div>机电设备</div>
                <div>汽车行业</div>
                <div>精细化工</div>
                <div>机电设备</div>
                <div>家电行业</div>
                <div>动漫行业</div>
                <div>其它行业</div>
            </div>
        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
import { addBrand } from '@/api/index.js'

export default {
    name: 'Brands',
    data() {
        return {}
    },
    mounted() {},
    methods: {},
}
</script>
  
  <style lang="less" scoped>
</style>