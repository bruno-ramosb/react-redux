import ReactDom from 'react-dom'
import React from 'react';

const tag = <strong>Seja bem vindo ao react !</strong>

ReactDom.render(
<div>{tag}</div>,
 document.getElementById('root'))