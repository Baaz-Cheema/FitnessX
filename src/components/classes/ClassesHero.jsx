import { motion } from "framer-motion"

export default function ClassesHero() {
    return (
        <section className="py-20 relative h-[60vh] xs:h-[50vh] flex items-center overflow-hidden">
            <motion.div initial={{ scale: 2 }} animate={{ scale: 1 }} transition={{ duration: 3, ease: 'easeOut' }} className="absolute w-full top-0 bottom-0 right-0 left-0 -z-10 hero-4 brightness-50 scale-[1.2]">

            </motion.div>
            <div className="max-w-[80rem] mx-auto flex items-center justify-center">
                <div className="flex justify-center flex-col w-full items-center">
                    <motion.h2 initial={{ scale: 4, opacity: 0 }} animate={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }} className="text-slate-50 text-center sm:text-[4rem] xs:text-[2.6rem] text-[5rem] uppercase t-shadow font-montserrat font-extrabold leading-[4.5rem] sm:leading-[3.5rem] xs:leading-[2.5rem]  mb-10 xs:mb-4">
                        classes
                    </motion.h2>
                    <motion.p initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .2 }} className="font-montserrat mb-10 text-slate-50 w-1/2 md:w-10/12 text-center">
                        We’re a fitness hub with top-notch equipment, expert trainers, and diverse classes. Your health goals are our mission.
                    </motion.p>
                </div>

            </div>
        </section>
    )
}