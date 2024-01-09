import { classposts } from "../../UI/classposts"
import InfoCard from "../../UI/InfoCard"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


export default function ClassesItems() {
    return (
        <section className="py-20">
            <main className="max-w-[80rem] mx-auto">
                <motion.div className="grid grid-cols-2 md:grid-cols-1 gap-16 md:gap-7 mx-5 md:flex md:flex-col lg:items-center"
                    initial={{ y: 30, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: .5, duration: .2 }}>
                    {classposts.map((a, i) =>
                        <Link key={i}
                            to={a.title} >
                            <InfoCard key={i}
                                title={a.title}
                                para={a.description}
                                image={a.imageURL} />
                        </Link>)}
                </motion.div>
            </main>
        </section>
    )
}