export function escape(target, propertyKey, descriptor) {
    const originalmethod = descriptor.value;
    descriptor.value = function (...args) {
        let result = originalmethod.apply(this, args);
        if (typeof result === 'string') {
            result = result.replace(/<script>[\s\S]<\/script>/, '');
        }
        return result;
    };
    return descriptor;
}
