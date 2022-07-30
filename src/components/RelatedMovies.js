import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const baseImgUrl = "https://image.tmdb.org/t/p/w300";

const RelatedMovies = ({ id }) => {
    const [related, setRealted] = useState([]);

    const getReleated = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=bbbdb20164aca28fe18b699b0ce61f92`);

        const rdata = await res.json();
        console.log(rdata);
        if (rdata) {
            setRealted(rdata.results);
        }
    }

    useEffect(() => {
        getReleated();
    }, [id])

    return (
        <>

            {/* {related.map((rltd) => {
                return (
                    <>
                        {related.map((rltd) => {
                            return (
                                <>
                                    <div className="col-md-4 col-lg-3 col-12">
                                        <Link to={`/movies/${rltd.id}`} className="movieCard">
                                            <div className="card">
                                                <img src={`${baseImgUrl}${rltd.poster_path}`} className="img-fluid" alt={rltd.title} />
                                                <h4 className="fw-bold">{rltd.title}</h4>
                                                <div className="info">
                                                    <p>{rltd.release_date}</p>
                                                    <p>{rltd.media_type}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                            );
                        })}

                    </>
                );
            })}
 */}

        </>
    );

}

export default RelatedMovies;