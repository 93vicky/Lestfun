import React, { useState, useEffect } from "react";
const baseImgUrl = "https://image.tmdb.org/t/p/w300";
const unavailabelThumb = "https://bdczambia.com/wp-content/uploads/2018/02/dummy-image.png";

const Castcrew = ({id}) =>{
const [castcrew, setCastCrew] = useState([]);
const [viewmorecast, setViewMoreCast] = useState(false);

    const getCast = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=bbbdb20164aca28fe18b699b0ce61f92`);
    
        const data = await res.json();
        console.log(data);
        if (data) {
            setCastCrew(data.cast);
        }
    
     }
    
     useEffect(() => {
        getCast();
     }, []);

    return(
        <>
            <div className="col-12 mb-2 d-flex justify-content-between align-items-center">
                            <h2 className="sec_heading">Top Billed Cast</h2>
                            <div className="vwmore" onClick={() => setViewMoreCast(!viewmorecast)}>
                <button>View More</button>
             </div>
                        </div>
                        <div className={viewmorecast ? "moviecard3_container viewmorecast" : "moviecard3_container"}>
            {castcrew.map((allcc)=>{
                return(
                    <>
                    
                                   <div  className="movieCard3">
                                   <div className="card">
                                   <div className="thumbs">
                                   <img src={allcc.profile_path ? `${baseImgUrl}${allcc.profile_path}` : unavailabelThumb} className="img-fluid" alt=""/>
                                   </div>
                                    
                                    <div className="info">
                                    <h4 className="fw-bold">{allcc.name.substr(0, 20)}</h4>
                                        <p>{allcc.character}</p>
                                       
                                    </div>
                                   </div>
                                   </div>

                                  
                               
                    </>
                );
            })} 
            
            </div>

           
        </>
    );

}

export default Castcrew;