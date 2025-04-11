<script setup lang="ts">
import type { BookingData } from '~/types/BookingData';
const route = useRoute()

const data = ref<BookingData | undefined>()
const isLoading = ref<boolean>(false);

try {
    const r = await $fetch<BookingData>('/api/bookings', {
        method: "GET",
        query: {
            request_id: route.params.request_id,
        }
    }).then(
        (value) => data.value = value
    )
    console.log(r);
} 
finally {
    isLoading.value = false;
}
</script>

<template>
    <main class="h-screen container flex flex-col items-center py-16">

        <div class="flex flex-col justify-center items-center">
            <h1 class="font-copasetic text-8xl mt-8 mb-8">BOOKING INFO</h1>
        </div>
        
        <div class="flex flex-col h-3/5 items-center justify-center">
            <div class="flex flex-col bg-brand-white-20 px-8 py-8 rounded-xl"
             v-if="data != undefined && !isLoading">
                <div class="flex gap-4 items-center mb-4">
                    <h2 class="text-4xl">{{ data.name }}</h2>
                    <p class="px-4 py-1 box-border bg-brand-brown rounded-full text-sm">{{ data.status }}</p>
                </div>
                <p class="text-xl">email: {{ data.email }}</p>
                <p class="text-xl">date: {{ new Date(data.date) }}</p>
                <p class="text-xl">{{ data.about }}</p>
            </div>
        </div>
            
        <div class="container flex" v-if="isLoading">
            <p>loading...</p>
        </div>

    </main>
</template>