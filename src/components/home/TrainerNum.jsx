import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function TrainerNum() {
    return (
        <section className="bg-zinc-950 trainer">
            <main className="max-w-[80rem] mx-auto">
                <div className="py-20 text-slate-50 mx-5">
                    <h2 className="mb-3 text-slate-50 text-4xl font-bold font-montserrat uppercase">Need a Fitness trainer?</h2>
                    <p className="text-2xl mb-7 font-bold text-slate-50 font-montserrat"><span className="text-red-500">Call:</span> +123-456789</p>
                    <div className="border-red-500 hover:translate-y-[-4px] transition-transform inline-block">
                        <Link to={'/membership'}>
                            <motion.button className="font-bold text-black px-10 font-montserrat w-full py-5 bg-white  hover:bg-red-500 hover:-translate-y-[4px] transition-all duration-300 hover:text-white uppercase">get service</motion.button>
                        </Link>
                    </div>
                </div>
            </main>
        </section>
    )
}
