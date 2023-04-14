import React, { useEffect, useState } from 'react'
import CardWindow from './CardWindow'
import './WindowCompare.css'
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

const WindowCompare = ({ NumeroWindow, onSelectPersonaje, selectPersonaje }) => {

    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(res => res.json())
            .then(res =>
                setCharacters(res.results)
            )
    }, [page])

    useEffect(() => {


    }, [])

    const onNextPage = () => {
        if (page == 42) {
            setPage(1)
        } else { setPage(page + 1) }
    }
    const onPrevPage = () => {
        if (page == 1) {
            setPage(42)
        } else { setPage(page - 1) }
    }

    return (
        <div className='containerWindowCompare'>
            <div className='headerWindowCompare'>
                <IconChevronLeft className='arrowWindowCompare' onClick={onPrevPage} />
                <h3>Character #{NumeroWindow} page {page}/42</h3>
                <IconChevronRight className='arrowWindowCompare' onClick={onNextPage} />

            </div>
            <div className='windowCompare'>
                {
                    // characters.map(p => <CardWindow personaje={p} key={p.id} selectPersonaje={selectPersonaje} />)
                    characters.map((p, index) => {
                        // index && setActiveCard(index)
                        return (<CardWindow personaje={p} key={p.id} onSelectPersonaje={onSelectPersonaje} isActive={index + (page - 1) * 20 + 1 == selectPersonaje.id} />)
                    })
                }
            </div>
        </div>
    )
}

export default WindowCompare