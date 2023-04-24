import React from 'react'
import RyMHome from '../../images/2.png'
import RyMCompare from '../../images/R&M_Compare.png'
import { Link } from 'react-router-dom';

export const NavVar = ({ modificarSearch }) => {

    return (
        <div style={{ height: '12vh', color: 'white', backgroundColor: 'rgb(18, 18, 18)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 80 }}>
            {/* <div style={{ height: '100%', }}> */}
            {/* <div > */}

            {/* <div style={{}}> */}
            <ul class="nav col-lg-auto me-auto ">
                <a href="/" class="nav-link px-2 text-white" > <img src={RyMHome} alt="cargando" style={{
                    display: 'flex', width: 70
                }} /> </a>
                <Link to="/compare" class="px-2" > <img src={RyMCompare} alt="cargando" style={{ width: 80 }} /> </Link>
                {/* <li><a href="https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/" class="nav-link px-2 text-white" target={"_blank"}><IconBrandLinkedin /> </a></li> */}
                {/* <li><a href="https://github.com/MathiasFernandez24" class="nav-link px-2 text-white" target={"_blank"}><IconBrandGithub /></a></li> */}
                {/* <li><a href="https://wa.me/5402644585409?text=Hola,%20he%20visto%20tu%20web%20y%20me%20ha%20gustado%20mucho!" class="nav-link px-2 text-white" target={"_blank"}><IconBrandWhatsapp /></a></li> */}
                {/* <li><a href="mailto:mathias_fernandez_24@hotmail.com?Subject=He%20visto%20tu%20App%20de%20Rick%20and%20Morty!" class="nav-link px-2 text-white" target={"_blank"}><IconMailForward /></a></li> */}
            </ul>
            <div class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input onChange={({ target }) => { modificarSearch(target.value) }} type="search" class="form-control" placeholder="Search..." aria-label="Search" style={{ width: 500 }} />
            </div>
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}
