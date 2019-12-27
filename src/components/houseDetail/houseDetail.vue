<template>
  <div class="houseDetail">
      <div class="bannerHeader">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in house.images.photos" :key="index">
                    <img v-lazy="image.url" />
                </van-swipe-item>
            </van-swipe>
            <div class="houseState">
                <div class="Label">
                    <img v-if="house.cr_examine =='已认证'" src="../../assets/img/cert.png" alt="">
                    <img v-else src="../../assets/img/no_cert.png" alt="">
                    <img v-if="house.can_monthly == '年付'" src="../../assets/img/year.png" alt="">
                    <img v-else src="../../assets/img/month.png" alt="">                
                </div>
                <div class="houseTitle flex">
                    <span>
                        {{house.title}}
                    </span>
                    <em class="num" v-if="house.capita != '面议'">
                        {{house.capital}}<i>万</i>
                    </em>
                    <em v-else>
                        {{house.capital}}
                    </em>
                </div>
            </div>
      </div>
      <div class="aboutHouse">
          <div class="aboutHouseList">
              <div class="aboutHouseTitle">
                  详细地址
              </div>
              <div class="aboutHouseContent">
                  {{house.addressInfo}}
              </div>
          </div>
          <div class="aboutHouseList">
              <div class="aboutHouseTitle">
                  房屋租赁信息
              </div>
              <div class="aboutHouseContent">
                  {{house.leaseInfo}}
              </div>
          </div>
            <div class="aboutHouseList">
              <div class="aboutHouseTitle">
                  商铺基本信息
              </div>
              <div class="aboutHouseContent">
                  {{house.baseInfo}}
              </div>
          </div>
          <div class="aboutHouseList">
              <div class="aboutHouseTitle">
                  配套设施
              </div>
              <div class="aboutHouseContent">
                  {{house.facilitiesInfo}}
              </div>
          </div>
          <div class="aboutHouseList">
              <div class="aboutHouseTitle">
                  房源描述
              </div>
              <div class="aboutHouseContent">
                  {{house.houseDesc}}
              </div>
          </div>
          <div class="aboutHouseList">
              <div class="aboutHouseTitle">
                  官方描述
              </div>
              <div class="aboutHouseContent">
                  {{house.officialDesc}}
              </div>
          </div>
          <div class="aboutHouseList">
              <div class="aboutHouseTitle">
                  历史经营
              </div>
              <div class="aboutHouseContent">
                  {{house.operate}}
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
             images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg'
            ],
            list:['','','','',''],
            house:'',

        }
    },
    props:['id'],
    methods:{
        get(){

            this.$axios({
                url: this.Interface.config.houseInfo,
                method: 'get',
                headers: {
                    'XX-Token': this.$localStore.getLocal('token'),
                    'XX-Device-Type': 'mobile'
                },
                params: {
                    merch_id:this.id
                },
            }).then((res) => {
                console.log(res)
                this.house = res.data.data
            })
        }
    },
    mounted(){
        this.get()
    }
}
</script>

<style scoped lang='scss'>
    .houseDetail{
        .bannerHeader{
            border-radius:3px;
            .van-swipe{
                height: 155px;
            }
            .houseState{
                padding: 15px;
                background: #fff;
                .Label{
                    display: flex;
                    img{
                        height: 20px;
                        margin-right: 5px;
                    }
                }
                .houseTitle{
                    align-items: center;
                    span{
                        font-size: 17px;
                        line-height: 17px;
                        color: #1A1919;
                    }
                    em{
                        line-height: 30px;
                        font-size: 30px;
                        color: #F7241B;
                        font-weight: bold;
                        i{
                            font-weight: 400;
                            font-size: 16px;
                        }
                    }
                }
            }
        }
        .aboutHouse{
            padding: 0 15px;
            background: #fff;
            margin-top: 10px;
            border-radius:2px;
            .aboutHouseList{
                padding: 20px 0;
                border-bottom: 1px solid #EEEBEA;
                .aboutHouseTitle{
                    color: #C1C1C1;
                    font-size: 13px;
                }
                .aboutHouseContent{
                    margin-top: 10px;
                    font-size: 16px;
                }
            }
            :last-child.aboutHouseList{
                border: 0;
            }
        }
    }
</style>