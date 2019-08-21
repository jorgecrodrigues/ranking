import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
// Firebase Config
import Firebase from 'firebase';
import firebaseConfig from './firebase/firebaseConfig';

Vue.config.productionTip = true;

Firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
