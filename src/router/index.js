import { createRouter, createWebHistory } from 'vue-router'
import ButtonsView from '@/views/ButtonsView/ButtonsView.vue'
import LayoutView from '@/views/LayoutView/LayoutView.vue'
import TokensView from '@/views/TokensView/TokensView.vue'
import RadioView from '@/views/RadioView/RadioView.vue'
import InputView from '@/views/InputView/InputView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/buttons' },
        { path: '/buttons', name: 'buttons', component: ButtonsView },
        { path: '/layout', name: 'layout', component: LayoutView },
        { path: '/tokens', name: 'tokens', component: TokensView },
        { path: '/form/radio', name: 'radio', component: RadioView },
        { path: '/form/input', name: 'input', component: InputView },
    ],
})

export default router
