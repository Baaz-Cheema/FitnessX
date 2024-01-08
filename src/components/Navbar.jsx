import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className=" bg-zinc-900 py-8">
            <div className="max-w-[80rem] mx-auto">
                <div className="flex justify-between items-center mx-5">
                    <div className="">
                        <h3 className="uppercase text-slate-50 flex  text-2xl font-bold"><i className='bx bx-dumbbell text-red-500 text-3xl mr-3'></i><Link to={'/'}>FitnessX</Link></h3>
                    </div>
                    <div className="flex items-center lg:hidden hover:text-red-500 font-montserrat uppercase [&>li]:hover:cursor-pointer">
                        <li className="px-3 text-slate-100 list-none  hover:text-red-500">Home</li>
                        <li className="px-3 text-slate-100 list-none  hover:text-red-500"><Link to={'/about'}>About</Link></li>
                        <li className="px-3 text-slate-100 list-none  hover:text-red-500" ><Link to={'/classes'}>Classes</Link></li>
                        <li className="px-3 text-slate-100 list-none  hover:text-red-500">Membership</li>
                        <li className="px-3 text-slate-100 list-none  hover:text-red-500">Blog</li>
                    </div>
                    <button className="lg:hidden text-slate-50 font-semibold"><i className='bx bx-shopping-bag text-4xl' ></i></button>
                    <div className="hidden lg:flex items-center gap-5">
                        <button className=" text-slate-50 "><i className='bx bx-shopping-bag text-[2.4rem]' ></i></button>
                        <Hamburger />
                    </div>
                </div>
            </div>
        </nav>
    )
}


function Hamburger({ scrollTo }) {
    const [open, setOpen] = useState(false)

    function handleOnClick(section) {
        scrollTo(section);
        setOpen(false);
    }

    return (
        <>
            <motion.div onClick={() => setOpen(!open)} className="flex-col justify-center flex z-30 bg-white p-[2px] scale-150 hamburger">
                <motion.div className="h-[2.5px] w-6 m-[3px] bg-zinc-950 rounded"></motion.div>
                <motion.div className="h-[2px] w-6 m-[3px] bg-zinc-950  rounded"></motion.div>
                <motion.div className="h-[2px] w-6 m-[3px] bg-zinc-950  rounded"></motion.div>
            </motion.div>
            <AnimatePresence>
                {open && <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'just' }} className="fixed top-0 left-0 bg-slate-100 bg-opacity-[0.98] flex flex-col gap-10 justify-center font-montserrat h-screen w-screen z-[1000] items-center">
                    <li className="px-3  list-none text-zinc-600 text-[2rem] ">Home</li>
                    <li className="px-3   text-zinc-600 list-none text-[2rem] ">About</li>
                    <li className="px-3  text-zinc-600 list-none text-[2rem]">Program</li>
                    <li className="px-3   text-zinc-600 list-none text-[2rem] ">Membership</li>
                    <li className="px-3   text-zinc-600 list-none text-[2rem] ">Blog</li>

                    <div onClick={() => setOpen(false)} className="absolute top-20 right-10 text-[4rem] text-red-500">
                        <i className='bx bx-x'></i>
                    </div>

                </motion.div>
                }
            </AnimatePresence>
        </>
    )
}