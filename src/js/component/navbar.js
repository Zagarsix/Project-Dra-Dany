import React from 'react';
import { NavLink } from "react-router-dom";
import iconDP from "../../img/iconDP2.jpg";

const Navbar = () => {
    return <>
        <main className="flex-shrink-0">
        {/* Navigation*/}
        <nav className="navbar navbar-expand-lg">
            <div className="container px-5">
                <NavLink className="navbar-brand" to="/">
                    <img className="mx-3" src={iconDP} alt="logo-brand" width="120" height="100" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/nuestra-mision">
                                Nuestra misión
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownBlog"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Servicios
                            </NavLink>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownBlog"
                            >
                                <li>
                                    <NavLink className="dropdown-item" to="/odontologia">
                                        Odontología
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/estetica-facial">
                                        Estética facial
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/precios">
                                Precios
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownPortfolio"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Promociones
                            </NavLink>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownPortfolio"
                            >
                                <li>
                                    <NavLink className="dropdown-item" to="/promo-odontologia">
                                        Ortodoncia restaurativa
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/promo-estetica">
                                        Lifting facial
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dra-dany-responde">
                                Dra. Dany responde
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacto">
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </main>
    </>
}

export default Navbar;