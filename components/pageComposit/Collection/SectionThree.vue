<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();
</script>

<template>
  <section class="container">
    <div class="grid grid-cols-3 gap-8">
      <h2 class="text-8xl font-bold mb-8 font-copasetic uppercase">Koleksi <br> Kami</h2>
      <div v-for="(image, index) in images" :key="index" class="relative">
        <img 
          :src="image" 
          class="w-full aspect-square object-cover border-8 rounded-xl hover:scale-110 hover:z-10 hover:shadow-lg hover:shadow-white transition-transform duration-200" 
        />
      </div>
    </div>
  </section>
</template>