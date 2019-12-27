<template>
    <footer>
        <router-link to='/'>
            <nav :class="whoShow == 1?'active':''">
                <pwbIcon class="footerBar footerBarLeft" ></pwbIcon>
                <span>订单</span>
            </nav>
        </router-link>
        <router-link to='/Statistics'>
            <nav :class="whoShow == 2?'active':''">
                <pwbIcon class="footerBar footerBarCenter" ></pwbIcon>
                <span>统计</span>
            </nav>
        </router-link>
        
        <router-link to='/my'>
            <nav :class="whoShow == 3?'active':''">
                <pwbIcon class="footerBar footerBarRight" ></pwbIcon>
                <span>我的</span>
            </nav>
        </router-link>
        
    </footer>
</template>

<script>
export default {
  
    props:['whoShow'],
}
</script>

<style lang='scss' scoped>
    footer{
        z-index: 1899;
        height: 50px;
        width: 100%;
        position: fixed;
        bottom: 0;
        box-shadow:0px 1px 10px 0px rgba(190,190,190,0.21);
        display: flex;
        padding: 7px 53px;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        nav{
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            span{
                font-size: 10px;
                color: #B0AFAF;
            }
        }
        nav.active{
            .footerBarLeft{
                transition:   0.5s;
                background-position: 0 -22px ;
            }
            .footerBarCenter{
                background-position: -22px -22px ;
            }
            .footerBarRight{
                transition:   0.5s;

                background-position: -44px -22px ;
            }
            span{
                color: #3F77E8;
            }
        }
    }
  
</style>