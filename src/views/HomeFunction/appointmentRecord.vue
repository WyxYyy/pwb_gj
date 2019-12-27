<template>
    <div>
        <navBar title="历史预约" ></navBar>
        <div class="appointment">
            <div class="list" v-for="item in list">
                <div class="time">
                    上午 10：00
                </div>
                <div class="state">
                    <div class="stateTop flex">
                        <span>
                            已同意
                        </span>
                        <em>
                            <van-icon name="phone" />
                            联系他
                        </em>
                    </div>
                    <houseList></houseList>
                </div>
            </div>

        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:['','','','','','','']
        }
    }
}
</script>

<style lang='scss' scoped>
    .appointment{
        padding: 0 15px;
        .time{
            height: 37px;
            text-align: center;
            line-height: 37px;
            font-size: 12px;
            color: #999;
        }
        .state{
            background: #fff;;
            .stateTop{
                padding: 15px;
                height: 40px;
                align-items: center;
                border-bottom: 1px solid #EEEBEA;
                span{
                    font-size: 15px;
                    color: #F92820;
                }
                em{
                    color: #3F77E8;
                    font-size: 15px;
                }
            }
        }
    }
</style>