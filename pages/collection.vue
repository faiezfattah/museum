<script setup lang="ts">
import { ref, onMounted } from 'vue';

const batikOfTheDay =  '/images/batiks/batik-sore-buketan.png';

const batikInfo = {
  name: "Batik Pagi Sore Bukitan",
  description: "Wilayah kota demak berdekatan dengan kudus. Dahulu di wilayah ini banyak bermukim keturunan \
  cina, yang kemudian membuat batik dengan gaya dan motif yang khas untuk mereka pakai atau gunakan sendiri. \
  Batik demak dikenal dengan sebutan batik demakan, ciri khasnya ada pada motif dan latar kain yang bercorak \
  rumit dengan detail isen serta warna kecoklatan yang khas. Pada selembar kain batik demakan biasanya tergambar \
  buketan bunga seperti seruni, lotus dan bunga persik dengan pinggiran bermotif bunga suluran."
};
const images = ref<string[]>([]);

const importImages = async () => {
    const context = import.meta.glob('/public/images/batiks/*.{png,jpg,jpeg,svg}');
    for (const path in context) {
        images.value.push(path.replace('/public', ''));
    }
};

onMounted(() => {
    importImages();
});
</script>

<template>
    <div class="mb-8 box-border">
        <PageCompositCollectionSectionOne :batik-image="batikOfTheDay" />
        <PageCompositCollectionSectionTwo :name="batikInfo.name" :description="batikInfo.description" />
        <PageCompositCollectionSectionThree :images="images" />
    </div>
</template>