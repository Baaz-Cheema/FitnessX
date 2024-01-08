import { motion } from "framer-motion"
export default function ClassInfo() {
    return (
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: [0, .5, 1] }} transition={{ duration: .5, delay: .3 }}
            className="border-2 border-gray-300 px-10 py-10 w-[365px] shrink-0 m-5 sticky top-10 h-fit bg-white">
            <div className="font-montserrat" >
                <h3 className="text-3xl font-bold font-montserrat uppercase">Class details</h3>
                <p className="text-gray-500 mt-2">Get ready for a high-intensity workout that will challenge you.</p>
                <div className="py-8 my-3 mb-9 border-b-2  ">
                    <p className="uppercase flex items-center gap-2 text-gray-500 mb-2"> <i className='bx bx-time text-2xl text-black' ></i> Duration: <span className="text-black">60 minutes</span></p>
                    <p className="uppercase flex items-center gap-2 text-gray-500 mb-2"> <i className='bx bxs-hot text-2xl text-black' ></i> intensity <span className="text-black">high</span></p>
                    <p className="uppercase flex items-center gap-2 text-gray-500 mb-2"> <i className='bx bx-trending-up text-2xl text-black' ></i> fitness level <span className="text-black">medium</span></p>
                    <p className="uppercase flex items-center gap-2 text-gray-500"> <i className='bx bx-calendar-alt text-2xl text-black' ></i> Schedule <span className="text-black">mon-fri</span></p>
                </div>

                <div className="flex items-center gap-7">
                    <div className="rounded-full bg-blue-500 w-[70px] h-[70px]">

                    </div>
                    <div>
                        <p className="uppercase text-gray-500">instructor</p>
                        <p className="uppercase text-xl">John doe</p>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <button className=" font-bold px-10 py-5 border text-white hover:-translate-y-[4px] transition-all duration-300 bg-zinc-900 hover:bg-red-500 hover:text-white"> BROWSE CLASSES</button>
                </div>
            </div>
        </motion.div>
    )
}