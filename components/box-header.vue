<script setup>
    defineProps({
        hasBack: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            required: true
        }
    })

    const router = useRouter()
</script>

<template>
    <header class="box-header">
        <BackButton @click="router.back" class="box-header__back-button" v-if="hasBack" />
        <Typography is="h1" type="title">{{ title }}</Typography>
    </header>
</template>

<style lang="scss" scoped>
.box-header {
    display: flex;
    align-items: center;

    &__back-button {
        margin-right: 16px;
    }
}
</style>