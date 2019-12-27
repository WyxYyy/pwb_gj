<template>
<!-- 房屋列表组件 -->
    <div class="houseList" @click="goDetail(id)">
        <img :src="imgSrc" class="houseImg" alt="">
        <div class="houseContent flexColumn">
            <span class="houseTittle">
                {{title}}
            </span>
            <span class="houseAddress">
                {{address}}
            </span>
        </div>
        <div class="houseState flexColumn">
            <span class="houseMoney">
                <b class="num">
                    {{money}}
                </b>
                <span v-if="money != '面议'">
                  万  
                </span>
                
            </span>
            <img v-if="isRZ == '已认证'" src="../../assets/img/cert.png" alt="">
            <img v-else src="../../assets/img/no_cert.png" alt="">

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props:['title','id','address','money','imgSrc','isRZ'],
        methods:{
            goDetail(id){
                this.$router.push({
                    path:'InService/'+id
                })
            }
        }
    }
</script>

<style scoped lang='scss'>
    .houseList {
        background: #fff;
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius:5px;
        margin-bottom: 10px;
        .houseImg {
            width: 95px;
            height: 70px;
            border-radius: 2px;
            display: block;
        }   
        .houseContent{
            width: 110px;
            height: 70px;;
            padding: 13px 0;
            .houseTittle{
                width: 100%;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                color: #1A1919;
                font-size: 16px;
                font-weight: bold;
                 overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .houseAddress{
                color: #999;
                font-size: 13px;
                line-height: 13px;  
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
        }
        .houseState{
            width: 80px;
            .houseMoney{
                color: #F7241B;
                font-size: 16px;
                b{
                    font-size: 26px;
                    padding: 0;
                    margin: 0;
                }
            }
            img{
                width: 60px;
                height: 20px;
            }
        }
    }
</style>