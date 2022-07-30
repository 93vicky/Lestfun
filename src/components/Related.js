import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Related = () =>{
const {id} = useParams();
    return(
        <>
             <Link to={`/movies/${id}`} className="movieCard">
          <div className="card">
            <img src="" className="img-fluid" alt="{title}" />
            <h4 className="fw-bold"></h4>
            <div className="info">
              <p>{/* {release_date} */}</p>
              <p>{/* {media_type} */}</p>
            </div>
          </div>
        </Link>
        </>
    );

}

export default Related;