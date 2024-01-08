import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const testimonials = [
    {
        name: "Chris Redfield",
        src: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwZ3V5fGVufDB8fDB8fHwy',
        testimonial: "I've been a subscriber for six months, and I'm extremely pleased with the quality of the classes. The instructors are knowledgeable and engaging, and the class variety keeps things interesting. Plus, the eBook access is a great bonus!"
    },
    {
        name: "Jane Smith",
        src: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGd5bSUyMGd1eXxlbnwwfHwwfHx8Mg%3D%3D',
        testimonial: "The group classes are fantastic! They're interactive, fun, and I've learned so much. The annual subscription is definitely worth it, especially with the discount. Highly recommended!"
    },
    {
        name: "Alex Johnson",
        src: 'https://images.unsplash.com/photo-1504364269860-8be73aabdff2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bSUyMGd1eXxlbnwwfHwwfHx8Mg%3D%3D',
        testimonial: "I started with the monthly subscription, but quickly switched to the annual plan to take advantage of the discount and extra benefits. The webinar access and priority booking have been game-changers for me. Best decision I've made this year!"
    },
    {
        name: "John Claire",
        src: 'https://images.unsplash.com/photo-1606889463862-a8fc57a706ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGd5bSUyMGd1eXxlbnwwfHwwfHx8Mg%3D%3D',
        testimonial: "Initially, I opted for the monthly subscription. However, seeing the array of benefits and the attractive discount, I quickly transitioned to the annual plan. The privilege of priority booking and access to exclusive webinars have truly elevated my experience. Opting for this service has been the highlight of my year!"
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0)

    function right() {
        index < 3 ? setIndex(prev => prev + 1) : setIndex(0)
    }
    function left() {
        setIndex(index !== 0 ? index - 1 : 3)
    }

    useEffect(() => {
        const slider = setTimeout(() => {
            if (index === 3) {
                setIndex(0)
                return
            }
            setIndex(prev => prev + 1)

        }, 5000)
        return () => clearTimeout(slider)
    }, [index])

    return (
        <section className="py-20 pt-32 lg:pt-20 bg-zinc-750 relative">
            <div className="flex absolute top-10 left-28 -z-[1]">
                <motion.img initial={{ scale: 1.2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: .5, duration: .3 }} className="w-8/12  lg:hidden" src="https://lh3.googleusercontent.com/pw/ABLVV85wIxqa3th10OEKPBRZ4F_2eytQcfuU9W30ZK9QgmIUM1zxVPZbO3mtocigWRQSsh21HSLxs40MQrPq6NkBPzboDJZLihiWGhtDU5-LW_mzezMnmRXT=w2400" alt="" />
            </div>
            <main className="max-w-[80rem] flex justify-between mx-auto relative lg:flex-col lg:items-center">

                <div className="w-1/2 ml-5 lg:ml-0 lg:w-11/12 lg:text-center">
                    <motion.h2 initial={{ scale: 1.2, opacity: 0 }} viewport={{ once: true }} whileInView={{ scale: 1, opacity: [0, .5, 1] }} transition={{ duration: .5 }}
                        className="text-zinc-950 w-10/12 mb-7 md:text-center text-[3.3rem] sm:text-[2.3rem] xs:text-[1.9rem] uppercase font-montserrat font-extrabold leading-[3.5rem] sm:leading-[2.5rem]  lg:w-full">
                        Hear our beloved clients
                    </motion.h2>
                    <motion.div className="lg:flex justify-center" initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .2 }}>
                        <p className="mb-7 text-zinc-500 font-montserrat w-[30rem] lg:text-center">Discover how our services have positively impacted the lives of our subscribers. Their experiences speak volumes about the value we provide.</p>
                    </motion.div>

                    <motion.div className="flex gap-5 mb-20 lg:justify-center sm:flex-col sm:items-center sm:mb-10" initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .2 }}>
                        <div className="flex">
                            {testimonials.map((a) => <img className="w-[60px] h-[60px] rounded-full object-cover border-[3px] border-white -m-2" key={a.src} src={a.src} />)}
                            <span className="w-[60px] h-[60px] -m-2 bg-red-500 rounded-full flex items-center justify-center border-[3px] border-white">
                                <i className='bx bx-plus text-2xl text-white' ></i>
                            </span>
                        </div>
                        <div className="flex items-center">
                            <p className=" text-zinc-700 flex items-center text-xl"> <i className='bx bxs-star text-2xl text-yellow-500 mr-3'></i>4.9 (450 Reviews)</p>
                        </div>
                    </motion.div>
                    <div className="flex lg:justify-center items-center gap-3 lg:mb-10">
                        <img className="w-[45px] opacity-30 " src="https://www.svgrepo.com/show/306882/trustpilot.svg" alt="" />
                        <p className="text-zinc-500 text-4xl" >Trustpilot</p>
                    </div>
                </div>


                <motion.div className="w-5/12  relative lg:w-11/12 " initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .2 }}>
                    <div className="absolute flex justify-between w-[105%] z-10 -right-3 top-[34%] ">
                        <button onClick={left} className="w-10 h-10 bg-zinc-300 hover:bg-red-500 hover:text-white"><i className='bx bx-left-arrow-alt text-3xl ' ></i></button>
                        <button onClick={right} className="w-10 h-10 bg-zinc-300  hover:bg-red-500 hover:text-white" ><i className='bx bx-right-arrow-alt text-3xl' ></i></button>
                    </div>
                    <div className="overflow-hidden lg:mx-auto sm:w-[25rem] xs:w-[20rem]">
                        <div key={index} className={`flex items-center `} style={{ transform: `translateX(-${index * 100}%)` }}>
                            {testimonials.map((a) => <div key={a.name} className={`py-5 px-16 sm:px-10 text-slate-50 min-w-full bg-black`}>
                                <motion.div key={a.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                                    <div className="flex items-center gap-5">
                                        <img className="w-[80px] h-[80px] rounded-full object-cover" src={a.src} alt="" />
                                        <div>
                                            <h3 className="font-montserrat text-xl font-semibold">{a.name}</h3>
                                            <p className="font-montserrat">Happy customer</p>
                                        </div>
                                    </div>
                                    <p className="mb-4 mt-3 text-xl text-yellow-500">
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                    </p>
                                    <p className="font-raleway">{a.testimonial}
                                    </p>
                                </motion.div>
                            </div>)}
                        </div>
                    </div>
                </motion.div>
            </main>
        </section >
    )
}