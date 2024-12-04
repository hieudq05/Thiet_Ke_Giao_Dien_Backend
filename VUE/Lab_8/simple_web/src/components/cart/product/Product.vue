<template>
    <div
        class="py-3 border-height-1 border-0 border-bottom border-secondary border-opacity-25"
    >
        <div class="row m-0">
            <div class="col-auto p-0">
                <input
                    class="form-check-input rounded-2 checkSelect"
                    type="checkbox"
                    :checked="product.isSelect"
                    @click="select"
                    :id="product.id"
                />
            </div>
            <div class="col p-0 ps-2">
                <label class="form-check-label fw-light mb-3" :for="product.id">
                    <div class="fs-1-2">{{ product.name }}</div>
                    <div class="fs-6 text-black-50 text-capitalize">
                        {{ product.productType }} Category
                    </div>
                </label>
                <div class="row m-0 p-0">
                    <div class="col-4 p-0">
                        <img
                            :src="product.image1"
                            class="img-size rounded-4"
                            alt=""
                        />
                    </div>
                    <div class="col p-0 ps-4 row m-0">
                        <div
                            class="text-black-50 fw-light col-12 p-0 h-fit fs-6"
                        >
                            {{ product.description }}
                        </div>
                        <div
                            class="col-12 h-fit bg-body-secondary bg-opacity-75 rounded-3 w-fit px-2 py-1 text-black text-opacity-75 fs-6"
                        >
                            Size: <span>{{ product.size }}</span>
                        </div>
                        <div class="col-12 p-0 row m-0 align-items-center">
                            <div class="col fs-3 p-0">
                                {{
                                    formatter.format(
                                        product.salePrice
                                            ? product.salePrice * product.count
                                            : product.price * product.count
                                    )
                                }}
                                <span
                                    v-if="product.salePrice"
                                    class="fs-6 text-decoration-line-through text-black-50"
                                >
                                    {{
                                        formatter.format(
                                            product.price * product.count
                                        )
                                    }}
                                </span>
                            </div>
                            <div class="col-auto row m-0 p-0">
                                <button
                                    class="col-auto p-0 btn border-0"
                                    @click="deleteProduct"
                                >
                                    <i class="bi bi-trash3 fs-1r me-2"></i>
                                </button>
                                <div class="col-auto d-flex gap-1">
                                    <button
                                        class="btn p-0 border-0 position-relative overflow-hidden fs-5"
                                        @click="minusCount"
                                    >
                                        <i class="bi bi-dash fs-1r"></i>
                                    </button>
                                    <input
                                        type="number"
                                        class="form-control bg-transparent border-0 text-center fs-5"
                                        v-model="product.count"
                                        @input="resizeCountInput"
                                        name=""
                                        id="countProduct"
                                    />
                                    <button
                                        class="btn p-0 border-0 position-relative overflow-hidden fs-5"
                                        @click="plusCount"
                                    >
                                        <i class="bi bi-plus fs-1r"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from "vue";

const prop = defineProps({
    productParam: { Object, required: true },
    index: { Number, required: true },
});

const product = ref(prop.productParam);
const index = ref(prop.index);

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const emit = defineEmits(["update-product", "delete-product"]);

const resizeCountInput = () => {
    const input = document.getElementById("countProduct");
    input.style.width = `${input.value.length}ch`;
};

document.addEventListener("DOMContentLoaded", () => {
    resizeCountInput();
});

const select = () => {
    product.value.isSelect = !product.value.isSelect;
    emit("update-product", index.value, product.value);
};

const plusCount = () => {
    product.value.count++;
    resizeCountInput();
    emit("update-product", index.value, product.value);
};

const minusCount = () => {
    if (product.value.count > 1) {
        product.value.count--;
        resizeCountInput();
        emit("update-product", index.value, product.value);
    }
};

const deleteProduct = () => {
    emit("delete-product", product.value.id);
};

watch(
    () => prop.productParam,
    (newVal) => {
        product.value = newVal;
    }
);

watch(
    () => prop.index,
    (newVal) => {
        index.value = newVal;
    }
);
</script>
<style></style>
