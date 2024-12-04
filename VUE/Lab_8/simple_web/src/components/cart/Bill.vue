<template lang="">
    <div class="px-0 h-fit py-3 sticky-top" style="top: 86px">
        <Summary
            :promoteList="promoteAppliedList"
            :productsParam="products"
            class="bg-body-secondary bg-opacity-50 rounded-4 mb-2"
        />
        <Delivery
            :promote="shipping"
            class="bg-body-secondary bg-opacity-50 rounded-4 mb-2"
        />
        <BeforeTotal
            :amountParam="amount"
            class="bg-body-secondary bg-opacity-50 rounded-4 mb-4"
        />
        <Total :totalParam="total" class="mb-4" />
        <ButtonGroup @promotionList="handlePromotion" />
    </div>
</template>
<script setup>
import BeforeTotal from "./bill/BeforeTotal.vue";
import Total from "./bill/Total.vue";
import Delivery from "./bill/Delivery.vue";
import Summary from "./bill/Summary.vue";
import ButtonGroup from "./bill/ButtonGroup.vue";
import { ref, watch } from "vue";

const props = defineProps({
    products: { Array, required: true },
});

const promoteAppliedList = ref(new Set());

const amount = ref(
    props.products.reduce((acc, product) => {
        return (
            acc +
            (product.salePrice ? product.salePrice : product.price) *
                product.count
        );
    }, 0)
);

const total = ref(amount.value + (amount.value / 100) * 8);
const shipping = ref(20);

watch(
    () => props.products,
    (newVal) => {
        amount.value = newVal.reduce((acc, product) => {
            return (
                acc +
                (product.salePrice ? product.salePrice : product.price) *
                    product.count
            );
        }, 0);
        total.value = amount.value + (amount.value / 100) * 8;
    }
);

const cart = ref(JSON.parse(localStorage.getItem("cartProducts")) || []);

const handlePromotion = (promoList) => {
    if (cart.value.length > 0) {
        promoList.forEach((promo) => {
            if (!promoteAppliedList.value.has(promo)) {
                promoteAppliedList.value.add(promo);
                if (promo.type === "percentage") {
                    if (promo.scope === "total") {
                        total.value -= (total.value / 100) * promo.value;
                    } else if (promo.scope === "shipping") {
                        shipping.value -= (shipping.value / 100) * promo.value;
                        total.value -= shipping.value;
                    }
                } else {
                    if (promo.scope === "total") {
                        total.value -= promo.value;
                    } else if (promo.scope === "shipping") {
                        shipping.value -= promo.value;
                        total.value -= shipping.value;
                    }
                }
            }
        });
    }
};
</script>
<style></style>
