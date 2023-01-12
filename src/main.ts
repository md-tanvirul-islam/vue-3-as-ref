import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**Fontawesome Start */
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab, far, faLock, faEnvelope, faFacebook, faGooglePlus);
dom.watch();
/**Fontawesome end */

/**Jquery and Bootstrap Start */
import jquery from "jquery";
window.$ = window.jquery = window.jQuery = jquery;
import "popper.js";
import "bootstrap";
/**Jquery and Bootstrap end */

import "./assets/parent.css";
import "./assets/parent.js";

const app = createApp(App);

app.use(router);

app.mount('#app');
