import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedMovies from "./RelatedMovies";
import Castcrew from "./Castcrew";
import { useDispatch } from "react-redux";
import { addTolist } from "../store/MovieSlice";
const baseImgUrl = "https://image.tmdb.org/t/p/w300";
const backImgUrl = "https://image.tmdb.org/t/p/original/";


const SingleMoviesdetail = () =>{
const {id} = useParams();
const dispatch = useDispatch();
const [smovie, setSmovie] = useState([]);
   

// fetching single movie data using api
const getSinglmovies = async () => {

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bbbdb20164aca28fe18b699b0ce61f92`);

    const data = await res.json();
    console.log(data);
    if (data) {
        setSmovie(data);
    }

 }

 useEffect(() => {
    getSinglmovies();
 }, []);

 // adding movie to mylists

 const handleAdd = (smovie) =>{
    dispatch(addTolist(smovie))
 }

    return(
        <>
          <section className="space" id="single">
        
         <div className="bckImg"><img src={`${backImgUrl}${smovie.backdrop_path}`} className="img-fluid" alt=""/></div>
       
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="single_wraper">
                                <div className="singleThumb">
                                <img src={`${baseImgUrl}${smovie.poster_path}`} alt={smovie.title}/>
                                </div>
                                <div className="thumb_info">
                                    <h3><b>Title :</b> {smovie.title}</h3>
                                    <h3><b>Runtime :</b> {smovie.runtime} min</h3>
                                    <h4><b>IMDB Rating :</b> {smovie.vote_average}/10</h4>
                                    
                                    <p><b>Released :</b> {smovie.release_date}</p>
                                    <p><b>Description :</b> {smovie.overview}</p>

                                    <div className="btns mt-4">
                                <button type="button" className="btn  btn-danger me-2">Play Trailer</button>
                                <button type="button" className="btn  btn-primary" onClick={() => handleAdd(smovie)}>Add To My List</button>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
               
            </section>
            <section className="space">
            <div className="container-fluid">
                <div className="row">
               
               {/*  passing id as a props to get cast of the single movie */}
               
                 <Castcrew
                     key={id}
                      id={id}
                   />
                   
                </div>
                </div>
            </section>
        </>
    );
}

export default SingleMoviesdetail;