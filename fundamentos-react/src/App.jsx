import "./App.css";
import React from "react";

import Familia from "./components/basics/Familia";
import Card from "./components/layout/Card";
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from "./components/basics/Aleatorio";

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <Card titulo="#5 Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira"></Familia>
        </Card>

<div className="Cards">
<Card titulo="#4 Desafio Numeros Aleatório" color="#080">
        <Aleatorio min={1} max={150} ></Aleatorio>
        </Card>

        <Card titulo="#3 Fragmento">
        <Fragmento></Fragmento>
        </Card>

        <Card titulo="#2 Com Parametro">
        <ComParametro
            titulo="Curso React e Redux"
            subtitulo="Aprendendo react do zero + redux">
        </ComParametro>
        </Card>

        <Card titulo="#1 Primeiro Componente">
        <Primeiro></Primeiro>
        </Card>
</div>
    </div> 