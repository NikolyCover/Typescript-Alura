export function inspect(target, propertyKey, descriptor) {
    const originalmethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método ${propertyKey}`);
        console.log(`--- Parámetros ${JSON.stringify(args)}`);
        const result = originalmethod.apply(this, args);
        console.log(`--- Retorno ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
