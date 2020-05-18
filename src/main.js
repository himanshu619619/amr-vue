import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/bootstrap.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/boxicons.min.css";
import "./assets/css/flaticon.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select.css";
import "./assets/css/odometer.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";


import "./assets/js/popper.min.js";
import "./assets/js/wow.min.js";
import "./assets/js//owl.carousel.js";
import "./assets/js/jquery.magnific-popup.min.js";
import "./assets/js/jquery.nice-select.min.js";
import "./assets/js/parallax.min.js";
import "./assets/js/jquery.mixitup.min.js";
import "./assets/js/jquery.appear.js";
// import "./assets/js/odometer.min.js";
import "./assets/js/custom.js";

Vue.config.silent = true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

