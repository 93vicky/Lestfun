import React from "react";


const CustomPagination = ({setPage, setNumPage = 10}) =>{

    

    const handleChange = (page) =>{
        setPage(page);
    }

    return(
        <>
            <div className="pagination">
                <button className="prv">prev</button>
                <button className="btns" onChange={(e) => handleChange(e.target.textContent)}>{setNumPage}</button>
                <button className="nxt">next</button>
            </div>
        </>
    );
}

export default CustomPagination;