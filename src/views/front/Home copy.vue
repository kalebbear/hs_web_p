<template>
	<div>
		<Nav/>
		<Banner/>
		<div class="container">
			<el-breadcrumb separator="/" class="top">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>当前</el-breadcrumb-item>
			</el-breadcrumb>
      <div class="introduce">
        <h1 class="center">我是标题</h1>
				<p class="center">介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容</p>
			</div>
      <div class="introduce">
        <h1 class="center">我是标题</h1>
				<p class="center">介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容</p>
			</div>
      <!-- 卡片 -->
			<el-card class="top">
				<div class="left">
					<img class="top5" style="width: 150px; height: 150px;border: 1px solid #e1e1e1" src="../../assets/images/weChat-1.jpg"/>
        </div>
			</el-card>
			<el-card class="top">
				<div class="left">
					<img class="top5" style="width: 150px; height: 150px;border: 1px solid #e1e1e1" src="../../assets/images/weChat-1.jpg"/>
        </div>
			</el-card>
      <!-- 新增的商品卡片轮播图组件 -->
      
		</div>
		<Footer class="top"/>
	</div>
</template>

<script>
import Banner from './components/Banner'

export default {
    name: 'Home',
    components: {
      Banner,// 轮播图
     },
    props: {},
    watch: {},
    data() {
        return {};
    },

    mounted() {

    },

    created() {
    },

    methods: {},
};
</script>

<style lang="less" scoped>
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh; // Ensure the page takes at least the full height of the viewport
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
}

.container {
    flex: 1; // Allow the container to grow and fill available space
    margin-bottom: 100px; // Add space between container and footer
}

.business-sections {
    margin: 40px 0;
    text-align: center;

    h2 {
        font-size: 24px;
        margin-bottom: 20px;
        position: relative;
    }

    h2::after {
        content: '';
        display: block;
        width: 50px;
        height: 2px;
        background: red;
        margin: 10px auto 0;
    }

    p {
        font-size: 16px;
        color: #666;
        margin-bottom: 40px;
    }
}

/* 新增样式 */
.full-image {
    width: 100%;
    height: 100%;
    object-fit: cover; // 保持图片的宽高比并裁剪以填充容器
}

.form-container {
    max-width: 600px; // 设置表单容器的最大宽度
    margin: 0 auto; // 将表单容器居中对齐
    padding: 20px;
}

.join-title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    position: relative;
}

.join-title::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background: #409EFF; // 使用主题色
    margin: 10px auto 0;
}
</style>