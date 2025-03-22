
<script setup lang="ts">
import { ref } from 'vue';
import { BookingStatus, type BookingData } from '~/types/BookingData';

const booking = await useFetch<BookingData[]>('/api/bookings', {
    method: 'GET'
});
console.log(booking.data.value);
const dummyBookingRef = ref<BookingData[] | null>(booking.data.value)

async function HandleDelete(booking: BookingData) {
    booking.status = BookingStatus.rejected;
    await $fetch('/api/bookings', {
        method: 'PATCH',
        body: booking
    })

    const r = await $fetch<BookingData[]>('/api/bookings', {
    method: 'GET'
    }).then(
        (value) => dummyBookingRef.value = value,
    )
}

async function HandleAccept(booking: BookingData) {
    booking.status = BookingStatus.accepted;
    await $fetch('/api/bookings', {
        method: 'PATCH',
        body: booking
    })

    const r = await $fetch<BookingData[]>('/api/bookings', {
    method: 'GET'
    }).then(
        (value) => dummyBookingRef.value = value,
    )
}
</script>

<template>
    <main class="full-container h-screen overflow-scroll flex flex-col items-center ">
        <PageCompositNavbarAdminNavbar />

        <div class="flex flex-col gap-4 w-full">
            <template v-for="booking in dummyBookingRef">
                <div class="flex gap-4">
                    <div class="py-2 px-4 flex w-full justify-between items-center bg-brand-white text-brand-black rounded-full">
                        <p>
                            {{ booking.name }}
                        </p>
                        <p>
                            {{ booking.email }}
                        </p>
                    </div>
                    <PrimitiveButton size="small" @click="() => HandleDelete(booking)" class="bg-amber-800 hover:bg-brand-white inline">Decline</PrimitiveButton>
                    <PrimitiveButton size="small" @click="() => HandleAccept(booking)" class="bg-teal-700 hover:bg-brand-white inline">Accept</PrimitiveButton>
                </div>
            </template>
        </div>

    </main>
</template>