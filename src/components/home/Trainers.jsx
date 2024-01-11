import PlusButton from "../../UI/PlusButton"
import { trainers } from "../../UI/trainers"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
export default function Trainers() {
    return (
        <section className="py-20">

            <main className="mx-auto max-w-[80rem] lg:flex lg:flex-col lg:items-center relative">
                <div className="absolute top-20 -z-10 ">
                    <motion.img initial={{ scale: 1.2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: .5, duration: .3 }} className="w-10/12 lg:hidden" src="https://lh3.googleusercontent.com/pw/ABLVV85ME1LIoa_3zDqC-z1jhxWGVVtRv79icVfUaTjAvrLK_Vaq_R55ahfTugHuuNolFSe7KbmAlgdoewJBrKAJrKG2nTE14mu4IN1lUsyptD71CC6bXwia=w2400" alt="" />
                </div>
                <motion.h2 initial={{ scale: 2, opacity: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }}
                    className="z-10 text-zinc-900  text-center text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[3.5rem] sm:leading-[2.5rem]  mb-20 lg:mb-10">
                    our team of <br /> Personal trainers
                </motion.h2>
                <div className="mx-5 flex gap-5 lg:flex-col lg:max-w-[30rem] lg:mx-5">
                    <div className="flex-col flex items-center gap-4 flex-1">
                        <Link to={'/trainer/Michael Sullivan'}>
                            < div className="relative group overflow-hidden cursor-pointer">
                                <PlusButton />
                                <img className="object-cover group-hover:scale-105 transition-transform" src={trainers["Michael Sullivan"].imageURL} alt="" />
                            </div>
                        </Link>
                        <div className="font-montserrat uppercase">
                            <h3 className="text-3xl font-bold">{trainers["Michael Sullivan"].name}</h3>
                            <p className="mb-1 text-gray-400 text-center">personal coach</p>
                        </div>
                    </div>
                    <div className="flex-col flex items-center gap-4 flex-1">
                        <Link to={'/trainer/Sophia Patel'}>
                            <div className="relative group overflow-hidden cursor-pointer">
                                <PlusButton />
                                <img className="object-cover group-hover:scale-105 transition-transform" src={trainers["Sophia Patel"].imageURL} alt="" />
                            </div>
                        </Link>
                        <div className="font-montserrat uppercase">
                            <h3 className="text-3xl font-bold">{trainers["Sophia Patel"].name}</h3>
                            <p className="mb-1 text-gray-400 text-center">personal coach</p>
                        </div>
                    </div>
                    <div className="flex-col flex items-center gap-4 flex-1">
                        <Link to={'/trainer/John Doe'}>
                            <div className="relative group overflow-hidden cursor-pointer">
                                <PlusButton />
                                <img className="object-cover group-hover:scale-105 transition-transform" src={trainers["John Doe"].imageURL} alt="" />
                            </div>
                        </Link>
                        <div className="font-montserrat uppercase">
                            <h3 className="text-3xl font-bold">{trainers["John Doe"].name}</h3>
                            <p className="mb-1 text-gray-400 text-center">personal coach</p>
                        </div>
                    </div>



                </div>
            </main >
        </section >
    )
}