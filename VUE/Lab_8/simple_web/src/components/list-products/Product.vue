<template>
    <div
        class="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-12 text-decoration-none"
    >
        <div class="card p-0 h-100 border-0">
            <RouterLink
                :to="'/list-product/' + product.id"
                :id="'sl' + product.id"
                class="carousel slide card-img-top position-relative scale-card"
                style="height: 300px"
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >
                <div class="carousel-inner overflow-hidden rounded-4 h-100">
                    <div class="carousel-item active h-100">
                        <img
                            :src="product.image1"
                            class="d-block w-100 bg-img"
                            alt="Slide 1"
                        />
                    </div>
                    <div class="carousel-item h-100">
                        <img
                            :src="product.image2"
                            class="d-block w-100 bg-img"
                            alt="Slide 2"
                        />
                    </div>
                    <div class="carousel-item h-100">
                        <img
                            :src="product.image3"
                            class="d-block w-100 bg-img"
                            alt="Slide 3"
                        />
                    </div>
                </div>

                <!-- Điều khiển chuyển slide trước và sau -->
                <button
                    class="carousel-control-prev"
                    type="button"
                    :data-bs-target="'#sl' + product.id"
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
                    :data-bs-target="'#sl' + product.id"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </RouterLink>
            <div
                class="card-body d-flex flex-column justify-content-between gap-2"
            >
                <div
                    class="card-title fs-6 fw-medium text-truncate-2 text-center m-0"
                >
                    {{ product.name }}
                </div>
                <div class="d-flex flex-column justify-content-between gap-1">
                    <div class="fw-semibold fs-5 text-center">
                        {{
                            product.salePrice
                                ? formatter.format(product.salePrice)
                                : formatter.format(product.price)
                        }}
                    </div>
                    <div
                        v-if="product.salePrice"
                        class="d-flex align-items-center gap-2 justify-content-center"
                    >
                        <span
                            class="bg-secondary bg-opacity-10 p-c-1 fs-8 fw-semibold rounded-3"
                            >-{{
                                100 -
                                Math.round(
                                    (product.salePrice / product.price) * 100
                                )
                            }}%</span
                        >
                        <span
                            class="text-secondary fs-8 text-decoration-line-through"
                            >{{ formatter.format(product.price) }}</span
                        >
                    </div>
                </div>
                <div v-if="userAuth" class="d-flex justify-content-center">
                    <button
                        @click="addCart"
                        class="btn btn-primary fs-8 rounded-4 p-1 px-2"
                    >
                        <i
                            class="bi bi-bag-plus-fill fs-6 position-relative"
                            style="bottom: 1px"
                        ></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const userAuth = ref(localStorage.getItem("userToken"));
const props = defineProps({
    product: Object,
    required: true,
});
const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const addCart = () => {
    const cartProducts = ref(
        JSON.parse(localStorage.getItem("cartProducts")) == null
            ? []
            : JSON.parse(localStorage.getItem("cartProducts"))
    );
    const product = {
        ...props.product,
        count: 1,
        isSelect: true,
    };

    if (cartProducts) {
        const index = cartProducts.value.findIndex(
            (product) => product.id === props.product.id
        );

        if (index === -1) {
            cartProducts.value.push(product);
        } else {
            cartProducts.value[index].count += 1;
        }
    } else {
        cartProducts.value = [product];
    }

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts.value));

    window.dispatchEvent(new Event("storage"));
};
</script>

<style lang="scss" scoped></style>
