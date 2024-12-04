<template>
    <div class="container pb-5 mb-5">
        <div class="row gx-3 m-0 gap-5 h-fit">
            <CartItems
                class="col py-0"
                :products="productsCopy"
                @update-cartItems="updateCartItems"
            />
            <Bill class="col-4" :products="productsSelected" />
        </div>
    </div>
</template>
<script setup>
import CartItems from "./CartItems.vue";
import Bill from "./Bill.vue";
import { ref } from "vue";

const productsCopy = ref(
    JSON.parse(localStorage.getItem("cartProducts")) == null
        ? []
        : JSON.parse(localStorage.getItem("cartProducts"))
);

const productsSelected = ref(
    productsCopy.value.filter((product) => product.isSelect)
);

const updateCartItems = (index, product) => {
    if (typeof index === "number") {
        productsCopy.value[index] = {
            ...productsCopy.value[index],
            ...product,
        };

        productsSelected.value = productsCopy.value.filter(
            (product) => product.isSelect
        );
    } else {
        productsCopy.value = index;

        productsSelected.value = productsCopy.value.filter(
            (product) => product.isSelect
        );
    }
    localStorage.setItem("cartProducts", JSON.stringify(productsCopy.value));
    window.dispatchEvent(new Event("storage"));
};
</script>
<style></style>
