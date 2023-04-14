import React from 'react'

const WindowEpisodes = ({ arrayEpisodes = [] }) => {
    return (
        <div>
            {arrayEpisodes.map(episode => <p>{episode}</p>)}
        </div>
    )
}

export default WindowEpisodes