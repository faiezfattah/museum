<template>
    <svg width="200" height="400" viewBox="-100 -100 200 200">
        <defs>
            <g id="tree">
            <polygon points="-10,0 10,0 0 -50" fill="#38755b" />
            <line x1="0" y1="0" x2="0" y2="10" stroke="#778074" stroke-width="2" />
            </g>
        </defs>
            <rect x="-100" y="-100" width="200" height="200" fill="#F1DBC3" />
            <circle cx="0" cy="380" r="350" fill="#F8F4E8" />
            <use href="#tree" x="-30" y="25" transform="scale(2)" />
            <use href="#tree" x="-20" y="40" transform="scale(1.2)" />
            <use href="#tree" x="40" y="40" />
            <use href="#tree" x="50" y="30" transform="scale(1.5)" />
        </svg>
</template>

<style scoped>
svg {
    background-color: #F1DBC3;
}
</style>