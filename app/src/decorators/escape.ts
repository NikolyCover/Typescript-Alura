export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalmethod = descriptor.value
    descriptor.value = function (...args: any[]) {
        let result = originalmethod.apply(this, args)
        if(typeof result === 'string') {
            //console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`)
            result = result.replace(/<script>[\s\S]<\/script>/, '')
        }

        return result
    }

    return descriptor
}