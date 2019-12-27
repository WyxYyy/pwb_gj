<template>
    <div class="navBar">
        <van-nav-bar
            :title="title"
            left-arrow
            @click-left='$router.go(-1)'
            @click-right="onClickRight"
        >
            <pwbIcon slot="right" v-if="navBarRight" class="icon-navBar" :class="navBarRight" ></pwbIcon>
            <span slot="right" v-else-if="navBarRightText" class="navBarRightText" > {{navBarRightText}} </span>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    props:['title','navBarRight','navBarRightWantto','navBarRightText'],
    methods:{
        
        onClickRight() {
            if(this.navBarRightWantto){
                this.wantTo(this.navBarRightWantto)
            }
        }
    },
    mounted(){

        console.log(this.navBarRight)
    }
}
</script>

<style  lang='scss'>
    .navBar{
        .van-nav-bar {
            background: #fff;
            display: flex;
            align-items: center;
            .van-nav-bar__left{
                 .van-icon{
                    font-size: 20px;
                    color: #333333;
                    font-weight: bold;
                }   
            }
            .van-nav-bar__title{
                color: #333333;
                font-size: 18px;
            }
            .van-nav-bar__right{
                // bottom: 12px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                .navBarRightText{
                    color: #3F77E8;
                    font-size: 13px;
                }
            }
        }
    }
</style>