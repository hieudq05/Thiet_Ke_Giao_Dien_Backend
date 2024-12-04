<template>
    <div class="fs-7 d-flex gap-1 text-warning">
        <i v-for="i in starFill" :key="i" class="bi bi-star-fill"></i>
        <i v-if="starHalf" class="bi bi-star-half"></i>
        <i v-for="i in starEmpty" :key="i" class="bi bi-star"></i>
    </div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";
const props = defineProps({
    rating: { Number, required: true },
});
const starFill = Number.parseInt(props.rating);
const starHalf = props.rating - starFill;
const starEmpty = 5 - starFill - (starHalf > 0 ? 1 : 0);
</script>
<style></style>
