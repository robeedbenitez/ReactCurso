import {retornaArreglo} from '../../base/07-deses-arr';
describe('Pruebas en desestructuracion',()=>{
    test('Debe retornar un string y un numero',()=>{
        const arreglo=retornaArreglo();
        console.log(arreglo);
        const arregloTest =['ABC',123]
        const [letras,numeros]=arreglo;
        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);
        expect(arreglo).toEqual(arregloTest);
    })
})