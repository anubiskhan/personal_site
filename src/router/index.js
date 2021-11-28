import { createWebHistory, createRouter } from "vue-router";
import Creations from "@/views/Creations.vue";
import Home from "@/views/Home.vue";
import Me from "@/views/Me.vue";

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