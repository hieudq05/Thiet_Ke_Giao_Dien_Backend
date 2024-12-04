<template lang="">
    <div
        class="border-height-1 border-2 border-warning border-opacity-25 p-2 px-0 bg-white h-fit pb-3 sticky-top"
        style="top: 20px"
    >
        <Summary :productsParam="products" />
        <hr class="mt-5 border-2 border-secondary border-opacity-50" />
        <Delivery />
        <hr class="mt-5 border-2 border-secondary border-opacity-50" />
        <BeforeTotal :amountParam="amount" />
        <hr class="mt-5 border-2 border-secondary border-opacity-50" />
        <Total :totalParam="total" />
        <hr class="mt-4 border-2 border-secondary border-opacity-50" />
        <ButtonGroup />
    </div>
</template>
<script setup>
import BeforeTotal from "./bill/BeforeTotal.vue";
import Total from "./bill/Total.vue";
import Delivery from "./bill/Delivery.vue";
import Summary from "./bill/Summary.vue";
import ButtonGroup from "./bill/ButtonGroup.vue";
import { ref, watch } from "vue";

const props = defineProps({
    products: { Array, required: true },
});

const amount = ref(
    props.products.reduce((acc, product) => {
        return acc + product.price * product.count;
    }, 0)
);

const total = ref(amount.value + (amount.value / 100) * 8);

watch(
    () => props.products,
    (newVal) => {
        amount.value = newVal.reduce((acc, product) => {
            return acc + product.price * product.count;
        }, 0);
        total.value = amount.value + (amount.value / 100) * 8;
    }
);
</script>
<style></style>
