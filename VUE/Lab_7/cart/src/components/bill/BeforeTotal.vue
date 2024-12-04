<template>
    <div class="row p-0 m-0 pt-3 px-4 gap-2">
        <div class="row m-0 p-0 col-12 fs-6">
            <div class="col p-0 text-black-50 fw-light">Amount</div>
            <div class="col-auto text-black-50 p-0">
                {{ formatter.format(amountParam) }}
            </div>
        </div>
        <div class="row m-0 p-0 col-12 fs-6">
            <div class="col p-0 text-black-50 fw-light">Tax (8%)</div>
            <div class="col-auto text-black-50 p-0">
                {{ formatter.format((amountParam / 100) * 8) }}
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    amountParam: { Number, required: true },
});

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

</script>
<style></style>
