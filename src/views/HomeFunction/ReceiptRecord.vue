<template>
  <div>
        <navBar title="接单记录" ></navBar>
        <ul class="ReceiptRecord">
             <li>
                <div class="flex">
                    <span class="title">商铺（万象城）</span>
                    <div class="state">
                        未抢到
                    </div>
                </div>
                <div class="address">
                    万柏林区长兴路7号华润悦府底商1-1017号商铺
                </div>
                <div class="time">
                    抢单时间 2018-01-10 
                </div>
            </li>
             <li>
                <div class="flex">
                    <span class="title">商铺（万象城）</span>
                    <div class="state active">
                        未抢到
                    </div>
                </div>
                <div class="address">
                    万柏林区长兴路7号华润悦府底商1-1017号商铺
                </div>
                <div class="time">
                    抢单时间 2018-01-10 
                </div>
            </li>
             <li>
                <div class="flex">
                    <span class="title">商铺（万象城）</span>
                    <div class="state">
                        未抢到
                    </div>
                </div>
                <div class="address">
                    万柏林区长兴路7号华润悦府底商1-1017号商铺
                </div>
                <div class="time">
                    抢单时间 2018-01-10 
                </div>
            </li>
             <li>
                <div class="flex">
                    <span class="title">商铺（万象城）</span>
                    <div class="state">
                        未抢到
                    </div>
                </div>
                <div class="address">
                    万柏林区长兴路7号华润悦府底商1-1017号商铺
                </div>
                <div class="time">
                    抢单时间 2018-01-10 
                </div>
            </li>
            <li>
                <div class="flex">
                    <span class="title">商铺（万象城）</span>
                    <div class="state">
                        未抢到
                    </div>
                </div>
                <div class="address">
                    万柏林区长兴路7号华润悦府底商1-1017号商铺
                </div>
                <div class="time">
                    抢单时间 2018-01-10 
                </div>
            </li>
        </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
    .ReceiptRecord{
        padding: 0 15px;
        background: #fff;
        li{
            width: 100%;    
            padding: 15px 0;
            border-bottom: 1px solid #F4F3F3;
            .flex{
                align-items: center;
                .title{
                    font-size: 16px;
                    font-weight: bold;
                }
                .state{
                    width:47px;
                    height:20px;
                    background:rgba(99,99,99,0.15);
                    border-radius:3px;
                    text-align: center;
                    line-height: 20px;
                    font-size: 11px;
                    color: #999;
                }
                .state.active{
                    background: rgba(45,190,0,0.15);
                    color: #2DBE00;
                }
            }
            .address{
                margin-top: 7px;
                margin-bottom: 15px;
                font-size: 12px;

            }
            .time{
                color: #999999;
                font-size: 12px;
            }
        }
    }
</style>