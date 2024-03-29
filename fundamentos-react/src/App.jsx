import "./App.css";
import React from "react";

import UsuarioInfo from "./components/condicional/UsuarioInfo";
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
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from './components/contador/Contador'
import MegaSena from './components/mega/Mega'

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#12 Contador" color="#00J6E7"> 
                <MegaSena qtde={6}></MegaSena>
            </Card>

            <Card titulo="#12 Contador" color="#00J6E7"> 
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 Componentes Controlados" color="#00J6E7">
                <Input></Input>
            </Card>

            <Card titulo="#10 Comunicação Indireta" color="#00J6E7">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 Comunicação Direta" color="#00J6E7">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 Renderização condicional" color="#00J6E6">
                <ParOuImpar numero={13}></ParOuImpar>
                <UsuarioInfo usuario={{nome:'Bruno'}} />
                <UsuarioInfo usuario={{email:'Fernando'}} />
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