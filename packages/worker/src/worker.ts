/* eslint-disable no-console */

console.log('Linked Worker Booted');

self.addEventListener('message', event => {
    console.log(`Linked Worker: ${event.data}`);
});