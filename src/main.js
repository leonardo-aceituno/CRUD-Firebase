import Vue from "vue";
import App from "./App.vue";
import { initializeApp } from "firebase/app";
import router from "./router";
import vuetify from "./plugins/vuetify";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAYLYIxKHmBHPdfCflEQgawusDm1PG_D6U",
  authDomain: "examplecrud-85702.firebaseapp.com",
  projectId: "examplecrud-85702",
  storageBucket: "examplecrud-85702.appspot.com",
  messagingSenderId: "917582953050",
  appId: "1:917582953050:web:469e6e91b921a90b1bb663",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
