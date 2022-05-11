import './index.css'
import ReactDom from 'react-dom'
import React from 'react';

import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento';

const tag = <strong>Seja bem vindo ao react !</strong>


ReactDom.render(
<div id="app">
    <Primeiro></Primeiro> 
    <ComParametro 
    titulo="Curso react" 
    subtitulo="Aprendendo react do zero + redux">    
    </ComParametro>
    <Fragmento></Fragmento>
</div>,
 document.getElementById('root'))