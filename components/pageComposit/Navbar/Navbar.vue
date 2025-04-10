<script setup lang="ts">
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
</script>

<template>
    <nav class="fixed w-screen top-4 z-50 flex justify-center">
        <NavigationMenu as-child>

            <NavigationMenuList class="gap-4 px-8 py-2 bg-brand-white-20 rounded-full">

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
        @apply text-xl leading-tight;
    }
}
</style>