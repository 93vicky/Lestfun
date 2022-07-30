import React, { useEffect, useState } from "react";
import TrendingMovies from "./TrendingMovies";
import Slider from "react-slick";

const Trending = () =>{
    const [movie, setMovie] = useState([]);
   /*  console.log(movie); */
    const getMovie = async() => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=bbbdb20164aca28fe18b699b0ce61f92`);
       
        try{
            const data = await res.json();
            /* console.log(data.results); */
           if(data)
           setMovie(data.results);
           
        } catch(error) {

        }
    }

    useEffect(()=>{
        getMovie();
    },[]);


    const settings = {
        dots: false,
        centerMode: true,
      infinite: true,
        speed: 1000,
        autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      pauseOnHover: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        swipeToSlide: true,
        rtl: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    };
    return(
        <>
             <section className="space" id="trending ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="sec_heading">Trending</h2>
                        </div>
                    </div>
                    <div className="row mt-2">
                    <Slider {...settings}>
            {movie && movie.map((trnd)=>{
                return(
                    <>

                    {/* creating props for trendingmovies page */}
                    <TrendingMovies
                        key={trnd.id}
                        id={trnd.id}
                        title={trnd.title}
                        poster={trnd.poster_path}
                        media_type={trnd.media_type}
                        release_date={trnd.release_date}
                        vote_average={trnd.vote_average}

                    />
                    </>

                );
            })}
            </Slider>
            </div>
                    </div>
                
            </section>
        </>
    );

}

export default Trending;