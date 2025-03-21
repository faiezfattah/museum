
<script setup lang="ts">
import { ref } from 'vue';
import type { BookingData } from '~/types/BookingData';

const booking = await useFetch<BookingData[]>('/api/bookings/resource', {
    method: 'GET'
});
// console.log(booking.data.value);
const dummyBookingRef = ref<BookingData[] | null>(booking.data.value)

async function HandleDelete(booking: BookingData) {
    const newList = await $fetch('/api/bookings/resource', {
        method: 'DELETE',
        body: booking
    })
    const r = await $fetch<BookingData[]>('/api/bookings/resource', {
    method: 'GET'
    }).then(
        (value) => dummyBookingRef.value = value,
    )
    console.log(r);
}
</script>

<template>
    <main class="container h-screen py-32 flex flex-col items-center">
        <PageCompositNavbarAdminNavbar />

        <div class="flex flex-col gap-4 w-full">
            <template v-for="booking in dummyBookingRef">
                <div class="grid grid-cols-[8fr,_1fr,_1fr] gap-4">
                    <div class="py-2 px-4 flex justify-between items-center bg-brand-white text-brand-black rounded-full">
                        <p>
                            {{ booking.id }}
                        </p>
                        <p>
                            {{ booking.name }}
                        </p>
                        <p>
                            {{ booking.email }}
                        </p>
                    </div>
                    <PrimitiveButton size="small" @click="() => HandleDelete(booking)" class="bg-amber-800 hover:bg-brand-white">Decline</PrimitiveButton>
                    <PrimitiveButton size="small" @click="() => HandleDelete(booking)" class="bg-teal-700 hover:bg-brand-white">Accept</PrimitiveButton>
                </div>
            </template>
        </div>

    </main>
</template>