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

const style = "bg-transparent text-white :hover-decoration-underline"
</script>

<template>
    <NavigationMenu class="
    fixed z-10 w-screen flex justify-center left-1/2 -translate-x-1/2
    ">
        <NavigationMenuList class="flex mx-0 my-auto
        gap-4
            px-8 py-4 border-white border-4 rounded-full bg-white bg-opacity-20 backdrop-blur-sm
        ">

            <NavigationMenuItem>
                <NavigationMenuLink href="/" :class="style">home</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink href="/collection" :class="style">collection</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink href="/article" :class="style">article</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuLink href="/about" :class="style">about</NavigationMenuLink>
            </NavigationMenuItem>

        </NavigationMenuList>
    </NavigationMenu>
</template>