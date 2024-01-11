import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import TrainerNum from "../components/home/TrainerNum";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Cart from "../components/shop/Cart";
import { cartActions } from "../store/CartStore";


export default function Root() {
    const location = useLocation()
    const data = useSelector(state => state.products)
    const openCart = useSelector(state => state.cartIsOpen)
    const dispatch = useDispatch()
    function closeCart() {
        dispatch(cartActions.showCart())
    }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' })
    }, [location.pathname])
    return (
        <div className="overflow-hidden">
            <AnimatePresence>
                {openCart && <Cart closeCart={closeCart} data={data} />}
            </AnimatePresence>
            <Navbar />
            <Outlet />
            <TrainerNum />
            <Footer />
        </div>
    )
}