import Vue from "vue";
import App from "./App";
import { normalize } from "csstips";

normalize();

new Vue({
  render(h) {
    return h(App);
  }
}).$mount("#app");
