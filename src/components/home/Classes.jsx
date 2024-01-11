import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Classes() {
    return (
        <section className=" py-20 gym-bg relative">
            <div className="flex justify-center">
                <motion.h2 initial={{ scale: 2, opacity: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }}
                    className="text-zinc-950 text-center w-8/12 text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[3.5rem] sm:leading-[2.5rem] mb-20 lg:mb-10  lg:w-full">
                    classes available across flexible times
                </motion.h2>
            </div>

            <div className="flex justify-around max-w-[80rem] mx-auto">
                <div className="grid grid-cols-4 grid-rows-2 gap-7 mx-5 lg:grid-cols-2 lg:grid-rows-4 md:grid-cols-1 md:grid-rows-6 classes">
                    <Link to={'classes/Cycling'} className=" lg:h-auto col-span-2 md:col-span-1 relative overflow-hidden parent">
                        <div className="absolute item-1">
                        </div>
                        <div className="h-full flex items-start flex-col justify-end pb-[2rem] pl-[2rem] relative">
                            <h2 className="text-3xl font-bold font-montserrat text-slate-50 pb-2 uppercase">Cycling</h2>
                            <p className="text-slate-50 bg-red-500 font-rajdhani px-2">Monday: 9am-10am </p>
                        </div>
                    </Link>

                    <Link to={'classes/Martial Arts'} className=" relative overflow-hidden parent">
                        <div className="absolute item-2">
                        </div>
                        <div className="h-full flex items-start flex-col justify-end pb-[2rem] pl-[2rem] opacity-100 relative ">
                            <h2 className="text-3xl font-bold text-slate-50 pb-2 uppercase font-montserrat">Martial Arts</h2>
                            <p className="text-slate-50 bg-red-500 font-rajdhani px-2">Tuesday: 10am-11am </p>
                        </div>
                        <img className="opacity-0" src="https://www.trainedphysioperth.com.au/wp-content/uploads/2018/04/pexels-photo-800x500.jpg" alt="" />
                    </Link>
                    <Link to={'classes/HIIT'} className="relative overflow-hidden parent">
                        <div className="absolute item-3">
                        </div>
                        <div className="h-full flex items-start flex-col justify-end pb-[2rem] pl-[2rem] relative">
                            <h2 className="text-3xl font-bold font-montserrat uppercase text-slate-50 pb-2">HIIT</h2>
                            <p className="text-slate-50 bg-red-500 font-rajdhani px-2">Wednesday: 8am-10am </p>
                        </div>
                    </Link>
                    <Link to={'classes/Yoga'} className="relative overflow-hidden parent">
                        <div className="absolute item-4">
                        </div>
                        <div className="h-full flex items-start flex-col justify-end pb-[2rem] pl-[2rem] relative">
                            <h2 className="text-3xl font-bold font-montserrat uppercase text-slate-50 pb-2">Yoga</h2>
                            <p className="text-slate-50 bg-red-500 font-rajdhani px-2">Thursday: 8am-10am </p>
                        </div>
                    </Link>
                    <Link to={'classes/Boxing'} className="relative overflow-hidden parent">
                        <div className="absolute item-5">
                        </div>
                        <div className="h-full flex items-start flex-col justify-end pb-[2rem] pl-[2rem] relative">
                            <h2 className="text-3xl font-bold font-montserrat uppercase text-slate-50 pb-2">Boxing</h2>
                            <p className="text-slate-50 bg-red-500 font-rajdhani px-2">Friday: 9am-10am </p>
                        </div>
                    </Link>

                    <Link to={'classes/Powerlifting'} className="col-span-2 relative overflow-hidden md:col-span-1 parent">
                        <div className="absolute item-6">
                        </div>
                        <div className="h-full flex items-start flex-col justify-end pb-[2rem] pl-[2rem] relative">
                            <h2 className="text-3xl font-bold font-montserrat uppercase text-slate-50 pb-2">Power Lifting</h2>
                            <p className="text-slate-50 bg-red-500 font-rajdhani px-2">Sunday: 8am-12am </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}