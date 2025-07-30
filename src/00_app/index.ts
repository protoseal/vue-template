import { createApp } from "vue"

import { pinia, router } from "./plugins"
import App from "./ui/App.vue"

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount("#app")
