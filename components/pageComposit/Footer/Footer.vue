<template>
  <footer class="w-full flex flex-col gap-4 justify-center items-center py-8 relative" >
    <div class="flex items-center gap-4">
      <img src="/site-icon.svg" alt="Site Icon" class="w-16 h-16">
      <h3 class="text-2xl font-semibold">Museum Batik Indonesia</h3>
    </div>
    <div class="flex items-center justify-center gap-4 text-xl">
      <a href="https://www.instagram.com/mbatik.in" target="_blank">Instagram</a> |
      <a href="https://web.facebook.com/MBatik.In?_rdc=1&_rdr" target="_blank">Facebook</a> |
      <a href="https://x.com/mbatik_in" target="_blank">Twitter</a> |
      <a href="https://www.tiktok.com/@mbatik.in" target="_blank">TikTok</a> |
      <a href="https://www.youtube.com/channel/UCukWO5cnEAbS9NOOPWUJHVQ" target="_blank">YouTube</a>
    </div>
    <div class="flex gap-4">
      <NuxtLink href="booking">Book Us</NuxtLink>
      <p> | </p>
      <NuxtLink href="dashboard">Admin</NuxtLink>
    </div>
  </footer>
</template>