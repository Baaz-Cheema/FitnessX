import { motion } from "framer-motion"

export default function Facilities() {
    return (
        <section className="pb-20">
            <div className="flex justify-center bg-red-500 relative top-0 ">
                <motion.img initial={{ scale: 1.2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: .5, duration: .3 }}
                    className="absolute top-0 w-6/12 -z-[1] lg:hidden" src="https://lh3.googleusercontent.com/pw/ABLVV84Rb00u9xbvpSTS0EubvzbxRDp2aUwFqTbs3Ir1nyoB6PZLiHgqFPk0zN20fATsTBpbw4l4S48KwBNX1P9mpWNj0ibC2y3fb38c8DRSsUjoC-PHiktK=w2400" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center text-center lg:w-full">
                <motion.h2 initial={{ scale: 1.2, opacity: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }}
                    className="z-10 text-zinc-900  text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[3.5rem] sm:leading-[2.5rem] mt-20 mb-5 w-8/12 lg:w-10/12 sm:w-11/12 xs:full">
                    Our facilites
                </motion.h2>
                <motion.p initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .2 }} className="font-montserrat mb-10 text-zinc-500 w-1/2 lg:w-10/12">
                    Lorem im dolor, sit amet consectetur adipisicing elit. Voluptate ipsam maxime dolore, vel quo et? Error dolorumre repudiandae inventore!
                </motion.p>
            </div>
            <motion.div className="max-w-[70rem] mx-auto " initial={{ y: 40, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .7, duration: .2 }}>
                <div className="mx-5 flex items-center justify-center relative overflow-hidden  ">
                    <motion.div whileHover={{ scale: .9, transition: { delay: 0, duration: .2 } }}
                        className="absolute z-[1] peer md:mr-0 rounded-full bg-white w-[10rem] shrink-0 h-[10rem] md:w-[7rem] md:h-[7rem] xs:w-[5rem] xs:h-[5rem] flex justify-center items-center cursor-pointer">
                        <i className='bx bxs-right-arrow text-[3.5rem] md:text-[2.5rem] xs:text-[2rem]'></i>
                    </motion.div>
                    <img className="object-cover w-full transition-all peer-hover:scale-105 peer-hover:z-[-1]" src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </motion.div>
        </section>
    )
}