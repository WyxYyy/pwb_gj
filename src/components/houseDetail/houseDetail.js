import houseDetailVue from './houseDetail.vue'; //引入
const houseDetail = {
    install:function(Vue) {
        Vue.component('houseDetail', houseDetailVue)
    }
}
export default houseDetail