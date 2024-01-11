import { motion, AnimatePresence } from "framer-motion"
export default function PricingPanel({ plan }) {
    return (
        <motion.section className="max-w-[80rem] mx-auto" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .7, duration: .2 }} >
            <main className="flex gap-5 mx-5 items-center justify-center mt-20 lg:flex-col lg:items-center lg:gap-16">
                <div className="flex flex-col items-center py-10 px-5 lg:px-10 text-black max-h-[32rem] border-2 flex-1 cursor-pointer hover:-translate-y-3 transition-transform">
                    <p className="uppercase mb-10  text-xl font-montserrat">Discover</p>
                    <AnimatePresence mode="wait">
                        <motion.p key={plan} animate={{ x: plan ? [-50, 0] : [50, 0], opacity: [0, 1], transition: { mode: 'stiff', duration: .1 } }} exit={{ opacity: 0, transition: { duration: .1 } }} className="text-xl font-bold font-montserrat mb-10  whitespace-nowrap" ><span className="text-6xl mr-3">${plan ? 950 : 99}</span>Per {plan ? 'year' : 'month'}</motion.p>
                    </AnimatePresence>
                    <div className="list-none font-montserrat mb-10">
                        <li className="flex items-center"><i className='bx bx-check text-3xl mr-2'></i>4 group classes</li>
                        <li className="flex items-center"><i className='bx bx-check text-3xl mr-2'></i>Exclusive members-only eBook</li>
                        <li className="flex items-center text-zinc-400"><i className='bx bx-check text-3xl mr-2'></i>Access to monthly webinar</li>
                        <li className="flex items-center  text-zinc-400"><i className='bx bx-check text-3xl mr-2'></i>Priority booking for new classes</li>
                    </div>
                    <motion.button className=" font-montserrat font-bold px-16 py-5 bg-zinc-900 text-white hover:bg-red-500 hover:-translate-y-[4px] transition-all duration-300 hover:text-white">SUBSCRIBE</motion.button>
                </div>
                <div className="flex flex-col items-center py-10 h-auto px-5 lg:px-10 bg-zinc-950 text-white flex-1 cursor-pointer hover:-translate-y-3 transition-transform">
                    <p className="uppercase mb-10 text-white text-xl font-montserrat ">Enterprise</p>
                    <AnimatePresence mode="wait">
                        <motion.p key={plan} animate={{ x: plan ? [-50, 0] : [50, 0], opacity: [0, 1], transition: { mode: 'stiff', duration: .1 } }} exit={{ opacity: 0, transition: { duration: .1 } }} className="text-xl font-bold font-montserrat text-slate-50 mb-10  whitespace-nowrap" ><span className="text-6xl mr-3 ">${plan ? 2870 : 299}</span>Per {plan ? 'year' : 'month'}</motion.p>
                    </AnimatePresence>
                    <div className="list-none font-montserrat mb-10">
                        <li className="flex items-center"><i className='bx bx-check text-3xl mr-2'></i>4 group classes</li>
                        <li className="flex items-center"><i className='bx bx-check text-3xl mr-2'></i>Exclusive members-only eBook</li>
                        <li className="flex items-center"><i className='bx bx-check text-3xl mr-2'></i>Access to monthly webinar</li>
                        <li className="flex items-center"><i className='bx bx-check text-3xl mr-2'></i>Priority booking for new classes</li>
                        <li className="flex items-center"><i className='bx bx-check text-3xl mr-2'></i>Access to a private community</li>
                        <li className="flex items-center"><i className='bx bx-check text-3xl mr-2'></i>Access to diet plans</li>
                    </div>
                    <motion.button className=" font-montserrat font-bold px-16 py-5 bg-white text-black hover:bg-red-500 hover:-translate-y-[4px] transition-all duration-300 hover:text-white">SUBSCRIBE</motion.button>
                </div>
                <div className="flex flex-col items-center py-10 px-5 lg:px-10  max-h-[32rem] border-2 flex-1 cursor-pointer hover:-translate-y-3 transition-transform">
                    <p className="uppercase mb-10 text-xl font-montserrat">Professional</p>
                    <AnimatePresence mode="wait">
                        <motion.p key={plan} animate={{ x: plan ? [-50, 0] : [50, 0], opacity: [0, 1], transition: { mode: 'stiff', duration: .1 } }} exit={{ opacity: 0, transition: { duration: .1 } }} className="text-xl font-montserrat font-bold mb-10 whitespace-nowrap" ><span className="text-6xl mr-3">${plan ? 1910 : 199}</span>Per {plan ? 'year' : 'month'}</motion.p>
                    </AnimatePresence>
                    <div className="list-none font-montserrat mb-10">
                        <li className="flex items-center"><i className='bx bx-check text-3xl mr-2'></i>4 group classes</li>
                        <li className="flex items-center"><i className='bx bx-check text-3xl mr-2'></i>Exclusive members-only eBook</li>
                        <li className="flex items-center"><i className='bx bx-check text-3xl mr-2'></i>Access to monthly webinar</li>
                        <li className="flex items-center text-zinc-400"><i className='bx bx-check text-3xl mr-2'></i>Priority booking for new classes</li>
                    </div>
                    <motion.button className=" font-montserrat font-bold px-16 py-5 bg-zinc-900 text-white hover:bg-red-500 hover:-translate-y-[4px] transition-all duration-300 hover:text-white">SUBSCRIBE</motion.button>
                </div>
            </main>
        </motion.section>
    )
}