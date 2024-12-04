<template>
    <div class="container d-flex justify-content-center mt-5">
        <div class="d-flex flex-column align-items-center gap-3">
            <div
                class="avt-shadow d-flex justify-content-center align-items-center"
            >
                <img
                    class="avt-profile"
                    src="https://i.pinimg.com/736x/44/46/6e/44466e92e8aedf253e49ff4c6d8a770d.jpg"
                    alt=""
                />
            </div>
            <div class="text-center">
                <div class="fs-5 fw-medium">Jack J97</div>
                <div class="text-black-50 fw-light">domdomJack@gmail.com</div>
            </div>
            <div class="">
                <RouterLink
                    to="/cart"
                    class="btn btn-primary fs-8 rounded-4 h-fit w-fit shadow-sm"
                >
                    Giỏ hàng
                </RouterLink>
                <button
                    @click="logout"
                    class="btn bg-body-secondary bg-opacity-50 ms-2 text-danger fw-medium fs-8 rounded-4 h-fit w-fit"
                >
                    Đăng xuất
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const logout = () => {
    localStorage.removeItem("userToken");
    location.href = "/";
};
</script>

<style lang="scss" scoped></style>
