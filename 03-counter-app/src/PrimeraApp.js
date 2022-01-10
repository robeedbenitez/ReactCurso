import React from "react";
import PropTypes from 'prop-types';
const PrimeraApp= ({saludo, subtitulo}) => { //con desestructuracion se pueden obtener los datos
    return (
        <> 
            <h1> {saludo} </h1>
            <p>{subtitulo}</p>
        </>);      
    
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number,
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo por defecto'
}

export default PrimeraApp;