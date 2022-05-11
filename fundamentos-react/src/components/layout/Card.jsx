import "./Card.css"
import React from 'react'

export default (props) => {
    console.log('Entrando card.css',props)
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#008',
    }

    return (<div className="Card" style={cardStyle}>
        <div className="Title">{props.titulo}</div>
        <div className="Content"> 
        {props.children} 
        </div>
    </div>)
}