import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { trainers } from "../../UI/trainers"
export default function BlogBody({ data }) {
    return (
        <section className="my-20">
            <main className="max-w-[60rem] mx-auto">
                <div className="font-montserrat mx-5">
                    <h2 className=" text-black xs:text-[2.6rem] text-[3.5rem] sm:text-[3rem] uppercase font-montserrat font-extrabold leading-[4.5rem] sm:leading-[3.5rem] xs:leading-[2.5rem] mb-10 xs:mb-4">
                        how to lift weights
                    </h2>
                    <p className="text-zinc-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quam impedit consequuntur cum eaque saepe <span className="underline text-zinc-600">repellendus laborum </span> similique quisquam harum! Velit aut consequatur fugit unde eligendi fugiat illo. Harum, obcaecati?
                        In vitae numquam eius quod cum, <span className="font-semibold text-zinc-600"> voluptatibus nesciunt commodi veniam repellat.</span> tatibus nesciunt commodi veniam repellat.
                    </p>
                    <ul className="list-disc my-10 pl-5 text-zinc-400">
                        <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum esse officiis, similique quos possimus illo nostrum inventore minus harum atque at, perfe</li>
                        <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum esse officiis, similique quos possimus illo nostrum inventore minus harum atque at</li>
                        <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum e</li>
                    </ul>
                    <h3 className="uppercase text-[1.7rem] font-bold mb-5">a 30-day quick start guide to weight training</h3>
                    <p className="text-zinc-400 mb-10">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quam impedit consequuntur cum eaque saepe repellendus laborum similique quisquam harum! Velit aut consequatur fugit unde eligendi fugiat illo. Harum, obcaecati?
                        In vitae numquam eius quod cum.
                    </p>
                    <div className="flex items-center justify-center relative overflow-hidden  mb-20">
                        <motion.div whileHover={{ scale: .9, transition: { delay: 0, duration: .2 } }}
                            className="absolute z-[3] peer md:mr-0 rounded-full bg-white w-[8rem] shrink-0 h-[8rem] md:w-[6rem] md:h-[6rem] xs:w-[5rem] xs:h-[5rem] flex justify-center items-center cursor-pointer">
                            <i className='bx bxs-right-arrow text-[3.5rem] md:text-[2.5rem] xs:text-[2rem]'></i>
                        </motion.div>
                        <img className="object-cover w-full max-h-[30rem] transition-all peer-hover:scale-105 peer-hover:z-[-1]"
                            src='https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwY2xhc3N8ZW58MHwwfDB8fHwy' alt="" />
                    </div>
                    <h3 className="uppercase text-[1.7rem] font-bold mb-5">3 step process to weight lifting</h3>
                    <p className="text-zinc-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quam impedit consequuntur cum eaque saepe repellendus laborum similique quisquam harum! Velit aut consequatur fugit unde eligendi fugiat illo. Harum, obcaecati?
                        In vitae numquam eius quod cum, doloremque saepe libero similique voluptas fuga mollitia vel sapiente ratione eos molestiae! Tempore corrupti voluptatum asperiores rerum possimus amet <span className="font-semibold text-zinc-600"> voluptatibus nesciunt commodi veniam repellat.</span>
                    </p>
                    <ol className="list-decimal my-10 pl-5 text-zinc-400">
                        <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum esse officiis, similique quos possimus illo nostrum inventore minus harum atque at, perfe</li>
                        <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum esse officiis, similique quos possimus illo nostrum inventore minus harum atque at</li>
                        <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum e</li>
                    </ol>
                    <p className="text-zinc-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        <span className="font-semibold text-zinc-600"> voluptatibus nesciunt commodi veniam repellat.</span> voluptas fuga mollitia vel sapiente ratione eos molestiae! Tempore corrupti voluptatum asperiores rerum possimus amet
                    </p>
                </div>
                <Link to={'/trainer/' + trainers[data.author].name}>
                    <div className="bg-zinc-950 group mx-auto mt-20 max-w-[70%] lg:max-w-full lg:mx-5 py-10 px-8 flex gap-5 items-center md:flex-col md:text-center cursor-pointer">
                        <div className="w-[30%] md:w-9/12 overflow-hidden ">
                            <img className="group-hover:scale-105 transition-transform" src={trainers[data.author].imageURL} alt="" />
                        </div>
                        <div className="w-[70%] md:w-full font-montserrat">
                            <div className="flex items-center justify-between md:flex-col-reverse">
                                <h3 className="text-[2rem] text-white group-hover:text-red-500 transition-colors">{trainers[data.author].name} </h3>
                                <div className="flex items-center text-white gap-2 text-2xl lg:gap-4">
                                    <i className='bx bxl-facebook hover:text-red-500' ></i>
                                    <i className='bx bxl-instagram-alt  hover:text-red-500' ></i>
                                    <i className='bx bxl-twitter  hover:text-red-500' ></i>
                                </div>
                            </div>

                            <p className="text-zinc-500 uppercase mb-5">Personal coach</p>
                            <p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aperiam totam mskdmalkd</p>
                        </div>
                    </div>
                </Link>
            </main>
        </section>
    )
}