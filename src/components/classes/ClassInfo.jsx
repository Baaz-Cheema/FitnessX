import { motion } from "framer-motion"
import { trainers } from "../../UI/trainers"
import { Link } from "react-router-dom"

export default function ClassInfo({ classData }) {

    return (
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: [0, .5, 1] }} transition={{ duration: .3, delay: .5 }}
            className="border-2 border-gray-300 py-10 w-[365px] shrink-0 m-5 sticky top-10 h-fit bg-white sm:w-full">
            <div className="font-montserrat px-10" >
                <h3 className="text-3xl font-bold font-montserrat uppercase">Class details</h3>
                <p className="text-gray-500 mt-2">Get ready for a high-intensity workout that will challenge you.</p>
                <div className="py-8 my-3 mb-9 border-b-2  ">
                    <p className="uppercase flex items-center gap-2 text-gray-500 mb-2"> <i className='bx bx-time text-2xl text-black' ></i> Duration: <span className="text-black">60 minutes</span></p>
                    <p className="uppercase flex items-center gap-2 text-gray-500 mb-2"> <i className='bx bxs-hot text-2xl text-black' ></i> intensity: <span className="text-black">high</span></p>
                    <p className="uppercase flex items-center gap-2 text-gray-500 mb-2"> <i className='bx bx-trending-up text-2xl text-black' ></i> fitness level: <span className="text-black">medium</span></p>
                    <p className="uppercase flex items-center gap-2 text-gray-500"> <i className='bx bx-calendar-alt text-2xl text-black' ></i> Schedule: <span className="text-black">mon-fri</span></p>
                </div>
                <Link to={'/trainer/' + classData.trainer} className="w-full">
                    <div className="flex items-center gap-5 group cursor-pointer">

                        <div className="rounded-full overflow-hidden w-[70px] h-[70px]">
                            <img className="object-cover group-hover:scale-105 transition-transform" src={trainers[classData.trainer].imageURL} alt="" />
                        </div>
                        <div>
                            <p className="uppercase text-gray-500">instructor</p>
                            <p className="uppercase text-xl group-hover:text-red-500">{classData.trainer.split(' ')[0]}</p>
                        </div>

                    </div>
                </Link>
                <div className="flex justify-center mt-5">
                    <button className=" font-bold px-14 py-5 border text-white hover:-translate-y-[4px] transition-all duration-300 bg-zinc-900 hover:bg-red-500 hover:text-white uppercase"> Book a class</button>
                </div>
            </div>
        </motion.div>
    )
}