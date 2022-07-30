import React, { useEffect } from "react";

const Genres = ({ genres, selectedgenres, setSelectedGenres, setGenres, type }) => {

    const handleAdd = (allGen) => {
        setSelectedGenres([...selectedgenres, allGen]);
        setGenres(allGen.filter((g) => g.id !== allGen.id));
    }

    const handleRemove = (allGen) =>{
        setSelectedGenres(
            selectedgenres.filter((selected) => selected.id !== allGen.id)
        );
        setGenres([...genres, allGen]);
    }

    const getGenres = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=bbbdb20164aca28fe18b699b0ce61f92`);

        const data = await res.json();
       /*  console.log(data.genres); */
        if (data) {
            setGenres(data.genres);
        }
    }


    useEffect(() => {
        getGenres();

        return () => {
            setGenres({});
        }
    }, [])
    return (
        <>

            {selectedgenres.map((allGen) => {
                return (
                    <>

                        <button className="btn btn-sm sltd" color="primary" key={allGen.id} onClick={() => handleRemove(allGen)}>{allGen.name}</button>
                    </>
                );
            })}

            {genres.map((allGen) => {
                return (
                    <>

                        <button className="btn btn-sm" key={allGen.id} onClick={() => handleAdd(allGen)}>{allGen.name}</button>
                    </>
                );
            })}

        </>
    );
}

export default Genres;