import { motion } from "framer-motion"
import { useState } from "react"
export default function ItemDescription() {
    const [item, setItem] = useState(0)

    let content = 'about this item'
    if (item === 1) {
        content = 'additional info'
    } else if (item === 2) {
        content = 'shipping info'
    }

    return (
        <section className="py-20">
            <main className="mx-auto max-w-[60rem]">
                <div className=" px-10 md:px-3 flex gap-10 md:flex-col md:gap-5 md:mt-5 text-xl border-b text-gray-500 font-montserrat font-bold uppercase mb-10">
                    <h3 className={`cursor-pointer pb-5  pt-10 md:py-0 md:pb-2 ${item === 0 && 'text-black border-b-2 border-black'}`} onClick={() => setItem(0)}>product description</h3>
                    <h3 className={`cursor-pointer pb-5 pt-10  md:py-0 md:pb-2 ${item === 1 && 'text-black border-b-2 border-black'}`} onClick={() => setItem(1)}>additional info</h3>
                    <h3 className={`cursor-pointer pb-5 pt-10  md:py-0 md:pb-2 ${item === 2 && 'text-black border-b-2 border-black'}`} onClick={() => setItem(2)}>shipping</h3>
                </div>
                <motion.div key={item} animate={{ opacity: [0, 1], transition: { duration: .3, ease: 'easeIn' } }} className="font-montserrat px-10 md:px-3">
                    <h3 className="text-2xl uppercase font-bold mb-5">{content}</h3>
                    <p className="text-zinc-500 mb-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente nisi non nobis tenetur odit quia aut eaque dolore consectetur?
                        Perferendis perspiciatis amet error quam iure nulla debitis, quibusdam nisi suscipit!
                        Perferendis perspiciatis amet error quam iure nulla debitis, quibusdam nisi suscipit!
                    </p>
                    <h3 className="text-2xl uppercase font-bold mb-5">Materials & quality</h3>
                    <p className="text-zinc-500 mb-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente nisi non nobis tenetur odit quia aut eaque dolore consectetur?
                        Sapiente nisi non nobis tenetur odit quia aut eaque dolore consectetur?
                        Perferendis perspiciatis amet error quam iure nulla debitis, quibusdam nisi suscipit!
                        Sapiente nisi non nobis tenetur odit quia aut eaque dolore consectetur?
                        Perferendis perspiciatis amet error quam iure nulla debitis, quibusdam nisi suscipit!
                    </p>
                </motion.div>
            </main>
        </section>
    )
}