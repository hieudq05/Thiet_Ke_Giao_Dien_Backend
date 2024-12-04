import { createWebHistory, createRouter } from "vue-router";

import Home from "@/components/home/Home.vue";
import Cart from "@/components/cart/Cart.vue";
import ListProduct from "@/components/list-products/ListProduct.vue";
import Login from "@/components/login/Login.vue";
import DetailsProduct from "@/components/details-product/DetailsProduct.vue";
import Profile from "@/components/profile/Profile.vue";

const routes = [
    {
        path: "/",
        component: Home,
        name: "home",
    },
    {
        path: "/cart",
        component: Cart,
        name: "cart",
        meta: { auth: true },
    },
    {
        path: "/list-product",
        component: ListProduct,
        name: "list-product",
    },
    {
        path: "/login",
        component: Login,
        name: "login",
        meta: { hideNavbar: true },
    },
    {
        path: "/list-product/:id",
        component: DetailsProduct,
        name: "details-product",
        meta: { auth: true },
    },
    {
        path: "/profile",
        component: Profile,
        name: "profile",
        meta: { auth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const userToken = localStorage.getItem("userToken");
    if (to.matched.some((record) => record.meta.auth) && !userToken) {
        next({ name: "login" });
    } else {
        next();
    }
});

export default router;
