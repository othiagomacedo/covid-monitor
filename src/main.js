import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker';
// import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.pt-BR.min.js';

import { Datepicker } from 'bootstrap-datepicker';

const app = createApp(App)

app.use(router)
app.use(Datepicker)

app.mount('#app')
