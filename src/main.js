import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(far, fas, fab);

import BackToTop from "vue-backtotop";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(BackToTop)
  .mount("#app");
