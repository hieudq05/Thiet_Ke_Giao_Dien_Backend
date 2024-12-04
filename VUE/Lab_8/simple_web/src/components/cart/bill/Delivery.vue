<template>
    <div class="row m-0 py-3 px-4">
        <div class="row col-12 m-0 p-0">
            <div class="p-0 col fw-medium">Deliver today with</div>
            <div class="p-0 col-auto fs-6 text-black-50">
                {{ formatPrice(promote) }}
            </div>
        </div>
        <div class="col-12 p-0 pt-3 row m-0 mt-2">
            <div class="row m-0 p-0 gap-2 align-items-center col-12">
                <i class="bi bi-truck col-auto p-0 fs-5 text-black-50"></i>
                <div class="col p-0 fs-6 pb-1 text-black-50">
                    Skinny Express
                </div>
            </div>
            <div class="row m-0 p-0 gap-2 align-items-center col-12">
                <i class="bi bi-geo-alt col-auto p-0 fs-5 text-black-50"></i>
                <div class="col p-0 fs-6">
                    <span class="text-black-50 fw-light">Deliver to</span> Da
                    Nang, Viet Nam
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    promote: { type: Number, required: true },
});

const formatPrice = (price) => {
    return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};
</script>
<style></style>
