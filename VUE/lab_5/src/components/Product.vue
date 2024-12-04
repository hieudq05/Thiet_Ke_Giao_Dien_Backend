<template>
    <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-12">
        <div class="card rounded-4 overflow-hidden p-0 h-100">
            <div
                :id="productParam.id"
                class="carousel slide card-img-top position-relative"
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            :src="productParam.images[0]"
                            class="d-block w-100 bg-img"
                            alt="Slide 1"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            :src="productParam.images[1]"
                            class="d-block w-100 bg-img"
                            alt="Slide 2"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            :src="productParam.images[2]"
                            class="d-block w-100 bg-img"
                            alt="Slide 3"
                        />
                    </div>
                </div>
                <div
                    v-if="productParam.tag.length > 0"
                    class="categories position-absolute bottom-0 bg-white z-3 px-1 d-flex pt-1 gap-1 rounded-top-start-0"
                >
                    <div
                        v-if="productParam.tag.includes(1)"
                        class="badge-size bg-danger bg-opacity-10 text-danger p-0 d-flex p-1 rounded-1 fs-badges align-items-center gap-1 justify-content-center"
                    >
                        <span class="material-symbols-outlined fs-6">
                            thumb_up
                        </span>
                        <span
                            style="line-height: 8px; width: 20px"
                            class="fw-bolder"
                            >TOP DEAL</span
                        >
                    </div>
                    <div
                        v-if="productParam.tag.includes(2)"
                        class="badge-size bg-primary bg-opacity-10 text-primary p-0 d-flex p-1 rounded-1 fs-badges align-items-center gap-1 justify-content-center"
                    >
                        <span class="material-symbols-outlined fs-6">
                            verified
                        </span>
                        <span style="line-height: 8px" class="fw-bolder"
                            >CHÍNH HÃNG</span
                        >
                    </div>
                    <div
                        v-if="productParam.tag.includes(3)"
                        style="font-style: italic"
                        class="badge-size bg-primary p-f-s bg-opacity-10 text-primary d-flex flex-column h-100 rounded-1 fs-badges align-items-center gap-0 justify-content-center"
                    >
                        <span style="position: relative; top: 2px"
                            >FREESHIP</span
                        >
                        <span
                            class="fw-bolder text-success"
                            style="font-size: 0.54rem !important"
                            >EXTRA</span
                        >
                    </div>
                </div>

                <!-- Điều khiển chuyển slide trước và sau -->
                <button
                    class="carousel-control-prev"
                    type="button"
                    :data-bs-target="'#' + productParam.id"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    :data-bs-target="'#' + productParam.id"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="card-body p-2">
                <div
                    class="card-title fs-7 fw-medium text-truncate-2 mb-0"
                    v-html="productParam.title"
                ></div>
                <Rating :rating="productParam.rating" />
                <div class="mt-1">
                    <div class="text-danger fw-bolder">
                        {{
                            new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            }).format(productParam.newPrice)
                        }}
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <span
                            class="bg-secondary bg-opacity-10 p-c-1 fs-8 fw-semibold rounded-3"
                            >-{{
                                Math.round(
                                    ((productParam.price -
                                        productParam.newPrice) /
                                        productParam.price) *
                                        100
                                )
                            }}%</span
                        >
                        <span
                            class="text-decoration-line-through text-secondary fs-8"
                            >{{
                                new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(productParam.price)
                            }}</span
                        >
                    </div>
                </div>
                <hr class="mt-3 mb-2 border-opacity-75 border-secondary" />
                <div class="fs-8 text-secondary">
                    Nhận hàng dự kiến:

                    {{ days[new Date(Date.now() + productParam.delivery * 24 * 60 * 60 * 1000).getDay()] }}, 
                    {{ new Date(Date.now() + productParam.delivery * 24 * 60 * 60 * 1000).toLocaleDateString("vi-VN") }}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Rating from "./Rating.vue";
import { defineProps, ref } from "vue";
const rating = Number(4);
const props = defineProps({
    productParam: { Object, required: true },
});
const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
];
const product = ref(props);
</script>
<style>
.text-truncate-2 {
    display: -webkit-box; /* Thiết lập vùng hiển thị cho văn bản */
    -webkit-line-clamp: 2; /* Số dòng tối đa muốn hiển thị */
    -webkit-box-orient: vertical; /* Định hướng vùng hiển thị theo chiều dọc */
    overflow: hidden; /* Ẩn nội dung vượt quá giới hạn */
    text-overflow: ellipsis; /* Hiển thị dấu ba chấm */
    word-break: break-word; /* Tự động xuống dòng cho từ dài */
}
.bg-img {
    height: 18rem;
    object-fit: cover;
    width: 100%;
}
.rounded-top-start-0 {
    border-top-right-radius: 0.4rem !important;
}
.badge-size {
    width: 55px !important;
    height: fit-content;
}
.fs-badges {
    font-size: 0.4rem;
    font-weight: 900;
}
.p-f-s {
    padding: 0 0 2px 0 !important;
}
.p-c-1 {
    padding: 0.1rem 0.3rem !important;
}
</style>
