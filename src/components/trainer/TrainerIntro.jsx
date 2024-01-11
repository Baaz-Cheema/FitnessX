import { motion } from "framer-motion"

export default function TrainerIntro({data }) {
    return (
        <section className="py-20">
            <main className="max-w-[80rem] mx-auto flex justify-center">
                <div className="py-10 mx-5 flex lg:w-9/12 md:w-full  lg:mx-5 items-center lg:items-start px-8 md:px-0 gap-16 lg:flex-col  lg:gap-0">
                    <motion.div className="flex-[.4] lg:flex-auto lg:w-full  overflow-hidden md:w-full" initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .2 }}>
                        <img src={data.imageURL} alt="" />
                    </motion.div>
                    <motion.div className="flex-[.6] lg:flex-auto pt-20 lg:pt-10 lg:w-full font-montserrat" initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .3, duration: .2 }}>
                        <div className="flex items-center justify-between lg:flex-col-reverse lg:items-start">
                            <h3 className="text-[3rem] md:text-[2.5rem] sm:text-[2rem] xs:text-[1.8rem] uppercase font-bold text-black group-hover:text-red-500 transition-colors">{data.name} </h3>
                        </div>

                        <p className="text-zinc-600 font-bold text-xl uppercase mb-5">Personal coach</p>
                        <p className="text-zinc-500 mb-20 lg:mb-10 leading-7 lg:w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dolor facilis, ea eos culpa itaque porro, nulla, placeat voluptatum id sunt eveniet molestias. Quos, unde tempore. Fugit sequi ut accusantium.</p>
                        <div className="flex items-center text-black gap-2 text-4xl lg:gap-4">
                            <i className='bx bxl-facebook hover:text-red-500' ></i>
                            <i className='bx bxl-instagram-alt  hover:text-red-500' ></i>
                            <i className='bx bxl-twitter  hover:text-red-500' ></i>
                        </div>
                    </motion.div>
                </div>
            </main>
        </section>
    )
}