<template>
    <div class="container pt-4 bg-white">
        <nav
            class="navbar navbar-expand-sm bg-body-secondary nav-blur bg-opacity-50 px-4 rounded-5"
        >
            <div class="container-fluid position-relative">
                <RouterLink to="/" class="navbar-brand fs-4 fw-medium">
                    H
                </RouterLink>
                <button
                    class="navbar-toggler border-0 fs-6 px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul
                        class="navbar-nav d-flex gap-3 position-absolute start-50 top-50 translate-middle w-fit"
                    >
                        <li class="nav-item">
                            <RouterLink
                                to="/"
                                class="nav-link active fs-6"
                                aria-current="page"
                                >Home</RouterLink
                            >
                        </li>
                        <li class="nav-item">
                            <RouterLink
                                to="/list-product"
                                class="nav-link fs-6"
                                href="#"
                                >Products</RouterLink
                            >
                        </li>
                    </ul>
                    <div class="d-flex align-items-center ms-auto">
                        <ul
                            class="navbar-nav ms-auto mb-2 mb-lg-0 w-fit d-flex gap-0 gap-sm-4"
                        >
                            <li
                                class="nav-item d-flex w-fit align-items-center"
                            >
                                <RouterLink
                                    to="/cart"
                                    class="nav-link p-0 h-fit position-relative text-black"
                                    aria-current="page"
                                >
                                    <i class="bi bi-bag-fill"></i>
                                    <span
                                        class="badge bg-body-tertiary text-black fw-normal position-absolute fs-8 rounded-1"
                                        style="
                                            top: 14px;
                                            left: 9px;
                                            padding: 0.5px 1.5px !important;
                                        "
                                        >{{ userAuth ? countCart : "0" }}</span
                                    >
                                </RouterLink>
                            </li>
                            <li class="nav-item w-fit">
                                <RouterLink
                                    to="/profile"
                                    v-if="userAuth"
                                    class="nav-link p-0 h-fit text-black"
                                    href="#"
                                    style="padding-top: 1px !important"
                                >
                                    <i class="bi bi-person-fill fs-5"></i>
                                </RouterLink>
                                <RouterLink
                                    to="/login"
                                    v-else
                                    class="nav-link p-0 h-fit text-black fs-6"
                                    style="padding-top: 1px !important"
                                >
                                    Login
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";

const userAuth = ref(localStorage.getItem("userToken"));

let countCart = ref(
    JSON.parse(localStorage.getItem("cartProducts"))
        ? JSON.parse(localStorage.getItem("cartProducts")).reduce(
              (acc, product) => {
                  return acc + product.count;
              },
              0
          )
        : 0
);

window.addEventListener("storage", () => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (cartProducts) {
        countCart.value = cartProducts.reduce((acc, product) => {
            return acc + product.count;
        }, 0);
    } else {
        countCart.value = 0;
    }
    console.log(countCart.value);
});
</script>

<style lang="scss" scoped></style>
