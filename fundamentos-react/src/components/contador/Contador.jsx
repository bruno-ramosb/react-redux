import React , { Component } from 'react'
import "./Contador.css";
import "./Botoes"
import Botoes from "./Botoes"
import Display from './Display';
import PassoForm from './PassoForm'

class Contador extends Component {
    
    state = {
        numero: this.props.numeroInicial || 1,
        passo: this.props.passoInicial || 5
    };

    incrementar =() =>{
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    };

    decrementar = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    };

    setPasso = (e) =>{
        this.setState({
            passo: +e.target.value
        });
    } 

    render(){
        return (
            <div className='Contador'>
                <div>
                    <Display numero={this.state.numero}></Display>
                    <PassoForm setPasso={this.setPasso} passo={this.state.passo}></PassoForm>
                </div>
                <Botoes setInc={this.incrementar} setDec={this.decrementar}></Botoes>
            </div>
        )
    }
}

export default Contador;