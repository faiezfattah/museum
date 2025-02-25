<script setup lang="ts">
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
</script>

<template>
    <nav class="fixed w-screen top-4 z-50 flex justify-center">
        <NavigationMenu as-child>

            <NavigationMenuList class="gap-4
            px-8 py-2 bg-brand-white bg-opacity-20 backdrop-blur-sm
            border-brand-white border-4 border-solid rounded-full border-opacity-50">

                <NavigationMenuItem>
                    <NavigationMenuLink href="/" class="style">home</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/collection" class="style">collection</NavigationMenuLink>
                </NavigationMenuItem>

                <img src="/site-icon.svg" alt="site icon" class="w-8 h-8" />

                <NavigationMenuItem>
                    <NavigationMenuLink href="/article" class="style">article</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/about" class="style">about</NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    </nav>
</template>

<style scoped lang="postcss">
@tailwind utilities;

@layer utilities {
    .style {
        @apply bg-transparent text-xl;
    }
}
</style>