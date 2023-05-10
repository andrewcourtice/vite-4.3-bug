<template>
    <div layout="row center-center">
        <h1>Vite 4.3 Bug</h1>
    </div>
</template>

<script lang="ts" setup>
import worker from '~/worker';

console.log(worker);
</script>

<style lang="scss">

    .app {
        width: 100%;
        height: 100%;
    }

</style>