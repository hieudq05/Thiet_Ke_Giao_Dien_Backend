<template>
    <div class="container pb-5">
        <div class="mt-4 row m-0 p-0 gy-5 gx-5">
            <Product
                v-for="product in listProducts"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script setup>
import Product from "./Product.vue";
import listProducts from "@/assets/data.json";
</script>

<style lang="scss" scoped></style>
