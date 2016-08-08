import Vue from 'vue'
import Router from 'vue-router'
import { navRouter } from './navigation/navigation.js'

//Components
import App from './App.vue'

//Replaces vue.start for router
Vue.use(Router)

//Create route
const router = new Router({
  history: true,
  saveScrollPosition: true
})

//navRouter config
navRouter(router)

//Spin it all up
router.start(App, 'app')
