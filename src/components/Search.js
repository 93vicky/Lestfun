import React from "react"; 

const Search = ({query, setQuery}) =>{
    return(
        <>
        <h4 className="text-center text-white">Search your movie here...</h4>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
            </form>
        </>
    );
}
export default Search;
