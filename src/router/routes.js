const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'cats', component: () => import('pages/Cats.vue'), meta: { requiresAuth: true } },
      { path: 'cats/add', component: () => import('pages/CatsAdd.vue'), meta: { requiresAuth: true } }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
