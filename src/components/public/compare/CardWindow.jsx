import React, { useState } from 'react'
import './CardWindow.css'

const CardWindow = ({ personaje, onSelectPersonaje, isActive }) => {
    var bgColor = "blue"
    const { name, image, status, species } = personaje
    const [active, setActive] = useState(false)

    if (status === 'Alive') { bgColor = "green" }
    if (status === 'Dead') { bgColor = "red" }
    if (status === 'unknown') { bgColor = "grey" }

    console.log(bgColor);
    return (
        <div className='containerCardWindow' onClick={() => {
            onSelectPersonaje(personaje)
            setActive(!active)
        }}>
            <div className='cardWindow' style={{ color: isActive ? 'red' : 'black' }}>
                <img src={image} alt="loading" width={130} />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                    <h5>{name}</h5>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ backgroundColor: bgColor, borderRadius: '20px', width: '25px', height: '25px' }} />
                        <h7> -{species}</h7>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardWindow