<script setup lang="ts">
defineProps<{
  name: string;
  description: string;
}>();
</script>

<template>
  <section class="flex flex-col items-center justify-center py-16 container">
    <h2 class="text-3xl font-bold mb-8">{{ name }}</h2>
    <p class="w-1/2 text-center">{{ description }}</p>
  </section>
</template>