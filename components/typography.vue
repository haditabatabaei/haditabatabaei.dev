<script setup>
defineProps({
    is: {
        type: String,
        default: 'p'
    },
    type: {
        default: 'text',
        validator(value) {
            return ['title', 'description', 'text'].includes(value)
        }
    }
})
</script>

<template>
    <component :is="is" class="kit-typography" :class="`kit-typography__${type}`">
        <slot></slot>
    </component>
</template>

<style lang="scss">
.kit-typography {
    &__title {
        font-size: 48px;
        line-height: 1.5;
    }

    &__description {
        font-size: 24px;
        line-height: 1.5;
    }

    &__text {
        font-size: 18px;
        line-height: 1.4;
    }
}
</style>