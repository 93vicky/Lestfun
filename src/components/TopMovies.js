import React from "react";
import { Link } from "react-router-dom";
const baseImgUrl = "https://image.tmdb.org/t/p/w300";
const unavailabelThumb = "https://bdczambia.com/wp-content/uploads/2018/02/dummy-image.png";

const TopMovies = ({ id, title, poster, media_type, release_date, vote_average}) =>{
    return (
        <>
          <div className="col-md-12" key={id}>
            <Link to={`/movies/${id}`} className="movieCard">
              <div className="card">
                <img src={poster ? `${baseImgUrl}${poster}` : unavailabelThumb} className="img-fluid" alt={title} />
                
                <div className="vote"><p>{vote_average}</p></div>
                <div className="info">
                <h4 className="fw-bold">{title.substr(0, 20)}</h4>
                  <p>{release_date}</p>
                  <p>{media_type}</p>
                </div>
              </div>
            </Link>
          </div>
    
        </>
      );
}
export default TopMovies;