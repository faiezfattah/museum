<script setup lang="ts">
const route = useRoute();
const isAdminPage = computed(() => route.path.startsWith('/admin'));
</script>

<template>
  <div>
    <PageCompositNavbar v-if="!isAdminPage" />
    <NuxtPage />
    <PageCompositFooter v-if="!isAdminPage" />
  </div>
</template>