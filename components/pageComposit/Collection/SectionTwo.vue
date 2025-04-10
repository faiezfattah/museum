<script setup lang="ts">
defineProps<{
  name: string;
  description: string;
}>();
</script>

<template>
  <section class="flex flex-col gap-8 items-center justify-center py-16 my-32 container">
    <h2 class="text-3xl font-bold">{{ name }}</h2>
    <p class="w-full text-xl leading-tight text-center">{{ description }}</p>
  </section>
</template>