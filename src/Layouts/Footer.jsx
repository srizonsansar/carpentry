import { Link } from "react-router-dom";
import { BusinessDetails, SocialMedia } from "../BasicData";
import { useEffect, useState } from "react";

const Footer = () => {

    const [showPopup, setShowPopup] = useState('')

    useEffect( () => {
        
        const bodyTag = document.querySelector('body')
        if(showPopup){
            bodyTag.classList.add('no-scroll')
        } else {
            bodyTag.classList.remove('no-scroll')
        }

        return () => {
            bodyTag.classList.remove('no-scroll')
        }

    }, [showPopup])

    return(
        <>
        
            <footer className="footer">
                <div className="container">
                    <div className="footer__left">
                        <div className="footer__left__top">
                            <div className="contactFooter">
                                <div className="contactFooter__item">
                                    <span className="text">Phone</span>
                                    <span className="data">{BusinessDetails.phone}</span>
                                </div>
                                <div className="contactFooter__item">
                                    <span className="text">Email</span>
                                    <span className="data">{BusinessDetails.email}</span>
                                </div>
                                <div className="contactFooter__item">
                                    <span className="text">Address</span>
                                    <span className="data">{BusinessDetails.address}</span>
                                </div>
                            </div>
                            <div className="footerData">
                                <picture className="footerData__pic">
                                    <img src="https://projects.devnava.com/projects-media/carpentry/4.jpg" alt={BusinessDetails.name} className="footerData__pic__img" />
                                </picture>
                                <div className="footerData__content">
                                    <h2>{BusinessDetails.name}</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quo, asperiores omnis a amet quidem.</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime reiciendis nulla sed unde odio perspiciatis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer__left__bottom">
                            <p>&copy; {BusinessDetails.name} : 2026 - {new Date().getFullYear()}</p>
                            <p>
                                <span className="popupBtn" onClick={() => setShowPopup('privacy')}>Privacy Policy</span>
                                <span>|</span>
                                <span className="popupBtn" onClick={() => setShowPopup('legal')}>Legal Mentions</span>
                            </p>
                            <ul>
                                {SocialMedia.map( (item, index) => (
                                    <li key={index}>
                                        <a href={item.link} target="_blank">{item.word}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer__nav">
                        <Link to={"/"} className="footer__nav__item">Home</Link>
                        <Link to={"/about-us"} className="footer__nav__item">About Us</Link>
                        <Link to={"/services"} className="footer__nav__item">Services</Link>
                        <Link to={"/projects"} className="footer__nav__item">Projects</Link>
                        <Link to={"/blog"} className="footer__nav__item">Blog</Link>
                        <Link to={"/contact-us"} className="footer__nav__item">Contact Us</Link>
                    </div>
                </div>
            </footer>

            <PrivacyPopup showPopup={showPopup} setShowPopup={setShowPopup} />

            <LegalMentions showPopup={showPopup} setShowPopup={setShowPopup} />

        </>
    )
}

const PrivacyPopup = ({showPopup, setShowPopup}) => {
    return(
        <div className={`legalPopup ${showPopup == "privacy" ? "visible" : ""}`}>
            <div className="legalPopup__overlay" onClick={() => setShowPopup()}></div>
            <div className="legalPopup__content">
                <div className="close" onClick={() => setShowPopup()}>✕</div>
                <h2>Privacy Policy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque recusandae necessitatibus excepturi eaque officia, blanditiis maxime perferendis illo vero magnam est sit. Nihil, eveniet?</p>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sed aut illo quaerat commodi ullam quam blanditiis. Facilis voluptatibus corrupti voluptatem. Unde, quia illo.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe aliquam soluta libero minus laudantium. Ullam quo ex omnis facilis reprehenderit.</p>
            </div>
        </div>
    )
}

const LegalMentions = ({showPopup, setShowPopup}) => {
    return(
        <div className={`legalPopup ${showPopup == "legal" ? "visible" : ""}`}>
            <div className="legalPopup__overlay" onClick={() => setShowPopup()}></div>
            <div className="legalPopup__content">
                <div className="close" onClick={() => setShowPopup()}>✕</div>
                <h2>Legal Mentions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque recusandae necessitatibus excepturi eaque officia, blanditiis maxime perferendis illo vero magnam est sit. Nihil, eveniet?</p>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sed aut illo quaerat commodi ullam quam blanditiis. Facilis voluptatibus corrupti voluptatem. Unde, quia illo.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe aliquam soluta libero minus laudantium. Ullam quo ex omnis facilis reprehenderit.</p>
            </div>
        </div>
    )
}

export default Footer;