<template>
    <div class="brands-container">
        <Nav />
        
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'联系我们',path:''}]" />
        <div class=" wp1360">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card v-if="$store.state.type!=='aspice'">
                        <div class="phone_box">
                            <div class="adr">CMMI咨询</div>
                            <div>谢先生(深圳)</div>
                            <div>电话：14737222742</div>
                            <div>邮箱：changbo@huasaiinfo.com</div>
                            <!-- <div>地址：深圳市宝安区新安街道兴东社区留仙大道2号汇聚创新园2栋2403室</div> -->
                        </div>
                    </el-card>

                </el-col>
                <el-col :span="12">
                    <el-card v-if="$store.state.type==='aspice'">
                        <div class="phone_box">
                            <div class="adr">ASPICE咨询</div>
                            <div>吴先生(深圳)</div>
                            <div>电话：18924597488</div>
                            <div>邮箱：tony@huasaiinfo.com</div>
                            <!-- <div>地址：深圳市宝安区新安街道兴东社区留仙大道2号汇聚创新园2栋2403室</div> -->
                        </div>
                    </el-card>

                </el-col>

            </el-row>
            <el-row :gutter="20" style="margin-top:20px">
                <el-col :span="12">
                    <el-card v-if="$store.state.type!=='aspice'">
                        <div class="phone_box">
                            <div class="adr">CMMI咨询</div>
                            <div>常先生（北京）</div>
                            <div>电话：15724706007</div>
                            <div>邮箱：chris@huasaiinfo.com</div>
                            <!-- <div>地址：北京市海淀区东北旺西路8号 中关村软件园3号楼B座 1203</div> -->
                        </div>
                    </el-card>

                </el-col></el-row>
            <el-row :gutter="20" style="margin-top:20px">
                <el-col :span="24">
                    <el-card>
                        <div id="allmap" style="width: 100%;height: 500px;overflow: hidden;margin:0;"></div>
                    </el-card></el-col>
            </el-row>
            <!-- <div class="phone_box">
                <div class="adr">深圳华赛信息咨询有限公司</div>
                <div>http://www.huasaiinfo.com</div>
                <div>电话：0755-29656825</div>
            </div>
            <el-divider><i class="el-icon-phone-outline"></i></el-divider>
            <div class="phone_box">
                <div class="adr">【深圳】</div>
                <div>吴先生</div>
                <div>电话：18924597488</div>
                <div>邮箱：tony@huasaiinfo.com</div>
                <div>地址：深圳市宝安区新安街道兴东社区留仙大道2号汇聚创新园2栋2403室</div>
            </div>
            <el-divider><i class="el-icon-phone-outline"></i></el-divider>
            <div class="phone_box">
                <div class="adr">【北京】</div>
                <div>常先生</div>
                <div>电话：188-1447-6995</div>
                <div>邮箱：changbo@huasaiinfo.com</div>
                <div>地址：北京市海淀区东北旺西路8号 中关村软件园3号楼B座 1203</div>
            </div>
            <el-divider><i class="el-icon-phone-outline"></i></el-divider>
            <div class="phone_box">
                <div class="adr">【武汉】</div>
                <div>许先生</div>
                <div>电话：137-2012-3803</div>
                <div>邮箱：smart@huasaiinfo.com</div>
                <div>地址：武汉市东湖新技术开发区东信路光谷创业街10栋A座1单元1303A-C</div>
            </div>
            <el-divider><i class="el-icon-phone-outline"></i></el-divider>
            <div class="phone_box">
                <div class="adr">【成都】</div>
                <div>谢先生</div>
                <div>电话：135-1060-8475</div>
                <div>邮箱：chris@huasaiinfo.com</div>
                <div>地址：成都市科华北路川大科技园501室</div>
            </div>
            <el-divider><i class="el-icon-phone-outline"></i></el-divider>
            <div class="phone_box">
                <div class="adr">【厦门】</div>
                <div>刘先生</div>
                <div>电话：180-3001-1179</div>
                <div>邮箱：liubei@huasaiinfo.com</div>
                <div>地址：厦门市思明区西林东路7号2713室</div>
            </div> -->
            <!-- <el-divider><i class="el-icon-phone-outline"></i></el-divider> -->
        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
export default {
    name: 'phone',
    data() {
        return {}
    },
    mounted() {
        var map = new BMapGL.Map('allmap')
        var point = new BMapGL.Point(113.934323, 22.58804)
        map.centerAndZoom(point, 15)

        var marker = new BMapGL.Marker(point) // 创建标注
        map.addOverlay(marker) // 将标注添加到地图中
        var opts = {
            width: 200, // 信息窗口宽度
            height: 100,
        }
        var infoWindow = new BMapGL.InfoWindow(
            '地址：深圳市宝安区新安街道兴东社区留仙大道2号汇聚创新园2栋2403室',
            opts
        ) // 创建信息窗口对象
        marker.addEventListener('click', function () {
            map.openInfoWindow(infoWindow, point) //开启信息窗口
        })
    },
    methods: {},
}
</script>
  
  <style lang="less" scoped>
.phone_box {
    font-size: 14px;
    .adr {
        font-weight: 900;
        color: #333;
    }
    line-height: 32px;
    color: #666;
}
</style>