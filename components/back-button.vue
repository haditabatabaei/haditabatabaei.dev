<template>
    <button class="kit-back-button">
        <Icon name="chevron_left" :size="48" color="white" />
    </button>
</template>

<style lang="scss">
.kit-back-button {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    width: 64px;
    height: 64px;
    border: none;
    background: none;

    cursor: pointer;

    transition: all .1s ease-in-out;

    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
}
</style>