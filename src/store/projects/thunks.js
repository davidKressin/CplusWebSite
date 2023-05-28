import { createAsyncThunk } from "@reduxjs/toolkit"



export const startGetProjectListDataless = createAsyncThunk('projects/startGetProjectsListDataless', async()=>{
    console.log("desde thunk get dataless")
    const response = await fetch("http://localhost:4000/api/projects/dataless");
    const data = await response.json();
    return data;
});
export const startSetActiveProject = createAsyncThunk('projects/startSetActiveProject', async(table_name)=>{
    console.log("desde thunk", table_name);
    const response = await fetch(`http://localhost:4000/api/projects/${table_name}`);
    const data = await response.json();
    return data;
});
