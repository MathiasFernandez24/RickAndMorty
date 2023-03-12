import '../../App.css'
import React from 'react'
import { Card } from './Card'

export const Cards = (props) => {
    const { arrayPersonajes } = props

    return (
        <div className='App'>
            <div className="album py-5 ">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {arrayPersonajes.map((i) => <Card personaje={i} key={i.id} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
