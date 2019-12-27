<template>
    <div class="set">
        <navBar title="设置"></navBar>
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="修改密码" value='修改' name="1">
                <div class="setPassword">
                    <input type="password" placeholder="请输入您的旧密码">
                    <input type="password" placeholder="请输入您的新密码">
                    <input type="password" placeholder="请再次输入您的新密码">
                    <button>确认修改</button>
                </div>
            </van-collapse-item>
            <van-collapse-item title="手机号" value='186****0333' name="2">
                    <input type="text" value="18636600333" readonly placeholder="18636600333">
                    <span>
                        不可修改
                    </span>
            </van-collapse-item>
        </van-collapse>
        <div class="getOut" @click="getOut">
            退出登录
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant'
export default {
    data(){
        return{
             activeName: '0'        
        }
    },
    methods:{
        getOut(){
            this.$localStore.delLocal('userIdentity')
            this.$localStore.delLocal('token')
            Toast.success('退出登录成功');
            this.$router.push({
                path: '/',
            })
        }
    }
    
}
</script>

<style lang='scss' scoped>
.set{
    &::v-deep .van-collapse{
        .van-collapse-item{
            .van-cell{
                height: 50px;
                align-items: center;
            }
            .van-collapse-item__wrapper{
                    display: flex;
                    flex-direction: column;

                    input{
                        height: 44px;
                        margin-bottom: 20px;
                        text-indent: 1em;
                        font-size: 15px;
                        border-radius: 3px;
                        border: 2px solid #ebebeb;
                    }
                    button{
                        height: 44px;
                        font-size: 15px;
                        background: #3F77E8;
                        color: #fff;
                        border: 0;
                    }
                
            }
        }
    }
    .getOut{
        height: 50px;
        text-align: center;
        line-height: 50px;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        background: #fff;
        color: #3F77E8;
        margin-top: 15px;
    }
}

</style>