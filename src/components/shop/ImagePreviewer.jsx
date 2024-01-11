import { motion } from "framer-motion"

export default function ImagePreviewer({ image, setShowPreviewer, index, setIndex }) {

    function moveRight() {
        if (index < 3) {
            setIndex(prev => prev + 1)
        }
    }
    function moveLeft() {
        if (index > 0) {
            setIndex(prev => prev - 1)
        }
    }
    return (
        <motion.section initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: 0 }}
            style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
            className='fixed z-40 top-0 bottom-0 right-0 left-0 h-full w-full sm:flex sm:items-center sm:justify-center'>

            <div className="py-10 flex justify-center h-full relative ">
                <div onClick={() => setShowPreviewer(false)} className="absolute top-0 right-10 sm:right-4 text-[3rem] text-white cursor-pointer hover:scale-110 transition-transform z-[120]">
                    <i className='bx bx-x  z-[120]'></i>
                </div>
                <div className=" absolute xs:hidden w-full top-[40%]  flex justify-between text-[4rem] text-gray-400 sm:text-white sm:z-[0]">
                    <i onClick={moveLeft} className={`bx bx-chevron-left cursor-pointer hover:text-white sm:bg-opacity-55 transition-colors ${index === 0 && 'hidden'}`}></i>
                    <i onClick={moveRight} className={`bx bx-chevron-right cursor-pointer hover:text-white  sm:bg-opacity-55 transition-colors ml-auto ${index === 2 && 'hidden'}`}></i>
                </div>
                <div className="w-full h-full flex flex-col sm:justify-center items-center gap-5">
                    <div className="overflow-hidden h-[90%] sm:h-[70%] sm:w-full bg-gray-100 sm:flex sm:items-center sm:justify-center">
                        <motion.img animate={{ opacity: [0, 1] }} key={index} className={`object-cover w-full h-full xs:w-auto xs:h-auto ${index === 0 && 'rotate-45 scale-150'} ${index === 2 && '-rotate-12 scale-150'} `} src={image} alt="" />
                    </div>
                    <div className="flex gap-3 h-[11.5%] w-11/12 self-center items-center justify-center sm:z-[10]">
                        <div onClick={() => setIndex(0)} className={`group flex justify-center items-center overflow-hidden  h-full w-[5rem]`}>
                            <img className={`object-cover group-hover:scale-[1.6] transition-transform rotate-45 scale-150 ${index === 0 && 'brightness-50'}`} src={image} alt="" />
                        </div>
                        <div onClick={() => setIndex(1)} className="group flex justify-center items-center overflow-hidden h-full w-[5rem]">
                            <img className={`object-cover group-hover:scale-105 transition-transform ${index === 1 && 'brightness-50'}`} src={image} alt="" />
                        </div>
                        <div onClick={() => setIndex(2)} className="group flex justify-center items-center overflow-hidden h-full w-[5rem]">
                            <img className={`object-cover group-hover:scale-[1.6] transition-transform -rotate-12 scale-150 ${index === 2 && 'brightness-50'}`} src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}