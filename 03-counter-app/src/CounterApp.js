import React,{useState} from "react"
import PropTypes from 'prop-types';

const CounterApp = ({valor=0})=>{

    //hooks
    const [counter,setCounter] = useState(0);
    console.log(counter)

    // handleadd
    const handleSum = () =>setCounter((e)=>e+1);
    const handleRes = () =>setCounter((e)=>e-1);
    const handleReset = () => setCounter(0);
    

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleSum} >+1</button>
        <button onClick={handleReset} >Reset</button>
        <button onClick={handleRes} >-1</button>
        </>
    )

}

CounterApp.propTypes = {
    valor: PropTypes.number,
}
export default CounterApp;