<script setup lang="js">
import { onMounted } from 'vue'

function initMap() {
    const home = { lat: -6.3454958, lng: 106.809512 };

    const map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 15,
        center: home
    });

    const marker = new google.maps.Marker({
        position: home,
        map: map,
        title: 'MY HOME!',
    });
}

onMounted(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = initMap;
    
    document.head.appendChild(script);
})
</script>

<template>
    <div id="map-container" class="map-container w-full h-full bg-white"></div>
</template>