import React from "react";

export default props => {
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt((Math.random() * (10))) + 25
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('Bruno',gerarIdade(),true)}>
                Fornecer Informações
            </button>
        </div>
    )
}