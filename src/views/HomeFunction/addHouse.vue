<template>
  <div>
    <navBar title="上传房屋" navBarRight='icon-navBar-history' navBarRightWantto='addHouseList'></navBar>
    <div class="addHouse">
      <!-- 一个单独的模块 -->
      <div class="addHouseModular">
        <span class="title">上传房源照片</span>
        <div class="photoDiv flex">
          <van-uploader :after-read='imfCompressLeft' v-model="imgLeft" preview-image preview-full-image :max-count="1"
            capture>
            <img class="photo" src="../../assets/img/add.jpg" alt="">
            <span class="imgTips">上传左侧图片</span>
          </van-uploader>
          <van-uploader :after-read='imfCompressCenter' v-model="imgCenter" preview-image preview-full-image
            :max-count="1" capture>
            <img class="photo" src="../../assets/img/add.jpg" alt="">
            <span class="imgTips">上传正面图片</span>

          </van-uploader>
          <van-uploader :after-read='imfCompressRight' v-model="imgRight" preview-image preview-full-image
            :max-count="1" capture>
            <img class="photo" src="../../assets/img/add.jpg" alt="">
            <span class="imgTips">上传右面图片</span>

          </van-uploader>
        </div>

      </div>
      <div class="addHouseModular">
        <!-- 一条 输入框或者选择项 -->
        <div class="iptList">
          <span class="title">类型</span>
          <select name="" id="" v-model="houseType">
            <option value="0" class="optionSelected" disabled selected>请选择</option>
            <option value="1" class="optionSelected">商铺</option>
            <option value="2" class="optionSelected">写字楼</option>
          </select>
        </div>
        <div class="iptList">
          <span class="title">面积</span>
          <div class="flex">
            <input type="text" placeholder="请填写">
            <span>
              平米
            </span>
          </div>
        </div>
        <div class="iptList">
          <span class="title">租金</span>
          <div class="flex">
            <input type="text" placeholder="请填写">
            <span>
              元/年
            </span>
          </div>
        </div>
        <div class="iptList" @click="isShowAreaList = !isShowAreaList">
          <span class="title">所在区域</span>
          <input type="text" v-model="showAreaList" disabled placeholder="请选择">
        </div>
        <div class="iptList">
          <span class="title">详细地址</span>
          <div class="flex">
            <input type="text" v-model="address" placeholder="请填写">
          </div>
        </div>
        <div class="mapBox">
          <baidu-map class="map" :center="lngAndLat" @dragend='seleceOnload' :zoom="15">
            <!-- <bm-info-window :position="lngAndLat" class="showTitle"  :show="true" >
                <p v-text="title"></p>
            </bm-info-window> -->
            <bm-marker :position="lngAndLat" :dragging="true" @dragend='seleceOnload' :offset="{width:0,height:0}"
              :raiseOnDrag="true">
            </bm-marker>
            <bm-local-search :keyword="temp.area + address" :panel='false' :auto-viewport="true" :pageCapacity='1'
              :location="temp.area" :autoViewport='true' :selectFirstResult='true' @infohtmlset='selectShop'>
            </bm-local-search>
          </baidu-map>
        </div>

      </div>
      <div class="addHouseModular">
        <div class="iptList" @click="isShowAreaList = !isShowAreaList">
          <span class="title">标题</span>
          <input type="text" placeholder="请填写标题(10~30字之间)">
        </div>
      </div>
      <div class="addHouseModular">
        <div class="iptList" @click="isShowAreaList = !isShowAreaList">
          <span class="title">房东姓名</span>
          <input type="text" placeholder="请填写">
        </div>
        <div class="iptList" @click="isShowAreaList = !isShowAreaList">
          <span class="title">房东手机号</span>
          <input type="text" placeholder="请填写">
        </div>
        <div class="iptList" @click="isShowAreaList = !isShowAreaList">
          <span class="title">房东备用手机号</span>
          <input type="text" placeholder="请填写">
        </div>

      </div>

    </div>
    <div class="footerBtn ">
      <van-button @click="submitBtn" :loading='isLoading' type="info" round loading-text="加载中...">确认上传</van-button>
    </div>
    <van-area :area-list="areaList" v-if="isShowAreaList" :item-height='40' @cancel='isShowAreaList = false'
      @confirm='onSelected' />

  </div>
</template>

<script>
  import areaListJson from '../../assets/js/area.js'

  export default {
    data() {
      return {
        imgRight: [],
        imgCenter: [],
        imgLeft: [],
        houseType: 0, //类型
        isShowAreaList: false,
        showAreaList: '',
        areaList: areaListJson,
        address: '',
        temp: {
          province: '',
          city: '',
          area: '',
          provinceId: '',
          cityId: '',
          areaId: '',
        },
        lngAndLat: {},
        isLoading:false

      }
    },
    methods: {
      imfCompressLeft(file, detail) {
        this.compress(file.content, 0.3, function (base64data) {
          this.imgLeft[0].content = base64data
        })
        // console.log('abv:'+newBase64)
        // this.imgLeft[0].content =  newBase64
      },
      imfCompressCenter(file, detail) {
        this.compress(file.content, 0.3, function (base64data) {
          this.imgCenter[0].content = base64data
        })
        // var newBase64 = this.compress(file.content,0.3)
        // this.imgCenter[0].content =  newBase64

      },
      imfCompressRight(file, detail) {
        this.compress(file.content, 0.3, function (base64data) {
          this.imgRight[0].content = base64data
        })
        // var newBase64 = this.compress(file.content,0.3)
        // this.imgRight[0].content =  newBase64

      },
      onSelected(e) {
        this.temp.province = e[0].name
        this.temp.city = e[1].name
        this.temp.area = e[2].name
        this.temp.provinceId = e[0].code
        this.temp.cityId = e[1].code
        this.temp.areaId = e[2].code
        this.isShowAreaList = false
        this.showAreaList = e[0].name + '/' + e[1].name + '/' + e[2].name

      },
      handler({BMap, map}) {
        console.log(BMap, map)
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 15
      },
      selectShop(e) {
        this.lngAndLat = e.point
        console.log(e)

      },
      seleceOnload(e) {
        console.log(e)
        this.lngAndLat = e.point
        // console.log(target.point)

      },
      submitBtn() {
        console.log(123)
        this.isLoading = true
      }
    }
  }
</script>

<style lang='scss' scoped>
  .addHouse {
    padding: 11px 15px;

    .addHouseModular {
      border-radius: 5px;
      padding: 15px;
      background: #fff;
      margin-bottom: 10px;

      .title {
        font-size: 13px;
        display: block;
      }

      .photoDiv {

        padding-top: 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .van-uploader {
          text-align: center;
          width: 100px;

          .van-uploader__wrapper {
            .van-uploader__input-wrapper {
              width: 100px;

              img.photo {
                width: 100%;
                height: 100px;
                border-radius: 6px;
              }

              span.imgTips {
                padding-top: 7.5px;
                font-size: 13px;
              }
            }

            .van-uploader__preview-image {
              width: 100px;
              height: 100px;
            }
          }
        }
      }

      .mapBox {
        height: 250px;

        .map {
          width: 100%;
          height: 100%;
        }
      }

      .iptList {
        border-bottom: 1px solid #EEEBEA;
        margin-bottom: 15px;

        ::-webkit-input-placeholder {
          color: #999;
        }

        select {
          padding: 0;
          width: 100%;
          height: 45px;
          border: 0;
          border-radius: 3px;
          font-size: 15px;
          color: #999;
          background: #fff;
          font-weight: 400;
          display: block;
          /*将默认的select选择框样式清除*/
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
        }

        input {
          height: 45px;
          border: none;
          box-sizing: border-box;
          font-size: 15px;
          font-weight: 400;
          color: #999;
          background: #fff;
        }

        .flex {
          align-items: center;



          span {
            font-size: 13px;
          }
        }


      }

      :last-child.iptList {
        border: 0;
        margin: 0;
      }

    }

  }
  
    .footerBtn {
      position: relative;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background: #fff;
      padding: 8px 15px;

      .van-button--info {
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        background: #3F77E8;
      }
    }
</style>