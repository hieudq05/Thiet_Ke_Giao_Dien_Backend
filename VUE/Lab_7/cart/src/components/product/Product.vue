<template>
    <div
        class="py-3 border-height-1 border-0 border-bottom border-secondary border-opacity-25"
    >
        <div class="row m-0">
            <div class="col-auto p-0">
                <input
                    class="form-check-input rounded-0 checkSelect"
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
                        <img :src="product.image" class="img-size" alt="" />
                    </div>
                    <div class="col p-0 ps-4 row m-0">
                        <div
                            class="text-black-50 fw-light col-12 p-0 h-fit fs-6"
                        >
                            {{ product.description }}
                        </div>
                        <div
                            class="col-12 h-fit bg-warning bg-opacity-10 w-fit px-2 py-1 text-black text-opacity-75 fs-6"
                        >
                            Size: <span>{{ product.size }}</span>
                        </div>
                        <div class="col-12 p-0 row m-0 align-items-center">
                            <div class="col fs-3 p-0">
                                {{
                                    formatter.format(
                                        product.price * product.count
                                    )
                                }}
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
                                        class="btn p-0 border-0 position-relative overflow-hidden px-1"
                                        @click="minusCount"
                                    >
                                        <i class="bi bi-dash-circle fs-1r"></i>
                                    </button>
                                    <input
                                        type="number"
                                        class="form-control bg-transparent border-0 text-center fs-5"
                                        :value="product.count"
                                        name=""
                                        id=""
                                    />
                                    <button
                                        class="btn p-0 border-0 position-relative overflow-hidden px-1"
                                        @click="plusCount"
                                    >
                                        <i class="bi bi-plus-circle fs-1r"></i>
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

const select = () => {
    product.value.isSelect = !product.value.isSelect;
    emit("update-product", index.value, product.value);
};

const plusCount = () => {
    product.value.count++;
    emit("update-product", index.value, product.value);
};

const minusCount = () => {
    if (product.value.count > 1) {
        product.value.count--;
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
