import { createWebHistory, createRouter } from "vue-router";
import Things from "@/views/Things.vue";
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
        path: "/things",
        name: "Things",
        component: Things,
        meta: {
            someData: "here is some data"
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;