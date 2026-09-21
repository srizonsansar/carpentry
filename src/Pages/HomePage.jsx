import { Link } from "react-router-dom";
import { BusinessDetails, TrustPoints, WhyUsPoints } from "../BasicData";
import { useState } from "react";

const HomePage = () => {
    return (
        <>
        
            <HomeIntro />

            <AboutInHome />

            <TrustBlock />

            <SVCListHome />

            <WhyChooseUs />

        </>
    )
}

const HomeIntro = () => {

    const handleClickToAboutBlock = () => {
        const targetBlock = document.getElementById('aboutHome')
        if(targetBlock){
            targetBlock.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    return(
        <section className="homeIntro">
            <div className="homeIntro__left">
                <div className="homeIntro__since">Since 2010</div>
                <h1>Exceptional <span>WoodWork</span> Solutions</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam iure neque rem ea quas asperiores sequi impedit eligendi provident, reiciendis commodi, illo in ipsum?</p>
                <div className="homeIntro__scroll" onClick={handleClickToAboutBlock}>↓</div>
            </div>
            <picture className="homeIntro__pic">
                <img src="https://projects.devnava.com/projects-media/carpentry/3.jpg" alt={BusinessDetails.name} className="homeIntro__pic__img" />
            </picture>
        </section>
    )

}

const AboutInHome = () => {
    return(
        <div id="aboutHome" className="aboutHome">
            <div className="container">
                <div className="patch">
                    <span>About Us</span>
                </div>
                <h2 className="aboutHome__title">Exceptional woodworking inspired <span className="block">By quality, Craftsmanship and Modern</span> Design principles.</h2>
                <div className="blocks">
                    <div className="blocks__item">
                        <div className="blockImage">
                            <picture className="blockImage__pic">
                                <img src="https://projects.devnava.com/projects-media/carpentry/7.jpg" alt={BusinessDetails.name} className="blockImage__pic__img" />
                            </picture>
                            <div className="blockImage__text">
                                <h3 className="blockImage__text__num">650+</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="blocks__item">
                        <div className="blockTexts">
                            <div className="blockTexts__top">
                                <p className="blockTexts__top__text">Craftsmanship Delivered</p>
                                <h3 className="blockTexts__top__num">26+</h3>
                            </div>
                            <div className="blockTexts__bot">
                                <div className="blockTexts__bot__images">
                                    <img src="https://projects.devnava.com/projects-media/carpentry/testimonials.jpg" alt="User Name" className="blockTexts__bot__images__img" />
                                    <img src="https://projects.devnava.com/projects-media/carpentry/testimonials.jpg" alt="User Name" className="blockTexts__bot__images__img" />
                                    <img src="https://projects.devnava.com/projects-media/carpentry/testimonials.jpg" alt="User Name" className="blockTexts__bot__images__img" />
                                    <img src="https://projects.devnava.com/projects-media/carpentry/testimonials.jpg" alt="User Name" className="blockTexts__bot__images__img" />
                                    <img src="https://projects.devnava.com/projects-media/carpentry/testimonials.jpg" alt="User Name" className="blockTexts__bot__images__img" />
                                </div>
                                <p className="blockTexts__bot__text">Delivering quality woodwork for every living space.</p>
                            </div>
                        </div>
                    </div>
                    <div className="blocks__item">
                        <div className="blocksColors">
                            <div className="blocksColors__top">
                                <p className="blocksColors__top__text">Satisfied Clients</p>
                                <h3 className="blocksColors__top__num">98%</h3>
                                <p className="blocksColors__top__text">Trusted by homeowners, architects and business across the region.</p>
                            </div>
                            <div className="blocksColors__bot">
                                <p className="blocksColors__bot__text">Projects Completed</p>
                                <h3 className="blocksColors__bot__num">960</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TrustBlock = () => {

    const [openItems, setOpenItems] = useState([0])
    const handleToggle = (index) => {
        setOpenItems( (prev) => {
            if(prev.includes(index)){
                return prev.filter(item => item !== index)
            } else {
                return [...prev, index]
            }
        })
    }

    return(
        <section className="trustBlock">
            <div className="container">
                <div className="trustBlock__left">
                    <div className="trustBlock__left__picBlock">
                        <img src="https://projects.devnava.com/projects-media/carpentry/8.jpg" alt={BusinessDetails.name} className="trustBlock__left__picBlock__img" />
                        <div className="trustBlock__left__picBlock__patch">SINCE <span>1998</span></div>
                    </div>
                    <div className="trustBlock__left__trustPoints">
                        <div className="trustPoints">
                            {TrustPoints.map( (item, index) => (
                                <div key={index} className={`trustPoints__item ${openItems.includes(index) ? "open" : ""}`}>
                                    <div className="titleBlock" onClick={() => handleToggle(index)}>
                                        <h3>{item.title}</h3>
                                        <span>{`${openItems.includes(index) ? "-" : "+"}`}</span>
                                    </div>
                                    <div className="text">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="trustBlock__right">
                    <div className="trustBlock__right__content">
                        <div className="patch">
                            <span>Why trust {BusinessDetails.name}</span>
                        </div>
                        <h2>Premium Carpentry Crafted with Skill, Quality and Care</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, mollitia. Temporibus alias, tenetur dolor delectus odit, reprehenderit laudantium necessitatibus earum quibusdam sint inventore veniam!</p>
                    </div>
                    <div className="trustBlock__right__picBlock">
                        <img src="https://projects.devnava.com/projects-media/carpentry/5.jpg" alt={BusinessDetails.name} className="trustBlock__right__picBlock__img" />
                        <div className="trustBlock__right__picBlock__content">
                            <h2>Need Expert Carpentry?</h2>
                            <p>From custom furniture to complete interiors, we craft every detail with precision.</p>
                            <div className="btn">
                                <Link to={"/get-quote"}>Get free quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const SVCListHome = () => {
    const items = Array.from({ length: 10 });
    const marqueeItems = items.map((_, i) => (
        <span key={i}>Services</span>
    ));
    return (
        <section className="svcListHome">
            <div className="svcListHome__marquee">
                <div className="svcListHome__track">
                    {marqueeItems}
                    {marqueeItems}
                </div>
            </div>
        </section>
    );
};

const WhyChooseUs = () => {
    return(
        <section className="whyChooseUs">
            <picture className="whyChooseUs__pic">
                <img src="https://projects.devnava.com/projects-media/carpentry/8.jpg" alt={BusinessDetails.name} className="whyChooseUs__pic__img" />
            </picture>
            <div className="whyChooseUs__textBlock">
                <div className="patch">
                    <span>Why Choose Us</span>
                </div>
                <h2>Exceptional craftsmanship designed for modern living spaces</h2>
                <ul>
                    {WhyUsPoints.map( (point) => (
                        <li key={point.id}>
                           <div className="num">{point.id}</div>
                           <h3>{point.title}</h3>
                           <p>{point.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default HomePage;