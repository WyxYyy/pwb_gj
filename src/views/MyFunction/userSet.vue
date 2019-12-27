<template>
    <div>
        <navBar title="个人资料"></navBar>
        <ul class="userSet">
            <li class="flex">
                <span class="name">
                    头像
                </span>
                <div class="head userRight" @click="setHead">
                    <img v-if="headImg.length == 0" src="../../assets/img/head.png" alt="">
                    <img v-else :src="headImg[0].content" alt="">
                    <van-icon name="arrow" />
                </div>
            </li>
            <li class="flex">
                <span class="name">
                    昵称
                </span>
                <div class="userRight" @click="setUsername = true" >
                    <span v-if="userName == ''">用户名</span>
                    <span v-else>{{userName}}</span>
                    <van-icon name="arrow" />
                </div>
            </li>
            <li class="flex">
                <span class="name">
                    性别
                </span>
                <div class="userRight">
                    <select name="" id="" v-model="Gender" >
                        <option value="0">请选择</option>
                        <option value="1">男</option>
                        <option value="2">女</option>
                    </select>
                    <van-icon name="arrow" />
                </div>
            </li>
          
            <li class="flex">
                <span class="name">
                    个人简介
                </span>
                <div class="userRight" @click="isaboutUser = true">
                    <span>请填写</span>
                    <van-icon name="arrow" />
                </div>
            </li>
        </ul>
        <van-popup v-model="showSetHead"
            closeable
            class="setHead"
            :style="{ height: '200px',
                      width:'80%',
                      }"
        >
           <van-uploader  v-model="headImg" :max-count='1' multiple :after-read="afterRead" />
            <div class="confirmSet" @click="showSetHead = false">
                确认选择
            </div>
        </van-popup>    
        <van-popup v-model="setUsername" closeable  :style="{ height: '200px',width:'80%'}">
            <input class="newUserName" type="text" placeholder="请输入您的新昵称" v-model="userName">
            <div class="confirmSet" @click="setUsername = false">
                确认保存
            </div>
        </van-popup>
        <van-popup v-model="isaboutUser" closeable  :style="{ height: '200px',width:'80%'}">
            <input class="newUserName" type="text" placeholder="请用一句话介绍自己" v-model="aboutUser">
            <div class="confirmSet" @click="isaboutUser = false">
                确认保存
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showSetHead:false,
            headImg:[],
            userName:'',
            setUsername:false,
            Gender:'0',
            aboutUser:'',
            isaboutUser:false
        }
    },
    methods:{
        setHead(){
            this.showSetHead = true
        },
         afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
        },
        
        
    }
}
</script>

<style scoped lang='scss'>
.userSet{
    padding:0 15px;
    background: #fff;
    li{
        height: 50px;
        border-bottom: 1px solid #EEEBEA;
        align-items: center;
        .name{
            font-size: 16px;
        }
        .userRight{
            display: flex;
            align-items: center;
            font-size: 13px;
            color: #999;
            span{
                font-size: 13px;
                color: #999;
            }
            .van-icon{
                margin-left: 10px;
                font-size: 15px;
                color: #999;
            }
            select{
                border: 0;
                outline: none;
                appearance: none;
            }
        }
        .head{
            img{
                width: 34px;
                height: 34px;
            }
        }
    }
    :last-child{
        border: 0;
    }
}
.van-popup--center{
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .confirmSet{
        width: 40%;
        margin-top: 10px;
        height: 30px;
        border-radius: 20px;
        background: #3F77E8;
        color: #fff;
        font-size: 15px;
        text-align: center;
        line-height: 30px;
    }
    .newUserName{
        border: 2px solid #999;
        font-size: 15px;
        width: 100%;
        height: 40px;
        text-indent: 1em;
        border-radius: 5px;
    }
}
</style>