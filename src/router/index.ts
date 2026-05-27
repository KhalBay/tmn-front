import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginPage.vue')
    },
    {
        path: '/',
        redirect: '/questionnaires'
    },
    {
        path: '/questionnaires',
        name: 'Questionnaires',
        component: () => import('../views/QuestionnairesPage.vue')
    },
    {
        path: '/questionnaires/new',
        name: 'NewQuestionnaire',
        component: () => import('../views/QuestionnaireForm.vue')
    },
    {
        path: '/questionnaires/:id/edit',
        name: 'EditQuestionnaire',
        component: () => import('../views/QuestionnaireForm.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Защита роутов
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.name !== 'Login' && !token) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;