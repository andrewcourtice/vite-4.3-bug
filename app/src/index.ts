import './styles/index.scss';

import App from './app.vue';

import {
    createApp,
} from 'vue';

function start() {
    return createApp(App).mount('#app');
}

start();