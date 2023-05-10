<template>
    <div class="app" layout="column center-center">
        <div>
            <h1>Vite 4.3 Bug</h1>
            <div>
                <p>Enter a message below and click the "Log" button</p>
                <p>Open the devtools and note that the message is never logged in the linked worker</p>
            </div>
            <input v-model="message" type="text">
            <button @click="log">Log</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    ref,
} from 'vue';

import {
    log as logLocal,
} from '~/worker';

import {
    log as logLinked,
} from '@vue-vite-starter/worker';

const message = ref('');

function log() {
    logLocal(message.value);
    logLinked(message.value);
}
</script>

<style lang="scss">

    .app {
        width: 100%;
        height: 100%;
    }

</style>