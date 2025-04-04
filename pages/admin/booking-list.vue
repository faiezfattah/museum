<script setup lang="ts">
import { ref } from 'vue';
import { BookingStatus, type BookingData } from '~/types/BookingData';

const booking = await useFetch<BookingData[]>('/api/bookings', {
  method: 'GET'
});

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
      <LazyPrimitiveBookingItem
          v-for="booking in dummyBookingRef"
          :key="booking.id"
          :booking="booking"
          @delete="HandleDelete"
          @accept="HandleAccept"
      />
    </div>
  </main>
</template>