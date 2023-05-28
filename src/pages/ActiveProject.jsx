import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ProjectTable } from '../components/ProjectTable';
import { useProjectsStore } from '../hooks/useProjectsStore';
import {startGetProjectListDataless, startSetActiveProject} from "../store/projects/thunks"

export const ActiveProject = () => {

    
    const { category, table_name } = useParams();
    const { activeProject } = useProjectsStore();
    const data = activeProject?.data;

    const [filter, setFilter] = useState({
        search: "",
        date: ""
    });

    
    const handleFilterChange = (event) => {
        const input = event.target.name;

        if (input == "date" && !!event.target.value) {
            const dateParts = event.target.value.split("-"); // Split the date into parts (year, month, day)
            const day = parseInt(dateParts[2]); // Get the day as integer
            const month = parseInt(dateParts[1]); // Get the month as integer
            const year = parseInt(dateParts[0]); // Get the year as integer
            const formattedDate = `${day}/${month}/${year}`; // Create the formatted string
            console.log("formatted:", formattedDate); // Output: "21/4/2023"

            setFilter({
                ...filter, [input]: formattedDate
            });
        } else {
            setFilter({
                ...filter, [input]: event.target.value
            });
        }
    }

    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        console.log(table_name);
        dispatch(startGetProjectListDataless());
        dispatch(startSetActiveProject(table_name));

    },[])



    return (
        <div className="container-fluid m-0 px-5 pt-3" style={{ "minHeight": "50vh" }}>
            <h2 className="text-center">
                { activeProject?.name}
            </h2>
            <div className="" style={{ "minHeight": "50vh" }}>
                <div className="col-12 mx-auto">
                    <h6 className="text-left">Filtros</h6>
                    <input onChange={handleFilterChange} className="form-control" type="text" name="search" id="search" placeholder="Buscar" />
                    <input onBlur={handleFilterChange} className="form-control" type="date" name="date" id="date" />
                    
                </div>
                {
                    !!data 
                    ? <ProjectTable data={data} filter={filter} />
                    : "No hay datos"
                }
                
            </div>
        </div>

    )
}