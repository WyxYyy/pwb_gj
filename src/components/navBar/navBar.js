import navBarVue from './navBar.vue'; //引入
const navBar = {
    install:function(Vue) {
        Vue.component('navBar', navBarVue)
    }
}
export default navBar