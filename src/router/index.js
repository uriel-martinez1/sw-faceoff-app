import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeopleView from '../views/PeopleView.vue'
import AddCharacterView from '../views/AddCharacterView.vue'
import CreatedListView from '../views/CreatedListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/people',
      name: 'people',
      component: PeopleView
    },
    {
      path: '/add',
      name: 'addForm',
      component: AddCharacterView
    },
    {
      path: '/created',
      name: 'createdList',
      component: CreatedListView
    },
  ]
})

export default router
