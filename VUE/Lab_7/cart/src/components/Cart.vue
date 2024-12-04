<template>
    <div class="row gx-3 m-0 py-3 gap-5">
        <CartItems
            class="col"
            :products="productsCopy"
            @update-cartItems="updateCartItems"
        />
        <Bill class="col-4" :products="productsSelected" />
    </div>
</template>
<script setup>
import CartItems from "./CartItems.vue";
import Bill from "./Bill.vue";
import { ref } from "vue";

const props = defineProps({
    products: { Array, required: true },
});

const productsCopy = ref(props.products);

const productsSelected = ref(
    productsCopy.value.filter((product) => product.isSelect)
);

const updateCartItems = (index, product) => {
    if (typeof index === "number") {
        productsCopy.value[index] = { ...productsCopy.value[index], ...product };

        productsSelected.value = productsCopy.value.filter(
            (product) => product.isSelect
        );
    } else {
        productsCopy.value = index;

        productsSelected.value = productsCopy.value.filter(
            (product) => product.isSelect
        );
    }

    console.log("product selected: ", productsSelected.value);
    console.log("all products: ",productsCopy.value);
};
</script>
<style></style>
