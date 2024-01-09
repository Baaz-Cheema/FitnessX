import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrainerNum from "../components/TrainerNum";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function Root() {
    const location = useLocation()


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' })
    }, [location.pathname])
    return (
        <>
            <Navbar />
            <Outlet />
            <TrainerNum />
            <Footer />
        </>
    )
}