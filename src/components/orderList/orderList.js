import orderListVue from './orderList.vue'; //引入
const orderList = {
    install:function(Vue) {
        Vue.component('orderList', orderListVue)
    }
}
export default orderList