<template>
    <section class="flex flex-col items-center justify-center relative pointer-events-visible full-container h-screen bg-brand-black overflow-x-clip">
        <h1 class="text-9xl z-10 uppercase font-copasetic">
            <span class="bg-gradient-to-t to-brand-brown from-brand-white bg-clip-text text-transparent font-bold">Batik,</span> 
            <br>
            Cerita Senyap Sejarah
        </h1>

        <PrimitiveButton size="large" class="block self-end mt-4 z-10">
            <a href="https://museumbatik.kemdikbud.go.id/news" target="_blank">
                Baca Artikel →
            </a>
        </PrimitiveButton>

        <div>
            <img src="/batik-element.svg" alt="" class="absolute top-[-20%] right-[-30%] scale-y-100 -scale-x-100 z-0">
            <img src="/batik-element.svg" alt="" class="absolute top-[-20%] left-[-30%] scale-y-100 scale-x-100 z-0">
        </div>
    </section>
</template>