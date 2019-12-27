import landladyVue from './landlady.vue'; //引入
const landlady = {
    install:function(Vue) {
        Vue.component('landlady', landladyVue)
    }
}
export default landlady