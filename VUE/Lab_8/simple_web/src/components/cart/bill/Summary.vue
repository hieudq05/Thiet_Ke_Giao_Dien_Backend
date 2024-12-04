<template>
    <div class="p-0 py-3 px-4">
        <div class="pb-4 pt-1 fw-medium">Order Summary</div>
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
                    {{
                        formatter.format(
                            (product.salePrice
                                ? product.salePrice
                                : product.price) * product.count
                        )
                    }}
                </div>
                <!-- <div v-for="promote in promoteList" :key="promote.id" class="">
                    <div class="col p-0">
                        <span class="me-3"
                            ><i class="bi bi-tag-fill text-primary"></i
                        ></span>
                        <span>{{ promote.name }}</span>
                    </div>
                    <div class="col-auto fw-normal p-0"></div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from "vue";

const props = defineProps(
    {
        productsParam: { Array, required: true },
    },
    {
        promoteList: { Set, required: true },
    }
);

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

</script>
<style></style>
