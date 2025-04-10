<script setup lang="ts">
// import { onMounted } from 'vue';

defineProps<{
  batikImage: string;
}>();

</script>

<template>
  <section class="relative flex items-center justify-center h-screen w-full">
    <div class="absolute inset-0 bg-noise opacity-50"></div>
    <h1 class="text-[10svw] font-bold z-10 uppercase font-copasetic leading-[1] text-center">
      <span class="text-gradient">Batik</span> 
      Of 
      <br>
      The 
      <span class="text-gradient">Day</span>
    </h1>
    <img :src="batikImage" class="absolute inset-0 w-full h-full object-cover z-[-2]" />
    <div class="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent z-[-1]"></div>
  </section>
</template>