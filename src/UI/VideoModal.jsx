import { motion } from "framer-motion";
import { useRef } from "react";

export default function VideoModal({ setOpen }) {
    const frameRef = useRef()
    return (
        <motion.section initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: 0 }}
            style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
            className='fixed z-40 top-0 bottom-0 right-0 left-0 h-full w-full sm:flex sm:items-center sm:justify-center'
            onClick={() => setOpen(false)}>

            <div className="py-10 flex justify-center items-center w-full h-full relative" >
                <div onClick={() => setOpen(false)} className="absolute top-0 right-10 sm:right-4 text-[3rem] text-white cursor-pointer hover:scale-110 transition-transform z-[120]">
                    <i className='bx bx-x z-[120]'></i>
                </div>

                <div className="w-[80%] h-[80%] lg:w-[95%] sm:w-full lg:h-[65%] sm:h-[40%] flex justify-center items-center gap-5"
                    onClick={(e) => e.stopPropagation()}>
                    <motion.div className="w-full h-full bg-transparent sm:flex sm:items-center sm:justify-center relative" initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}>
                        {<iframe ref={frameRef} allowFullScreen className="h-full w-full bg-black" src="https://www.youtube.com/embed/qt-sLC7Cusg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                        }

                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}