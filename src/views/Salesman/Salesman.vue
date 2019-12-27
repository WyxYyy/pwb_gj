<template>
    <div>
        <navBar title="我的团队"></navBar>
        <div class="Salesman">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="businessList" v-for="(item,index) in list" :key="index" @click="goDetail(item.id)">
                    <div class="businessListLeft">
                        <pwbIcon v-if="index == 0" class="icon-businessList icon-businessList-gold"></pwbIcon>
                        <pwbIcon v-else-if="index == 1" class="icon-businessList icon-businessList-silver"></pwbIcon>
                        <pwbIcon v-else-if="index == 2" class="icon-businessList icon-businessList-copper"></pwbIcon>
                        <span v-else>{{index + 1}}</span>
                    </div>
                    <div class="businessListRight flex">
                        <div class="flex">
                            <img class="businessHead" v-if="item.avatar" :src="item.avatar" alt="">
                            <img class="businessHead" v-else src="../../assets/img/head.png" alt="">
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
                </div>
            </van-list>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
            };
        },
        methods: {
            onLoad() {

            },
            get() {
                this.$axios({
                    url: this.Interface.config.teamStaff,
                    method: 'get',
                    headers: {
                        'XX-Token': this.$localStore.getLocal('token'),
                        'XX-Device-Type': 'mobile'
                    },
                }).then((res) => {
                    console.log(res)
                    this.list = res.data.data.teamBusinessStatistics
                    this.finished = true
                    this.loading = false

                })
            },
            goDetail(id) {
                this.$router.push({
                    path: 'SalesmanDetail/' + id
                })

            },
        },
        mounted() {
            this.get()
        }

    }
</script>

<style scoped lang='scss'>
    .Salesman {
        padding: 15px;
        ;
    }

    .van-list {
        background: #fff;
        width: 100%;
        border-radius: 5px;

        .businessList {
            height: 75px;
            display: flex;
            align-items: center;
            padding: 0 15px;
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
</style>