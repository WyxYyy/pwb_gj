<template>
    <div>
        <div class="teamStatistics ">
            <header>
                <div class=" headerScreen">
                    <select @change="watchWho" v-model="whoWatch">
                        <option value="0" v-if="userIdentity == 1">团队</option>
                        <option value="1">个人</option>
                    </select>
                </div>
            </header>
            <div class="myData">
                <div class="myDataMonth">
                    <div class="myDataMonthTittle">
                        本月新增业绩
                    </div>
                    <van-grid :column-num="3" :border='false'>
                        <van-grid-item>
                            <span class="num">
                                {{Statistics.totalMonthCount}}
                            </span>
                            <span class="myDataMonthAbout">
                                总房屋数
                            </span>
                        </van-grid-item>
                        <van-grid-item>
                            <span class="num">
                                {{Statistics.monthMonthCount}}
                            </span>
                            <span class="myDataMonthAbout">
                                月付
                            </span>
                        </van-grid-item>
                        <van-grid-item>
                            <span class="num">
                                {{Statistics.yearMonthCount}}
                            </span>
                            <span class="myDataMonthAbout">
                                年付
                            </span>
                        </van-grid-item>
                        <van-grid-item>
                            <span class="num">
                                {{Statistics.authenticationMonthCount}}
                            </span>
                            <span class="myDataMonthAbout">
                                已认证
                            </span>
                        </van-grid-item>
                        <van-grid-item>
                            <span class="num">
                                {{Statistics.notAuthenticationMonthCount}}
                            </span>
                            <span class="myDataMonthAbout">
                                未认证
                            </span>
                        </van-grid-item>
                        <van-grid-item>
                            <span class="num">
                                {{Statistics.deleteMonthCount}}
                            </span>
                            <span class="myDataMonthAbout">
                                已删除
                            </span>
                        </van-grid-item>
                    </van-grid>
                    <div class="myDataMonthDate">
                        统计日 {{Statistics.month}}至{{Statistics.nextMonth}}
                    </div>
                </div>
                <div class="achievement">
                    <div class="flex achievementTop">
                        <span class="flex">
                            <pwbIcon class="icon-achievement"></pwbIcon>
                            总业绩统计
                        </span>
                        <em>
                            假数据统计
                            <i>0万</i>
                        </em>
                    </div>
                    <div class="showAchievement flexColumn">
                        <span class="num achievementHouseIndex">
                            {{Statistics.totalAllCount}}
                        </span>
                        <span class="achievementHouseTittle">
                            总房屋数(套)
                        </span>
                        <!-- <div class="flex show">
                            <div v-for="item in showAchievement">
                                <van-circle :stroke-width='100' layer-color='#eaeaea' :color='item.background'
                                    v-model="item.progress" :rate="item.progress" :size="65"
                                    :text="item.progress+'%'" />
                                <span>
                                    {{item.name}}
                                </span>
                            </div>
                            
                        </div> -->
                        <div class="flex show" v-if="Statistics != ''">
                            <div  class="progressContainer flexColumn">
                                <van-circle :stroke-width='100' layer-color='#eaeaea' :color='YFBG'
                                    v-model="Statistics.monthRent" :rate="Statistics.monthRent" :size="65"
                                    :text="Statistics.monthRent+'%'" />
                                <span>
                                    月付
                                </span>
                            </div>
                            <div  class="progressContainer flexColumn">
                                <van-circle :stroke-width='100' layer-color='#eaeaea' :color='NFBG'
                                    v-model="Statistics.yearRent" :rate="Statistics.yearRent" :size="65"
                                    :text="Statistics.yearRent+'%'" />
                                <span>
                                    年付
                                </span>
                            </div>
                            <div class="progressContainer flexColumn">
                                <van-circle :stroke-width='100' layer-color='#eaeaea' :color='RZBG'
                                    v-model="Statistics.authenticationRent" :rate="Statistics.authenticationRent" :size="65"
                                    :text="Statistics.authenticationRent+'%'" />
                                <span>
                                    已认证
                                </span>
                            </div>
                            <div class="progressContainer flexColumn">
                                <van-circle :stroke-width='100' layer-color='#eaeaea' :color='NOBG'
                                    v-model="Statistics.notAuthenticationRent" :rate="Statistics.notAuthenticationRent" :size="65"
                                    :text="Statistics.notAuthenticationRent+'%'" />
                                <span>
                                    未认证
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="OrderList">
                    <div class="OrderListTop flex" :class="isOrderListTop?'OrderFixed':''">
                        <span>
                            订单列表
                        </span>
                        <ul class="flex">
                            <li @click="whoActive = 0" :class="whoActive == 0?'active':''">全部</li>
                            <li @click="whoActive = 1" :class="whoActive == 1?'active':''">年付</li>
                            <li @click="whoActive = 2" :class="whoActive == 2?'active':''">月付</li>
                        </ul>
                    </div>
                    <div class="OrderListList" v-if="whoActive == 0">
                        <houseList v-for="(item,index) in allList" :key="index" :title="item.title" :isRZ='item.append_cr_examine_text' :money='item.append_capital_text' :imgSrc='item.thumbnail' :address='item.append_address_info' :id='item.id' ></houseList>
                    </div>
                    <div class="OrderListList" v-else-if="whoActive == 1">
                        <houseList v-for="(item,index) in yearList" :key="index" :title="item.title" :isRZ='item.append_cr_examine_text' :money='item.append_capital_text' :imgSrc='item.thumbnail' :address='item.append_address_info' :id='item.id' ></houseList>
                    </div>
                    <div class="OrderListList" v-else-if="whoActive == 2">
                        <houseList v-for="(item,index) in monthList" :key="index" :title="item.title" :isRZ='item.append_cr_examine_text' :money='item.append_capital_text' :imgSrc='item.thumbnail' :address='item.append_address_info' :id='item.id' ></houseList>
                    </div>
                </div>
            </div>
        </div>
        <footerBar whoShow=2></footerBar>
        <div style="height:50px"></div>
    </div>
</template>

<script>
    import footerBar from '@/components/footerBar'

    export default {
        data() {
            return {
                whoWatch: '1',
                initial: 0,
                  YFBG: {
                    '0%': '#7C55F9',
                    '100%': '#3F77E8'
                },
                
                NFBG: {
                    '0%': '#06C5D9',
                    '100%': '#06DB93'
                },
                
                RZBG: {
                    '0%': '#FF426A',
                    '100%': '#FF69A1'
                },
                NOBG: {
                            '0%': '#F4651F',
                            '100%': '#FF7D3C'
                },
           
                whoActive: 0,
                list: ['', '', '', '', '', '', ''],
                isOrderListTop: false,
                userIdentity: this.$localStore.getLocal('userIdentity'),
                Statistics:'',
                allList:[],
                yearList:[],
                monthList:[]

            }
        },
        components: {
            footerBar,
        },
        methods: {
            watchWho() {
                if (this.whoWatch == 1) {
                    this.$router.push({
                        name: 'peopleStatistics',
                    })
                } else {
                    this.$router.push({
                        name: 'Statistics',
                    })
                }
            },
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let offsetTop = document.querySelector('.OrderListTop').offsetTop
                console.log(offsetTop)
                scrollTop > offsetTop ? this.isOrderListTop = true : this.isOrderListTop = false


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
                    var data = res.data.data
                    if( res.data.code == 1 ){
                        if(type == 'Statistics'){
                            this.Statistics = data
                        }else if(type == 'allList'){
                            this.allList = data.list
                        }else if(type == 'yrarList'){
                            this.yearList =  data.list
                        }else if(type == 'monthList'){
                            this.monthList =  data.list
                        }
                    }
                })
            }


        },
        mounted() {
            // 添加滚动事件
            window.addEventListener('scroll', this.handleScroll)
            this.get(this.Interface.config.peopleStatistics,'','Statistics')
            this.get(this.Interface.config.peopleHouseList,'','allList')
            this.get(this.Interface.config.peopleHouseList,{type:'year'},'yrarList')
            this.get(this.Interface.config.peopleHouseList,{type:'month'},'monthList')
        }
    }
</script>

<style scoped lang='scss'>
    .teamStatistics {
        header {
            background: linear-gradient(-30deg, rgba(63, 119, 232, 1) 0%, rgba(118, 158, 254, 1) 100%);
            padding: 15px;
            padding-bottom: 65px;

            .headerScreen {
                align-items: center;
                color: #fff;

                select {
                    background: rgba($color: #000000, $alpha: 0.0);
                    border: 0;
                    font-size: 22px;
                }
            }
        }

        .myData {
            margin-top: -50px;
            padding: 0 15px;

            .myDataMonth {
                background: #fff;
                width: 100%;
                padding: 15px 10px;
                border-radius: 5px;

                .myDataMonthTittle {
                    font-size: 14px;
                    color: #999;
                    text-align: center;
                }

                .van-grid {
                    .num {
                        font-size: 25px;
                        color: #F7241B;
                        font-weight: bold;
                    }

                    .myDataMonthAbout {
                        font-size: 13px;
                    }

                }

                .myDataMonthDate {
                    font-size: 12px;
                    color: #CCCBCB;
                    text-align: center;
                }
            }

            .achievement {
                margin-top: 10px;
                background: #fff;
                padding: 15px;
                border-radius: 5px;

                .achievementTop {
                    align-items: center;

                    span {
                        font-size: 16px;

                        .icon {
                            margin-right: 8px;
                        }
                    }

                    em {
                        font-size: 12px;
                        color: #999;

                        i {
                            color: #4076E9;
                        }
                    }
                }

                .showAchievement {
                    align-items: center;
                    margin-top: 27px;

                    .achievementHouseIndex {
                        color: #4076E9;
                        font-size: 35px;
                        line-height: 35px;
                        font-weight: bold;
                    }

                    .achievementHouseTittle {
                        padding-top: 10px;
                        font-size: 13px;
                    }

                    .show {
                        padding-top: 20px;
                        width: 100%;

                        

                        .progressContainer {
                            text-align: center;
                            .van-circle {
                                margin-bottom: 10px;
                                .van-circle__text {
                                    font-size: 16px;
                                }
                            }
                            span {
                                font-size: 13px;
                                line-height: 13px;
                            }
                        }

                    }
                }
            }

            .OrderList {
                padding: 20px 0;
                padding-top: 25px;

                .OrderListTop {
                    align-items: center;

                    span {
                        font-size: 20px;
                        font-weight: bold;
                        line-height: 20px;
                    }

                    ul {
                        li {
                            font-size: 16px;
                            margin-left: 2em;
                            line-height: 16px;
                            padding: 5px 0;
                        }

                        li.active {
                            color: #4076E9;
                            font-weight: bold;
                            border-bottom: 3px solid #4076E9;
                        }
                    }
                }

                .OrderFixed {
                    width: 100%;
                    z-index: 999;
                    position: fixed;
                    top: 0;
                    left: 0;
                    padding: 15px 15px;
                    background: #fff;
                    ;
                }

                .OrderListList {
                    padding: 15px 0;
                }
            }
        }
    }
</style>