import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);

app.use(PrimeVue, {});
app.component('font-awesome-icon', FontAwesomeIcon)

createApp(App).mount('#app')