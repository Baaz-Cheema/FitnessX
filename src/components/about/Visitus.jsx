import { motion } from "framer-motion"

export default function VisitUs() {
    return (
        <section className="py-32 bg-zinc-950 ">

            <main className="max-w-[80rem] mx-auto">
                <div className="mx-5">
                    <div className="flex mx-5 lg:flex-col justify-between items-center mb-10 relative">
                        <motion.h2 initial={{ scale: 1.2, opacity: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }}
                            className="text-white  text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[4.5rem] sm:leading-[2.5rem] mb-5  xs:full">
                            Visit us today
                        </motion.h2>

                    </div>

                    <motion.div className="flex justify-between gap-16 mx-5 lg:flex-col lg:items-center" initial={{ y: 30, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .2 }}>
                        <div className="flex-1 flex flex-col font-montserrat text-slate-50 items-start  lg:max-w-[500px] overflow-hidden" >
                            <div className="overflow-hidden w-full my-5">
                                <img className="transition-transform w-full" src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            </div>
                            <h3 className="text-3xl mb-3 font-bold" >Los Angeles</h3>
                            <p className="mb-5">Visit our Los Angeles gym, a fitness haven in ‘The Creative Capital of the World’. We’re ready to help you turn your fitness dreams into reality.</p>
                            <div className="flex md:flex-col justify-between w-full text-slate-50 mt-auto" >
                                <div>
                                    <p className="flex items-center gap-1 md:my-2"><i className='text-red-500 bx bxs-phone text-2xl'></i>+1(405) 567 9820 </p>
                                    <p className="flex items-center gap-1 md:my-2"> <i className='text-red-500 text-2xl bx bxs-envelope' ></i> fitnessX@info.com</p>
                                </div>
                                <p className="flex items-center max-w-[15rem] gap-1 md:my-2"> <i className='text-red-500 text-2xl bx bxs-pin' ></i> 123 Main Street
                                    Springfield, IL 62701
                                    US</p>
                            </div>

                        </div>
                        <div className="flex-1 flex flex-col font-montserrat text-slate-50 items-start lg:max-w-[500px]">
                            <div className="overflow-hidden w-full my-5">
                                <img className="transition-transform w-full" src="https://images.unsplash.com/photo-1542766788-a2f588f447ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            </div>
                            <h3 className="text-3xl mb-3 font-bold" >New Orleans</h3>
                            <p className="mb-5">Experience the vibrant energy of our New Orleans gym. Nestled in the heart of ‘The Big Easy’, our gym is a fitness oasis where culture and health intersect.</p>
                            <div className="flex md:flex-col justify-between w-full text-slate-50 mt-auto " >
                                <div>
                                    <p className="flex items-center gap-1 md:my-2"><i className='text-red-500 bx bxs-phone text-2xl'></i>+1(405) 567 9820 </p>
                                    <p className="flex items-center gap-1 md:my-2"> <i className='text-red-500 text-2xl bx bxs-envelope' ></i> fitnessX@info.com</p>
                                </div>
                                <p className="flex items-center max-w-[15rem] gap-1 md:my-2 "> <i className='text-red-500 text-2xl bx bxs-pin' ></i> 123 Main Street
                                    Springfield, IL 62701
                                    US</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </main>
        </section>
    )
}