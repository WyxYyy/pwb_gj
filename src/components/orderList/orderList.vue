<template>
    <div class="orderList" @click="Jump(state,id)">
        <div class="orderListTitle flex">
            <span>
                <i>年付</i>
                {{title}}
            </span>
            <em v-if="state == 'stay'">
                房源信息待补充
            </em>
        </div>
        <div class="orderListPhone flex">
            <div class="flex">
                <pwbIcon class="orderIcon orderIcon-phone"></pwbIcon>
                <i>
                    {{phone}}
                </i> 
            </div>
            <van-icon name="arrow" />
        </div>
        <div class="orderListWhere">
            <pwbIcon class="orderIcon orderIcon-address"></pwbIcon>
            <i>
                {{address}}
            </i>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            Jump(state,id){
                if(state == 'stay'){
                    this.wantTo('houseSupplement',{'id':id})
                }
            }
        },
        props:['title','id','phone','address','state'],
        mounted(){
            console.log(this.title)
            console.log(this.id)
            console.log(this.phone)
            console.log(this.address)
        }
    }
</script>

<style lang='scss' scoped>
    .orderList {
        width: 100%;
        padding: 13px 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        background: #fff;
        border-radius: 2px;
        height: 110px;
        font-size: 15px;
        margin-bottom: 10px;
        .orderIcon {
            width: 20px;
            height: 20px;
            display: inline-block;
            margin-right: 8px;
        }

        .orderListTitle {
            font-size: 17px;
            font-weight: bold;
            align-items: center;

            span {
                display: block;
                display: flex;
                align-items: center;
                line-height: 20px;
                i {
                    display: inline-block;
                    width: 30px;
                    height: 20px;
                    text-align: center;
                    line-height: 20px;
                    background: linear-gradient(0deg, rgba(3, 131, 255, 1) 0%, rgba(82, 168, 253, 1) 100%);
                    border-radius: 3px;
                    font-size: 11px;
                    color: #fff;
                    font-weight: 400;
                    margin-right: 8px;
                    ;
                }
            }

            em {
                color: #F7241B;
                font-size: 14px;
                font-weight: 400;
            }
        }

        .orderListPhone {
            align-items: center;

            .van-icon {
                font-size: 15px;
            }
        }
        .orderListWhere{
            display: flex;
            align-items: center;
            i{
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>