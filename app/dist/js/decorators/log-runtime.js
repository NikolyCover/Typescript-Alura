export function logRuntime(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalmethod = descriptor.value;
        descriptor.value = function (...args) {
            let divider = 1;
            let unit = 'milisegundos';
            if (inSeconds) {
                divider = 1000;
                unit = 'seconds';
            }
            const t1 = performance.now();
            const result = originalmethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divider} ${unit}`);
            result;
        };
        return descriptor;
    };
}
