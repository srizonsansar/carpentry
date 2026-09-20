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
        <h1 id="aboutHome" className="aboutHome">Welcome</h1>
    )
}

export default HomePage;