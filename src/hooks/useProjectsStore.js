import { useDispatch, useSelector } from "react-redux"
import { getProjectsCategories, 
    setActiveProject } from "../store/projects/projectsSlice";


export const useProjectsStore = () => {
    const dispatch = useDispatch();
    const { projectList, projectListDataless, activeProject, categories } = useSelector(state => state.projects);


    const startGetProjectsCategories = () => {
        const projectsCategories = dispatch(getProjectsCategories());
        console.log(projectsCategories);
        return projectsCategories;
    }

    const startGetProjectsByCategory = (category) => {
        const projectsByCategory = projectListDataless
            ?.map(project=> ({...project, category: project.category || ""}))
            .filter(project => (project.category === category));
        console.log(projectsByCategory);
        return projectsByCategory;
    }



    return {
        // properties
        projectList,
        categories,
        activeProject,

        //methods
        startGetProjectsByCategory,
        startGetProjectsCategories,
    }
}