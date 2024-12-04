<template>
    <div class="row m-0 p-0 pt-1 px-4 gap-2">
        <div class="p-0 col-12 position-relative row m-0 align-items-center">
            <label
                for="coupon"
                class="p-0 position-absolute px-3 text-warning bg-light-subtle ms-1 col-auto"
                ><i class="bi bi-ticket-perforated fs-5"></i
            ></label>
            <input
                id="coupon"
                type="text"
                placeholder="Add coupon here"
                class="form-control rounded-1 bg-light-subtle fw-light py-3 text-center"
            />
            <button class="position-absolute w-fit fs-7 end-0 me-2 form-control rounded-1">Check</button>
        </div>
        <div class="col-12 p-0">
            <button
                class="btn btn-warning w-100 rounded-1 py-3 text-white bg-opacity-50 fw-light"
            >
                Checkout
            </button>
        </div>
    </div>
</template>
<script setup></script>
<style>
input:focus {
    box-shadow: none !important;
    border-color: #dee2e6 !important;
}
</style>
