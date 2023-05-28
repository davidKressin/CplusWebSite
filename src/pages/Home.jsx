import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="row m-0 py-0 px-0 container-fluid bg-fixed vh-50 ">

            <div className=" vh-50 py-5 box-shadow opacity-2 px-4 bg-customprimary col-md-12 text-center position-relative">
            </div>
            <div className='opacity-5 position-relative vh-50 col-md-12 d-flex flex-column justify-content-center ' style={{"top":"-50vh" }}>
                <h2 className="mt-1 text-white position-relative text-center animate__animated animate__fadeIn animate__faster" >Bienvenido a C+ Concepción</h2>
                <Link to="proyectos" className="btn btn-success bg-success d-block mx-auto animate__animated animate__fadeIn animate__faster" style={{"border": "none"}}>Proyectos</Link>
            </div>

        </div>

    )
}
