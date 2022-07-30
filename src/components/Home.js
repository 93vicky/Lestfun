import React from "react";
import MainBanner from "./MainBanner";
import Toprated from "./Toprated";
import Trending from "./Trending";
import TrendingSeries from "./TrendingSeries";

const Home = () => {
 
    return (
        <>
            <MainBanner />
            <Toprated/>
            <Trending/>
            <TrendingSeries/>
        </>
    );
}

export default Home;