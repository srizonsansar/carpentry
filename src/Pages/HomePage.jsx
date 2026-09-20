import { BusinessDetails } from "../BasicData";

const HomePage = () => {
    return (
        <>
        
            <HomeIntro />

            <AboutInHome />

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

export default HomePage;