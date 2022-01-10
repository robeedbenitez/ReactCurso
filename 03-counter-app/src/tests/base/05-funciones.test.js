import {getUser,getUsuarioActivo} from '../../base/05-funciones';
describe('Prueba en funciones',() => {
    test('getUser debe retornar un objeto',()=>{
        const user=getUser();
        const userTest={
            uid:'ABC123',
            username:'El_Papi1502'
        }
        expect(user).toEqual(userTest); //toEqual es para evaluar las propiedades de un objeto
    })
    test('getUserActivo debe retornar un objeto',()=>{
        const nombre='Ronald';
        const userActivoTest ={
            uid: 'ABC567',
            username: nombre
        }
        const userActivo=getUsuarioActivo(nombre);
        expect(userActivo).toEqual(userActivoTest);
    })
})