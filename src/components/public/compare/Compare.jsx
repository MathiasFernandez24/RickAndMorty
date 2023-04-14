import React, { useState } from 'react'
import WindowCompare from './WindowCompare'
import WindowEpisodes from './WindowEpisodes'

const Compare = () => {
    const [personajeSelect1, setPersonajeSelect1] = useState({ id: "?" })
    const [personajeSelect2, setPersonajeSelect2] = useState({ id: "?" })
    const onSelectPersonaje1 = (personaje1) => {
        setPersonajeSelect1(personaje1)
    }
    const onSelectPersonaje2 = (personaje2) => {
        setPersonajeSelect2(personaje2)
    }




    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(18, 18, 18)', height: '88vh' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <WindowCompare NumeroWindow={1} onSelectPersonaje={onSelectPersonaje1} selectPersonaje={personajeSelect1} />
                <WindowCompare NumeroWindow={2} onSelectPersonaje={onSelectPersonaje2} selectPersonaje={personajeSelect2} />
            </div>

            <div style={{ margin: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <WindowEpisodes personajeSelect={personajeSelect1} />
                <WindowEpisodes personajeSelect={personajeSelect1} comparePersonajeSelect={personajeSelect2} />
                <WindowEpisodes personajeSelect={personajeSelect2} />
            </div>
        </div>
    )
}

export default Compare