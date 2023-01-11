import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/**Jquery and Bootstrap Start */
import jquery from "jquery";
window.$ = window.jquery = window.jQuery = jquery;
import "popper.js";
import "bootstrap";
import "@/assets/dependant.scss";
/**Jquery and Bootstrap end */

/**Fontawesome Start */
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
dom.watch();
/**Fontawesome end */

const app = createApp(App)

app.use(router)

app.mount('#app')