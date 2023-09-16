import React,{useState} from 'react'

export default (props) => {
    function gerarNumeroNaoContido(min,max,array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio)
            ? gerarNumeroNaoContido(min,max,array)
            : aleatorio;
    }
    
    console.log(gerarNumeroNaoContido(7,10,[1,2,3]))
    
    
    function gerarNumeros(qtde){
        const numeros = Array(qtde)
                        .fill(0)
                        .reduce((nums) =>{
                            const novoNumero = gerarNumeroNaoContido(1,60,nums)
                            console.log([...nums,novoNumero])
                            return [...nums,novoNumero]
                        },[])
                        .sort((n1,n2) => n1 - n2);
    
        return numeros;
        
    }
    
    
    console.log(gerarNumeros(7))
    const quantidadeNumeros = props.qtde || 6;
    const numeroIniciais = Array(quantidadeNumeros);
    const [numeros,setNumeros] = useState(numeroIniciais.fill(0))

    return (
        <div>
            <h2>MegaSena</h2>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={_ => setNumeros(gerarNumeros(quantidadeNumeros))}>Gerar números</button>
        </div>
    )
    
}