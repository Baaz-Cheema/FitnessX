import { motion } from "framer-motion"
import { Link } from "react-router-dom"
export default function Discover() {
    return (
        <section className="py-20 relative h-[90vh] flex items-center overflow-hidden">
            <div className="absolute w-full top-0 bottom-0 right-0 left-0 -z-10 hero-2 brightness-75 scale-[1.2]">

            </div>
            <div className="max-w-[80rem] mx-auto flex  md:flex-col-reverse justify-between items-center">
                <div className="ml-5 md:ml-0 md:flex md:flex-col md:items-center">
                    <motion.h2 initial={{ scale: 2, opacity: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }}
                        className="text-white w-8/12 md:text-center text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[3.5rem] sm:leading-[2.5rem] mb-5  lg:w-full t-shadow">
                        discover what makes our gym different
                    </motion.h2>
                    <div className="border-red-500 hover:translate-y-[-4px] transition-transform inline-block">
                        <Link to={'/membership'}>
                            <motion.button className="font-bold px-10 font-montserrat w-full py-5 bg-white  hover:bg-red-500 hover:-translate-y-[4px] transition-all duration-300 hover:text-white">SUBSCRIBE NOW</motion.button>
                        </Link>

                    </div>
                </div>
                <motion.div whileHover={{ scale: .9, transition: { delay: 0, duration: .2 } }} initial={{ y: 40, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .7, duration: .2 }}
                    className="md:mb-7 mr-5 md:mr-0 rounded-full bg-white w-[10rem] shrink-0 h-[10rem] xs:w-[7rem] xs:h-[7rem] flex justify-center items-center cursor-pointer">
                    <i className='bx bxs-right-arrow text-[3.5rem] xs:text-[2.5rem]'></i>
                </motion.div>
            </div>
        </section>
    )
}