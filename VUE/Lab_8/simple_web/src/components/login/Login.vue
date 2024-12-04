<template>
    <div
        class="container-fluid row m-0 p-0 justify-content-center align-items-center"
        style="height: 100vh"
    >
        <div class="col-6">
            <img
                class="img-login rounded-4"
                src="https://i.pinimg.com/736x/c5/b0/54/c5b0541700d95e598916541085cbedfd.jpg"
                alt=""
            />
        </div>
        <div class="col-6 row m-0 p-0 justify-content-center">
            <h1 class="col-auto fw-light mb-5 pb-4">
                Login to <span class="fst-italic fw-medium">H</span>
            </h1>
            <div class="col-12 row m-0 p-0 justify-content-center">
                <div class="col-12 px-5">
                    <div class="">
                        <label for="email" class="fs-7 fw-light"
                            >Email or username</label
                        >
                        <input
                            v-model="username"
                            class="form-control rounded-4 py-3 fw-medium"
                            type="text"
                            id="email"
                        />
                    </div>
                    <div class="mt-3">
                        <label for="password" class="fs-7 fw-light"
                            >Password</label
                        >
                        <input
                            v-model="password"
                            class="form-control rounded-4 py-3 fw-medium"
                            type="password"
                            id="password"
                        />
                    </div>
                    <div v-if="loginError" class="text-danger fs-7 ms-2 mt-1">
                        Email/ username or password is incorrect. Please try
                        again!
                    </div>
                </div>
                <button
                    @click.prevent="handleLogin"
                    class="btn btn-primary mt-4 px-3 py-0 fw-light rounded-4 fs-6 col-auto"
                >
                    <i class="bi bi-check-lg fs-5"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const loginError = ref(false);
const token = ref("");
const username = ref("");
const password = ref("");

const handleLogin = () => {
    if (username.value === "dqhieu" && password.value === "1") {
        loginError.value = false;
        token.value = "token";
        localStorage.setItem("userToken", token.value);
        window.location.href = "/";
    } else {
        loginError.value = true;
        setTimeout(() => {
            loginError.value = false;
        }, 5000);
    }
};
</script>

<style lang="scss" scoped></style>
