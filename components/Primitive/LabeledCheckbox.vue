<template>
    <div class="flex flex-row align-center gap-2">
        <Checkbox id="test" class="bg-brand-white"/>
        <Label for="test" class="mt-1">
            <slot />
        </Label>
    </div>
</template>