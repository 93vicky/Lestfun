import React, { useEffect, useState } from "react";
import AllMovies from "./AllMovies";
import CustomPagination from "./CustomPagination";
import Genres from "./Genres";
import Search from "./Search";


const Movies = () => {

   const [page, setPage] = useState(1);
   const [allmovie, setAllMovie] = useState([]);
   const [query, setQuery] = useState("black");
   /* const [numpage, setNumPage] = useState([]); */
   const [selectedgenres, setSelectedGenres] = useState([]);
   const [genres, setGenres] = useState([]);

   const getAllmovies = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bbbdb20164aca28fe18b699b0ce61f92&query=${query}`);

      const data = await res.json();
     /*  console.log(data); */
      if (data) {   
         setAllMovie(data.results);
        /*  setNumPage(data.total_pages); */
        
      }

   }

   useEffect(() => {
     

      let timerOut = setTimeout(()=>{
         getAllmovies();
      }, 2000);

      return () => clearTimeout(timerOut);
   }, [query]);


   return (
      <>
         <section className="space mt-5" id="movies">
        
            <div className="container-fluid">

           {/*  fetching search component from searcj.js */}
            <div className="row mb-4 mt-4">
                  <div className="col-8 col-lg-6 col-md-8 mx-auto">
                     <div className="search_fld">
                        <Search
                           query={query}
                           setQuery={setQuery}
                        />
                     </div>
                  </div>
            </div>

                {/*   genres category */}
               <div className="row mb-4 mt-4">
                  <div className="col-12">
                     <div className="catTypes">
                        <Genres
                          
                           type="movie"
                           genres={genres}
                           setGenres={setGenres}
                           selectedgenres={selectedgenres}
                           setSelectedGenres={setSelectedGenres}
                          
                        />
                     </div>
                  </div>
               </div>
               <div className="row gy-4">
                  {allmovie && allmovie.map((allm) => {
                     return (
                        <>
                           <div className="col-md-4 col-lg-3 col-xl-2 col-6">

                              <AllMovies
                                 key={allm.id}
                                 id={allm.id}
                                 title={allm.title}
                                 poster={allm.poster_path}
                                 media_type={allm.media_type}
                                 release_date={allm.release_date}
                                 vote_average={allm.vote_average}
                              />
                           </div>
                        </>
                     );
                  })}

               </div>
             
                 {/*  <CustomPagination setPage={setPage} setNumPage={setNumPage}/> */}
            </div>
         </section>
      </>
   );
}

export default Movies;