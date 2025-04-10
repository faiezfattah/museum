<script setup lang="ts">
import type { BookingData, BookingForm } from '~/types/BookingData';

const booking = reactive<BookingForm>({
    Name: undefined,
    Email: undefined,
    RequestFor: undefined,
    Date: undefined,
    Check: false,
    Signature: undefined
})
async function HandleFormSubmit(event: Event) {
    // console.log(booking.Date)

    if (booking.Name === undefined || booking.Email === undefined || 
    booking.Date === null || booking.Date === undefined || booking.Signature === undefined || 
    !booking.Check || booking.RequestFor === undefined) {
        console.log("Invalid Form submitted");
        return;
    }
    const request:BookingData = {
        name: booking.Name,
        email: booking.Email,
        about: booking.RequestFor,
        date: new Date(booking.Date)
    }
    
    await $fetch('/api/bookings', {
        method: "POST",
        body: request
    })
    
}
</script>

<template>
    <main class="container h-screen flex flex-col justify-center align-center">
        <h1 class="text-9xl font-copasetic uppercase mb-4">Booking</h1>

        
        <div class="rounded-2xl border-2 border-brand-white border-solid flex gap-12 px-8 py-8 justify-between h-2/3 bg-brand-white-20">
            <Art class="w-auto h-full rounded-full bg-brand-white">decor</Art>
            
            <form 
            class="w-2/3 flex flex-col justify-around gap-2"
            @submit.prevent="HandleFormSubmit"
            >
                <div>
                    <Label for="name">Name</Label>
                    <Input id="Name" type="text" v-model="booking.Name" class="rounded-full bg-brand-white border-none text-brand-black"/>
                </div>
                
                <div>
                    <Label for="email">Email</Label>
                    <Input id="email" type="email" v-model="booking.Email" class="rounded-full bg-brand-white border-none text-brand-black invalid:border-brand-brown invalid:border-4"/>
                </div>
                <div>
                    <Label for="request">Request about</Label>
                    <Input id="request" type="text" v-model="booking.RequestFor" class="rounded-full bg-brand-white border-none text-brand-black invalid:border-brand-brown invalid:border-4"/>
                </div>

                <PrimitiveDatePicker v-model="booking.Date" />


                <PrimitiveLabeledCheckbox v-model="booking.Check">
                    <p>I Agree with the term and condition</p>
                </PrimitiveLabeledCheckbox>

                <div>
                    <Label for="signature">Please Sign Here</Label>
                    <PrimitiveCanvas id="signature" class="w-[300px] h-[100px]" v-model="booking.Signature"/>
                </div>
                
                <PrimitiveButton size="medium" type="submit">Submit</PrimitiveButton>
            </form>
        </div>
    </main>
</template>