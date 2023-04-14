import React, { useState } from 'react'
import WindowCompare from './WindowCompare'
import WindowEpisodes from './WindowEpisodes'

const Compare = () => {
    const [personajeSelect1, setPersonajeSelect1] = useState("")
    const [personajeSelect2, setPersonajeSelect2] = useState("")

    const onSelectPersonaje1 = (personaje1) => {
        setPersonajeSelect1(personaje1)
    }
    const onSelectPersonaje2 = (personaje2) => {
        setPersonajeSelect2(personaje2)
    }




    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <WindowCompare NumeroWindow={1} onSelectPersonaje={onSelectPersonaje1} selectPersonaje={personajeSelect1} />
                <WindowCompare NumeroWindow={2} onSelectPersonaje={onSelectPersonaje2} selectPersonaje={personajeSelect2} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <div>
                    <WindowEpisodes arrayEpisodes={personajeSelect1.episode} />
                </div>
                <div>
                    d
                </div>
                <div>
                    <WindowEpisodes arrayEpisodes={personajeSelect2.episode} />
                </div>
            </div>
        </div>
    )
}

export default Compare