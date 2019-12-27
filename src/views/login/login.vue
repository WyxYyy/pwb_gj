<template>
    <div class="login">
        <navBar title="登录"></navBar>
        <div class="loginContent">
            <div class="iptList">
                <van-field v-model="username" type="number" maxlength='11' clearable label="手机号" placeholder="请输入手机号" />
            </div>
            <div class="iptList">
                <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
            </div>
            <div class="loginContentFooter">
                <div class="flex">
                    <span>使用手机验证码登录</span>
                    <span @click="wantTo('forgetPassword')">忘记密码？</span>
                </div>
                <van-button round type="info" @click="post">登录</van-button>
                <van-button plain round type="info">申请管家账号</van-button>

            </div>


        </div>
    </div>
</template>

<script>
    import qs from 'qs'
    import { Toast } from 'vant'
    export default {
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            post() {
                let postData = qs.stringify({
                    username: this.username,
                    password: this.password,
                    device_type: 'mobile'   
                })
                let that = this
                this.$axios({
                    'url': this.Interface.config.login,
                    'method': 'post',
                    'data': postData
                }).then((res) => {
                    console.log(res)
                    
                    if (res.data.code == 1) {
                        Toast.success('登录成功');
                        console.log('登录成功')
                        var token = res.data.data.token
                        var userIdentity = res.data.data.keeperIdentity
                        this.$localStore.setLocal('userIdentity', userIdentity)                        
                        this.$localStore.setLocal('token', token)
                        this.$router.push({
                            path: '/',
                        })
                    } else {
                        Toast.fail(res.data.msg);
                    }
                })
            }
        }
    }
</script>

<style class='login' lang='scss'>
    .login {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;

        .loginContent {
            padding: 30px 20px;

            .iptList {
                margin-bottom: 15px;
                height: 44px;

                .van-cell {
                    background: #f3f3f3;
                    height: 44px;
                    border-radius: 22px;
                    padding-left: 20px;

                    .van-field__label {
                        font-size: 17px;
                        width: 60px;
                        border-right: 1px solid #C7C7C7;
                    }

                    .van-field__control {
                        text-indent: 1em;
                        color: #acacac;
                        font-size: 13px;
                    }
                }
            }

            .loginContentFooter {
                padding: 0 20px;

                .flex {
                    font-size: 13px;
                }

                .van-button--info {
                    width: 100%;
                    margin-top: 80px;
                    font-size: 20px;
                    letter-spacing: 10px;
                }

                :last-child.van-button--info {
                    margin-top: 15px;
                    letter-spacing: 0;
                }
            }
        }
    }
</style>