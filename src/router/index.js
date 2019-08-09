import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'

Vue.use(Router)

var menusRoutes = []
menus.forEach((item) => {
  item.sub.forEach((sub) => {
    menusRoutes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${sub.componentName}`)
    })
  })
})
export default new Router({ routes: menusRoutes })