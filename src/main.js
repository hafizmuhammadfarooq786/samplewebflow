import Vue from 'vue'
import App from './App.vue'
const Webflow = require('webflow-api');

Vue.config.productionTip = false

const api = new Webflow({ token: '1d18383a9b3a751710aafb85274c8bc24704d8397e7295a101406ba0e3941806' });



api.info()
  .then(info => console.log(info))
// Initialize the API

// Fetch a site

new Vue({
  render: h => h(App),
}).$mount('#app')
