import { motion } from "framer-motion"
import { blogPosts } from "../UI/blogposts"
import InfoCard from "../UI/InfoCard"
import { Link } from "react-router-dom"

export default function Blog() {
    return (
        <section className="bg-zinc-950 py-20 relative z-0">
            <div className="flex justify-center absolute top-10 left-0 -z-[1]">
                <motion.img initial={{ scale: 1.2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: .5, duration: .3 }} className="w-11/12 lg:hidden" src="https://lh3.googleusercontent.com/pw/ABLVV85FMyC2ID_S8CJQV34FhG7XoFpIlBkc6GvtHpObtljW8NAdn8PjTBl88OKRAd4FxRmhSlfC4jVSvpSOciwjyg9hOvUXISzwqUq0iRKByrkDC9YliiwO=w2400" alt="" />
            </div>
            <main className="max-w-[80rem] mx-auto">
                <div className="flex mx-5 lg:flex-col justify-between items-center mb-10 relative">
                    <motion.h2 initial={{ scale: 2, opacity: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }}
                        className="text-white  text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[4.5rem] sm:leading-[2.5rem] mb-5  xs:full">
                        articles & news
                    </motion.h2>
                    <div className="border-red-500 hover:translate-y-[-4px] transition-transform">
                        <motion.button initial={{ y: 30, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .3, duration: .2 }} className="font-montserrat border-none font-bold px-10 py-5 bg-white border text-black duration-300 hover:bg-red-500 hover:text-white uppercase">All articles</motion.button>
                    </div>
                </div>
                <div className="flex justify-center gap-6 mx-5 lg:flex-col lg:items-center" >
                    {blogPosts.map((a, i) =>
                        <Link key={i} to={'/blogs/' + a.title}>
                            <InfoCard
                                title={a.title}
                                image={a.imageURL}
                                date={a.date} />
                        </Link>)}
                </div>
            </main>
        </section >
    )
}