import { createApp } from 'vue'

import App from './App.vue';
import ProgressBox from './components/ProgressBox.vue';
import Task from './components/Task.vue';
import TaskBox from './components/TaskBox.vue';
import AddTaskForm from './components/AddTaskForm.vue';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrashCan)


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('task-box', TaskBox);
app.component('progress-box', ProgressBox);
app.component('task', Task);
app.component('add-task-form', AddTaskForm);

app.mount('#app');
