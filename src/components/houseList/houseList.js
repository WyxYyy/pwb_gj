import houseListVue from './houseList.vue'; //引入
const houseList = {
    install:function(Vue) {
        Vue.component('houseList', houseListVue)
    }
}
export default houseList