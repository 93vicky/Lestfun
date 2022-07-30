import React from "react";

const MovieFilter = () =>{
    return(

        <>
            <section className="space mt-5" id="gallery ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="flbtnContainer">
                                <button>All</button>
                                <button>Comedy</button>
                                <button>Action</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default MovieFilter;