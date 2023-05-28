import { useEffect, useState } from "react";


export const useFilter = ({data=[], filter={}, itemsPerPage=100, currentPage=1}) => {

    const [filteredData, setFilteredData] = useState([]);
    const [totalPages, setTotalPages] = useState();
    
    useEffect(() => {
        const filtered = data.filter(obj => {
            obj = {...obj, datetime: new Date(obj.datetime).toLocaleDateString()};
            return Object.values(filter).every((filterValue) => {
                const filterValueString = String(filterValue).toLowerCase();
                return Object.values(obj).some(objValue => {
                    const objValueString = String(objValue).toLowerCase();
                    return objValueString.includes(filterValueString);
                });
            });
        });

        const startIndex = (currentPage -1)*itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedData = filtered.slice(startIndex, endIndex);

        setFilteredData(paginatedData);
        setTotalPages(Math.ceil(filtered.length/itemsPerPage));

    }, [data, filter, itemsPerPage, currentPage])


    return{
        filteredData,
        totalPages,
    } 
    
}
