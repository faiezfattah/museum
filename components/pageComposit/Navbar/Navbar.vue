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
    <NavigationMenu class="absolute top-0 right-0 w-screen flex justify-center">
        <NavigationMenuList class="flex mx-0 my-auto">

            <NavigationMenuItem>
                <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">home</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink href="/collection" :class="navigationMenuTriggerStyle()">collection</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink href="/article" :class="navigationMenuTriggerStyle()">article</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink href="/about" :class="navigationMenuTriggerStyle()">about</NavigationMenuLink>
            </NavigationMenuItem>

        </NavigationMenuList>
    </NavigationMenu>
</template>