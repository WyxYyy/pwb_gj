<template>
  <div class="icon" :class="className">
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props: ['className'],
    
}
</script>

<style scoped lang='scss'>
    .icon{
        background: url(../../assets/img/icons.png);
        background-size: 250px 172.5px;
        
    }
    .index_top{
        width: 30px;
        height: 30px;
        margin-bottom: 10.5px;
    }
    .icon-zcEwm{
        background-position: -66px 0;
    }
    .icon-ywyEwm{
        background-position: -96px 0;
    }
    .icon-pdNotice{
        background-position: -126px 0;
    }
    .icon-yyNotice{
        background-position: -156px 0;
    }
    .footerBar{
        width: 22px;
        height: 22px;
    }
    .footerBarCenter{
        background-position: -22px 0;
    }
    .footerBarRight{
        background-position: -44px 0;
    }
    .icon-navBar{
        width: 22px;
        height: 22px;
    }
    .icon-navBar-history{
        background-position: -34px -44px;
    }
    .icon-screen{
        width: 22px;
        height: 22px;
        background-position: -15px -78px;
    }
    .icon-Statistics-team{
        width: 19px;
        height: 19px;
        margin-right: 8px;
        display: inline-block;
    }
    .icon-Statistics-team-yf{
        background-position: -37px -78px;
    }
    .icon-Statistics-team-nf{
        background-position: -56px -78px;
    }
    .icon-businessList{
        width: 21px ;
        height: 32px ;
    }
    .icon-businessList-gold{
        background-position: -125px -78px;
    }
    .icon-businessList-silver{
        background-position: -146px -78px;
    }
    .icon-businessList-copper{
        background-position: -167px -78px;
    }
    .icon-achievement{
        width: 20px;
        height: 20px;
        background-position: -223px -78px;
    }
    .icon-Salesman{
        width: 35px;
        height: 35px;
        background-position:-188px -78px ;
    }
    .icon-myHouseOrder{
        width: 30px;
        height: 30px;
    }
    .icon-myHouseOrder-stay{
        background-position: 0 -113px;
    }
    .icon-myHouseOrder-ing{
        background-position: -30px -113px;
    }
    .icon-myHouseOrder-already{
        background-position: -60px -113px;
    }
    .icon-OtherTool{
        width: 30px;
        height: 30px;
    }
    .icon-OtherTool-news{
        background-position: -120px -113px;
    }
    .icon-OtherTool-meet{
        background-position: 0 -143px;
    }
    .icon-OtherTool-upload{
        background-position: -30px -143px;
    }
    .icon-OtherTool-callKF{
        background-position: -90px -143px;
    }
    .icon-OtherTool-Set{
        background-position: -120px -143px;
    }
    .icon-Contact{
        width: 30px;
        height: 30px;
    }
    .icon-Contact-people{
        background-position: -56px -44px;
    }
    .icon-Contact-phone{
        background-position: -86px -44px;
    }
    .icon-Contact-time{
        background-position: -116px -44px;
    }
    .icon-isSuccess{
        width: 40px;
        height: 40px;
        margin: 0 auto;
    }
    .icon-isSuccess-yes{
        background-position: -170px -113px;
    }
    .icon-isSuccess-no{
        background-position: -210px -113px;
    }
    .orderIcon{
        width: 20px;
        height: 20px;
    }
    .orderIcon-phone{
        background-position: -186px 0;
    }
    .orderIcon-address{
        background-position: -206px 0;
    }
</style>