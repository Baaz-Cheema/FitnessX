import Schedule from "./Schedule";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function About() {
    const imgRef = useRef()
    const { scrollYProgress } = useScroll(
        {
            target: imgRef,
            offset: ['center end', 'end start']
        }
    )
    const scrollY = useTransform(scrollYProgress, [0, 300], [0, -17322])
    const scrolly = useTransform(scrollYProgress, [0, 300], [0, 17332])
    return (
        <section ref={imgRef} className="py-20 bg-white relative">
            <div className="bg-zinc-900 w-11/12 lg:w-full py-20 -mt-[13rem] sm:-mt-[9rem]">
                <Schedule />
            </div>
            <div className="my-10 mt-20 lg:mt-10 mx-auto relative">
                <div className="flex justify-center">
                    <motion.img initial={{ scale: 1.2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: .5, duration: .3 }} className="absolute -top-2 w-8/12 -z-1 lg:hidden" src="https://lh3.googleusercontent.com/pw/ABLVV87dFokSe4-h7rdoNTrhruO1Xsd0zj8uDOv5bci3T5CyqBt1KisFDPKiFSbyQHA7qDYUR1Sy5Za3Eq1lftSmcErZfvIfktErtY2LaZ6XU2TTzYm15xa4=w2400" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center text-center lg:w-full mb-[10rem] sm:mb-[5rem]">
                    <motion.h2 initial={{ scale: 2, opacity: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }}
                        className="z-10 text-zinc-900  text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[3.5rem] sm:leading-[2.5rem] mt-20 mb-5 w-8/12 lg:w-10/12 sm:w-11/12 xs:full">
                        we are not just a team, we are a whole community
                    </motion.h2>
                    <motion.p initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .2 }} className="font-montserrat mb-10 text-zinc-500 w-1/2 lg:w-10/12">
                        Lorem im dolor, sit amet consectetur adipisicing elit. Voluptate ipsam maxime dolore, vel quo et? Error dolorumre repudiandae inventore!
                    </motion.p>
                    <motion.div initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .7, duration: .2 }} className="font-montserrat flex gap-5 sm:flex-col">
                        <Link to={'/membership'}>
                            <motion.button className="font-bold px-10 py-5  bg-zinc-900 text-white border hover:bg-red-500 hover:-translate-y-[4px] transition-all duration-300 hover:text-white">SUBSCRIBE NOW</motion.button>
                        </Link>
                        <Link to={'/classes'}>
                            <motion.button className="font-bold px-10 py-5  border text-black hover:-translate-y-[4px] transition-all duration-300 hover:bg-zinc-900 hover:text-white"> BROWSE CLASSES</motion.button>
                        </Link>


                    </motion.div>
                </div>
            </div>

            <div className="mx-auto max-w-[80rem] mb-5">
                <div className="grid grid-cols-2 gap-3 sm:gap-0 mx-2">
                    <div className="self-center left-5 relative sm:scale-[1.3] sm:left-7">
                        <motion.img style={{ y: scrollY }} className=" w-full sm:mt-10 " src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                    <div className="self-center right-5 relative sm:scale-[1.3] sm:right-7">
                        <motion.img style={{ y: scrolly }} className=" w-full" src="https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                </div>
            </div>

        </section >
    )
}