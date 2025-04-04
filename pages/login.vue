<script setup lang="ts">
async function HandleLogin() {
    console.log('Login') 
    await navigateTo('/admin/booking-list');
}
</script>

<template>
    <main class="container h-screen flex justify-center items-center">
        <form
        class="w-1/2 p-4 flex flex-col items-center gap-4" 
        @submit.prevent="HandleLogin"
        >
        <div class="p-4 w-full grid grid-cols-[repeat(2,_auto)] items-center gap-4 bg-brand-white text-brand-black rounded-xl border-neutral-50 border">
            
            <Label for="id" class="text-right">ID</Label>
            <Input type="text" id="id" placeholder="Insert ID" />

            <Label for="password" class="text-right">Password</Label>
            <Input type="password" id="password" placeholder="Insert Password" />
        </div>

        <PrimitiveButton type="submit">Login</PrimitiveButton>
        </form>
    </main>
</template>