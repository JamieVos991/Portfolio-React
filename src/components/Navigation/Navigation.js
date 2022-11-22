import "./Navigation.css";
import { useRef } from "react";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = (props) => {


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive__nav");
    }

    return (

        <header className="header__nav">
            <nav ref={navRef}>
                <Link to="/"><a href="/#">Home</a></Link>
                <Link to="/skills"><a href="/#">Skills</a></Link>
                <Link to="/blog"><a href="/#">Blog</a></Link>
                <Link to="/contact"><a href="/#">Contact</a></Link>
                <div className="nav__btn nav__btn--close" onClick={showNavbar}>
                    <FaTimes />
                </div>
            </nav>
            <div className="nav__btn" onClick={showNavbar}>
                <FaBars />
            </div>
        </header>

    );
}

export default Navigation;