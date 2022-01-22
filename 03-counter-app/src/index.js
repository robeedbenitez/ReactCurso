//importaciones de react
import React from 'react';
import ReactDOM from 'react-dom';
//importaciones de componentes
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
// importaciones de css
import './index.css';

const divRoot = document.querySelector('#app');
const divRoot2 = document.querySelector('#app2');
//console.log(divRoot);
//ReactDOM.render(<PrimeraApp />, divRoot);//render es para 'dibujar' o renderizar (varibale a dibujar, donde por ID )
//ReactDOM.render(<CounterApp valor={1998} />, divRoot);//los componentes se ponen entre <> y con espacio al final y slab <EjemploApp />
//ReactDOM.render(<PrimeraApp saludo={'hola soy ronald'} />, divRoot);
ReactDOM.render(<CounterApp />, divRoot);
//ReactDOM.render(<CounterApp />, divRoot2);
