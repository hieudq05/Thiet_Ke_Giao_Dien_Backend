<script setup>
import Nav from "./components/navigation-bar/Nav.vue";
</script>

<template>
    <header v-if="!$route.meta.hideNavbar" class="sticky-top">
        <Nav />
    </header>

    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
