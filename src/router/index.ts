import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    
  },
  {
    path: '/Statistics',
    name: 'Statistics',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Statistics.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my.vue')
  },
  // 首页功能
  {
    path: '/addHouse',
    name: 'addHouse',
    component: () => import('../views/HomeFunction/addHouse.vue')
  },
  {
    path: '/houseSupplement',
    name: 'houseSupplement',
    component: () => import('../views/HomeFunction/houseSupplement.vue')
  },
  
  {
    path: '/addHouseList',
    name: 'addHouseList',
    component: () => import('../views/HomeFunction/addHouseList.vue')
  },
  {
    path: '/Receipt',
    name: 'Receipt',
    component: () => import('../views/HomeFunction/Receipt.vue')
  },
  {
    path: '/ReceiptRecord',
    name: 'ReceiptRecord',
    component: () => import('../views/HomeFunction/ReceiptRecord.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/HomeFunction/news.vue')
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    component: () => import('../views/HomeFunction/newsDetail.vue')
  },
  {
    path: '/appointment',
    name: 'appointment',
    component: () => import('../views/HomeFunction/appointment.vue')
  },
  {
    path: '/appointmentRecord',
    name: 'appointmentRecord',
    component: () => import('../views/HomeFunction/appointmentRecord.vue')
  },
  
  // 登录注册
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: () => import('../views/login/forgetPassword.vue')
  },
  {
    path: '/peopleStatistics',
    name: 'peopleStatistics',
    component: () => import('../views/peopleStatistics.vue')
  },
  {
    path: '/Salesman',
    name: 'Salesman',
    component: () => import('../views/Salesman/Salesman.vue')
  },
  {
    path: '/SalesmanDetail/:id',
    name: 'SalesmanDetail',
    component: () => import('../views/Salesman/SalesmanDetail.vue')
  },
  // 我的页面中的功能
  {
    path: '/OrderList',
    name: 'OrderList',
    component: () => import('../views/MyFunction/OrderList.vue')
  },
  {
    path: '/InService/:id',
    name: 'InService',
    component: () => import('../views/MyFunction/InService.vue')
  },
  {
    path: '/OrderDetail',
    name: 'OrderDetail',
    component: () => import('../views/MyFunction/OrderDetail.vue')
  },
  {
    path: '/userSet',
    name: 'userSet',
    component: () => import('../views/MyFunction/userSet.vue')
  },
  {
    path: '/set',
    name: 'set',
    component: () => import('../views/MyFunction/set.vue')
  },
  {
    path: '/rentDetail',
    name: 'rentDetail',
    component: () => import('../views/MyFunction/rentDetail.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
