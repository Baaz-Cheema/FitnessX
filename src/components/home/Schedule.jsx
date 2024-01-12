import { motion } from "framer-motion"

export default function Schedule() {
    return (
        <div className="max-w-[70rem] mx-auto">
            <div className="flex justify-between gap-10 px-5 flex-wrap w-full">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5 }} className="flex gap-5 text-white font-montserrat xs:flex-col xs:gap-1">
                    <div>
                        <i className='text-6xl bx bx-envelope'></i>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-3">Contact</h3>
                        <a href="mailto:chrisbahadur1@gmail.com" className="underline mb-2 block">CONTACT@FITNESSX.COM</a>
                        <a href="https://wa.me/923236333123" className="underline block">(0323) 6333 123</a>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: .2 }} className="flex gap-5 text-white font-montserrat xs:flex-col xs:gap-1 sm:w-full">
                    <div>
                        <i className='text-6xl bx bx-time'></i>
                    </div>

                    <div className="text-gray-300 flex flex-col xs:gap-18">
                        <h3 className="text-2xl mb-3 text-white">Open Hours</h3>
                        <div className="flex justify-between gap-5">
                            <p className="mb-2 uppercase whitespace-nowrap">Monday - Friday</p>
                            <p className="mb-2 uppercase whitespace-nowrap">7:00am - 10:00pm</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="mb-2 uppercase">Sunday</p>
                            <p className="mb-2 uppercase whitespace-nowrap">7:00AM - 10:00Pm</p>
                        </div>
                        <div className="flex justify-between  items-center">
                            <p className="mb-2 uppercase">Saturday</p>
                            <p className="mb-2 uppercase whitespace-nowrap">9:00am - 10:00pm</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: .4 }} className="flex gap-5 text-white font-montserrat xs:gap-1 xs:flex-col ">
                    <div>
                        <i className='text-6xl bx bx-pin'></i>
                    </div>
                    <div className="text-gray-300">
                        <h3 className="text-2xl mb-3 text-white">Contact</h3>
                        <p className="mb-2">123 Main St.
                            Springfield,</p>
                        <p className="">IL 62701
                            USA</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}