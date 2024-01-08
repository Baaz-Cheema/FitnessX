import { motion } from "framer-motion"

export default function TrainerNum() {
    return (
        <section className="bg-zinc-950 trainer">
            <main className="max-w-[80rem] mx-auto">
                <div className="py-20 text-slate-50 mx-5">
                    <h2 className="capitalize mb-3 text-slate-50 text-4xl font-bold font-montserrat ">Need a Fitness trainer?</h2>
                    <p className="text-2xl mb-7 font-bold text-slate-50 font-montserrat"><span className="text-red-500">Call:</span> +123-456789</p>
                    <div className="border-red-500 hover:translate-y-[-4px] transition-transform inline-block">
                        <motion.button initial={{ y: 30, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .3, duration: .2 }} className="font-montserrat border-none font-bold px-10 py-5 block bg-white border text-black duration-300 hover:bg-red-500 hover:text-white uppercase">Get service</motion.button>
                    </div>
                </div>
            </main>
        </section>
    )
}
