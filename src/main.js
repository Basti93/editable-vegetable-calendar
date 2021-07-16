import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faPlus,
  faSortAlphaDown,
  faPrint,
  faEdit,
  faCheck,
  faDownload,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

library.add(
  faTrash,
  faPlus,
  faSortAlphaDown,
  faPrint,
  faEdit,
  faCheck,
  faDownload,
  faUpload
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
