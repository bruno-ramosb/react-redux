export default function(props){
    console.log('ComParametro.jsx/',props)
    return (
    <div>
        <h2>{props.titulo}</h2>
        <h3>{props.subtitulo}</h3>
    </div>
        )
}