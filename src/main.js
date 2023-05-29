import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { brands } from "@fortawesome/free-brands-svg-icons";
library.add(far, brands);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
