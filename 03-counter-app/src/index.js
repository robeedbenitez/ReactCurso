//importaciones de react
import React from 'react';
import ReactDOM from 'react-dom';
//importaciones de componentes
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
// importaciones de css
import './index.css';

const divRoot = document.querySelector('#app');
//console.log(divRoot);
//ReactDOM.render(<PrimeraApp />, divRoot);//render es para 'dibujar' o renderizar (varibale a dibujar, donde por ID )
ReactDOM.render(<CounterApp valor={1998} />, divRoot);//los componentes se ponen entre <> y con espacio al final y slab <EjemploApp />
