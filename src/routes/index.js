import { createRouter, createWebHashHistory } from "vue-router";
import ViewNotes from '../Views/ViewNotes.vue'
import ViewStats from '../Views/ViewStats.vue'
import ViewNoteEdit from '../Views/ViewNoteEdit.vue'

const routes = [
  { path: '/', name: 'notes', component: ViewNotes },
  { path: '/stats', name: 'stats', component: ViewStats },
  { path: '/edit/:id', name: 'edit', component: ViewNoteEdit }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router