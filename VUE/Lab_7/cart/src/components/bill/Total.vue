<template>
    <div class="row pt-2 m-0 px-4 align-items-center">
        <div class="col p-0">Order Total</div>
        <div class="col-auto p-0 fs-4">{{ formatter.format(totalParam) }}</div>
    </div>
</template>
<script setup>
const props = defineProps({
    totalParam: { Number, required: true },
});

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});
</script>
<style></style>
