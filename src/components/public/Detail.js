import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import RickAndMortyService from '../../services/RickAndMorty.service'

const Detail = () => {
    const [detallePersonaje, setDetallePersonaje] = useState({})

    const { id } = useParams()

    useEffect(() => {
        RickAndMortyService.getCharacterById(id).then((datos) => {
            setDetallePersonaje(datos)
        })
    }, [])

    return (
        <div>
            <div class="text-bg-dark me-md pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div>
                    <h2 class="display-3">Nombre: {detallePersonaje.name}</h2>
                    <p class="lead">Especie: {detallePersonaje.species}</p>
                    <p class="lead">Origen: {detallePersonaje.origin?.name}</p>
                    <p class="lead">Genero: {detallePersonaje.gender}</p>
                    <p class="lead">Status: {detallePersonaje.status}</p>
                    {id}/826
                </div>
                <div class="shadow-sm mx-auto">
                    <img src={detallePersonaje.image} />
                </div>

            </div>
            <div class="text-bg-dark me-md pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <Link to={`/`} type="button" class="btn btn-bg btn-outline-secondary">Volver</Link>
            </div>

        </div>
    )
}

export default Detail