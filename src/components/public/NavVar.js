import React from 'react'

export const NavVar = ({ modificarSearch }) => {

    return (
        <div>
            <header class="p-3 text-bg-dark">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" class="nav-link px-2 text-white" >Home</a></li>
                            <li><a href="https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/" class="nav-link px-2 text-white" target={"_blank"}>Linkedin</a></li>
                            <li><a href="https://github.com/MathiasFernandez24" class="nav-link px-2 text-white" target={"_blank"}>GitHub</a></li>
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
