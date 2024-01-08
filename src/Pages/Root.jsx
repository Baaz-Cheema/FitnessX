import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrainerNum from "../components/TrainerNum";
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <TrainerNum />
            <Footer />
        </>
    )
}