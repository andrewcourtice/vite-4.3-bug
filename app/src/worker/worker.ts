/* eslint-disable no-console */

console.log('Local Worker Booted');

self.addEventListener('message', event => {
    console.log(`Local Worker: ${event.data}`);
});