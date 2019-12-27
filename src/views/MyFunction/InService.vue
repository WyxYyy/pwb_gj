<template>
    <div>
        <navBar title="服务中"></navBar>
        <div class="InService">
            <van-tabs v-model="active" title-active-color="#3F77E8" lazy-render title-inactive-color="#333" swipeable
                sticky>
                <van-tab title="租客信息 ">
                    <div class="Tenant ">
                        <div class="Modular remind">
                            <div class="flex receivable">
                                <div class="Tips flexColumn">
                                    <span>
                                        应收租金(元)
                                    </span>
                                    <em>
                                        最后应收日
                                        <i>
                                            10-16
                                        </i>
                                    </em>
                                </div>
                                <div class="price num">
                                    ￥1000.00
                                </div>
                            </div>
                            <div class="callPhone">
                                <van-icon name="phone" /> 电话提醒
                            </div>
                        </div>
                        <div class="Modular user">
                            <div class="userList flexColumn">
                                <div class="title">
                                    联系方式
                                </div>
                                <div class="information">
                                    18364562148
                                </div>
                            </div>
                            <div class="userList flexColumn">
                                <div class="title">
                                    身份证号
                                </div>
                                <div class="information">
                                    18364562148
                                </div>
                            </div>
                            <div class="userList flexColumn">
                                <div class="title">
                                    租聘信息
                                </div>
                                <div class="information flex">
                                    <span>
                                        2018.06.01-2019.06.01
                                    </span>
                                    <div class="seeMorwe" @click="wantTo('rentDetail')">
                                        了解更多
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="房屋信息">
                    <div class="tabBox">
                        <houseDetail :id='houseId'></houseDetail>
                    </div>
                </van-tab>
                <van-tab title="房东信息">
                    <div class="tabBox">
                        <landlady :id='houseId'></landlady>
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
                active: 0,
                houseId: this.$route.params.id
            }
        },
        methods: {
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
        mounted() {
            // this.get(this.Interface.config.houseInfo,{merch_id:this.id},'houseInfo')
        }
    }
</script>

<style scoped lang='scss'>
    .InService {
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

                .Tenant {
                    padding: 10px 15px;

                    .remind {
                        .receivable {
                            align-items: center;

                            .Tips {
                                span {
                                    font-size: 17px;
                                    line-height: 17px;
                                    padding-bottom: 8px;
                                    ;
                                }

                                em {
                                    font-size: 12px;
                                    line-height: 12px;
                                    color: #999;

                                    i {
                                        color: #333;
                                    }
                                }
                            }

                            .price {
                                font-size: 28px;
                                line-height: 28px;
                                font-weight: bold;
                                color: #3F77E8;
                            }
                        }

                        .callPhone {
                            margin-top: 20px;
                            height: 44px;
                            background: #3F77E8;
                            border-radius: 22px;
                            color: #fff;
                            font-size: 16px;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            .van-icon {
                                font-size: 18px;
                                margin-right: 8px;
                            }
                        }
                    }

                    .user {
                        padding: 0 15px;

                        .userList {
                            border-bottom: 1px solid #EEEBEA;
                            height: 84px;
                            padding: 20px 0;

                            .title {
                                font-size: 13px;
                                color: #C1C1C1;
                            }

                            .information {
                                font-size: 16px;
                                align-items: center;

                                .seeMorwe {
                                    color: #3F77E8;
                                    width: 70px;
                                    height: 25px;
                                    text-align: center;
                                    line-height: 25px;
                                    text-align: center;
                                    font-size: 12px;
                                    border: 1px solid #3f77e8;
                                    border-radius: 12px;
                                }
                            }

                        }

                        :last-child {
                            border: 0;
                        }
                    }
                }

                .tabBox {
                    padding: 15px;
                }
            }
        }
    }
</style>