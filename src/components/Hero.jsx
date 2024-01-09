import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <section className="h-[110vh] flex justify-center  relative overflow-hidden">
            <motion.div initial={{ scale: 2 }} animate={{ scale: 1.2 }} transition={{ duration: 3, ease: 'easeOut' }} className="hero absolute top-0 bottom-0 right-0 left-0 -z-10 brightness-50">

            </motion.div>
            <div className="flex flex-col items-center justify-center text-center w-8/12 mx-5 lg:w-10/12 mb-[10rem] sm:mb-[10rem]">
                <motion.h2 initial={{ scale: 4, opacity: 0 }} animate={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }} className="text-slate-50 sm:text-[4rem] xs:text-[2.6rem] text-[5rem] uppercase t-shadow font-montserrat font-extrabold leading-[4.5rem] sm:leading-[3.5rem] mb-10 xs:mb-4">
                    The gym for professional dummers
                </motion.h2>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .2 }} className="font-montserrat mb-10 text-slate-50 w-1/2 lg:w-10/12 sm:w-full">
                    We’re your fitness destination, equipped with the best facilities and professional trainers. Your wellness journey starts here.
                </motion.p>
                <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .7, duration: .2 }} className="font-montserrat flex gap-5 sm:flex-col">
                    <Link>
                        <motion.button className="font-bold px-10 w-full py-5 bg-white  hover:bg-red-500 hover:-translate-y-[4px] transition-all duration-300 hover:text-white">SUBSCRIBE NOW</motion.button>
                    </Link>

                    <Link to={'/classes'}>
                        <motion.button className="font-bold w-full px-10 py-5 border text-white hover:bg-white hover:-translate-y-[4px] transition-all duration-300 hover:text-black"> BROWSE CLASSES</motion.button>
                    </Link>

                </motion.div>
            </div>
        </section >
    )
}