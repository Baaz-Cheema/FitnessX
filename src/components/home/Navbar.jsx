import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartStore";
import { useSelector } from "react-redux";


export default function Navbar() {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.products)
    const cartItemAmount = cartProducts.reduce((p, c) => p + c.quantity, 0)
    function handleCart() {
        dispatch(cartActions.showCart())
    }
    return (
        <motion.nav className=" bg-zinc-900 py-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: .3 } }} viewport={{ once: true }}>
            <div className="max-w-[80rem] mx-auto">
                <div className="flex justify-between items-center mx-5">
                    <div className="">
                        <h3 className="uppercase text-slate-50 flex  items-center text-2xl font-bold font-montserrat hover:scale-110 transition-transform"><i className='bx bx-dumbbell text-red-500 text-3xl mr-3'></i><Link to={'/'}>FitnessX</Link></h3>
                    </div>
                    <div className="flex items-center lg:hidden text-lg hover:text-red-500 font-montserrat uppercase [&>li]:hover:cursor-pointer">
                        <li className="px-3 text-slate-100 list-none  hover:text-red-500"><Link to={'/'}>home</Link></li>
                        <li className="px-3 text-slate-100 list-none  hover:text-red-500"><Link to={'/about'}>About</Link></li>
                        <li className="px-3 text-slate-100 list-none  hover:text-red-500" ><Link to={'/classes'}>Classes</Link></li>
                        <li className="px-3 text-slate-100 list-none  hover:text-red-500"><Link to={'/shop'}>shop</Link></li>
                        <li className="px-3 text-slate-100 list-none  hover:text-red-500"><Link to={'/membership'}> Membership</Link></li>
                    </div>
                    <div className="relative lg:hidden">
                        {cartItemAmount > 0 && < span className="absolute left-0 -bottom-1 px-[5.5px] text-center text-xs text-white font-bold  bg-red-500">{cartItemAmount}</span>}
                        <button onClick={handleCart} className=" text-slate-50 font-semibold hover:scale-110 transition-transform"><i className='bx bx-shopping-bag text-4xl' ></i></button>
                    </div>
                    <div className="hidden lg:flex items-center gap-5">
                        <div className="relative">
                            {cartItemAmount > 0 && < span className="absolute left-0 -bottom-1 px-[5.5px] text-center text-xs text-white font-bold  bg-red-500">{cartItemAmount}</span>}
                            <button onClick={handleCart} className=" text-slate-50 "><i className='bx bx-shopping-bag text-[2.4rem]' ></i></button>
                        </div>
                        <Hamburger />
                    </div>
                </div>
            </div>
        </motion.nav >
    )
}


function Hamburger() {
    const [open, setOpen] = useState(false)

    // function handleOnClick(section) {
    //     scrollTo(section);
    //     setOpen(false);
    // }

    return (
        <>
            <motion.div onClick={() => setOpen(!open)} className="flex-col justify-center flex z-30 bg-white p-[2px] scale-150 hamburger">
                <motion.div className="h-[2.5px] w-6 m-[3px] bg-zinc-950 rounded"></motion.div>
                <motion.div className="h-[2px] w-6 m-[3px] bg-zinc-950  rounded"></motion.div>
                <motion.div className="h-[2px] w-6 m-[3px] bg-zinc-950  rounded"></motion.div>
            </motion.div>
            <AnimatePresence>
                {open && <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'just' }} className="fixed top-0 left-0 bg-white bg-opacity-[0.97] flex flex-col gap-10 justify-center uppercase font-montserrat h-screen w-screen z-[1000] items-center">
                    <li onClick={() => setOpen(false)} className="px-3  list-none text-zinc-600 text-[2rem] "><Link to={'/'}>home</Link></li>
                    <li onClick={() => setOpen(false)} className="px-3   text-zinc-600 list-none text-[2rem] "><Link to={'/about'}>about</Link></li>
                    <li onClick={() => setOpen(false)} className="px-3  text-zinc-600 list-none text-[2rem]"><Link to={'/classes'}>classes</Link></li>
                    <li onClick={() => setOpen(false)} className="px-3  text-zinc-600 list-none text-[2rem]"><Link to={'/shop'}>shop</Link></li>
                    <li onClick={() => setOpen(false)} className="px-3   text-zinc-600 list-none text-[2rem] "><Link to={'/membership'}> Membership</Link></li>

                    <div onClick={() => setOpen(false)} className="absolute top-20 right-10 text-[4rem] text-red-500">
                        <i className='bx bx-x'></i>
                    </div>

                </motion.div>
                }
            </AnimatePresence>
        </>
    )
}