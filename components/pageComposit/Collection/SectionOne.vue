<script setup lang="ts">
// import { onMounted } from 'vue';

defineProps<{
  batikImage: string;
}>();

</script>

<template>
  <section class="relative flex items-center justify-center h-screen w-full">
    <div class="absolute inset-0 bg-noise opacity-50"></div>
    <h1 class="text-9xl font-bold z-10">
      <span class="">Batik</span> 
      Of The 
      <span class="">Day</span>
    </h1>
    <img :src="batikImage" class="absolute inset-0 w-full h-full object-cover z-[-2]" />
    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[-1]"></div>
  </section>
</template>