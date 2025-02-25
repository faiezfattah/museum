<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();
</script>

<template>
  <section class="container">
    <h2 class="text-3xl font-bold text-center mb-8">Koleksi Kami</h2>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(image, index) in images" :key="index" class="relative overflow-hidden">
        <img 
          :src="image" 
          class="w-full aspect-square object-cover border hover:scale-110 hover:z-10 hover:shadow-lg hover:shadow-white transition-transform duration-200" 
        />
      </div>
    </div>
  </section>
</template>