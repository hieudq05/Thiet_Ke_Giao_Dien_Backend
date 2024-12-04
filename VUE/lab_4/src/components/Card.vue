<script setup lang="ts">
import { ref } from "vue";

const content = ref(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consectetur consequatur accusamus.usamus."
);

defineProps<{
    urlImg: string;
}>();

function handleClick() {
    alert(
        "Nội dung thẻ: " +
            (content.value.length == 0 ? "Nội dung trống!" : content.value)
    );
}
</script>

<template>
    <div class="card p-0 col" style="width: 18rem">
        <img :src="urlImg" class="card-img-top" alt="..." />
        <div class="card-body">
            <div class="mb-3">
                <div class="fs-6 fw-semibold">Duong Quoc Hieu</div>
                <div class="fs-7">Java Developer</div>
            </div>
            <div
                class="fs-7 mb-3"
                v-html="content.length == 0 ? 'Nội dung trống!' : content"
            ></div>
            <input
                type="text"
                placeholder="Nhập nội dung"
                class="form-control w-100 fs-7"
                v-model="content"
            />
            <br />
            <a
                href="#"
                @click="handleClick"
                class="btn bg-black rounded-3 fs-7 fw-medium float-end"
                >Edit</a
            >
        </div>
    </div>
</template>

<style scoped></style>
