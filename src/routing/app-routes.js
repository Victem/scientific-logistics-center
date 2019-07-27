const appRoutes = [
    {
        path: '/',
        name: 'home-page',
        component: () => import('../views/HomePage')
    },
    {
        path: '/about',
        name: 'about-page',
        component: () => import('../views/AboutPage')
    },
];

export default appRoutes;