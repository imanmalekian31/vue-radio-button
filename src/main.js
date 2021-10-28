import Vue from 'vue'
import App from './App.vue'
import VueGtm from "@gtm-support/vue2-gtm";

Vue.use(VueGtm, { id: "GTM-MSDWWKP" });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
