<script setup>
import Cart from "./components/Cart.vue";

const products = [
    {
        id: 1,
        name: "Acne-Fighting Toner",
        price: 2811.5,
        productType: "toner",
        description:
            "A toner that helps reduce acne and prevent future breakouts.",
        size: "200ml",
        image: "https://images.beta.cosmos.so/c43d551f-ced9-4653-b1f0-4896bc20b219?format=jpeg",
        count: 3,
        isSelect: true,
    },
    {
        id: 2,
        name: "Acne-Fighting Toner 1",
        price: 21.2,
        productType: "toner",
        description:
            "A toner that helps reduce acne and prevent future breakouts. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        size: "140ml",
        image: "https://images.beta.cosmos.so/04815832-c1ba-4409-aa62-ca3f055fdd7b?format=jpeg",
        count: 1,
        isSelect: true,
    },
    {
        id: 3,
        name: "Acne-Fighting Toner 2",
        price: 41.8,
        productType: "toner",
        description:
            "A toner that helps reduce acne and prevent future breakouts. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        size: "330ml",
        image: "https://images.beta.cosmos.so/379f4842-facc-4747-b906-d385b1b20df3?format=jpeg",
        count: 1,
        isSelect: false,
    },
];
</script>

<template>
    <div class="container p-0">
        <header class="bg-warning bg-opacity-10 w-100 py-5">Nav</header>

        <main>
            <Cart :products="products" />
        </main>
    </div>
</template>

<style scoped></style>
