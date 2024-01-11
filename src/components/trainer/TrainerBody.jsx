import { motion } from "framer-motion"
export default function TrainerBody({ data }) {
    return (
        <section className="py-20 bg-zinc-950">
            <main className="max-w-[60rem] mx-auto font-montserrat">
                <motion.div className="mx-5" initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .2 }}>
                    <h2
                        className="z-10 text-white  text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[3.5rem] sm:leading-[2.5rem] mt-20 mb-5">
                        about {data}
                    </h2>
                    <p className="text-zinc-400 mb-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam placeat officiis voluptatibus culpa! Enim soluta eveniet id quis porro, voluptatibus consequuntur beatae voluptate fugit ad, expedita praesentium itaque magnam!</p>
                    <p className="text-zinc-400 mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam placeat officiis voluptatibus culpa! Enim soluta eveniet id quis porro, voluptatibus consequuntur beatae voluptate fugit ad, expedita praesentium it</p>

                    <h2 className="text-white text-[1.7rem] uppercase font-bold mb-5">
                        past experience
                    </h2>
                    <p className="text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempora rerum sit, dolor impedit quos animi assumenda molestias voluptatem a delectus natus ipsam quidem ea excepturi? Tenetur vitae perferendis laboriosam!
                        Labore accusantium aliquam repudiandae in, natus corrupti ratione <span className="font-semibold text-zinc-100 underline"> voluptatibus nesciunt commodi veniam repellat.</span> adipisci reiciendis dolorem magni nostrum sequi blanditiis perferendis nobis quasi, sint soluta odit quis! Cum, accusamus.</p>
                    <ol className="list-decimal my-10 pl-5 text-zinc-400">
                        <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum esse officiis, similique quos possimus illo nostrum inventore minus harum atque at, perfe</li>
                        <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum esse officiis, similique quos possimus illo nostrum inventore minus harum atque at</li>
                        <li className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, fugiat laborum e</li>
                    </ol>
                </motion.div>

            </main>
        </section>
    )
}