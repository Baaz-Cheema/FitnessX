import { useParams } from "react-router-dom"
import { trainers } from "../UI/trainers"
import { motion } from "framer-motion"
import { classposts } from "../UI/classposts"
import { Link } from "react-router-dom"
import InfoCard from "../UI/InfoCard"
export default function TrainerDetail() {
    const params = useParams()
    const data = params.name
    const filteredClasses = classposts.filter(a => a.trainer === data)
    return (
        <>
            <section className="py-20">
                <main className="max-w-[80rem] mx-auto flex justify-center">
                    <div className="py-10 mx-5 flex lg:w-9/12 md:w-full  lg:mx-5 items-center lg:items-start px-8 md:px-0 gap-16 lg:flex-col  lg:gap-0">
                        <motion.div className="flex-[.4] lg:flex-auto lg:w-full  overflow-hidden md:w-full" initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .2 }}>
                            <img src={trainers[data].imageURL} alt="" />
                        </motion.div>
                        <motion.div className="flex-[.6] lg:flex-auto pt-20 lg:pt-10 lg:w-full font-montserrat" initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .3, duration: .2 }}>
                            <div className="flex items-center justify-between lg:flex-col-reverse lg:items-start">
                                <h3 className="text-[3rem] md:text-[2.5rem] sm:text-[2rem] xs:text-[1.8rem] uppercase font-bold text-black group-hover:text-red-500 transition-colors">{trainers[data].name} </h3>
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

            <section className="py-20 bg-zinc-950">
                <main className="max-w-[60rem] mx-auto font-montserrat">
                    <motion.div className="mx-5" initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .2 }}>
                        <h2
                            className="z-10 text-white  text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[3.5rem] sm:leading-[2.5rem] mt-20 mb-5">
                            about {data}
                        </h2>
                        <p className="text-zinc-400 mb-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam placeat officiis voluptatibus culpa! Enim soluta eveniet id quis porro, voluptatibus consequuntur beatae voluptate fugit ad, expedita praesentium itaque magnam!</p>
                        <p className="text-zinc-400 mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam placeat officiis voluptatibus culpa! Enim soluta eveniet id quis porro, voluptatibus consequuntur beatae voluptate fugit ad, expedita praesentium it</p>

                        <h2 className="text-white text-[1.7rem] uppercase font-bold mb-5">
                            past experience
                        </h2>
                        <p className="text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempora rerum sit, dolor impedit quos animi assumenda molestias voluptatem a delectus natus ipsam quidem ea excepturi? Tenetur vitae perferendis laboriosam!
                            Labore accusantium aliquam repudiandae in, natus corrupti ratione <span className="font-semibold text-zinc-100 underline"> voluptatibus nesciunt commodi veniam repellat.</span> adipisci reiciendis dolorem magni nostrum sequi blanditiis perferendis nobis quasi, sint soluta odit quis! Cum, accusamus.</p>
                        <ol className="list-decimal my-10 pl-5 text-zinc-400">
                            <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum esse officiis, similique quos possimus illo nostrum inventore minus harum atque at, perfe</li>
                            <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum esse officiis, similique quos possimus illo nostrum inventore minus harum atque at</li>
                            <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum e</li>
                        </ol>
                    </motion.div>

                </main>
            </section>
            <section className="py-20">
                <main className="max-w-[80rem] mx-auto">
                    <motion.div className="mx-5" initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .2 }}>
                        <h2
                            className="z-10 text-black  text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[3.5rem] sm:leading-[2.5rem] mt-20 mb-5">
                            classes by {data}
                        </h2>
                        <motion.div className="grid grid-cols-2 md:grid-cols-1 gap-16 md:gap-7 mx-5 md:flex md:flex-col lg:items-center"
                            initial={{ y: 30, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: .5, duration: .2 }}>
                            {filteredClasses.map((a, i) =>
                                <Link key={i}
                                    to={'/classes/' + a.title} >
                                    <InfoCard key={i}
                                        title={a.title}
                                        para={a.description}
                                        image={a.imageURL} />
                                </Link>)}
                        </motion.div>
                    </motion.div>
                </main>
            </section>
        </>
    )
}