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
            <div className='cardWindow' style={{ color: isActive ? 'red' : 'black' }}>
                <img src={image} alt="loading" width={130} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h5>{name}</h5>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <h5>{status} </h5>
                        <h5>- {species}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardWindow