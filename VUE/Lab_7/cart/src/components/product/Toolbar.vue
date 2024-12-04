<template>
    <div
        class="bg-white px-4 py-2 border-height-1 border-2 border-warning border-opacity-25 row m-0 p-0"
    >
        <div class="fw-light fs-5 d-flex align-items-center gap-1 col">
            My Cart
            <div
                class="badge fw-light rounded-circle bg-warning bg-opacity-10 text-black"
            >
                {{countProducts}}
            </div>
        </div>
        <div class="col-auto row m-0 p-0 gap-2">
            <div class="dropdown col-auto p-0">
                <a
                    class="btn border-0 d-flex align-items-center fs-6 gap-1"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    All Cart
                    <i class="bi bi-chevron-down"></i>
                </a>

                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                        <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#"
                            >Something else here</a
                        >
                    </li>
                </ul>
            </div>
            <div class="dropdown col-auto p-0">
                <a
                    class="btn border-0 d-flex align-items-center fs-6 gap-1"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Filter
                    <i class="bi bi-chevron-down"></i>
                </a>

                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                        <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#"
                            >Something else here</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    countProducts: { Number, required: true },
});
</script>
<style lang=""></style>
