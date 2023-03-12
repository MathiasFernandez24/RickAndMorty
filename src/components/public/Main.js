import React, { useEffect, useState } from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service'
import { Cards } from './Cards'


export const Main = (props) => {
    const { search } = props
    const [personajesFiltrados, setPersonajesFiltrados] = useState([])
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        const array = []
        const obtenerDatos = async (i) => {
            await RickAndMortyService.getAllCharacters(i).then(r => {
                //agrega al array los resultados, los esparce (...) para no generar una posicion nueva con los 20 personajes nuevos
                array.push(...r.results)

                //solamente si recorrio completo el for, hace el set a los estados
                if (i == 42) {
                    //en este estado aplico un sort para ordenarlo y un filtro, para que al volver del detalle siga haciendo el filtro
                    setPersonajesFiltrados(array.sort((a, b) => a.id - b.id).filter((p) => p.name.toLowerCase().includes(search.toLowerCase())));
                    //este estado funciona como DB del personajes filtrados, asique lo dejo con todos los personajes
                    setPersonajes(array.sort((a, b) => a.id - b.id));
                }
            })
        }
        //for ejecuta el llamado a la API por cada pagina que tiene (trae 20 personajes cada pagina)
        for (let i = 1; i <= 42; i++) {
            obtenerDatos(i)
        }
    }, [])

    // actualiza personajesFiltrados cada vez que escribimos en el search del NavVar
    useEffect(() => {
        setPersonajesFiltrados(personajes.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())))
    }, [search])

    return (
        <main>
            {personajesFiltrados.length > 0 ?
                <Cards arrayPersonajes={personajesFiltrados} />
                :
                <h1 class="display-5 fw-bold text-center">No hay coincidencias..</h1>
            }
        </main>
    )
}

