<template>
    <div>
        <navBar title="租聘详情"></navBar>
        <div class="title">
            租凭信息
        </div>
        <ul>
            <li class="flex">
                <span>
                    起租日期
                </span>
                <em>
                    2018-06-01
                </em>
            </li>
            <li class="flex">
                <span>
                    到期日期
                </span>
                <em>
                    2019-06-01
                </em>
            </li>
            <li class="flex">
                <span>
                    缴租日期
                </span>
                <em>
                    8/12期
                </em>
            </li>
            <li class="flex">
                <span>
                    收租日
                </span>
                <em>
                    每月
                    <i>
                        <b class="num">
                            10
                        </b>
                        号
                    </i>
                </em>
            </li>
            <li class="flex">
                <span>
                    租金
                </span>
                <em>
                    <i>
                        <b class="num">4000</b>
                        元/月
                    </i>
                </em>
            </li>
            <li class="flex">
                <span>
                    押金
                </span>
                <em>
                    <i>
                        <b class="num">
                            4000
                        </b>
                        元
                    </i>
                </em>
            </li>
            <div class="Remarks">
                <span>
                    备注
                </span>
                <textarea placeholder="此处填写备注信息"> 

                </textarea>
            </div>
        </ul>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss' >
.title{
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    padding-left: 15px;
}
ul{
    padding:0 15px;
    background: #fff;
    li{
        border-bottom: 1px solid #EEEBEA;
        height: 50px;
        align-items: center;
        span{
            font-size: 15px;
            color: #999;
        }
        em{
            font-size: 17px;
            i{
                color: #F92820;
                font-size: 14px
            }
            .num{
                font-size: 22px;
                font-weight: bold;
            }
        }
    }
    .Remarks{
        span{
            display: block;
            height: 50px;
            line-height: 50px;
            font-size: 15px;
            color: #999;
        }
        textarea{
            border: 0;
            font-size: 16px;
            color: #333;
            padding: 0;
            padding-bottom: 20px;
        }
    }
    
}
</style>