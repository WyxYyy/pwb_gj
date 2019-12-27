<template>
    <!-- 房东 -->
    <div class="landlady">
        <div class="landladyContent">
            <div class="landladyList" >
                <div class="landladyTitle">
                    房东姓名
                </div>
                <div class="landladyInformation">
                    {{ownerInfo.owner_name}}
                </div>
            </div>
            <div class="landladyList" >
                <div class="landladyTitle">
                    联系方式
                </div>
                <div class="landladyInformation">
                    {{ownerInfo.owner_mobile}}
                    <van-icon name="phone"  @click="callPhone(ownerInfo.owner_mobile)" />

                </div>
            </div>
            <div class="landladyList" v-if="ownerInfo.owner_mobile2">
                <div class="landladyTitle">
                    联系方式2
                </div>
                <div class="landladyInformation">
                    {{ownerInfo.owner_mobile2}}
                    <van-icon name="phone"  @click="callPhone(ownerInfo.owner_mobile2)"/>

                </div>
            </div>
        </div>
   
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ownerInfo:''
            }
        },
        props: ['id'],
        methods: {
            get() {
             
                this.$axios({
                    url: this.Interface.config.houseOwnerInfo,
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
                    this.ownerInfo = res.data.data.ownerInfo
                })
            },
            callPhone(phone) {
                window.location.href = 'tel://' + phone
            },
        },
        mounted(){
            this.get()
        }
    }
</script>

<style scoped lang='scss'>
    .landlady {
        width: 100%;

        .landladyContent {
            border-radius: 2px;
            background: #fff;
            padding: 0 15px;

            .landladyList {
                padding: 20px 0;
                border-bottom: 1px solid #EEEBEA;

                .landladyTitle {
                    font-size: 13px;
                    color: #c1c1c1;
                }

                .landladyInformation {
                    font-size: 16px;
                    margin-top: 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .van-icon{
                        font-size: 20px;
                        color: rgb(63, 119, 232);
                    }
                }
            }

            :last-child {
                border: 0;
            }
        }

        .callPhone {
            background: #3F77E8;
            width: 100%;
            height: 44px;
            border-radius: 22px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            color: #fff;
            font-size: 16px;

            .van-icon {
                font-size: 18px;
                margin-right: 3px;
                ;
            }
        }
    }
</style>