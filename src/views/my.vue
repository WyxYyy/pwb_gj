<template>
  <div>
    <header>
      <div class="headTitle">
        我的
      </div>
      <div class=" headerScreen flex">
        <div class=" Salesman" @click="wantTo('userSet')">
          <img v-if="user.avatar == ''" src="../assets/img/my_head.png" alt="">
          <img v-else :src="user.avatar" alt="">
          <div class="flexColumn">
            <span>{{user.user_nickname}}</span>
            <span>
              点击完善自己的资料
            </span>
          </div>
        </div>
        <van-icon name="arrow" />
      </div>
    </header>
    <div class="content">
      <div class="account flex">
        <div class="flexColumn">
          <span class="num">
            100.00
          </span>
          <span>
            账户余额(元)
          </span>
        </div>
        <div class="flexColumn">
          <span class="num">
            5000.00
          </span>
          <span>
            累计赚取佣金(元)
          </span>
        </div>
      </div>
      <div class="Order">
        <div class="OrderTitle flex">
          <span>房屋管理</span>
          <span @click="wantTo('OrderList')">
            全部订单
            <van-icon name="arrow" />
          </span>
        </div>
        <div class="OrderList">
          <div class="flexColumn" @click="wantTo('OrderList',{type:'stay'})">
            <i v-if="user.orderNum != 0">
              {{user.orderNum}}
            </i>
            <pwbIcon class="icon-myHouseOrder icon-myHouseOrder-stay"></pwbIcon>
            <span>
              待处理
            </span>
          </div>
          <div class="flexColumn" @click="wantTo('OrderList',{type:'service'})">
            <pwbIcon class="icon-myHouseOrder icon-myHouseOrder-ing"></pwbIcon>
            <span>
              服务中
            </span>
          </div>

          <div class="flexColumn" @click="wantTo('OrderList',{type:'already'})">
            <pwbIcon class="icon-myHouseOrder icon-myHouseOrder-already"></pwbIcon>
            <span>
              已完成
            </span>
          </div>
        </div>
      </div>
      <div class="Other">
        <div class="OtherTitle">
          其他工具
        </div>
        <div class="OtherTool">
          <van-grid :border="false" :column-num="4">
            <van-grid-item @click="wantTo('news')">
              <pwbIcon class="icon-OtherTool icon-OtherTool-news"></pwbIcon>
              <span>
                我的消息
              </span>
            </van-grid-item>
            <van-grid-item @click="wantTo('ReceiptRecord')">
              <pwbIcon class="icon-OtherTool icon-OtherTool-meet"></pwbIcon>
              <span>
                历史接单
              </span>
            </van-grid-item>
            <van-grid-item @click="wantTo('addHouseList')">
              <pwbIcon class="icon-OtherTool icon-OtherTool-upload"></pwbIcon>
              <span>
                历史上传
              </span>
            </van-grid-item>
            <van-grid-item @click="callKF">
              <pwbIcon class="icon-OtherTool icon-OtherTool-callKF"></pwbIcon>
              <span>
                联系客服
              </span>
            </van-grid-item>
            <van-grid-item @click="wantTo('set')">
              <pwbIcon class="icon-OtherTool icon-OtherTool-Set "></pwbIcon>
              <span>
                设置
              </span>
            </van-grid-item>

          </van-grid>
        </div>
      </div>
    </div>

    <footerBar whoShow=3></footerBar>
    <div style="height:50px"></div>
  </div>
</template>

<script>
  import footerBar from '@/components/footerBar'

  export default {
    data(){
      return{
        user:""
      }
    },
    components: {
      footerBar,
    },
    methods: {
      callKF() {
        window.location.href = 'tel://4009606168'
      },
      get() {
        this.$axios({
          url: this.Interface.config.my,
          method: 'get',
          headers: {
            'XX-Token': this.$localStore.getLocal('token'),
            'XX-Device-Type': 'mobile'
          },
        }).then((res) => {
          console.log(res)
          this.user = res.data.data
        })
      },
    },
    mounted(){
      this.get()
    }
  }
</script>

<style scoped lang='scss'>
  header {
    width: 100%;
    background: linear-gradient(-30deg, rgba(63, 119, 232, 1) 0%, rgba(118, 158, 254, 1) 100%);
    padding: 15px;
    padding-bottom: 60px;

    .headTitle {
      font-size: 18px;
      color: #fff;
      text-align: center;
    }

    .headerScreen {
      margin-top: 30px;
      align-items: center;
      color: #fff;
      width: 100%;

      .Salesman {
        display: flex;

        img {
          width: 55px;
          height: 55px;
          margin-right: 15px;
        }

        .flexColumn {
          padding: 7px 0;

          :first-child {
            font-size: 20px;
            font-weight: bold;
            line-height: 20px;
          }

          :last-child {
            font-size: 13px;
            line-height: 13px;
          }
        }
      }
    }
  }

  .content {
    margin-top: -45px;
    width: 100%;
    padding: 0 15px;

    .account {
      >div {
        width: 168px;
        height: 75px;
        border-radius: 3px;
        background: #fff;
        padding: 15px 0;
        align-items: center;

        :first-child {
          color: #3F77E8;
          font-size: 25px;
          line-height: 25px;
          font-weight: bold;
        }

        :last-child {
          font-size: 13px;
        }
      }
    }

    .Order {
      margin: 10px 0;
      background: #fff;
      border-radius: 3px;
      padding: 15px;

      .OrderTitle {
        align-items: center;

        :first-child {
          font-size: 14px;
          font-weight: bold;
        }

        :last-child {
          color: #999999;
          font-size: 12px;
        }
      }

      .OrderList {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        padding-top: 18px;
        

        .flexColumn {
          align-items: center;
          font-size: 13px;
          position: relative;
          span {
            padding-top: 11px;
          }
          i{
            position: absolute;
            top: -10px;
            left: 25px;
            display: block;
            padding: 3px;
            font-size: 10px;
            color: #3F77E8;
            border: #3F77E8 1px solid;
            background: #fff;
            border-radius: 5px;
          }
        }
      }
    }

    .Other {
      border-radius: 3px;
      width: 100%;
      padding: 15px;
      background: #fff;

      .OtherTitle {
        font-size: 14px;
        font-weight: bold;
      }

      .OtherTool {
        .van-grid {
          .van-grid-item {
            margin-top: 20px;
            font-size: 13px;

            .icon {
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
</style>