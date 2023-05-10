const worker = new Worker(new URL('./worker', import.meta.url), {
    type: 'module',
});

export function log(message: string) {
    worker.postMessage(message);
}