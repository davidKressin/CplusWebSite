import { useSelector } from 'react-redux';
import { useProjectsStore } from '../hooks/useProjectsStore';
import { Item } from './Item';

export const Section = ({section_name}) => {
    const {startGetProjectsByCategory} = useProjectsStore();
    const {projectListDataless} = useSelector(state=> state.projects);
    
    console.log(projectListDataless);



    const listByCategory = startGetProjectsByCategory(section_name);

        
    
    return (
        <>
            <div className="row  mx-auto py-2 my-3 text-dark justify-content-center h-15 w-50">
                <a name={section_name}></a>
                <h3 className=" my-auto w-100 text-center text-customprimary">{section_name}</h3>  
            </div>

            <div className="container w-75 mx-auto p-0 d-flex flex-row justify-content-center flex-wrap align-items-lg-center">
                
                {/* <Item {...list_by_category[0]}/> */
                    !!listByCategory
                    ? listByCategory.map(item=><Item key={item.table_name} {...item}/>)
                    // ? console.log("clg list by category", listByCategory)
                    : "cargando"
                }
            </div>
        </>
    )
}
