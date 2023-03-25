<script setup>

defineProps({
    color: String
})

</script>

<template>
    <span class="kit-divider" :style="{ backgroundColor: color }"></span>
</template>

<style lang="scss">
.kit-divider {
    align-self: stretch;
    width: 2px;
}
</style>