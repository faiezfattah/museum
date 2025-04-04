<script setup lang="ts">
const bufferToBase64 = (buffer: { type: string, data: number[] }) => {
  if (buffer.type === 'Buffer') {
    const uint8Array = new Uint8Array(buffer.data);
    return btoa(String.fromCharCode.apply(null, Array.from(uint8Array)));
  }
  return '';
}

const images = await $fetch<ImageData[]>('/api/images', {
  method: 'GET',
})

const processedImages = images.map(image => ({
  ...image,
  base64Data: bufferToBase64(image.file_data)
}))

console.log(processedImages)
</script>

<template>
  <main class="bg-black py-32 h-screen flex flex-wrap gap-4 justify-center">
    <img
        v-for="image in processedImages"
        :key="image.id"
        :src="`data:${image.mime_type};base64,${image.base64Data}`"
        :alt="image.filename"
        class="max-w-[300px] max-h-[300px] object-contain"
    />
  </main>
</template>