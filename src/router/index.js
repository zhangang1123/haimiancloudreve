import VueRouter from "vue-router";
import Home from '../views/home/index.vue'
import Network from '../views/cloudStorage/index.vue'
//解决冗余导航问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalreplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalreplace.call(this, location).catch(err => err)
}
export default new VueRouter({
  routes: [
    {
      name:'home',
      path:'/', 
      component:Home, 
    },
    {
      name:'network',
      path:'/network',
      component:Network, 
    }
  ]
})