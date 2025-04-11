<script setup lang="ts">
export interface NewsItem {
  image: string;
  title: string;
  description: string;
  link: string;
}

defineProps<{
  newsItems: NewsItem[];
}>();
</script>

<template>
  <section class="h-fit py-16 container">
    <a 
      v-for="item in newsItems" 
      :key="item.title"
      :href="item.link" 
      target="_blank"
      class="flex items-center gap-8 mb-4"
    >
      <img :src="item.image" alt="" class="size-64 rounded-xl bg-white border-8 border-solid">
      <div class="flex flex-col gap-2">
        <h4 class="uppercase font-copasetic text-4xl tracking-wider">{{ item.title }}</h4>
        <p class="text-xl tracking-tighter leading-tight mt-2">{{ item.description }}</p>
      </div>
    </a>
  </section>
</template>