import React from "react";
import { Link } from "react-router-dom";
const baseImgUrl = "https://image.tmdb.org/t/p/w300";

const SingleSeries = ({id,  title, poster, vote, release, }) =>{


    return(
        <>
             <div className="col-md-12" key={id}>
                                   <Link to={`/movies/${id}`} className="movieCard movieCard2">
                                   <div className="card">
                                    <img src={`${baseImgUrl}${poster}`} className="img-fluid" alt=""/>
                                    
                                    <div className="vote"><p>{vote}</p></div>
                                    <div className="info">
                                    <h4 className="fw-bold">{title.substr(0, 20)}</h4>
                                        <p>{release}</p>
                                       
                                    </div>
                                   </div>
                                   </Link>
                                </div>
        </>
    );

}
export default SingleSeries;