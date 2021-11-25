import { createWebHistory, createRouter } from "vue-router";
import Home from "src/components/Home.vue";
import Me from "src/components/Me.vue";
import Creations from "src/components/Creations.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/me",
        name: "Me",
        component: Me,
    },
    {
        path: "/creations",
        name: "Creations",
        component: Creations,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;