

describe('Pruebas en el archivo demos.test.js', () => {
    test('deden ser iguales los Strings ', () => {
        //inicializacion
        const mensaje = 'Hola Mundo';
        //estimulo
        const mensaje2 = `Hola Mundo`;
        //observar el comportamiento
        expect(mensaje).toBe(mensaje2);//internamente se compara el valor de los strings
    })
});


