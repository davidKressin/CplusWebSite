import { Routes, Route } from "react-router-dom"
import { Spinner } from "../components/Spinner"
import {Home, SobreNosotros, Contacto } from "../pages/"
import { ProjectsRoute } from "./ProjectsRoute"

export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/proyectos/*" element={<ProjectsRoute/>}/>
            <Route path="/sobreNosotros" element={<SobreNosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/componente" element={<Spinner/>}/>
        </Routes>
    )
}
