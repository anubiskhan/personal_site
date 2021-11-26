import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Me from "./components/Me.vue";
import Creations from "./components/Creations.vue";

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