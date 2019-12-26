const routes = [
  {
    path: '/',
    component: () => import('layouts/Base.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/map',
    component: () => import('layouts/Base.vue'),
    children: [
      { path: '', component: () => import('pages/MapPage.vue') }
    ]
  },
  {
    path: '/real-time-map',
    component: () => import('layouts/Base.vue'),
    children: [
      { path: '', component: () => import('pages/RealTimeMapPage.vue') }
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
