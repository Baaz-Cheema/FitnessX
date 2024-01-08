import { motion } from "framer-motion"

export default function OurValues() {
    return (
        <section className="bg-zinc-950 py-20 pt-32 lg:pt-20 relative z-0">
            <div className="flex justify-center absolute top-10 left-0 -z-[1]">
                <motion.img initial={{ scale: 1.2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: .5, duration: .3 }} className="w-11/12  lg:hidden" src="https://lh3.googleusercontent.com/pw/ABLVV84sCGyb6UoLIxS-sVnctYVuhEPWWAL1W1Bb52bphOx9cQpy1AilWOSLWHyPq3K59Q82eUFWEmJqeIS9bX0yelaoqjpQVqlza05dv4EWllWNts5fBF46=w2400" alt="" />
            </div>
            <main className="max-w-[80rem] mx-auto">
                <div className="mx-5">
                    <motion.h2 initial={{ scale: 1.2, opacity: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }}
                        className="text-white w-8/12 mb-10 md:text-center text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[3.5rem] sm:leading-[2.5rem]  lg:w-full t-shadow">
                        The core values <br />
                        we believe in
                    </motion.h2>
                    <motion.div className="grid md:grid-cols-1 gap-10 grid-cols-2 text-white font-montserrat" initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .7, duration: .2 }} viewport={{ once: true }}>
                        <div className="p-7 py-10 border border-gray-600">
                            <i className='bx bxs-hot text-6xl mb-3'></i>
                            <h3 className="font-montserrat text-3xl uppercase font-bold mb-3">Passion</h3>
                            <p className="text-gray-300">Passion fuels our fitness journey. It’s about embracing a healthier lifestyle and celebrating progress.</p>
                        </div>
                        <div className="p-7 py-10 border border-gray-600">
                            <i className='bx bx-heart text-6xl mb-3'></i>
                            <h3 className="font-montserrat text-3xl uppercase font-bold mb-3">commitment</h3>
                            <p className="text-gray-300">Commitment is crucial in fitness. It’s about making fitness a priority and integrating it into daily life.</p>
                        </div>
                        <div className="p-7 py-10 border border-gray-600">
                            <i className='bx bx-group text-6xl mb-3'></i>
                            <h3 className="font-montserrat text-3xl uppercase font-bold mb-3">community</h3>
                            <p className="text-gray-300">A gym is more than a workout space. It’s a supportive and motivating community that celebrates each other’s achievements.</p>
                        </div>
                        <div className="p-7 py-10 border border-gray-600">
                            <i className='bx bx-trending-up text-6xl mb-3'></i>
                            <h3 className="font-montserrat text-3xl uppercase font-bold mb-3">growth</h3>
                            <p className="text-gray-300">Passion fuels our fitness journey. It’s about embracing a healthier lifestyle and celebrating progress.</p>
                        </div>
                    </motion.div>
                </div>
            </main>
        </section>
    )
}