<template>
    <!-- 团队统计 -->
    <div>
        <div class="Statistics ">
            <header>
                <div class="flex headerScreen">
                    <select @change="watchWho" v-model="whoWatch">
                        <option value="0">团队</option>
                        <option value="1">个人</option>
                    </select>
                    <pwbIcon class="icon-screen" @click.native="isSelect = true"></pwbIcon>
                </div>
                <div class="dataStatistics">
                    <div class="dataAllHouse dataContainer">
                        <div class="title">
                            总房屋数(套)
                        </div>
                        <div class="dataIndex">
                            <b class="num">
                                {{teamStatistics.totalCount}}
                            </b>
                            <span>
                                假数据统计 0万
                            </span>
                        </div>
                    </div>
                    <div class="payMode flex">
                        <div class="dataContainer dataContainerSmall">
                            <div class="title">
                                <pwbIcon class="icon-Statistics-team icon-Statistics-team-yf"></pwbIcon>
                                月付(套)
                            </div>
                            <div class="dataIndex">
                                <b class="num">
                                    {{teamStatistics.monthCount}}
                                </b>
                            </div>
                            <div class="flex">
                                <i></i>
                                <span>
                                    {{teamStatistics.monthRent}}%
                                </span>
                            </div>
                        </div>
                        <div class="dataContainer dataContainerSmall">
                            <div class="title">
                                <pwbIcon class="icon-Statistics-team icon-Statistics-team-nf"></pwbIcon>
                                年付(套)
                            </div>
                            <div class="dataIndex">
                                <b class="num">
                                    {{teamStatistics.yearCount}}
                                </b>
                            </div>
                            <div class="flex">
                                <i></i>
                                <span>
                                    {{teamStatistics.yearRent}}%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class=" flex">
                        <div class="dataContainer dataContainerSmall">
                            <div class="title">
                                <pwbIcon class="icon-Statistics-team icon-Statistics-team-yf"></pwbIcon>
                                已认证(套)
                            </div>
                            <div class="dataIndex">
                                <b class="num">
                                    {{teamStatistics.authenticationCount}}
                                </b>
                            </div>
                            <div class="flex">
                                <i></i>
                                <span>
                                    {{teamStatistics.authenticationRent}}%
                                </span>
                            </div>
                        </div>
                        <div class="dataContainer dataContainerSmall">
                            <div class="title">
                                <pwbIcon class="icon-Statistics-team icon-Statistics-team-nf"></pwbIcon>
                                未认证(套)
                            </div>
                            <div class="dataIndex">
                                <b class="num">
                                    {{teamStatistics.notAuthenticationCount}}
                                </b>
                            </div>
                            <div class="flex">
                                <i></i>
                                <span>
                                    {{teamStatistics.notAuthenticationRent}}%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="RankingList">
                <div class="title flex" @click="wantTo('Salesman')">
                    <span>
                        业绩排行榜
                    </span>
                    <van-icon name="arrow" />
                </div>
                <div class="businessList">
                    <ul>
                        <li v-for="(item,index) in teamStaff" :key="index" @click="goDetail(item.id)">
                            <div class="businessListLeft">
                                <pwbIcon v-if="index == 0" class="icon-businessList icon-businessList-gold"></pwbIcon>
                                <pwbIcon v-else-if="index == 1" class="icon-businessList icon-businessList-silver"></pwbIcon>
                                <pwbIcon v-else-if="index == 2" class="icon-businessList icon-businessList-copper"></pwbIcon>
                                <span v-else>{{index + 1}}</span>
                            </div>
                            <div class="businessListRight flex">
                                <div class="flex">
                                    <img class="businessHead" v-if="item.avatar" :src="item.avatar" alt="">
                                    <img class="businessHead" v-else src="../assets/img/head.png" alt="">
                                    <div class="flexColumn">
                                        <span class="businessTittle">{{ item.user_nickname}}</span>
                                        <span class="businessHouse">
                                            总房屋数
                                            <em class="businessHouseIndex">
                                                {{item.allCount}}万
                                            </em>
                                        </span>
                                    </div>
                                </div>
                                <div class="todayUpload">
                                    今日上传量
                                    <em :class="index == 0 || index == 1 || index == 2? 'active':''">{{item.todayCount}}</em>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="seeMoreBusinessList" @click="wantTo('Salesman')">
                        查看更多
                    </div>
                </div>
            </div>
        </div>
        <van-popup
            v-model="isSelect"
            
            overlay
            position="bottom"
            >
            
            <van-datetime-picker
                v-model="currentDate"
                type="year-month"
                :min-date="minDate"
                :max-date="nowDate"
                :formatter="formatter"
                title='请选择您要查看的月份'
                @cancel="isSelect = false"
                @confirm="confirmSelect"

                />
        </van-popup>
        <footerBar whoShow=2></footerBar>
        <div style="height:50px"></div>
    </div>
</template>

<script>
    import footerBar from '@/components/footerBar'
    import { houseAPI } from '../js/publicAxios'

    export default {
        data() {
            return {
                whoWatch: 0,
                businessList: ['', '', '', '', ''],
                userIdentity: this.$localStore.getLocal('userIdentity'),
                teamStatistics:'',
                isSelect:false,
                teamStaff:[],
                currentDate: new Date(),
                minDate:new Date(),
                nowDate:new Date()
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
            getStatisticInfo(type) {
                getStatisticInfo(type).then(res => {
                    console.log(res)
                })
            },
            goDetail(id){
                this.$router.push({
                    path:'SalesmanDetail/'+id
                })
                
            },
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
                    return `${value}月`
                }
                return value;
            },
            confirmSelect(e){
                console.log(e)
                var date = e
                var year=date.getFullYear(); 
                var month=date.getMonth()+1;
              

                this.get(this.Interface.config.teamStatistics,{month:month,year:year},'Statistics')


            }
        },
        mounted() {
            console.log('userIdentity')
            if (this.userIdentity == 2) {
                this.$router.push({
                    name: 'peopleStatistics',
                })
            }
            this.getStatisticInfo('Statistics');
            this.getStatisticInfo('teamStaff');
            console.log(this.$localStore.getLocal('token'))
        }
    }
</script>

<style scoped lang='scss'>
    .Statistics {
        header {
            background: linear-gradient(-30deg, rgba(63, 119, 232, 1) 0%, rgba(118, 158, 254, 1) 100%);
            padding: 15px;

            .headerScreen {
                align-items: center;
                color: #fff;

                select {
                    background: rgba($color: #000000, $alpha: 0.0);
                    border: 0;
                    font-size: 22px;
                }
            }

            .dataStatistics {
                padding-top: 20px;

                .dataContainer {
                    border-radius: 5px;
                    background: rgba(19, 68, 174, 0.3);
                    padding: 15px;

                    .title {
                        color: #fff;
                        font-size: 13px;
                        line-height: 13px;
                        display: flex;
                        align-items: center;
                    }
                }

                .dataContainerSmall {
                    height: 95px;
                    width: 170px;

                    .dataIndex {
                        margin-top: 3px;

                        b {
                            font-size: 30px;
                            line-height: 30px;
                            color: #fff;
                        }
                    }

                    .flex {
                        font-size: 15px;
                        color: #84C6FF;
                        line-height: 15px;
                    }
                }

                .dataAllHouse {
                    width: 100%;
                    height: 85px;

                    .dataIndex {
                        display: flex;
                        margin-top: 8px;
                        color: #fff;
                        justify-content: space-between;
                        align-items: center;

                        .num {
                            font-weight: bold;
                            font-size: 40px;
                            line-height: 40px;
                        }

                        span {
                            font-size: 13px;
                            color: rgba(255, 255, 255, 0.6);
                        }
                    }
                }

                .payMode {
                    margin: 7px 0;
                }
            }

        }

        .RankingList {
            padding: 0 15px;
            padding-top: 5px;
            margin-bottom: 15px;
            ;

            .title {
                align-items: center;
                padding: 20px 0;
                font-weight: bold;
            }

            .businessList {
                background: #fff;
                width: 100%;
                border-radius: 5px;

                li {
                    height: 75px;
                    display: flex;
                    align-items: center;
                    padding: 0 15px;

                }

                .seeMoreBusinessList {
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 12px;
                    color: #999;
                }
            }

            .businessListLeft {
                text-align: center;
                width: 21px;
                height: 32px;
                text-align: center;
                line-height: 32px;

                span {
                    font-size: 15px;
                }
            }

            .businessListRight {
                align-items: center;
                margin-left: 15px;
                padding: 15px 0;
                height: 100%;
                width: 100%;
                border-bottom: 1px solid #F3F3F3;

                .businessHead {
                    width: 45px;
                    height: 45px;
                    margin-right: 7px;
                }

                .flexColumn {
                    .businessTittle {
                        font-size: 18px;
                        font-weight: bold;
                    }

                    .businessHouse {
                        font-size: 12px;
                        color: #999999;
                    }

                    .businessHouseIndex {
                        color: #3F77E8;
                        padding-left: 3px;
                    }
                }

                .todayUpload {
                    font-size: 14px;
                    line-height: 14px;
                    color: #999999;

                    em {
                        color: #333;
                        font-weight: bold;
                        padding-left: 10px;
                    }

                    em.active {
                        color: #F7241B;
                    }
                }
            }
        }
    }
    .van-popup--bottom{
        .screenTitle{
            font-size: 16px;
            line-height: 16px;
        }
    }
</style>