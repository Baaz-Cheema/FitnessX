import { motion } from "framer-motion"
import { products } from "../../UI/gymItems"
import { Link } from "react-router-dom"

export default function ShopItems() {
    return (
        <motion.section className="py-20" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .3 }} >
            <main className="max-w-[80rem] mx-auto">
                <div className="mx-5 grid gap-7  grid-cols-3 lg:grid-cols-2 lg:gap-y-1 md:grid-cols-1">
                    {products.map((a, i) =>
                        <Link to={'/shop/' + a.title} key={i} className="flex flex-col max-h-[42rem] lg:max-h-[45rem]  group">
                            <div className="bg-zinc-100 h-[60%] flex items-center justify-center mb-6 overflow-hidden">
                                <img className="object-cover w-full h-full group-hover:scale-105 transition-transform" src={a.image} alt="" />
                            </div>
                            <div className="font-montserrat h-[40%] flex flex-col">
                                <h3 className="uppercase text-2xl font-bold mb-5 group-hover:text-red-500">{a.title}</h3>
                                <p className="text-gray-500 pb-10 lg:pb-0 sm:pb-2">{a.description}</p>
                                <p className="text-2xl font-bold border-t-2 mt-auto pb-16 pt-5 md:mt-2 md:pt-5 md:pb-10 ">$ {a.price}.00 USD</p>
                            </div>
                        </Link>)}
                </div>
            </main>
        </motion.section>
    )
}