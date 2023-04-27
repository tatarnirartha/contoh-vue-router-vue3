import Example from './components/ExampleComponent.vue'
import Home from './components/HomeComponent.vue'
import User from './components/UserComponent.vue'
import HelloUser from './components/HelloUser.vue'
import ByeUser from './components/ByeUser.vue'
import NotFound from './components/NotFoundComponent.vue'
import Find from './components/FindComponent.vue'
import TestNavigasi from './components/TestNavigasi.vue'


export const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: "/example",
        name: 'example',
        component: Example
    },
    {
        path: "/",
        name: 'home',
        component: Home
    },
    {
        path: "/about",
        name: 'about',
        component: () => (import(/* webpackChunkName: "about" */ './components/AboutComponent.vue')),
        alias: "/tentang"
    },
    {
        path: '/user/:username',
        name: 'user',
        component: User,
        children: [
            {
                path: "hello",
                component: HelloUser
            },
            {
                path: "bye",
                component: ByeUser
            }
        ]
    },
    {
        path: "/find",
        name: 'find',
        component: Find,
        alias: "/cari"
    },
    {
        path: "/cari",
        redirect: '/find',
    },
    {
        path: "/testnavigasi",
        name: 'test_navigasi',
        component: TestNavigasi,
    },
    
]
