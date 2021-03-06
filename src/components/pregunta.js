import React, {Fragment,useState} from 'react'


const Pregunta = () => {

    // Definir state
    const [cantidad,guardarCantidad] = useState(0)

    // Funcion que lee el presupuesto
const definirPresupuesto = e =>{
    // parseInt transforma el string en number
    console.log(parseInt(e.target.value))
}
// Submit para definir presupuesto
const agregarPresupuesto = e => {
    e.preventDefault();
    // Validar
}
return (  <Fragment>

        <h2>Coloca tu presupuesto</h2>
        <form onSubmit={agregarPresupuesto}>
            
            <input
            type="number"
            className="u-full-width"
            placeholder="Coloca tu presupuesto"
            onChange={definirPresupuesto}
            
            /> 
            <input
            type="submit"
            className="button-primary u-full-width"
            value="Definir presupuesto"
            />
                   </form>

    </Fragment> );
}
 
export default Pregunta;