import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoThumbsup } from "react-icons/go";
import { FaRegCommentDots } from "react-icons/fa";

const Gallery = () => {
    const [query, setQuery] = useState("animals");
    const [pics, setPics] = useState([]);
    const [loading, setLoading] = useState(false);

    // calling api 

    const getPictures = async () => {
        
        const res = await fetch(`https://pixabay.com/api/?key=28440870-33e730eef68d61353c03b6332&q=${query}`);

        try {
            setLoading(true);
            const data = await res.json();
            console.log(data);
            setPics(data.hits);
            setLoading(false);
        }
        catch (error) {

        }
    }

    useEffect(() => {

        let timerOut = setTimeout(()=>{
            getPictures();
        }, 3000)

        return () => clearTimeout(timerOut);
        
    }, [query])

    // loader

    const Loading = () =>{
        return(
            <>
                Loading...
            </>
        );
    }

    return (
        <>
            <section className="space mt-5" id="gallery ">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-10 col-md-6 mx-auto mb-4 mt-4">
                    <h5 className="text-center text-white">Search Here</h5>
                        <div className="srcForm">
                            <form action="/" onSubmit={(e)=> e.preventDefault()}>
                                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
                             
                            </form>
                        </div>
                    </div>
                        <div className="col-12">
                            <div className="gallery_Box">
                                {pics.map((allPic) => {
                                    return (
                                        <>
                                            <div className="gallery_items" key={allPic.id}>
                                                <Link to="/" className="thumb">
                                                    <img src={allPic.largeImageURL} className="img-fluid" alt={allPic.tags} />
                                                    <div className="info">
                                                    <p><GoThumbsup/> : {allPic.likes}</p>
                                                        <p><FaRegCommentDots/> : {allPic.comments}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
export default Gallery;