import './Detail.css'
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
        <div class='detail-container'>
            <br />
            <div class='container'>
                <div class='card-content-container'>
                    <div class="row">
                        <div class="col">
                            <img src={detallePersonaje.image} class="img-fluid rounded-start" alt="Cargando ..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h2 class="display-3">Nombre: {detallePersonaje.name}</h2>
                                <p>Especie: {detallePersonaje.species}</p>
                                <p class="lead">Origen: {detallePersonaje.origin?.name}</p>
                                <p class="lead">Genero: {detallePersonaje.gender}</p>
                                <p class="lead">Status: {detallePersonaje.status}</p>
                                {id}/826
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div class="text-center">
                <Link to={`/`} type="button" class="btn btn-bg btn-outline-secondary">Volver</Link>
            </div>
            <br />
        </div>
    )
}

export default Detail