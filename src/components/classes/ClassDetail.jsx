import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import ClassInfo from "./ClassInfo"
import { classposts, titles } from "../../UI/classposts"
import { useRef } from "react"
import { useState } from "react"

export default function ClassDetail() {
    const params = useParams()
    const paramName = params.className
    const pathExists = titles.includes(paramName)
    const [classData, setclassData] = useState(classposts.filter(a => a.title === paramName)[0])

    if (!pathExists) {
        return <>
            <h1 className="text-6xl">EOROROROOORO </h1>
            <p>{paramName}</p>
        </>
    }
    return (
        <section className="py-20 mb-20  relative">
            <main className="max-w-[80rem] mx-auto">
                <div className="mx-10 sm:mx-5 flex gap-10 relative">
                    <motion.div className="w-[65%] lg:w-full"
                        initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: [0, .5, 1] }} transition={{ duration: .3, delay: .3 }}>
                        <h2 className="text-black sm:text-center sm:text-[4rem] xs:text-[2.6rem] text-[5rem] uppercase font-montserrat font-extrabold leading-[4.5rem] sm:leading-[3.5rem] xs:leading-[2.5rem] mb-10 xs:mb-4">
                            {classData.title}
                        </h2>
                        <p className="font-montserrat mb-10 text-gray-500 md:text-center">
                            {classData.description}
                        </p>
                        <div className="flex items-center justify-center relative overflow-hidden  ">
                            <motion.div whileHover={{ scale: .9, transition: { delay: 0, duration: .2 } }}
                                className="absolute z-[3] peer md:mr-0 rounded-full bg-white w-[8rem] shrink-0 h-[8rem] md:w-[6rem] md:h-[6rem] xs:w-[5rem] xs:h-[5rem] flex justify-center items-center cursor-pointer">
                                <i className='bx bxs-right-arrow text-[3.5rem] md:text-[2.5rem] xs:text-[2rem]'></i>
                            </motion.div>
                            <img className="object-cover w-full max-h-[30rem] transition-all peer-hover:scale-105 peer-hover:z-[-1]"
                                src={classData.imageURL} alt="" />
                        </div>
                        <div className="hidden lg:flex lg:justify-center lg:mt-10">
                            <ClassInfo classData={classData} />
                        </div>

                        <h2 className="mt-32 text-white xs:text-[2.6rem] text-[4rem] sm:text-[3rem] uppercase font-montserrat font-extrabold leading-[4.5rem] sm:leading-[3.5rem] xs:leading-[2.5rem] mb-10 xs:mb-4">
                            ABout this class
                        </h2>
                        <div className="text-zinc-400 font-montserrat text-lg">
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt cupiditate <span className="font-bold text-white">nesciunt ut maxime</span> , laudantium qui hic itaque quas eius voluptates in odio doloremque repellendus nobis non, dolorem, illum modi.
                                Nesciuam, dolore architecto nesciunt ut maxime <span className="underline text-white"> fuga provident.</span>
                            </p>
                            <ul className="list-disc my-10 pl-5">
                                <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum esse officiis, similique quos possimus illo nostrum inventore minus harum atque at, perfe</li>
                                <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum esse officiis, similique quos possimus illo nostrum inventore minus harum atque at</li>
                                <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum e</li>
                            </ul>
                        </div>
                        <hr className="my-20" />

                        <h2 className=" text-white xs:text-[2.6rem] text-[4rem] sm:text-[3rem] uppercase font-montserrat font-extrabold leading-[4.5rem] sm:leading-[3.5rem] xs:leading-[2.5rem] mb-10 xs:mb-4">
                            class timing
                        </h2>
                        <div className="text-zinc-400 font-montserrat text-lg">
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt cupiditate adipisci beatae dicta, laudantium
                                Nesciunt enim quou dolore architecto <span className="font-bold text-white">nesciunt ut maxime</span>  fuga provident.
                            </p>
                            <div className="my-10 uppercase">
                                <h3 className="font-bold text-3xl text-white mb-10">Monday</h3>
                                <ul className="list-disc my-10 pl-5">
                                    <li className="mb-3">8am - 10am</li>
                                    <li className="mb-3">10am - 12pm</li>
                                    <li className="mb-3">6pm-8pm</li>
                                </ul>

                            </div>
                            <div className="my-10 uppercase">
                                <h3 className="font-bold text-3xl text-white mb-10">wednesday</h3>
                                <ul className="list-disc my-10 pl-5">
                                    <li className="mb-3">8am - 10am</li>
                                    <li className="mb-3">10am - 12pm</li>
                                    <li className="mb-3">6pm-8pm</li>
                                </ul>

                            </div>
                            <div className="my-10 uppercase">
                                <h3 className="font-bold text-3xl text-white mb-10">friday</h3>
                                <ul className="list-disc my-10 pl-5">
                                    <li className="mb-3">8am - 10am</li>
                                    <li className="mb-3">10am - 12pm</li>
                                    <li className="mb-3">6pm-8pm</li>
                                </ul>
                            </div>
                        </div>


                    </motion.div>
                    <div className="lg:hidden">
                        <ClassInfo classData={classData} />
                    </div>

                </div>
            </main>
            <div className="bg-zinc-950 z-[-100] absolute h-[79%] lg:h-[85%] sm:h-[90%] bottom-0 left-0 right-0">

            </div>
        </section>
    )
}