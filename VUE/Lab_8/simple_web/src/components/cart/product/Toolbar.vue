<template>
    <div class="bg-white p-0 py-3">
        <div
            class="bg-body-secondary bg-opacity-50 nav-blur px-4 py-2 rounded-5 row m-0 p-0"
        >
            <div class="fw-light fs-5 d-flex align-items-center gap-1 col py-1">
                My Cart
                <div class="badge fw-light rounded-3 fs-7 bg-primary px-2">
                    {{ countProducts }}
                </div>
            </div>
            <!-- <div class="col-auto row m-0 p-0 gap-2">
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
            </div> -->
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    countProducts: { Number, required: true },
});
</script>
<style lang=""></style>
