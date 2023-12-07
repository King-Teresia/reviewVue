import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainBox from "../views/mainBox.vue"

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: "/mainbox",
    component: MainBox
  },
  // {
  //   path: "about",
  //   component: () => import('../views/AboutView.vue')
  // }

]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

let boxConent = [
  {
    path: "/about",
    component: () => import('../views/AboutView.vue')
  }, {
    path: "/hellow",
    component: () => import("../components/HelloWorld.vue")
  }
]

boxConent.forEach(item => router.addRoute("mainbox", item))




export default router
