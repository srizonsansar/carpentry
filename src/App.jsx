import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ProjectsPage from "./Pages/ProjectsPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import GetQuotePage from "./Pages/GetQuotePage";

const App = () => {

    return(
        <>
        
            <Header />

            <main>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-us" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact-us" element={<ContactPage />} />
                    <Route path="/get-quote" element={<GetQuotePage />} />
                </Routes>

            </main>

            <Footer />

        </>
    )
}

export default App;