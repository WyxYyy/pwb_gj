<template>
    <div class="login">
        <navBar title="找回密码"></navBar>
        <div class="loginContent">
            <div class="iptList">
                <van-field v-model="username" type="number" maxlength='11' clearable label="手机号" placeholder="请输入手机号" />
            </div>
            <div class="iptList">
                <van-field v-model="sms" center clearable label="验证码" placeholder="请输入验证码">
                    <span v-if="isSecond" slot="button">
                        {{second}}s
                    </span>
                    <van-button v-else slot="button" size="small" type="primary" @click="getYZM">获取验证码</van-button>
                </van-field>
            </div>
            <div class="iptList">
                <van-field v-model="password" type="password" label="新密码" placeholder="请输入密码" />
            </div>
            <div class="loginContentFooter">
                <van-button round type="info" @click="resetPassword">确定</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant'
    import qs from 'qs'

    export default {
        data() {
            return {
                username: '',
                password: '',
                sms: '',
                isSecond: false, //是否显示秒数
                second: '', //秒数
            }
        },
        methods: {
            getYZM() {
                if (this.username) {
                    if (this.isSecond == false) {
                        this.isSecond = true;
                        this.second = 60;
                        let timer = setInterval(() => {
                            this.second--;
                            if (this.second <= 0) {
                                this.isSecond = false;
                                clearInterval(timer);
                            }
                        }, 1000);
                        this.getPhoneYZM(qs.stringify({
                            username: this.username
                        }))
                    }
                } else {
                    Toast.fail('请输入手机号');
                }
            },
        
            resetPassword(){
                let postData = qs.stringify({
                    username: this.username,
                    password: this.password,
                    verification_code: this.sms   
                }) 
                this.$axios({
                    'url': this.Interface.config.resetPassword,
                    'method': 'post',
                    'data': postData
                }).then((res) => {
                    console.log(res)
                    if(res.data.code == 1){
                        Toast.success(res.data.msg);
                        this.$router.push({
                            path: 'login',
                        })
                    }else{
                        Toast.fail(res.data.msg);
                        this.username = ''
                        this.password = ''
                        this.sms = ''
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

                    .van-button--primary {
                        color: #1989fa;
                        background: #f3f3f3;
                        border: 0;
                        font-size: 13px;
                    }
                }
            }

            .loginContentFooter {
                padding: 0 20px;


                .van-button--info {
                    width: 100%;
                    margin-top: 30px;
                    font-size: 20px;
                    letter-spacing: 10px;
                }

            }
        }
    }
</style>