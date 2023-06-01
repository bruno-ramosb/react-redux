import React,{useState} from "react";

export default props => {

    const [dadosFormulario,setDadosFormulario] = useState('Inicial')

    function quandoDigitar(e) {
        setDadosFormulario(e.target.value)
    }

    return (
        <div>
            <input value={dadosFormulario} onChange={quandoDigitar}></input>
        </div>
    )
};