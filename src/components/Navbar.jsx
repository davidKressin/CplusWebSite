import React from 'react'
import { Link } from 'react-router-dom'
import { IconHorizontal } from './IconHorizontal'

export const Navbar = () => {
    return (
        <>
            <div className="container-fluid text-white bg-customprimary font-weight-light p-3 d-flex flex-row justify-content-between">
                <span className=''>INNOVACIÓN INGENIERÍA</span>
                <img height="20" className='' src='https://centrodeinvestigacioningenieria.udd.cl/wp-content/uploads/2021/09/logo-udd-blanco.png'/>
            </div>
            <nav className="navbar navbar-expand-lg p-0 box-shadow navbar-light bg-white overflow-hidden">
                <div className="container-fluid p-0 flex-wrap">

                    <Link to="" style={{"textDecoration":"none"}} className="mx-auto text-dark">
                        <IconHorizontal/>
                    </Link>

                    <div className="row col-md-12 m-0 p-0 bg-customprimary">
                        <button className="navbar-toggler bg-primary m-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse px-4 py-2 bg-customprimary text-white" id="navbarSupportedContent">
                        <ul className="navbar-nav col-md-6 mr-auto font-weight-normal">
                            <li className="nav-item active">
                                <Link to="" className="nav-link text-white">INICIO <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="proyectos" className="nav-link text-white">PROYECTOS</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="sobreNosotros" className="nav-link text-white">SOBRE NOSOTROS</Link>
                            </li>
                            
                        </ul>
                        <div className="d-flex row">
                            
                            <Link target="_blank" className="bg-white text-customprimary mx-1 icon-fab-light rounded-circle text-center" to="home">
                                <span><i className="fab fa-facebook"></i></span>
                            </Link>
                            
                            <Link target="_blank" className="bg-white  text-customprimary mx-1 icon-fab-light rounded-circle text-center" to="home">
                                <span><i className="fab fa-instagram"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
