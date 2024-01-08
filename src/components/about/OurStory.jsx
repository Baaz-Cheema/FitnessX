import { motion } from "framer-motion"

export default function OurStory() {
    return (
        <section className="py-20 h-[90vh]  lg:h-[100vh] flex items-center">
            <main className="max-w-[80rem] mx-auto">
                <div className="flex justify-center bg-red-500 relative top-0 ">
                    <motion.img initial={{ scale: 1.2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: .5, duration: .3 }}
                        className="absolute top-0 -left-0 w-6/12 -z-[1] lg:hidden" src="https://lh3.googleusercontent.com/pw/ABLVV85pRajPH_G9Sp7mhWURUmyz7egO6OM_k5Nc1VrWlfScm-iAJer30sBmwamwrqAzhbvNn8uZ5l37Z45TfBNb4AEmPcODeJnl19urakeFRyC40XTOXIf3=w2400" alt="" />
                </div>
                <div className="flex gap-10 mx-5 lg:flex-col lg:items-center lg:my-20">
                    <div className="lg:w-full self-center flex-1">
                        <motion.h2 initial={{ scale: 1.2, opacity: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }}
                            className="lg:text-center lg:mx-auto z-10 whitespace-nowrap text-zinc-900  text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[4.5rem] sm:leading-[2.5rem] mb-5 lg:w-10/12 sm:w-11/12 sm:full">
                            The story <br /> behind our gym
                        </motion.h2>
                        <motion.p initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .2 }} className="font-montserrat lg:mx-auto lg:text-center text-zinc-500  lg:w-10/12 sm:w-full">
                            Lorem im dolor, sit amet consectetur adipisicing elit. Voluptate ipsam maxime dolore, vel quo et? Error dolorumre repudiandae inventore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ea exercitationem, distinctio temporibus quae vero quas consectetur officiis eos, sequi nihil, voluptatum velit adipisci. Laborum nulla beatae commodi iusto aliquid!
                        </motion.p>
                    </div>
                    <motion.div className="flex-1 overflow-hidden">
                        <motion.img initial={{ scale: 1.5 }} whileInView={{ scale: 1 }} transition={{ duration: .5, ease: 'easeOut' }} className="min-w-full object-cover" src="https://images.unsplash.com/photo-1597452485677-d661670d9640?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHxneW18ZW58MHx8MHx8fDA%3D" alt="" />
                    </motion.div>
                </div>
            </main>
        </section>
    )
}