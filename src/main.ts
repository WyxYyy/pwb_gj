import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 引入rem
import 'amfe-flexible'
// 引入vant
import { Tabbar, TabbarItem,Icon ,NavBar ,Toast  ,Popup ,Loading ,Area ,Uploader,Button ,Field ,Grid, GridItem ,Circle ,List ,Tab, Tabs ,Dialog ,Swipe, SwipeItem,Lazyload,Collapse, CollapseItem ,Overlay ,DatetimePicker  } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(NavBar).use(Toast ).use(Popup).use(Loading).use(Area).use(Uploader ).use(Button ).use(Field ).use(Grid).use(GridItem).use(Circle ).use(List).use(Tab).use(Tabs).use(Dialog ).use(Swipe).use(SwipeItem).use(Lazyload ).use(Collapse).use(CollapseItem).use(Overlay).use(DatetimePicker ) ;
// 引入全局公用组件
import pwbIcon from './components/pwbIcon/pwbIcon'  //注意路径
import navBar from './components/navBar/navBar' 
import houseList from './components/houseList/houseList' 
import orderList from './components/orderList/orderList' 
import houseDetail from './components/houseDetail/houseDetail' 
import landlady from './components/landlady/landlady' 
//localstorage
import {setLocal,getLocal,delLocal} from '@/assets/js/localstorage'
Vue.prototype.$localStore = {setLocal,getLocal,delLocal}
// 引入axios
import axios from 'axios'
Vue.prototype.$axios= axios;
Vue.use(pwbIcon).use(navBar).use(houseList).use(orderList).use(houseDetail).use(landlady)

// 引入公共方法
import publicFun from './assets/js/public'
import Interface from './assets/js/Interface'
Vue.prototype.Interface = Interface

Vue.use(publicFun)
// 地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'a5Eh9hftoGHuqTQVwcSVNyICt4n7qTZ2'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
