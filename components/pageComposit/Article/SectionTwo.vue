<script setup lang="ts">
export interface Event {
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
  <section class="h-auto container py-16">
    <h2 class="mb-8 text-6xl uppercase font-copasetic">Acara Mendatang</h2>
    <div class="w-full flex justify-between text-black">
      <a 
        v-for="event in events" 
        :key="event.title"
        :href="event.link" 
        target="_blank"
        class="w-1/4 rounded-2xl p-4 bg-gradient-to-t from-brand-brown to-brand-white flex flex-col 
        justify-between gap-8 transition-shadow hover:shadow-brand-white hover:cursor-pointer"
      >
        <img :src="event.image" alt="" class="w-full aspect-square object-cover rounded-xl">
        <div class="text-brand-white">
          <p class="text-xl">{{ event.date }}</p>
          <h5 class="text-3xl leading-none tracking-wider uppercase font-copasetic">{{ event.title }}</h5>
        </div>
      </a>
    </div>
  </section>
</template>