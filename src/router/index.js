import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../views/static/Header.vue'
import Footer from '../views/static/Footer.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      header: Header,
      default: Home,
      footer: Footer
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
