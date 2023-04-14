import React, { useState } from 'react'
import './CardWindow.css'

const CardWindow = ({ personaje, onSelectPersonaje, isActive }) => {
    const { name, image, status, species } = personaje
    const [active, setActive] = useState(false)

    return (
        <div className='containerCardWindow' onClick={() => {
            onSelectPersonaje(personaje)
            setActive(!active)
        }}>
            <div className='cardWindow' style={{ backgroundColor: isActive ? 'red' : 'beige' }}>
                <img src={image} alt="loading" width={130} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p>{name}</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <p>{status} </p>
                        <p>- {species}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardWindow