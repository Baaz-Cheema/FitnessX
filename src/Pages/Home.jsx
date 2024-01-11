
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Blog from "../components/home/Blog";
import Classes from "../components/home/Classes";
import Discover from "../components/home/Discover";
import Trainers from "../components/home/Trainers";

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