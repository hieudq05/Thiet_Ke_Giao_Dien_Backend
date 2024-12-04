<template>
    <div class="ghft">
        <div class="ghnAYp" style="width: 60vw; z-index: 9999">a</div>
    </div>
    <div
        class="container-home container d-flex align-items-center justify-content-start position-relative gap-3"
    >
        <div class="">
            <img
                class="bg-img rounded-5 shadow-lg"
                src="https://i.pinimg.com/736x/51/5c/2a/515c2aa46910f194d294a7ff53aa17c6.jpg"
                alt=""
            />
        </div>
        <div class="">
            <div v-if="userAuth" class="fs-5 fw-light">
                Welcome to my blog
                <span
                    ><img
                        class="avt mx-2 rounded-5"
                        src="https://i.pinimg.com/736x/44/46/6e/44466e92e8aedf253e49ff4c6d8a770d.jpg"
                        alt="" /></span
                >Jack J97 🙌
            </div>
            <div v-else class="fs-5 fw-light">
                Login your account to shopping
            </div>
            <div class="fs-1 fw-semibold" style="line-height: 1.7cap">
                Let's explore some nice things together. Buy some Products and
                enjoy the best services.
            </div>
            <div v-if="userAuth" class="d-flex gap-3 mt-3">
                <RouterLink
                    to="/list-product"
                    class="btn btn-dark rounded-4 fs-7 ps-1 fw-light"
                >
                    <span class="bg-white rounded-4 p-1 me-1"
                        ><i
                            class="bi bi-play-fill text-dark"
                            style="margin-left: 1px"
                        ></i
                    ></span>
                    Get Started
                </RouterLink>
                <RouterLink
                    to="/cart"
                    class="btn btn-outline-dark fs-7 rounded-4 fw-light"
                >
                    <i class="bi bi-bag-fill me-1"></i>
                    My cart
                </RouterLink>
            </div>
            <div v-else class="d-flex gap-3 mt-3">
                <RouterLink
                    to="/login"
                    class="btn btn-dark rounded-4 fs-7 ps-1"
                >
                    <span class="bg-white rounded-4 p-1 px-2 me-1"
                        ><i class="bi bi-person-fill text-dark"></i
                    ></span>
                    Login
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const userAuth = ref(localStorage.getItem("userToken"));
</script>

<style lang="scss" scoped></style>
