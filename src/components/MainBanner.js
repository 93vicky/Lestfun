import React, { useEffect, useState } from "react";
import banner from '../img/latest.png';
const baseImgUrl = "https://image.tmdb.org/t/p/original/";
const MainBanner = () => {

    const [latest, setLatest] = useState([]);

    const getLatest = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=bbbdb20164aca28fe18b699b0ce61f92`);

        const data = await res.json();
        const results = data.results;
        console.log(results);
        try {

            if (results)
                setLatest(data.results[Math.floor(Math.random() * results.length)]);
            /*   console.log(latest); */

        } catch (error) {

        }
    }

    useEffect(() => {
        getLatest();
    }, []);

    return (
        <>
            <div className="heroBanner">
                <div className="banner">

                    <img src={`${baseImgUrl}${latest.poster_path}`} className="img-fluid" alt={latest?.title} />

                    <div className="overlay">
                        <div className="text">
                            <div className="info">
                                <h1 className="text-white text-bold">{latest.title}</h1>
                                <p><b>Year :</b> {latest.release_date} <b>Type :</b> {latest.media_type}</p>

                            </div>

                            <p>{latest.overview}</p>
                            <div className="btns">
                                <button type="button" className="btn  btn-danger me-2">Play Trailer</button>
                                <button type="button" className="btn  btn-primary">My List</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default MainBanner;