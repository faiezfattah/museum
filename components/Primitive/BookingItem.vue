<script setup lang="ts">
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
    <div class="py-2 px-4 flex w-full justify-between items-center bg-brand-white text-brand-black rounded-full">
      <p>
        {{ booking.name }}
      </p>
      <p>
        {{ booking.email }}
      </p>
    </div>
    <LazyPrimitiveButton
        size="small"
        @click="() => emit('delete', booking)"
        class="bg-amber-800 hover:bg-brand-white inline"
    >
      Decline
    </LazyPrimitiveButton>
    <LazyPrimitiveButton
        size="small"
        @click="() => emit('accept', booking)"
        class="bg-teal-700 hover:bg-brand-white inline"
    >
      Accept
    </LazyPrimitiveButton>
  </div>
</template>