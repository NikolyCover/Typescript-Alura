import { NegotiationController } from './controllers/negotiation-controller.js';
const controller = new NegotiationController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o formulário existe');
}
const importButton = document.querySelector('#import-button');
if (importButton) {
    importButton.addEventListener('click', () => {
        controller.importData();
    });
}
else {
    throw Error('Import button não foi encontrado');
}
