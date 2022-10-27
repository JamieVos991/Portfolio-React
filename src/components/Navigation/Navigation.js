import "./Navigation.css";
import { useRef } from "react";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = (props) => {


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive__nav");
    }

    return (

        <header className="header__nav">
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Skills</a>
                <a href="/#">Blog</a>
                <a href="/#">Contact</a>
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