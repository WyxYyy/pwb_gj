<template>
    <div>
        <navBar title="订单详情"></navBar>
        <div class="OrderDetail">
            <van-tabs v-model="active" title-active-color="#3F77E8" lazy-render title-inactive-color="#333" swipeable
                sticky>
             
                <van-tab title="房屋信息">
                    <div class="tabBox">
                        <houseDetail></houseDetail>
                    </div>
                </van-tab>
                <van-tab title="房东信息">
                    <div class="tabBox">
                        <landlady></landlady>
                    </div>
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
        }
    }
</script>

<style scoped lang='scss'>
    .OrderDetail {
        &::v-deep .van-tabs--line {
            .van-tabs__wrap {
                height: 50px;

                .van-ellipsis {
                    height: 100%;
                    line-height: 50px;
                    font-size: 15px;
                    font-weight: bold;
                }

            }

            .van-tabs__line {
                background: #3F77E8;
            }

            .van-tabs__content {
                .Modular {
                    background: #fff;
                    border-radius: 3px;
                    padding: 15px;
                    margin-bottom: 10px;

                }

               

                .tabBox {
                    padding: 15px;
                }
            }
        }
    }
</style>