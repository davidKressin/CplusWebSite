import React from 'react'
import { Link } from 'react-router-dom'

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
                        <img src="https://centrodeinvestigacioningenieria.udd.cl/wp-content/uploads/2021/09/Horizontal.svg" className='p-4' height="100" alt=""/>
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
                            {/* <li className="nav-item active">
                                <Link to="contacto" className="nav-link text-white">CONTACTO</Link>
                            </li> */}
                        </ul>
                        <div className="d-flex row">
                            {/* <!-- facebook -->
                            <?php if(!empty($info->facebook)):?> */}
                            <Link target="_blank" className="bg-white text-customprimary mx-1 icon-fab-light rounded-circle text-center" to="home">
                                <span><i className="fab fa-facebook"></i></span>
                            </Link>
                            {/* <?php endif;?> */}

                            {/* <!-- youtube -->
                            <?php if(!empty($info->youtube)):?> */}
                            {/* <Link target="_blank" className="bg-danger mx-1 icon-fab-light rounded-circle text-center" to="/">
                                <span><i className="fab fa-whatsapp"></i></span>
                            </Link> */}
                            {/* <?php endif;?> */}

                            {/* <!-- instagram -->
                            <?php if(!empty($info->instagram)):?> */}
                            <Link target="_blank" className="bg-white  text-customprimary mx-1 icon-fab-light rounded-circle text-center" to="home">
                                <span><i className="fab fa-instagram"></i></span>
                            </Link>
                            {/* <?php endif;?> */}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
