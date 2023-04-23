import React from 'react'
import './WindowEpisodes.css'
import Episode from './Episode'

const WindowEpisodes = ({ personajeSelect, comparePersonajeSelect = "" }) => {


    return (
        <div className='containerWindowEpisodes'>
            <h4 style={{ textAlign: 'center', color: 'white' }}>Character - {comparePersonajeSelect ?
                `# ${personajeSelect.id} & # ${comparePersonajeSelect.id} -  SharedEpisode`
                :
                `# ${personajeSelect.id} -Only Episode`
            }
            </h4>
            <div className='windowEpisodes'>
                {
                    comparePersonajeSelect ?
                        personajeSelect.episode?.filter(episodio => comparePersonajeSelect.episode?.includes(episodio)).map(episode => <Episode episodeUrl={episode} key={episode} />)
                        :
                        personajeSelect.episode?.map(episode => <Episode episodeUrl={episode} />)
                }
            </div>
        </div>
    )
}

export default WindowEpisodes