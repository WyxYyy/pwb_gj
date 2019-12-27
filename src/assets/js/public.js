// 公共函数
exports.install = function (Vue, options) {
  // 跳转函数
  Vue.prototype.wantTo = function (where, data) {
    this.$router.push({
      name: where,
      params: data
    })

  }
  // 压缩图片
  Vue.prototype.compress = (path, size, callback) => {
    var img = new Image();
    img.src = path;
    img.onload = () => {
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')

      // let initSize = img.src.length
      let width = img.width
      let height = img.height
      canvas.width = width
      canvas.height = height

      // 铺底色
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, width, height)
      //进行最小压缩
      console.log(canvas)
      let ndata = canvas.toDataURL('image/jpeg', size)

      console.log('*******压缩后的图片大小*******')
      // console.log(ndata)
      console.log(ndata.length / 1024)

      // return ndata
      callback(ndata)
    }
  }
  // 获取验证码
  Vue.prototype.getPhoneYZM = function (phone) {

    this.$axios({
      'url': this.Interface.config.getYZM,
      'method': 'post',
      'data': phone
    })
  }
}