<script setup lang="ts">
import { ref } from 'vue';
import type { NewsItem } from '~/components/pageComposit/Article/SectionThree.vue';
import type { Event } from '~/components/pageComposit/Article/SectionTwo.vue';
const events = ref<Event[]>([]);
const newsItems = ref<NewsItem[]>([]);

onMounted(async () => {
  try {
    events.value = await $fetch('/data/events.json');
    newsItems.value = await $fetch('/data/news.json');
  } catch (error) {
    console.error('Error loading data:', error);
  }
});
</script>

<template>
  <main>
    <PageCompositArticleSectionOne />
    <PageCompositArticleSectionTwo :events="events" />
    <PageCompositArticleSectionThree :news-items="newsItems" />
  </main>
</template>