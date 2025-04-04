<script setup lang="ts">
import { BookingStatus, type BookingData } from '~/types/BookingData';

const props = defineProps<{
  booking: BookingData
}>();
const emit = defineEmits<{
  (e: 'delete', booking: BookingData): void
  (e: 'accept', booking: BookingData): void
}>();
</script>

<template>
  <div class="flex gap-4">
    <NuxtLink :href="`/booking-details/${booking.request_id}`" class="py-2 px-4 flex w-full justify-between items-center bg-brand-white text-brand-black rounded-full">
      <p>
        {{ booking.name }}
      </p>
      <p>
        {{ booking.email }}
      </p>
    </NuxtLink>
    <LazyPrimitiveButton
      v-if="booking.status == BookingStatus.pending"
      size="small"
      @click="() => emit('delete', booking)"
      class="bg-amber-800 hover:bg-brand-white inline"
    >
      Decline
    </LazyPrimitiveButton>
    <LazyPrimitiveButton
      v-if="booking.status == BookingStatus.pending"
      size="small"
      @click="() => emit('accept', booking)"
      class="bg-teal-700 hover:bg-brand-white inline"
    >
      Accept
    </LazyPrimitiveButton>
  </div>
</template>