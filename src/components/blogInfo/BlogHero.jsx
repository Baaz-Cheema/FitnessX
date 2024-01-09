import { motion } from "framer-motion"
import { useParams } from "react-router-dom"
import { blogPosts, blogTitles } from "../../UI/blogposts"
import { trainers } from "../../UI/trainers"

export default function BlogHero({ data }) {

    return (
        <section className="py-20 relative h-[90vh] flex  items-center overflow-hidden">
            <motion.div
                style={{ backgroundImage: `url(${data.imageURL})` }}

                initial={{ scale: 2 }} animate={{ scale: 1 }} transition={{ duration: 3, ease: 'easeOut' }} className="absolute w-full top-0 bottom-0 right-0 left-0 -z-10 brightness-50 scale-[1.2] hero-styles">

            </motion.div>
            <div className="w-10/12 mx-auto flex md:flex-col-reverse justify-between items-center">
                <div className="ml-5 md:ml-0 md:flex md:flex-col md:items-center">
                    <motion.h2 initial={{ scale: 4, opacity: 0 }} animate={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }} className="text-slate-50  max-w-[60rem] sm:text-[4rem] xs:text-[2.6rem] text-[5rem] uppercase t-shadow font-montserrat font-extrabold leading-[4.5rem] sm:leading-[3.5rem] xs:leading-[2.5rem]  mb-10 xs:mb-4">
                        {data.title}
                    </motion.h2>
                    <motion.p initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .2 }} className="font-montserrat mb-10 text-slate-50 w-1/2 lg:w-10/12 md:w-full">
                        {data.paragraph}
                    </motion.p>
                    <motion.div className="inline-flex items-center gap-7 font-montserrat group cursor-pointer " initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .7, duration: .2 }}>
                        <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
                            <img className="object-cover w-full group-hover:scale-105 transition-transform" src={trainers[data.author].imageURL} alt="" />
                        </div>
                        <div>
                            <p className="uppercase text-white font-bold text-2xl group-hover:text-red-500 transition-colors mb-1">{trainers[data.author].name}</p>
                            <p className="uppercase text-gray-400 text-lg">8 min read - {data.date}</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}