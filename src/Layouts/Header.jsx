import { Link, NavLink, useLocation } from "react-router-dom";
import { BusinessDetails } from "../BasicData";

const Header = () => {

    const isHomePage = useLocation().pathname
    
    return(
        <header className={`header ${isHomePage === "/" ? "home-header" : ""}`}>
            <div className="container">
                <Link to={"/"} className="header__logo">
                    <img src="https://projects.devnava.com/projects-media/carpentry/logo-color.png" alt={BusinessDetails.name} />
                </Link>
                <div className="header__nav">
                    <NavLink to={"/"} className="header__nav__item">Home</NavLink>
                    <NavLink to={"/about-us"} className="header__nav__item">About Us</NavLink>
                    <NavLink to={"/services"} className="header__nav__item">Services</NavLink>
                    <NavLink to={"/projects"} className="header__nav__item">Projects</NavLink>
                    <NavLink to={"/blog"} className="header__nav__item">Blog</NavLink>
                    <NavLink to={"/contact-us"} className="header__nav__item">Contact Us</NavLink>
                </div>
                <Link to={"/get-quote"} className="header__quote">Quote Btn →</Link>
            </div>
        </header>
    )
}

export default Header;