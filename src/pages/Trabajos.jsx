import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../components/Section"
import { startGetProjectListDataless } from "../store/projects/thunks";
import {useProjectsStore} from "../hooks/useProjectsStore";

export const Trabajos = () => {
    const {startGetProjectsCategories} = useProjectsStore();

    const { 
        categories,
        projectListDataless
    } = useSelector(state => state.projects);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(startGetProjectListDataless());
    },[])
    
    useEffect(()=>{
        console.log(projectListDataless);
        if(projectListDataless.length>0){
            startGetProjectsCategories();
        }
        console.log(categories);
    },[projectListDataless])
    

    return (
        <div className="container-fluid p-0 m-0  ">
            <div className="page-header bg-fixed p-0 m-0 text-white vh-25">
                <div className='opacity-3 bg-customprimary vh-25 m-0'>
                </div>
                <div className="text-center m-0 p-0 vh-25 position-relative d-flex flex-column justify-content-center" style={{ "zIndex": "9999", "top": "-25vh" }}>
                    <h2 style={{ "fontSize": "2.5rem" }}>Nuestros proyectos</h2>
                </div>
            </div>
            <div name="top" className="col-md-12 mt-1 m-0 p-0 d-flex flex-row justify-content-center sticky-top ">
                <div className="btn-group" style={{ "fontSize": "0.5rem" }} role="group" aria-label="Basic example">
                    {
                        !!categories
                            ? categories.map(section => <a key={section} href={`#${section}`} style={{ "fontSize": "0.7rem" }} type='button' className='btn btn-secondary'>{section}</a>)
                            : "cargando"
                    }
                </div>
            </div>



            <div className="container-fluid m-0 py-2 d-flex flex-column justify-content-start min-vh-100 animate__animated animate__fadeIn animate__faster">
                {
                    !!categories
                        ? categories.map((section) => <Section key={section} section_name={section} />)
                        : "cargando"
                }

                <a href="#top" style={{ "width": "2rem", "maxWidth": "15%", "lineHeight": "2rem", "left": "auto" }} className="bg-danger text-center rounded-circle text-white mx-2 my-5 position-fixed fixed-bottom">
                    <i className="fas fa-chevron-up"></i>
                </a>
            </div>
        </div>


    )
}
