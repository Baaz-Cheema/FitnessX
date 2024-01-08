import AboutHero from "../components/about/AboutHero"
import Facilities from "../components/about/Facilites"
import OurStory from "../components/about/OurStory"
import OurValues from "../components/about/OurValues"
import Testimonials from "../components/about/Testimonials"
import Visitus from "../components/about/VisitUs"

export default function About() {
    return (
        <>
            <AboutHero />
            <OurStory />
            <Facilities />
            <OurValues />
            <Testimonials />
            <Visitus />
        </>
    )
}