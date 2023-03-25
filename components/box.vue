<template>
    <main class="box">
        <slot></slot>
    </main>
</template>

<style lang="scss">
.box {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1140px;
    padding: 24px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #f9f9f9;
}
</style>