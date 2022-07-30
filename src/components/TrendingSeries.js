import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SingleSeries from "./SingleSeries";

const TrendingSeries = () =>{
   
    const [series, setSeries] = useState([]);
    

    const getSeries = async() => {

      const res = await fetch(`
      https://api.themoviedb.org/3/movie/top_rated?api_key=bbbdb20164aca28fe18b699b0ce61f92`);
       
        try{
            const data = await res.json();
           /*  console.log(data); */
           if(data)
           setSeries(data.results);
           
        } catch(error) {

        }
    }

    useEffect(()=>{
        getSeries();
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
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    };

    return (
        <>
            
            <section className="space" id="trending ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="sec_heading">Popular</h2>
                        </div>
                    </div>
                    <div className="row mt-2">
                        
                            <Slider {...settings}>
                              {series.map((series)=>{
                                return(
                                    <>
                                   <SingleSeries
                                    key={series.id}
                                    id={series.id}
                                    title={series.title}
                                    poster={series.poster_path}
                                    vote={series.vote_average}
                                    release={series.release_date}
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

export default TrendingSeries;