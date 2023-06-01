import React from "react";
import produtos from "../data/tabelaProduto"
import "./TabelaProdutos.css";

export default (props) => {

    function getLinhas() {
        return produtos.map((produto,i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par': 'Impar'}>
                    <td>{produto.produto}</td>
                    <td>{produto.marca}</td>
                    <td>{produto.preco.toFixed(2)}</td>
                </tr>
            )
        })};


    return (
        <div>
            <table className="TabelaProdutos">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Marca</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                        {getLinhas()}
                </tbody>
            </table>
        </div>)
    }



