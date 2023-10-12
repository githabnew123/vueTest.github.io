import { createApp } from 'vue'

import App from './App.vue'
import foodItem from './components/foodItem.vue'
import toDoItem from './components/toDoItem.vue'

const app = createApp(App)

app.component('food-item',foodItem)
app.component('toDo',toDoItem)

app.mount('#app')