import { motion, } from "framer-motion"
import { useState } from "react"
import PricingPanel from "../components/pricing/PricingPanel"

export default function Membership() {
    const [plan, setPlan] = useState(0)
    return (
        <section className="py-20 pt-32">
            <main className="max-w-[80rem] mx-auto relative">
                <div className="absolute -top-20 left-[13rem] -z-10 ">
                    <motion.img initial={{ scale: 1.2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: .5, duration: .3 }} className="w-10/12 lg:hidden " src="https://lh3.googleusercontent.com/pw/ABLVV87lH_nLDwBhZMGMEFvTpZkqbgUY2pIm6IWkcB5RWTf0ehtfDI56yJeb-mFxTnLf0EKcdaQnNCDQNohvzK5laXVbD0c9Y65n3ktyVfAQQA4xVOjwwS_z=w2400" alt="" />
                </div>
                <div className="flex justify-center mb-5">
                    <motion.h2 initial={{ scale: 2, opacity: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }}
                        className="text-zinc-950 text-center w-8/12 text-[5rem] sm:text-[4rem] xs:text-[2.6rem] uppercase font-montserrat font-extrabold leading-[4.5rem]  sm:leading-[3.5rem] xs:leading-[3rem] mb-5  lg:w-full">
                        Susbcribe to <br /> our gym
                    </motion.h2>
                </div>
            </main>
            <motion.div className="flex justify-around max-w-[80rem] mx-auto mb-10" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .2 }} >
                <div className="flex border-[2px]  font-montserrat font-xl uppercase text-black relative">
                    <motion.div layout transition={{
                        layout: { duration: 0.2 }
                    }}
                        className={`bg-red-500 border-red-500 py-3 w-[9rem] absolute top-0 bottom-0`} style={{ right: plan ? 0 : null }}></motion.div>
                    <div onClick={() => setPlan(0)} className={`py-3 w-[9rem] text-center z-[1] cursor-pointer ${!plan && 'text-white'}`}>Monthly</div>
                    <div onClick={() => setPlan(1)} className={`py-3 w-[9rem] text-center z-[1] cursor-pointer ${plan && 'text-white'}`}>Annual</div>
                </div>
            </motion.div>

            <PricingPanel plan={plan} />
        </section>
    )
}