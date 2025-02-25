<script setup lang="ts">
import { ref } from 'vue';

const events = ref([
  {
    image: '/images/news-thumbnail/event-menari-bersama-sunyi.jpg',
    date: '12 januari 2025',
    title: 'Menari Bersama Sunyi',
    link: 'https://www.instagram.com/mbatik.in/'
  },
  {
    image: '/images/news-thumbnail/event-melukis-sejarah.jpg',
    date: '20 januari 2025',
    title: 'Melukis Sejarah',
    link: 'https://www.instagram.com/mbatik.in/'
  },
  {
    image: '/images/open-hall-manequin.avif',
    date: '2 februari 2025',
    title: 'Pameran Batik',
    link: 'https://www.instagram.com/mbatik.in/'
  }
]);

const newsItems = ref([
  {
    image: '/images/news-thumbnail/Mewarnai hari batik.jpg',
    title: 'Hari Batik Nasional di Museum Batik Indonesia',
    description: 'Peringatan 15 tahun Batik diakui UNESCO dirayakan di Museum Batik Indonesia dengan kegiatan pelestarian dan edukasi budaya..',
    link: 'https://museumbatik.kemdikbud.go.id/news/148'
  },
  {
    image: '/images/news-thumbnail/Humanity in Harmony.jpg',
    title: 'Mahakarya Batik "Humanity in Harmony"',
    description: 'Museum Batik Indonesia berkesempatan menjadi tuan rumah dalam program Mahakarya Batik "Humanity in Harmony" sesi Jakarta.',
    link: 'https://museumbatik.kemdikbud.go.id/news/132'
  },
  {
    image: '/images/news-thumbnail/Pemuda Pelestari Budaya.jpg',
    title: 'Pemuda Pelestari Budaya!',
    description: 'Museum Batik Indonesia Selenggarakan Kegiatan Workshop Membatik dengan Pemuda pemudi bangsa',
    link: 'https://museumbatik.kemdikbud.go.id/news/124'
  }
]);
</script>

<template>
  <main>
    <PageCompositArticleSectionOne />
    <PageCompositArticleSectionTwo :events="events" />
    <PageCompositArticleSectionThree :news-items="newsItems" />
  </main>
</template>