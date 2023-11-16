import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebookF, faTwitter, faInstagram, faAngleDown)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
