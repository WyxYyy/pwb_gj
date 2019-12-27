<template>
    <div>
        <navBar title="消息中心"></navBar>
        <div class="news">
            <div class="newsList" @click="wantTo('newsDetail')" v-for="item in newsList">
                <div class="newsTime">
                    上午 9:05
                </div>
                <div class="newsContent">
                    <div class="newsTittle">
                        您收到一条新的站内通知消息
                    </div>
                    <div class="newsTips">
                        恭喜您！续约申请已成功提交，可点击查看！
                    </div>
                    <div class="newsSeemore flex">
                        <span>
                            查看详情
                        </span>
                        <van-icon name="arrow" />
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsList: ['', '', '', '', '', '']
            }
        },
        methods: {
     
        }
    }
</script>

<style scoped lang='scss'>
    .news {
        padding: 0 15px;
        padding-bottom: 20px;

        .newsList {
            .newsTime {
                height: 37px;
                text-align: center;
                line-height: 37px;
                font-size: 12px;
                color: #999;
            }

            .newsContent {
                background: #fff;
                border-radius: 2px;
                width: 100%;
                padding: 15px;
                padding-bottom: 0;

                .newsTittle {
                    font-size: 18px;
                    padding-top: 5px;
                    font-weight: bold;
                    width: 100%;

                }

                .newsTips {
                    font-size: 15px;
                    color: #999;
                    line-height: 15px;
                    padding: 15px 0;
                    border-bottom: 1px solid #EEEBEA;
                }

                .newsSeemore {
                    height: 45px;
                    font-size: 15px;
                    align-items: center;

                }
            }
        }
    }
</style>