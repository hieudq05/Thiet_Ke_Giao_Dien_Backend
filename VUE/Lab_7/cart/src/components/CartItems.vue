<template lang="">
    <div class="row m-0 p-0 h-fit">
        <Toolbar
            :countProducts="countProducts"
            class="sticky-top"
            style="top: 20px"
        />
        <Products :products="products" @update-products="updateProducts" />
    </div>
</template>
<script setup>
import Toolbar from "./product/Toolbar.vue";
import Products from "./product/Products.vue";
import { ref, watch } from "vue";

const props = defineProps({
    products: { Array, required: true },
});

const products = ref(props.products);

const countProducts = ref(0);

countProducts.value = products.value.reduce((acc, product) => {
    return acc + product.count;
}, 0);

watch(
    () => props.products,
    (newVal) => {
        products.value = newVal;
        countProducts.value = products.value.reduce((acc, product) => {
            return acc + product.count;
        }, 0);
    }
);

const emit = defineEmits(["update-cartItems"]);

const updateProducts = (index, product) => {
    if (typeof index !== "number") {
        products.value = index;
        emit("update-cartItems", products.value);
    } else {
        products.value[index] = { ...products.value[index], ...product };
        emit("update-cartItems", index, products.value[index]);
    }
};
</script>
<style lang=""></style>
