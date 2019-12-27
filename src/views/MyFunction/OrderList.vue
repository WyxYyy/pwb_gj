<template>
    <div>
        <navBar title="订单列表"></navBar>
        <div class="OrderList">
            <van-tabs v-model="active" title-active-color="#3F77E8" lazy-render title-inactive-color="#333" swipeable
                sticky>
                <van-tab title="全部 ">
                    <orderList></orderList>
                </van-tab>
                <van-tab title="待处理">
                    <orderList></orderList>
                    <orderList></orderList>
                    <orderList></orderList>
                    <orderList></orderList>

                </van-tab>
                <van-tab title="服务中">
                    <orderList @click.native="wantTo('InService')"></orderList>
                    <orderList @click.native="wantTo('InService')"></orderList>
                    <orderList @click.native="wantTo('InService')"></orderList>
                    <orderList @click.native="wantTo('InService')"></orderList>
                </van-tab>
                <van-tab title="已完成 ">
                    <orderList></orderList>
                    <orderList></orderList>
                    <orderList></orderList>
                    <orderList></orderList>
                    <orderList></orderList>
                    4444444
                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0

            }
        },
        mounted(){
            let type = this.$route.params.type;
            if(type == 'service'){
                this.active = 2
            }else if( type == 'stay'){
                this.active = 1
            }else if(type == 'already'){
                this.active = 3
            }
        }
    }
</script>

<style scoped lang='scss'>
    .OrderList {
        &::v-deep .van-tabs--line {
            .van-tabs__wrap {
                height: 50px;
                .van-ellipsis{
                    height: 100%;
                    line-height: 50px;
                    font-size: 15px;
                    font-weight: bold;
                }
              
            }
            .van-tabs__line{
                background: #3F77E8;
            }
        }
    }
</style>