<template lang="">
    <div class="row m-0 p-0 h-fit">
        <Toolbar
            :countProducts="
                products.reduce((acc, product) => {
                    return acc + product.count;
                }, 0)
            "
            class="sticky-top"
            style="top: 86px"
        />
        <Products
            v-if="products.length > 0"
            :products="products"
            @update-products="updateProducts"
        />
        <div
            v-else
            class="d-flex justify-content-center align-items-center w-100 h-100 fw-light py-4"
        >
            <div class="text-center">No products in cart</div>
        </div>
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
