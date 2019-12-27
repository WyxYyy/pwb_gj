<template>
    <div class="index">
        <!-- 头部 -->
        <header>
            <div class="headerTop">
                订单
            </div>
            <div class="headerFun ">
                <ul class="flex">
                    <li>
                        <pwbIcon class="index_top icon-zcEwm"></pwbIcon>
                        <span>注册二维码</span>
                    </li>
                    <li v-if="userIdentity == 1">
                        <pwbIcon class="index_top icon-ywyEwm"></pwbIcon>
                        <span>业务员二维码</span>
                    </li>
                    <li @click="wantTo('Receipt')">
                        <div class="newOrderNotice" v-if="indexData.isHaveNewOrder == 1"></div>
                        <pwbIcon class="index_top icon-pdNotice"></pwbIcon>
                        <span>抢单通知</span>
                    </li>
                    <li>
                        <pwbIcon class="index_top icon-yyNotice"></pwbIcon>
                        <span>预约通知</span>
                    </li>
                </ul>
            </div>
        </header>
        <!-- 关于订单 -->
        <div class="about">
            <!-- 展示订单 -->
            <div class="orderMonth">
                <div class="orderMonthIndex">
                    本月订单(笔)
                </div>
                <div class="orderMonthNumber num">
                    {{indexData.countMonthComplete}}
                </div>
                <div class="orderMonthProfit">
                    本月收益
                    <span class="num">
                        100.00
                    </span>
                </div>
                <div class="orderMonthToday flex">
                    <div class="orderToday">
                        <div class="num">
                            {{indexData.countDayAccept}}
                        </div>
                        <div class="orderTodayTips">
                            今日已接订单(笔)
                        </div>
                    </div>
                    <span class="orderTodayDivision">
                        |
                    </span>
                    <div class="orderToday">
                        <div class="num">
                            {{indexData.countDayNotComplete}}
                        </div>
                        <div class="orderTodayTips">
                            今日未完订单(笔)
                        </div>
                    </div>
                </div>
            </div>
            <!-- 最新订单 -->
            <div class="tittle">
                待处理订单
            </div>
            <orderList v-for="(item,index) in indexData.orderList" :key="index" :id="item.id" :title="item.title" :phone='item.with_house_owner_mobile' :address="item.append_address_info" state='stay' ></orderList>
        </div>
        <!-- 上传房屋 +  -->
        <div class="addHouse" @click="wantTo('addHouse')"></div>
        <footerBar whoShow=1></footerBar>
        <div style="height:50px"></div>
    </div>
</template>

<script>
    import footerBar from '@/components/footerBar'
    export default {
        data() {
            return {
                list: ['', '', '', '', ''],
                // 用户身份 1 为管家 2 为业务
                userIdentity: this.$localStore.getLocal('userIdentity'),
                token: this.$localStore.getLocal('token'),
                indexData:''
            }
        },
        methods: {
            get(apiUrl, getData,type) {
                var that = this
                this.$axios({
                    url: apiUrl,
                    method: 'get',
                    headers: {
                        'XX-Token': this.token,
                        'XX-Device-Type' : 'mobile'
                    },
                    params: getData,
                }).then((res) => {
                   console.log(res)
                   if(res.data.code == 1){
                       if(type == 'index'){
                            this.indexData = res.data.data
                       }
                   }else if(res.data.code == -1){
                       this.$localStore.delLocal('userIdentity')
                        this.$localStore.delLocal('token')
                   }
                })
            },
            getUser() {
                var token = this.$localStore.getLocal('token')
                if (token == null) {
                    this.$router.push({
                        path: 'login',
                    })
                }
            }
        },
        components: {
            footerBar,
        },
        mounted() {
            this.getUser()
            this.get(this.Interface.config.index,'','index')
        }
    }
</script>

<style lang='scss' scoped>
    .index {
        .tittle {
            font-size: 20px;
            font-weight: bold;
            padding: 20px 0;
            padding-top: 30px;
        }

        header {
            padding: 15px 30px;
            width: 100%;
            background: linear-gradient(-30deg, rgba(63, 119, 232, 1) 0%, rgba(118, 158, 254, 1) 100%);

            .headerTop {
                text-align: center;
                font-size: 18px;
                color: #fff;
            }

            .headerFun {
                padding-top: 28.5px;

                ul {
                    color: #fff;
                    font-size: 13px;

                    li {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                        position: relative;

                        .newOrderNotice {
                            position: absolute;
                            top: -18px;
                            background: url(../assets/img/news_order.png);
                            background-size: cover;
                            width: 53px;
                            height: 23px;
                        }
                    }
                }
            }
        }

        .about {
            padding: 10px 15px;
            padding-bottom: 30px;

            .orderMonth {
                width: 100%;
                height: 185px;
                padding: 20px 36px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background: linear-gradient(132deg, rgba(95, 181, 255, 1) 0%, rgba(63, 119, 232, 1) 100%);
                box-shadow: 0px 2px 10px 0px rgba(115, 160, 249, 0.75);
                border-radius: 4px;
                background-image: url(../assets/img/achievement_back.png);
                background-size: cover;
                color: #fff;

                .orderMonthIndex {
                    font-size: 13px;

                }

                .orderMonthNumber {
                    font-size: 35px;
                    line-height: 35px;
                    font-weight: bold;
                    text-shadow: 0px 1px 4px rgba(38, 102, 231, 0.37);
                }

                .orderMonthProfit {
                    padding: 0 14px;
                    height: 30px;
                    background: rgba(255, 255, 255, 0.2);
                    line-height: 30px;
                    border-radius: 4px;
                    font-size: 13px;
                    align-items: center;

                    .num {
                        font-weight: bold;
                        padding-left: 5px;
                        ;
                    }
                }

                .orderMonthToday {
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    text-align: center;

                    .orderToday {
                        .num {
                            font-size: 22px;

                        }

                        .orderTodayTips {
                            font-size: 13px;
                        }
                    }

                    .orderTodayDivision {
                        font-size: 15px;
                        opacity: 0.5;
                    }
                }
            }

        }

        .addHouse {
            position: fixed;
            right: 15px;
            bottom: 70px;
            width: 60px;
            height: 60px;
            background: url(../assets/img/add_button.png);
            background-size: cover;
            box-shadow: 0px 0px 15px 0px rgba(71, 124, 236, 0.64);
            border-radius: 50%;
            color: #fff;
        }
    }
</style>