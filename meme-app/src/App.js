import logo from './logo.svg';
import React,{useState} from 'react'
import html2canvas from 'html2canvas'

import './App.css';

function App() {

  const [linea1,setLinea1]= useState('');
  const [linea2,setLinea2]= useState('');
  const [imagen,setImagen]= useState('fire');
  const onchangeL1= (evento) =>{
    setLinea1(evento.target.value);
  }
  const onchangeL2= (evento) =>{
    setLinea2(evento.target.value);
  }
  const onChangeSelect=(evento)=>{
    setImagen(evento.target.value)
  }
  const exportar=() =>{
  html2canvas(document.querySelector("#meme")).then(canvas => {
  var link = document.createElement('a');
  link.download = 'filename.png';
  link.href = canvas.toDataURL("image/png")
  link.click();
});


  }

  return (
    <div className="App">
      <select onChange={onChangeSelect}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Pholosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <div >
      <input onChange={onchangeL1} type="text" placeholder="Linea 1"></input> <br></br>
      <input onChange={onchangeL2} type="text" placeholder="Linea 2"></input>
      </div>
      
      <button onClick={exportar}>Exportar</button>
    <div className="meme" id="meme">
      <span className="linea1 text"> {linea1} </span> <br></br>
      <span className="linea2 text"> {linea2} </span>
      <img src={`/assets/img/${imagen}.jpg`}/>
    </div>
      </div>
  );
}

export default App;
