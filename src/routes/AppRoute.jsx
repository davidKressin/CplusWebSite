import { Routes, Route } from "react-router-dom"
import {Home, SobreNosotros, Contacto } from "../pages/"
import { ProjectsRoute } from "./ProjectsRoute"

export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/proyectos/*" element={<ProjectsRoute/>}/>
            <Route path="/sobreNosotros" element={<SobreNosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
    )
}
