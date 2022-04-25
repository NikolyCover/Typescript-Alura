export function logRuntime(inSeconds = false) {
    return function(
        target: any, //se o decorator for estático, será o construtor da classe, se não, será o protoctatype da classe
        propertyKey: string, //nome do método
        descriptor: PropertyDescriptor //referência para o método
    ) {
        const originalmethod = descriptor.value
        
        descriptor.value = function(...args: any[]) {
            let divider = 1
            let unit = 'milisegundos'
            if(inSeconds) {
                divider = 1000
                unit = 'seconds'
            }

            const t1 = performance.now()

            const result = originalmethod.apply(this, args)

            const t2 = performance.now()
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divider} ${unit}`)
            result
        }

        return descriptor
    }
}