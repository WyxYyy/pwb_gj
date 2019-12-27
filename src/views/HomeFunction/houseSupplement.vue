<template>
    <div>
        <navBar title="房屋实勘资料补充"></navBar>
        <div class="houseSupplement">
            <div class="addHouseModular Modular">
                <span class="title">
                    实勘房屋照片
                    <em>
                        *
                    </em>
                </span>
                <div class="photoUpload flex">
                    <van-uploader :after-read='imgCompress' :before-delete='imgDelete'	 name="house" v-model="house" index="15" preview-image
                        preview-full-image :max-count="5" capture>
                        <img class="photo" src="../../assets/img/add.jpg" alt="">
                    </van-uploader>

                </div>
            </div>
            <!-- 上传视频  videoUpload-->
            <div class="Modular">
                <div class="title">
                    实勘视频(1-5分钟)
                    <em>
                        *
                    </em>
                </div>
                <div class="OneUpload">
                    <!-- <van-uploader :after-read='videoUpload'  accept="video/*" preview-image preview-full-image
                        :max-count="1" capture>
                        <img class="photo" src="../../assets/img/back.png" alt="">
                        <div class="imgTips">上传实勘视频</div>
                    </van-uploader> -->
                </div>
            </div>
            <div class="Modular">
                <div class="title">
                    房屋实勘表
                    <em>
                        *
                    </em>
                </div>
                <div class="OneUpload">
                    <van-uploader :after-read='imgCompress' :before-delete='imgDelete' name='houseExploration' v-model="houseExploration" preview-image preview-full-image
                        :max-count="1" capture>
                        <img class="photo" src="../../assets/img/back.png" alt="">
                        <div class="imgTips">上传实勘表图片</div>
                    </van-uploader>
                </div>
            </div>
            <div class="addHouseModular Modular">
                <span class="title">
                    房东产权证明
                    <em>
                        *
                    </em>
                </span>
                <div class="titleTips">
                    (包含：房产证、土地证、不动产权证、租赁合同)
                </div>
                <div class="photoUpload ">
                    <van-uploader :after-read='imgCompress' :before-delete='imgDelete' name="houseProve" v-model="houseProve" index="15" preview-image
                        preview-full-image :max-count="5" capture>
                        <img class="photo" src="../../assets/img/add.jpg" alt="">
                    </van-uploader>

                </div>
            </div>
            <div class="Modular">
                <div class="title">
                    钥匙收条
                </div>
                <div class="OneUpload">
                    <van-uploader :after-read='imgCompress' :before-delete='imgDelete' name='houseKey' v-model="houseKey" preview-image preview-full-image
                        :max-count="1" capture>
                        <img class="photo" src="../../assets/img/back.png" alt="">
                        <div class="imgTips">上传钥匙收条</div>
                    </van-uploader>
                </div>
            </div>
            <div class="addHouseModular Modular">
                <span class="title">
                    房东身份证
                </span>
                <div class="TwoUpload flex">
                    <van-uploader :after-read='imgCompress' :before-delete='imgDelete' name="houseIDcard" v-model="houseIDcard" index="15" preview-image
                        preview-full-image :max-count="2" capture>
                        <img class="photo" src="../../assets/img/add.jpg" alt="">
                    </van-uploader>
                </div>
            </div>
            <div class="Modular">
                <div class="title">
                    委托合同
                </div>
                <div class="OneUpload">
                    <van-uploader :after-read='imgCompress' :before-delete='imgDelete' name='houseContract' v-model="houseContract" preview-image preview-full-image
                        :max-count="1" capture>
                        <img class="photo" src="../../assets/img/back.png" alt="">
                        <div class="imgTips">上传委托合同</div>
                    </van-uploader>
                </div>
            </div>
            <van-overlay :show="isSubmit" />

        </div>
        <footer v-if="isSubmit">
            <button class="stayExamine" @click="wantTo('index')">
                待审核
            </button>
        </footer>
        <footer class="flex" v-else >
            <button class="Preservation" @click="submit(0)">
                保存
            </button>
            <button class="Submission" @click="submit(1)">
                确认提交
            </button>
        </footer>
        
    </div>
</template>

<script>
    import {
        Toast
    } from 'vant'
    import qs from 'qs'

    export default {
        data() {
            return {
                house: [],
                houseID:[],
                houseExploration: [],   //房屋实勘
                houseExplorationID:[],    
                houseProve: [],         //房屋证明
                houseProveID:[],
                houseKey:[],            //钥匙
                houseKeyID:[],
                houseIDcard:[],         //房东身份证
                houseIDcardID:[],
                houseContract:[],       //房屋合同
                houseContractID:[],
                imgList: [

                ],
                id:'',
                isSubmit:false
            }
        },
        mounted() {
            let id = this.$route.params.id;
            this.id = id
            if(id == undefined){
                 this.$router.push({
                    path: '/',
                })
            }
            this.get()
        },
        methods: {
            imgCompress(file, detail) {
           
                var imgList = this.imgList
                var that = this
                this.compress(file.content, 0.3, function (base64data) {

                    that.uploadImg(that.Interface.config.uploadImg, base64data,detail)

                })
            },
        
            submit(isPreservation){
                this.post(this.Interface.config.addExplorationInfo,{
                    house_id:this.id,
                    verify_pics:this.houseID.join(','),
                    house_verify_table:this.houseExplorationID.join(','),
                    house_property_right:this.houseProveID.join(','),
                    key_receipt:this.houseKeyID.join(','),
                    owner_idcard:this.houseIDcardID.join(','),
                    entrust_contract:this.houseContractID.join(','),
                    status:isPreservation
                })

                
            },
           get() {
                this.$axios({
                    url: this.Interface.config.getExplorationInfo,
                    method: 'get',
                    headers: {
                        'XX-Token': this.$localStore.getLocal('token'),
                        'XX-Device-Type' : 'mobile'
                    },
                    params: {
                        house_id:this.id
                    },
                }).then((res) => {
                    var data = res.data.data
                    console.log(data)
                    if(res.data.code == 1){
                        this.house = data.append_verify_pics_text
                        this.houseExploration = data.append_house_verify_table_text
                        this.houseProve = data.append_house_property_right_text
                        this.houseKey = data.append_key_receipt_text
                        this.houseIDcard = data.append_owner_idcard_text
                        this.houseContract = data.append_entrust_contract_text

                        for(var i = 0; i < this.house.length ; i++ ){
                            this.houseID.push(
                                this.house[i].id
                            )
                        }
                        for(var i = 0; i < this.houseExploration.length ; i++ ){
                            this.houseExplorationID.push(
                                this.houseExploration[i].id
                            )
                        }
                        for(var i = 0; i < this.houseProve.length ; i++ ){
                            this.houseProveID.push(
                                this.houseProve[i].id
                            )
                        }
                        for(var i = 0; i < this.houseKey.length ; i++ ){
                            this.houseKeyID.push(
                                this.houseKey[i].id
                            )
                        }
                        for(var i = 0; i < this.houseIDcard.length ; i++ ){
                            this.houseIDcardID.push(
                                this.houseIDcard[i].id
                            )
                        }
                        for(var i = 0; i < this.houseContract.length ; i++ ){
                            this.houseContractID.push(
                                this.houseContract[i].id
                            )
                        }





                    }
                })
            },
            //                  0保存 1提交
            post(url,postData){
                let Data = qs.stringify(postData)
                this.$axios({
                    'url': url,
                    'method': 'post',
                    headers: {
                        'XX-Token': this.$localStore.getLocal('token'),
                        'XX-Device-Type' : 'mobile',
                    },
                    'data': Data,
                }).then((res) => {
                    console.log(res)  
                    if(res.data.code == 1){
                        Toast.success(res.data.msg);  
                        if(postData.status == 1){
                            this.isSubmit = true
                        }
                    }
                    
                })
            },
            uploadImg(url, imgSrc,detail) {
                let postData = qs.stringify({
                    category: 'assets',
                    'file[0]': imgSrc,
                })   
                 
                var name = detail.name
                this.$axios({
                    'url': url,
                    'method': 'post',
                    headers: {
                        'XX-Token': this.$localStore.getLocal('token'),
                        'XX-Device-Type' : 'mobile',
                    },
                    'data': postData,
                }).then((res) => {
                    this.$data[name+'ID'].push(res.data.data[0].id)
                        
                })
            },
            imgDelete(file, detail){


                this.$data[detail.name+'ID'].splice(detail.index,1)
                return true
            }
        }
    }
</script>

<style scoped lang='scss'>
    .houseSupplement {
        padding: 10px 15px;

        .Modular {
            padding: 15px;
            width: 100%;
            border-radius: 5px;
            background: #fff;
            margin-bottom: 10px;

            .title {
                font-size: 13px;
                display: block;

                em {
                    color: #F7241B;
                }
            }

            .titleTips {
                font-size: 11px;
                color: #F7241B;
                margin-top: 8px;
                line-height: 11px;
            }

            .photoUpload {

                &::v-deep .van-uploader {
                    overflow-x: scroll; // 子元素的宽度大于父元素的即可滚动
                    overflow-y: hidden;
                    display: -webkit-box;
                    padding: 5px 0;

                    .van-uploader__wrapper {
                        height: 110px;
                        align-items: center;
                        overflow-x: scroll;
                        flex-wrap: nowrap;

                        .van-uploader__input-wrapper {
                            width: 100px;
                            height: 100px;

                            img.photo {
                                width: 100%;
                                height: 100%;
                                border-radius: 6px;
                            }
                        }
                    }
                }
                &::v-deep .van-uploader::-webkit-scrollbar {
                    display: none
                }
            }
            

            .OneUpload {
                padding-top: 15px;
                width: 100%;

                .van-uploader {
                    text-align: center;
                    width: 100%;

                    .van-uploader__wrapper {
                        .van-uploader__input-wrapper {
                            width: 100%;

                            img.photo {
                                width: 315px;
                                height: 158px;
                                border-radius: 6px;
                            }

                            .imgTips {
                                padding-top: 7.5px;
                                font-size: 13px;
                            }
                        }

                        .van-uploader__preview-image {
                            width: 315px;
                            height: 158px;
                        }
                    }
                }
            }

            &::v-deep .TwoUpload {
                padding-top: 15px;
                width: 100%;
                .van-uploader {
                    text-align: center;
                        .van-uploader__input-wrapper {
                            display: flex;
                            img.photo {
                                width: 153px;
                                height: 95px;
                                border-radius: 6px;
                            }
                            .imgTips {
                                padding-top: 7.5px;
                                font-size: 13px;
                            }
                        }
                }
            }
        }
    }

    footer {
        width: 100%;
        height: 60px;
        background: #fff;
        position: relative;
        bottom: 0;
        left: 0;
        align-items: center;
        padding: 0 15px;
        z-index: 999;

        button {
            height: 44px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 22px;
            border: 0;
        }

        .Preservation {
            width: 125px;
            background: #fff;
            border: 1px solid #3f77eb;
            color: #3f77eb;
        }

        .Submission {
            width: 210px;
            background: #3f77eb;
            color: #fff;
        }
        .stayExamine{
            width: 100%;
             background: #999;
            color: #fff;
            margin-top: 8px;            
        }
    }
</style>