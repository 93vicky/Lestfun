import React, {useState, useEffect} from "react";
import TopMovies from "./TopMovies";
import Slider from "react-slick";
const Toprated = () =>{
    const [topmovie, setTopMovie] = useState([]);
   /*  console.log(movie); */
    const getTopMovie = async() => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=bbbdb20164aca28fe18b699b0ce61f92`);
       
        try{
            const data = await res.json();
            console.log(data.results);
           if(data)
           setTopMovie(data.results);
           
        } catch(error) {

        }
    }

    useEffect(()=>{
        getTopMovie();
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
        rtl: true,
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
                slidesToShow: 1,
                slidesToScroll: 1
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
                            <h2 className="sec_heading">Top Rated</h2>
                        </div>
                    </div>
                    <div className="row mt-2">
                    <Slider {...settings}>
            {topmovie && topmovie.map((topmovie)=>{
                return(
                    <>

                    {/* creating props for TopMovies page */}
                    <TopMovies
                        key={topmovie.id}
                        id={topmovie.id}
                        title={topmovie.title}
                        poster={topmovie.poster_path}
                        media_type={topmovie.media_type}
                        release_date={topmovie.release_date}
                        vote_average={topmovie.vote_average}

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
export default Toprated;