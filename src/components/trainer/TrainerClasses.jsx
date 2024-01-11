import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import InfoCard from "../../UI/InfoCard"
export default function TrainerClasses({ data, filteredClasses }) {
    return (
        <section className="py-20">
            <main className="max-w-[80rem] mx-auto">
                <motion.div className="mx-5" initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .2 }}>
                    <h2
                        className="z-10 text-black mb-10 text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[3.5rem] sm:leading-[2.5rem] md:text-center">
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
    )
}