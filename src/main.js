import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from "vue-socket.io"

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  // vuex: {
  //     store,
  //     actionPrefix: 'SOCKET_',
  //     mutationPrefix: 'SOCKET_'
  // },
  // options: { path: "/my-app/" } //Optional options
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
