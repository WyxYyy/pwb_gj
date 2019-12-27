<template>
    <div>
        <navBar title="系统接单" navBarRightText='历史接单' navBarRightWantto='ReceiptRecord'></navBar>
        <div class="Receipt">
            <div class="ReceiptList">
                <div class="title">
                    商铺（万象城）
                </div>
                <div class="address">
                    万柏林区长兴路7号华润悦府底商1-1017号商铺
                </div>
                <div class="flexColumn Contact">
                    <div class="ContactList ">
                        <pwbIcon class="icon-Contact icon-Contact-people"></pwbIcon>
                        <div class="flexColumn">
                            <span>
                                联系人姓名
                            </span>
                            <em>
                                刘先生
                            </em>
                        </div>
                    </div>
                    <div class="ContactList ">
                        <pwbIcon class="icon-Contact icon-Contact-phone"></pwbIcon>
                        <div class="flexColumn">
                            <span>
                                联系方式
                            </span>
                            <em>
                                18636600366
                            </em>
                        </div>
                    </div>
                    <div class="ContactList ">
                        <pwbIcon class="icon-Contact icon-Contact-time"></pwbIcon>
                        <div class="flexColumn">
                            <span>
                                订单提交时间
                            </span>
                            <em>
                                05-23 14:00
                            </em>
                        </div>
                    </div>
                </div>
                <div class="ReceiptBtn">
                    <van-button round type="info" @click="robList" >立即接单</van-button>

                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
    export default {
        data() {
            return {
              
            }
        },
        methods:{
            robList(){
                let ramdom = Math.random() >= 0.5
                if(ramdom){
                    this.$dialog.confirm({
                    title: <pwbIcon class="icon-isSuccess icon-isSuccess-yes"></pwbIcon>,
                    message: '接单成功,需补充房源信息',
                    confirmButtonText:"去补充",
                    cancelButtonColor:'#999',
                    }).then(() => {
                    // on confirm
                    }).catch(() => {
                    // on cancel
                    });
                }else{
                    this.$dialog.alert({
                        title: <pwbIcon class="icon-isSuccess icon-isSuccess-no"></pwbIcon>,
                        message: '未抢到，下次加油',
                        confirmButtonText:"取消",
                        }).then(() => {
                        // on close
                        });
                }
            },
            get(apiUrl, getData, type) {
                var that = this
                this.$axios({
                    url: apiUrl,
                    method: 'get',
                    headers: {
                        'XX-Token': this.$localStore.getLocal('token'),
                        'XX-Device-Type': 'mobile'
                    },
                    params: getData,
                }).then((res) => {
                    console.log(res)
                    
                })
            },
        },
        mounted(){
            this.get(this.Interface.config.acceptOrderList)
        }
    }
</script>

<style scoped lang='scss'>
    .Receipt {
        padding: 0 15px;
        ;

        .ReceiptList {
            margin-top: 10px;
            border-radius: 5px;
            padding: 15px;
            background: #fff;

            .title {
                font-size: 18px;
                padding-top: 5px;
                line-height: 18px;
                font-weight: bold;
            }

            .address {
                font-size: 14px;
                margin-top: 10px;
                ;
            }

            .Contact {
                padding: 25px 0;

                .ContactList {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    .icon {
                        margin-right: 15px;
                    }

                    .flexColumn {
                        span {
                            font-size: 13px;
                            line-height: 13px;
                            display: block;
                            margin-bottom: 10px;
                            color: #C1C1C1;
                        }

                        em {
                            font-size: 16px;

                        }
                    }
                }

                :last-child {
                    margin-bottom: 0;
                }
            }

            .ReceiptBtn {
                button {
                    width: 100%;
                    ;
                    font-weight: bold;
                    font-size: 16px;
                }
            }
        }
    }
    
</style>
<style lang='scss'>
    .van-dialog{
        .van-dialog__message{
            font-weight: bold;
            color: #333;
            font-size: 16px;
        }
    }
</style>