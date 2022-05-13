import "./App.css";
import React from "react";

import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./repeticao/TabelaProdutos";
import ListaAlunos from "./repeticao/ListaAlunos";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import Familia from "./components/basics/Familia";
import Card from "./components/layout/Card";
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from "./components/basics/Aleatorio";

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#08 Renderização condicional" color="#00J6E6">
                <ParOuImpar numero={13}></ParOuImpar>
            </Card>

            <Card titulo="#07 Desafio Repetição" color="#00J6E6">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 Repetição" color="#00D6E6">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ramos">
                    <FamiliaMembro nome="Bruno" />
                    <FamiliaMembro nome="Joao" />
                    <FamiliaMembro nome="Ana" />
                </Familia>
            </Card>

            <Card titulo="#04 Desafio Numeros Aleatório" color="#080">
                <Aleatorio min={1} max={150} ></Aleatorio>
            </Card>

            <Card titulo="#03 Fragmento">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 Com Parametro">
                <ComParametro
                    titulo="Curso React e Redux"
                    subtitulo="Aprendendo react do zero + redux">
                </ComParametro>
            </Card>

            <Card titulo="#01 Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div> 