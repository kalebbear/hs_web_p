<template>
    <div id="app">
        <!-- 回到顶部 -->
        <el-backtop :bottom="60"></el-backtop>
        <a v-if="$store.state.type==='aspice'" href="tel:18924597488">
            <div style="background:#007dc6;right:30px;bottom:150px;position:fixed;z-index:999999;height:60px;width:60px;border-radius:50%;text-align:center;line-height:60px;">
                <icon class="el-icon-phone" style="color:#fff;font-size:24px"></icon>a
            </div>
        </a>
        <a v-else href="tel:0755-29656825">
            <div style="background:#007dc6;right:30px;bottom:150px;position:fixed;z-index:999999;height:60px;width:60px;border-radius:50%;text-align:center;line-height:60px;">
                <icon class="el-icon-phone" style="color:#fff;font-size:24px"></icon>
            </div>
        </a>
        <!-- 路由 -->
        <router-view />
    </div>
</template>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    overflow-x: hidden;
    max-width: 100%;
    padding-bottom: 120px;
    position: relative;
    min-height: 100vh;
}
body {
    padding-top: 50px; // 根据您的导航栏高度调整这个值
}
</style>