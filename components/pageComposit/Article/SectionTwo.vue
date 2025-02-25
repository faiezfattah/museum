<script setup lang="ts">
interface Event {
  image: string;
  date: string;
  title: string;
  link: string;
}

defineProps<{
  events: Event[];
}>();
</script>

<template>
  <section class="h-auto container">
    <h2 class="mb-8">Acara Mendatang</h2>
    <div class="w-full flex justify-between text-black">
      <a 
        v-for="event in events" 
        :key="event.title"
        :href="event.link" 
        target="_blank"
        class="w-1/4 rounded-lg p-3 bg-gradient-to-t from-brand-brown to-brand-black flex flex-col 
        justify-between gap-4 transition-shadow hover:shadow-brand-white hover:cursor-pointer"
      >
        <img :src="event.image" alt="" class="w-full aspect-square object-cover rounded-[calc(1rem-0.5rem)]">
        <div class="text-brand-white">
          <p class="text-xs">{{ event.date }}</p>
          <h5>{{ event.title }}</h5>
        </div>
      </a>
    </div>
  </section>
</template>