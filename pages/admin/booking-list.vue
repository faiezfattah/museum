<script setup lang="ts">
import { ref } from 'vue';
import { BookingStatus, type BookingData } from '~/types/BookingData';

const Bookings = ref<BookingData[]>([])
const ActiveStatus = ref<BookingStatus | undefined>(undefined);
const isLoading = ref<boolean>(false);

async function HandleDelete(booking: BookingData) {
    booking.status = BookingStatus.rejected;
    await $fetch('/api/bookings', {
        method: 'PATCH',
        body: booking
    })

    FetchBookings(ActiveStatus.value);
}

async function HandleAccept(booking: BookingData) {
    booking.status = BookingStatus.accepted;
    await $fetch('/api/bookings', {
        method: 'PATCH',
        body: booking
    })

    FetchBookings(ActiveStatus.value);
}
async function FetchBookings(status?: BookingStatus) {
    const query = status ? { status: status } : {};
    ActiveStatus.value = status;
    isLoading.value = true;
    try {
        const r = await $fetch<BookingData[]>('/api/bookings', {
            method: "GET",
            query: query
        }).then(
            (value) => Bookings.value = value
        )
    } 
    finally {
        isLoading.value = false;
    }
}

FetchBookings();
</script>

<template>
    <main class="full-container h-screen overflow-scroll flex flex-col items-center ">
        <h1 class="font-copasetic text-8xl mt-8">ADMIN</h1>
        <div class="flex gap-4 text-brand-white tracking-[0.2em] mb-4">
            <p class="font-copasetic text-2xl mb-8" href="/admin/booking-list">BOOKINGS</p>
        </div>

        <div class="mb-4 w-full flex gap-2">
            <PrimitiveButton size="small" @click="() => FetchBookings(BookingStatus.rejected)">Rejected</PrimitiveButton>
            <PrimitiveButton size="small" @click="() => FetchBookings(BookingStatus.pending)">Pending</PrimitiveButton>
            <PrimitiveButton size="small" @click="() => FetchBookings(BookingStatus.accepted)">Accepted</PrimitiveButton>
            <PrimitiveButton size="small" @click="() => FetchBookings()">All</PrimitiveButton>
        </div>

        <div class="flex flex-col gap-4 w-full">
            <LazyPrimitiveBookingItem v-if="!isLoading && Bookings?.length > 0" v-for="booking in Bookings" :key="booking.id" :booking="booking"
                @delete="HandleDelete" @accept="HandleAccept" />

            <p v-if="isLoading">Loading...</p>
            
            <p v-if="!isLoading && Bookings.length == 0">No Bookings Found</p>
        </div>
    </main>
</template>