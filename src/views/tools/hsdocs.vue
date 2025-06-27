<template>
    <div class="brands-container">
        <Nav />
        <Banner />
        <Bred :mdata="[
            {name:'首页',path: $store.state.type==='aspice'?'/aspice':'/home'},
            {name:'华赛文库',path:''}]" />
        <div class="wp1360" style="margin:40px auto" v-if="$store.state.type==='aspice'">
            <el-card style="padding:40px;width:100%;margin:0 auto">

                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

        </div>
        <div class="wp1360" v-if="$store.state.type!=='aspice'">
            <div class="hsHeader">
                <!-- <h3>暂无页面</h3> -->
            </div>
            <div style="margin: 15px 0;">
                <el-input placeholder="请输入搜索内容" v-model="searchTxt" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" type="primary" primary @click="search"></el-button>
                </el-input>
            </div>
            <!-- {{wkjson}} -->

            <el-collapse accordion v-model="active">
                <el-collapse-item v-for="(item,index) in wkjson" :name="item.key" :key="item.key">
                    <template slot="title">
                        <!-- <div> -->
                        <div style="font-size:16px;color:#666;">{{item.title}}<i class="header-icon el-icon-info"></i></div>

                    </template>
                    <div v-html="item.html" class="pg1">
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>

        <Footer class="top" />
    </div>
</template>
  
  <script>
import { wkjson } from '@/config/wk.js'

export default {
    name: 'Brands',
    data() {
        var validatePass = (rule, value, callback) => {
            callback(
                new Error(
                    '用户名不存在。注意：文库系统暂时只对公司内部评估师开放。'
                )
            )
        }
        var validatePass2 = (rule, value, callback) => {
            callback(
                new Error('密码错误。注意：文库系统暂时只对公司内部评估师开放。')
            )
        }
        return {
            wkjson: wkjson,
            ruleForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [{ validator: validatePass, trigger: 'click' }],
                password: [{ validator: validatePass2, trigger: 'click' }],
            },
            active: '',
            searchTxt: '',
        }
    },
    mounted() {
        console.log(this.wkjson)
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },

        search() {
            if (this.searchTxt) {
                console.log(this.searchTxt)
                this.wkjson = wkjson.filter((e) => {
                    return e.title.includes(this.searchTxt)
                    // e.html.includes(this.searchTxt)
                })

                console.log(this.wkjson)
            } else {
                this.wkjson = wkjson
            }
            this.active = ''
        },
    },
}
</script>
  
<style lang="less" scoped>
</style>