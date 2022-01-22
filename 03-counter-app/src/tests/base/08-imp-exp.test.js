import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp'
import heroes from '../../data/heroes'
describe('Pruebas en funciones de heroes',()=>{

    test('debe de retornar un heroe por id',()=>{

        const id=1;
        const heroe= getHeroeById(id);
        const heroData = heroes.find(h=>h.id==id);
        expect(heroe).toEqual(heroData);

    })
    test('debe de retornar un undefine',()=>{

        const id=10;
        const heroe= getHeroeById(id);
        const heroData = heroes.find(h=>h.id==id);
        expect(heroe).toBe(undefined);

    })
    test('debe de retornar un arreglo con los heroes de DC',()=>{

        const owner ='DC';
        const ownerget = getHeroesByOwner(owner);
        const ownerData = heroes.filter(h=>h.owner==owner);
        expect(ownerget).toEqual(ownerData);
    })
    test('debe de retornar un arreglo con los heroes de Marvel con length',()=>{

        const owner = getHeroesByOwner('Marvel');
        const ownerData = heroes.filter(h=>h.owner=='Marvel');
        expect(owner.length).toBe(2);
    })


})