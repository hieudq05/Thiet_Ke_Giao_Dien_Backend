<template>
    <div class="row m-0 p-0 pt-1 px-4 gap-2">
        <div class="p-0 col-12 position-relative row m-0 align-items-center">
            <label
                for="coupon"
                class="p-0 position-absolute px-3 text-primary bg-light-subtle ms-1 col-auto"
                ><i class="bi bi-ticket-perforated fs-5"></i
            ></label>
            <input
                id="coupon"
                type="text"
                v-model="promoteId"
                placeholder="Add coupon here"
                class="form-control rounded-4 bg-light-subtle fw-light py-3 text-center"
            />
            <button
                @click="checkPromotion"
                class="position-absolute w-fit fs-7 end-0 me-2 form-control rounded-3 py-2"
            >
                <i
                    class="bi bi-check-lg position-relative"
                    style="top: 1px"
                ></i>
            </button>
        </div>
        <div v-if="status" class="fs-7 text-danger my-1 col-12 p-0 text-center">
            Don't found promote like that. Please try again!
        </div>
        <div class="col-12 p-0">
            <button
                class="btn btn-primary w-100 rounded-4 py-3 text-white bg-opacity-50 fw-light"
            >
                Checkout
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import promote from "@/assets/promote.json";

const cart = ref(JSON.parse(localStorage.getItem("cartProducts")) || []);

window.addEventListener("storage", () => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (cartProducts) {
        cart.value = cartProducts;
    } else {
        cart.value = [];
    }
});

const promoteId = ref("");
const promoteApllied = ref(new Set());
let status = ref(false);
const emit = defineEmits(["promotionList"]);
const checkPromotion = () => {
    const promoteCode = promote.find((item) => item.id === promoteId.value);
    if (promoteCode) {
        promoteApllied.value.add(promoteCode);
        emit("promotionList", promoteApllied.value);
        promoteId.value = "";
    } else {
        status.value = true;
        setTimeout(() => {
            status.value = false;
        }, 3000);
    }
};
</script>
<style>
input:focus {
    box-shadow: none !important;
    border-color: #dee2e6 !important;
}
</style>
