import {getImagen} from '../../base/11-async-await'

describe('Pruebas con Async await',() => {
    test('debe retornar el url de la imagen ',async() => {
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
    });
    
});