import '../../App.css'
import './Cards.css'
import React from 'react'
import { Card } from './Card'


export const Cards = (props) => {
    const { arrayPersonajes } = props

    return (
        <div className='App'>
            <div className="cards-container ">
                {arrayPersonajes.map((i) => <Card personaje={i} key={i.id} />)}
            </div>
        </div>
    )
}
