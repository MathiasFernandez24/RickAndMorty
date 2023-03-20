import React from 'react'
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconHome2, IconMailForward } from '@tabler/icons-react';
import RyMHome from '../../images/2.png'

export const NavVar = ({ modificarSearch }) => {

    return (
        <div>
            <header class="p-3 text-bg-dark">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <a href="/" class="nav-link px-2 text-white" > <img src={RyMHome} alt="cargando" style={{ width: 40, height: 40 }} /> </a>
                            {/* <li><a href="/" class="nav-link px-2 text-white" ><IconHome2 /></a></li> */}
                            <li><a href="https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/" class="nav-link px-2 text-white" target={"_blank"}><IconBrandLinkedin /> </a></li>
                            <li><a href="https://github.com/MathiasFernandez24" class="nav-link px-2 text-white" target={"_blank"}><IconBrandGithub /></a></li>
                            <li><a href="https://wa.me/5402644585409?text=Hola,%20he%20visto%20tu%20web%20y%20me%20ha%20gustado%20mucho!" class="nav-link px-2 text-white" target={"_blank"}><IconBrandWhatsapp /></a></li>
                            <li><a href="mailto:mathias_fernandez_24@hotmail.com?Subject=He%20visto%20tu%20App%20de%20Rick%20and%20Morty!" class="nav-link px-2 text-white" target={"_blank"}><IconMailForward /></a></li>

                        </ul>

                        <div class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input onChange={({ target }) => { modificarSearch(target.value) }} type="search" class="form-control" placeholder="Search..." aria-label="Search" style={{ width: 500 }} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
