export function domInjector(selector: string) {
    return function(target: any, propertyKey: string) {

            console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`)

            let element: HTMLElement
            const getter = function() {
                if(!element) {
                    element = <HTMLElement>document.querySelector(selector)
                    console.log(`${selector} : ${propertyKey}`)
                }

                return element
            }

            Object.defineProperty(
                target,
                propertyKey,
                { get: getter })
        }
}