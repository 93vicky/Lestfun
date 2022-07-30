import React from "react";
import { Link } from "react-router-dom";
const baseImgUrl = "https://image.tmdb.org/t/p/w300";
//passing props from movies.js page
const AllMovies = ({id, title, poster, media_type, release_date, vote_average}) =>{

    return(
        <>
        <Link to={`/movies/${id}`} className="movieCard">
          <div className="card">
            <img src={`${baseImgUrl}${poster}`} className="img-fluid" alt={title} />
           
            <div className="info">
            <h4 className="fw-bold">{title.substr(0, 25)}</h4>
              <p>{release_date}</p>
              <p>{media_type}</p>
            </div>
          </div>
        </Link>
        </>
    );

}
export default AllMovies;