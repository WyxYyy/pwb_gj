import pwbIconVue from './pwbIcon.vue'; //引入
const pwbIcon = {
    install:function(Vue) {
        Vue.component('pwbIcon', pwbIconVue)
    }
}
export default pwbIcon