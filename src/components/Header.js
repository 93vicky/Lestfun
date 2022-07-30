import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";


const Header = () => {
    const mitems = useSelector((state) => state.cart);
    const [showmbl, setShowMbl] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 50){
                setShow(true);
            }else{
                setShow(false);
            }
        })

      /*   return () =>{
            window.removeEventListener("scroll");
        } */

    }, [])

    return (
        <>
            <header>
                <div className={show ? "headersticky" : "topheader"}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="menuContainer">
                                    <div className="logo">
                                        <Link to='/'><h1><span>LETS</span>FUN</h1></Link>
                                    </div>
                                    <div className={showmbl ? "mobileShow" : "navmenu"} onClick={() => setShowMbl(false)}>
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/movies">Movies</Link>
                                            </li>
                                            <li>
                                                <Link to="/gallery">Gallery</Link>
                                            </li>
                                            <li>
                         <Link to="/mylists"><FaCartArrowDown/> {mitems.MoivesItems.length}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tglBar" onClick={() => setShowMbl(!showmbl)}>
                                        <FaAlignJustify/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;