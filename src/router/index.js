import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import first from '@/page/firstpage/first'
import second from '@/page/secondpage/second'
import third from '@/page/thirdpage/third'
import fourth from '@/page/fourthpage/fourth'
import buy from '@/page/otherpage/detail'

Vue.use(Router)


// 增强原方法，好处是旧的业务模块不需要任何变动
Router.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}
// 或者你可以新建一个方法
Router.prototype.goBack = function () {
  this.isBack = true
  this.go(-1)
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
       // 默认为第二个子路由
      redirect:'/page/first',
      component: HelloWorld,
      children:[
          { path: '/page/first', component: first},
          { path: '/page/second', component: second},
          { path: '/page/third', component: third},
          { path: '/page/fourth', component: fourth},
          { path: '/page/detail/buy/', component: buy},
      ]
    }
  ]
})