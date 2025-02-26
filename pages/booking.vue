<script lang="ts">
import { type DateValue, type CalendarDate, type CalendarDateTime, type ZonedDateTime } from '@internationalized/date'
interface BookingRequest {
    Name: string | number | undefined,
    Email: string | number | undefined,
    Date: string | undefined,
    Check: boolean,
    Signature: string | null
}
</script>

<script setup lang="ts">
const booking = reactive<BookingRequest>({
    Name: undefined,
    Email: undefined,
    Date: undefined,
    Check: false,
    Signature: null
})
function validate() {
    // console.log(booking.Date)
    if (booking.Name == undefined || booking.Email == undefined || 
    booking.Date == undefined || booking.Signature == null || !booking.Check) {
        console.log("Invalid");
        return;
    }
    console.log("valid!")
}
</script>

<template>
    <section class="container h-screen flex flex-col justify-center align-center">
        <h1 class="text-9xl font-copasetic uppercase">Booking</h1>

        
        <div class="rounded-2xl border-2 border-brand-white border-solid py-6 px-8 flex gap-12 h-1/2">
            <div class="w-1/3 h-full rounded-full bg-brand-white">decor</div>
            
            <div class="w-2/3 flex flex-col justify-around">
                <div>
                    <Label>Name</Label>
                    <Input id="Name" type="email" v-model="booking.Name" class="rounded-full bg-brand-white border-none text-brand-black invalid:border-brand-brown"/>
                </div>
                
                <div>
                    <Label>Email</Label>
                    <Input id="Name" type="email" v-model="booking.Email" class="rounded-full bg-brand-white border-none text-brand-black"/>
                </div>

                <PrimitiveDatePicker v-model="booking.Date" />


                <PrimitiveLabeledCheckbox v-model="booking.Check">
                    <p>I Agree with the term and condition</p>
                </PrimitiveLabeledCheckbox>

                <div>
                    <Label for="signature">Please Sign Here</Label>
                    <PrimitiveCanvas id="signature" class="w-[300px] h-[100px]" v-model="booking.Signature"/>
                </div>
                
                <PrimitiveButton size="medium" @click="validate">Submit</PrimitiveButton>
            </div>
        </div>
    </section>
</template>