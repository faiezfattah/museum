<script setup lang="ts">
const route = useRoute();
const adminRoutes = ['/dashboard', '/login', '/booking-details'];

const isAdminPage = computed(() => 
  adminRoutes.some(path => route.path.startsWith(path))
);
</script>

<template>
  <div>
    <PageCompositNavbar v-if="!isAdminPage" />
    <NuxtPage />
    <PageCompositFooter v-if="!isAdminPage" />
  </div>
</template>