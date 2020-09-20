import React from 'react';
import './card.styles.css'

export const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt='monsters' src={`https://robohash.org/${props.monster.id}?set=set2&size=170x180`}></img>
            <h2 key={props.monster.id}>{props.monster.name}</h2>
            <h3 key={props.monster.id}>{props.monster.email}</h3>
        </div>
    )
};