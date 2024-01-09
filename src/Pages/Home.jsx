
import Hero from "../components/Hero";
import About from "../components/About";
import Blog from "../components/Blog";
import Classes from "../components/Classes";
import Discover from "../components/Discover";
import Trainers from "../components/Trainers";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Blog />
            <Discover />
            <Trainers />
            <Classes />
        </>
    )
}