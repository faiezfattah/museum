<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'

import { CalendarIcon } from 'lucide-vue-next'

const df = new DateFormatter('id-ID', {
  dateStyle: 'long',
})

const value = ref<DateValue>()

const model = defineModel<string>()

watchEffect((val) => {
  if (value.value != undefined) {
    model.value = df.format(value.value.toDate(getLocalTimeZone()))
  }
})
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline"
        :class="cn(
          'w-[280px] justify-start text-left font-normal',
          !value && '!text-brand-brown',
          'text-brand-black bg-brand-white rounded-full'
        )"
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date" }}
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-auto p-0 bg-brand-white">
      <Calendar v-model="value" initial-focus />
    </PopoverContent>
  </Popover>
</template>