import { createApp } from 'vue'

import App from './App.vue'
import foodItem from './components/foodItem.vue'
import toDoItem from './components/toDoItem.vue'
import compOne from './components/compOne.vue'
import compTwo from './components/compTwo.vue'
import compSwitch1 from './components/compSwitch1.vue'
import compSwitch2 from './components/compSwitch2.vue'
import api from './components/api.vue'

const app = createApp(App)

app.component('food-item',foodItem)
app.component('toDo',toDoItem)
app.component('compOne',compOne)
app.component('compTwo',compTwo)
app.component('compSwitchOne',compSwitch1)
app.component('compSwitchTwo',compSwitch2)
app.component('api',api)

app.mount('#app')