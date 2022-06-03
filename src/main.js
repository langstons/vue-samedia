import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueWriter from "vue-writer";

// Import Styles
import './assets/css/main.css'
import 'aos/dist/aos.css'

// Import Components
import sLink from '@/components/UI/s-link.vue'
import sButton from '@/components/UI/s-button.vue'
import sFormField from '@/components/UI/s-form-field.vue'
import sHeader from '@/components/s-header.vue'
import sLayout from '@/components/s-layout.vue'

const app =createApp(App);

app.use(store)
app.use(router)
app.use(VueWriter)
app.component('s-button', sButton)
app.component('s-link', sLink)
app.component('s-form-field', sFormField)
app.component('s-header', sHeader)
app.component('s-layout', sLayout)
app.mount('#app')
