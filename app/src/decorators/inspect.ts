export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalmethod = descriptor.value

    descriptor.value = function(...args: any[]) {
        console.log(`--- Método ${propertyKey}`)
        console.log(`--- Parámetros ${JSON.stringify(args)}`)
        const result = originalmethod.apply(this, args)
        console.log(`--- Retorno ${JSON.stringify(result)}`)
        return result
    }

    return descriptor
}