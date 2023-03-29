<template>
    <section class="layout">
        <slot></slot>
        <Head>
            <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        </Head>
    </section>
</template>

<style lang="scss">
.layout {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url('@/assets/images/city.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
