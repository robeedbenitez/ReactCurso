import {getSaludo} from '../../base/02-template-string';
describe('Prueba para template String',() => {
    test('getSaludo debe retornar hola Ronald',() => {
        const nombre='Ronald';
        const saludo=getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);

    })
    test('getSaludo debe retornar hola Carlos! si no hay argumentos',() => {
        const saludo=getSaludo();
        expect(saludo).toBe('Hola Carlos!'); //toBe es para evaluar datos primitivos
    })  
})