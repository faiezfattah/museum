<script setup lang="ts">
interface NewsItem {
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
      class="flex items-center gap-4 mb-4"
    >
      <img :src="item.image" alt="" class="w-52 h-52 rounded-[calc(1rem-0.5rem)] bg-white border-2 border-solid">
      <div>
        <h4 class="normal-case">{{ item.title }}</h4>
        <p class="text-sm leading-4 mt-2">{{ item.description }}</p>
      </div>
    </a>
  </section>
</template>