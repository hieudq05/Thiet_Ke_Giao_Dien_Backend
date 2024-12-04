<template>
    <div class="p-0 pt-3 px-4">
        <div class="pb-4 pt-1">Order Summary</div>
        <div class="row m-0 p-0 gap-2">
            <div
                class="row col-12 m-0 p-0 fs-6 fw-light text-black-50"
                v-if="productsParam.length == 0"
            >
                <div class="text-center">No products selected</div>
            </div>
            <div
                v-for="product in productsParam"
                :key="product.id"
                class="row col-12 m-0 p-0 fs-6 fw-light text-black-50"
            >
                <div class="col p-0">
                    <span class="me-3">x{{ product.count }}</span>
                    <span>{{ product.name }}</span>
                </div>
                <div class="col-auto fw-normal p-0">
                    {{ formatter.format(product.price * product.count) }}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
    productsParam: { Array, required: true },
});

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const products = ref(props.productsParam);
</script>
<style></style>
