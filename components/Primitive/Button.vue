<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = withDefaults(defineProps<{
    size?: 'small' | 'medium' | 'large'
    class?: HTMLAttributes["class"]
    type?: 'button' | 'submit' | 'reset' | undefined
}>(), {
    size: 'medium'
})

const emit = defineEmits<{
    (e:'click'):void
}>()

const sizeClasses = computed(() => {
    switch (props.size) {
        case 'small':
            return 'text-sm py-2 px-4'
        case 'medium':
            return 'text-base py-3 px-6'
        case 'large':
            return 'text-xl py-4 px-8'
        default:
            return ''
    }
})
</script>

<template>
    <button 
    @click="emit('click')"
    :type="props.type"
    :class="`text-brand-white rounded-full bg-brand-brown 
    hover:bg-brand-white hover:text-brand-black 
    ${sizeClasses} ${props.class}`">
        <slot />
    </button>
</template>