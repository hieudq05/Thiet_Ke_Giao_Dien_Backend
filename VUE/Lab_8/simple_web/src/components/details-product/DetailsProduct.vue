<template>
    <div class="container mt-5">
        <div class="row m-0 p-0">
            <div
                :id="'sl' + detailsProduct.id"
                class="carousel slide position-relative col-5 p-0"
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >
                <div class="carousel-inner overflow-hidden rounded-4">
                    <div class="carousel-item active">
                        <img
                            :src="detailsProduct.image1"
                            class="d-block w-100 bg-img-2"
                            alt="Slide 1"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            :src="detailsProduct.image2"
                            class="d-block w-100 bg-img-2"
                            alt="Slide 2"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            :src="detailsProduct.image3"
                            class="d-block w-100 bg-img-2"
                            alt="Slide 3"
                        />
                    </div>
                </div>

                <!-- Điều khiển chuyển slide trước và sau -->
                <button
                    class="carousel-control-prev"
                    type="button"
                    :data-bs-target="'#sl' + detailsProduct.id"
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
                    :data-bs-target="'#sl' + detailsProduct.id"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="col-7 ps-4">
                <div class="col-12">
                    <h4 class="fw-medium mb-2">{{ detailsProduct.name }}</h4>
                    <div class="mb-4 fs-6 fw-light">
                        {{ detailsProduct.description }}
                    </div>
                    <div class="row m-0 p-0">
                        <div class="col-12 p-0 mb-4">
                            <div class="d-flex gap-3">
                                <div
                                    class="d-flex gap-4 bg-body-secondary bg-opacity-50 rounded-4 px-4 py-3"
                                >
                                    <div class="fs-4 fw-medium">
                                        {{
                                            formatter.format(
                                                detailsProduct.price
                                            )
                                        }}
                                    </div>
                                    <div
                                        v-if="detailsProduct.salePrice"
                                        class="d-flex align-items-center gap-2"
                                    >
                                        <span
                                            class="bg-secondary bg-opacity-10 p-c-1 fs-8 fw-semibold rounded-3"
                                            >-{{
                                                100 -
                                                Math.round(
                                                    (detailsProduct.salePrice /
                                                        detailsProduct.price) *
                                                        100
                                                )
                                            }}%</span
                                        >
                                        <div
                                            class="fs-7 fw-normal text-decoration-line-through text-black-50"
                                        >
                                            1.928.388đ
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="d-flex rounded-4 px-3 py-2 bg-body-secondary bg-opacity-50 gap-1"
                                >
                                    <button
                                        class="btn p-0 border-0 position-relative overflow-hidden"
                                        @click="decreaseProduct"
                                    >
                                        <i class="bi bi-dash fs-5"></i>
                                    </button>
                                    <input
                                        type="number"
                                        class="form-control bg-transparent fs-5 px-0 rounded-4 border-0 border-dark text-center fw-medium py-1"
                                        @input="resizeCountInput"
                                        v-model="countProduct"
                                        id="countProduct"
                                        value="1"
                                    />
                                    <button
                                        class="btn p-0 border-0 position-relative overflow-hidden"
                                        @click="increaseProduct"
                                    >
                                        <i class="bi bi-plus fs-5"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center p-0 mb-4">
                            <div
                                class="col-auto rounded-4 px-4 py-2 d-flex flex-column align-items-center justify-content-between"
                            >
                                <div class="fs-8 text-black fw-medium">
                                    Unit
                                </div>
                                <div class="flex-wrap mt-1 fw-medium fs-4">
                                    {{ detailsProduct.size }}
                                </div>
                                <div
                                    class="fs-8 text-secondary text-capitalize fw-medium"
                                >
                                    / {{ detailsProduct.type }}
                                </div>
                            </div>
                            <div class="d-flex" style="height: 70px">
                                <div class="vr"></div>
                            </div>
                            <div
                                class="col-auto rounded-4 px-4 py-2 d-flex flex-column align-items-center justify-content-between"
                            >
                                <div class="fs-8 text-black fw-medium">
                                    Rating
                                </div>
                                <span class="fs-4 fw-medium mt-1">{{
                                    detailsProduct.rating
                                }}</span>
                                <div
                                    class="fs-8 d-flex text-secondary text-opacity-75"
                                    style="gap: 1px"
                                >
                                    <i
                                        v-for="index in Math.floor(
                                            detailsProduct.rating
                                        )"
                                        class="bi bi-star-fill"
                                    ></i>
                                    <i
                                        v-if="
                                            detailsProduct.rating -
                                                Math.floor(
                                                    detailsProduct.rating
                                                ) >
                                            0
                                        "
                                        class="bi bi-star-half"
                                    ></i>
                                    <i
                                        v-for="index in 5 -
                                        Math.ceil(detailsProduct.rating)"
                                        class="bi bi-star"
                                    ></i>
                                </div>
                            </div>
                            <div class="d-flex" style="height: 70px">
                                <div class="vr"></div>
                            </div>
                            <div
                                class="col-auto rounded-4 px-4 py-2 d-flex flex-column align-items-center justify-content-between"
                            >
                                <div class="fs-8 text-black fw-medium">
                                    Shipping
                                </div>
                                <i class="bi bi-truck fs-3"></i>
                                <div class="fs-8 text-secondary fw-medium">
                                    {{
                                        detailsProduct.shipping.cost === 0
                                            ? "Free"
                                            : formatter.format(
                                                  detailsProduct.shipping.cost
                                              )
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        @click="addCart"
                        class="btn btn-primary fs-8 rounded-4 h-fit w-fit"
                    >
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import listProducts from "@/assets/data.json";

const route = useRoute();
const productId = ref(route.params.id);

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const detailsProduct = ref(
    listProducts.find((product) => product.id === Number(productId.value))
);

var countProduct = ref(1);

const resizeCountInput = () => {
    const input = document.querySelector("#countProduct");
    input.style.width = `${
        Number.isInteger(Math.log10(countProduct.value)) &&
        input.value < countProduct.value
            ? input.value.length + 1
            : input.value.length
    }ch`;
};

const decreaseProduct = () => {
    if (countProduct.value > 1) {
        countProduct.value--;
        resizeCountInput();
    }
};

const increaseProduct = () => {
    countProduct.value++;
    resizeCountInput();
};

const addCart = () => {
    const cartProducts = ref(
        JSON.parse(localStorage.getItem("cartProducts")) == null
            ? []
            : JSON.parse(localStorage.getItem("cartProducts"))
    );
    const product = {
        ...detailsProduct.value,
        count: countProduct.value,
        isSelect: true,
    };

    if (cartProducts) {
        const index = cartProducts.value.findIndex(
            (product) => product.id === detailsProduct.value.id
        );

        if (index === -1) {
            cartProducts.value.push(product);
        } else {
            cartProducts.value[index].count += countProduct.value;
        }
    } else {
        cartProducts.value = [product];
    }

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts.value));

    window.dispatchEvent(new Event("storage"));
};
</script>

<style lang="scss" scoped></style>
