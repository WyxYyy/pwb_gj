const UrlHost = 'http://192.168.1.107/YueFuDaRen/public',
      config = {
            login:UrlHost + '/api/keeper/public/keeperLogin',   
            getYZM:UrlHost + '/api/keeper/public/getVerificationCode',                  //获取验证码 
            resetPassword : UrlHost + '/api/keeper/public/resetPassword',               //修改密码
            index : UrlHost + '/api/keeper/order/index',                                //首页     
            uploadImg: UrlHost + '/api/keeper/public/uploadPictures',                   //上传图片返回ID
            addExplorationInfo : UrlHost + '/api/keeper/order/addExplorationInfo',      //实勘保存和提交接口
            getExplorationInfo : UrlHost + '/api/keeper/order/getExplorationInfo' ,     //获取实勘详情
            peopleStatistics : UrlHost + '/api/keeper/Statistics/personalStatistics',   //统计个人
            peopleHouseList : UrlHost + '/api/keeper/Statistics/personalList',          //统计个人页 房屋
            teamStatistics : UrlHost + '/api/keeper/Statistics/teamStatistics',         //团队统计
            teamStaff : UrlHost + '/api/keeper/Statistics/teamAchievementList',         //团队业绩业务员
            houseInfo : UrlHost + '/api/keeper/Statistics/houseInfo',                   //房屋详情
            houseOwnerInfo : UrlHost + '/api/keeper/Statistics/houseOwnerInfo',         //房东信息
            my : UrlHost + '/api/keeper/my/my',                                         //我的页面
            acceptOrderList : UrlHost + '/api/keeper/order/acceptOrderList',            //可接订单
      }

export { config, UrlHost };