<template>
    <div class="p-0 h-fit">
        <div class="pb-3 pt-4">
            <div class="form-check form-check-inline">
                <input
                    class="form-check-input rounded-2"
                    type="checkbox"
                    id="inlineCheckbox2"
                    @click="selectAll"
                    :checked="isSellecAll"
                />
                <label
                    class="form-check-label fw-light ps-2"
                    style="font-size: 1.2rem"
                    for="inlineCheckbox2"
                    >Choose All Products</label
                >
            </div>
        </div>
        <hr class="mt-0 border-opacity-50 border-secondary" />
        <Product
            :index="index"
            :product-param="product"
            v-for="(product, index) in products"
            :key="product.id"
            @update-product="updateProduct"
            @delete-product="deleteProduct"
        />
    </div>
</template>
<script setup>
import { ref } from "vue";
import Product from "./Product.vue";

const props = defineProps({
    products: { Array, required: true },
});

const products = ref(props.products);

const emit = defineEmits(["update-products"]);

const checkSelectAll = () => {
    isSellecAll = products.value.every((product) => product.isSelect);
};

const updateProduct = (index, product) => {
    products.value[index] = { ...products.value[index], ...product };

    checkSelectAll();

    emit("update-products", index, products.value[index]);
};

const deleteProduct = (id) => {
    products.value = products.value.filter((product) => product.id !== id);

    emit("update-products", products.value);
};

let isSellecAll = true;

checkSelectAll();

const selectAll = () => {
    isSellecAll = !isSellecAll;
    for (const product of products.value) {
        product.isSelect = isSellecAll;
    }

    emit("update-products", products.value);
};
</script>
<style></style>
