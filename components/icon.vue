<script setup>
    defineProps({
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
        },
        size: {
            type: Number
        }
    })
</script>

<template>
    <span class="material-symbols-outlined" :style="{ color, fontSize: `${size}px` }">
        {{ name }}
    </span>
</template>