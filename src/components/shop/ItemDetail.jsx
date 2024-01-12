import { motion, AnimatePresence } from "framer-motion"
import { useParams } from "react-router-dom"
import { products } from "../../UI/gymItems"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import ImagePreviewer from "./ImagePreviewer"
import { cartActions } from "../../store/CartStore"
import ItemDescription from "./ItemDescription"

export default function ItemDetail() {
    const [size, setSize] = useState('select size')
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    const [index, setIndex] = useState(0)


    const [showPreviewer, setShowPreviewer] = useState(false)

    const params = useParams()
    const product = products.filter(a => a.title === params.shopItem)[0]
    function addToCart() {
        if (size !== 'select size') {
            dispatch(cartActions.addItem({ ...product, size: size }))
            setError(false)
            closeCart()
            return
        }
        setError(true)
    }
    function closeCart() {
        dispatch(cartActions.showCart())
    }
    function handlePreviewer(val) {
        setShowPreviewer(true)
        setIndex(val)
    }
    useEffect(() => {
        if (showPreviewer) {
            document.body.style.overflow = 'hidden'; // Or other preferred method
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showPreviewer]);
    return (
        <>
            <motion.section className="py-20" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .3 }} >
                <main className="max-w-[80rem] mx-auto">
                    <div className="mx-5 ">
                        <div className="flex justify-center gap-20 lg:gap-10 lg:flex-col lg:items-center ">
                            <div className="w-5/12 flex flex-col gap-5 lg:w-8/12 md:w-full">
                                <div className="overflow-hidden group" onClick={() => handlePreviewer(1)}>
                                    <img className="object-cover w-full h-full group-hover:scale-105 transition-transform" src={product.image} alt="" />
                                </div>
                                <div className="flex gap-3">
                                    <div onClick={() => handlePreviewer(0)} className="group overflow-hidden">
                                        <img className="object-cover group-hover:scale-[1.6] transition-transform rotate-45 scale-150" src={product.image} alt="" />
                                    </div>
                                    <div onClick={() => handlePreviewer(1)} className="group overflow-hidden">
                                        <img className="object-cover group-hover:scale-105 transition-transform" src={product.image} alt="" />
                                    </div>
                                    <div onClick={() => handlePreviewer(2)} className="group overflow-hidden">
                                        <img className="object-cover group-hover:scale-[1.6] transition-transform -rotate-12 scale-150" src={product.image} alt="" />
                                    </div>
                                </div>
                            </div>
                            <AnimatePresence>
                                {showPreviewer && <ImagePreviewer showPreviewer={showPreviewer} index={index} setIndex={setIndex} image={product.image} setShowPreviewer={setShowPreviewer} />}
                            </AnimatePresence>
                            <div className="font-montserrat self-center w-5/12 lg:w-8/12 md:w-full">
                                <h3 className="uppercase font-bold text-5xl mb-5 sm:text-3xl">{product.title}</h3>
                                <p className="text-3xl sm:text-2xl flex gap-5 mb-5"> <span className="text-zinc-500 line-through" > ${product.price * 2}.00</span> <span className="font-semibold ">${product.price}.00 USD</span> </p>
                                <p className="text-zinc-500">{product.description}</p>
                                <hr className="my-10" />
                                <div onClick={() => setOpen(!open)} className="px-10 relative uppercase flex hover:border-black mb-10 items-center border-2 text-zinc-500 py-5 transition-all duration-300">
                                    <div className="w-full flex items-center justify-between cursor-pointer">
                                        <span>{size}</span>
                                        <i className='bx bx-chevron-down' ></i>
                                    </div>
                                    <AnimatePresence>
                                        {open && <motion.div layout style={{ height: open ? 'auto' : 0 }} className="bg-white absolute  py-5 overflow-hidden top-[4.1rem] list-none w-full left-0 right-0 border-2">
                                            <li onClick={() => setSize('large')} className="mb-2 cursor-pointer px-10 hover:bg-gray-100">Large</li>
                                            <li onClick={() => setSize('small')} className="mb-2 cursor-pointer px-10  hover:bg-gray-100">small</li>
                                            <li onClick={() => setSize('medium')} className=" cursor-pointer px-10  hover:bg-gray-100">medium</li>
                                        </motion.div>}
                                    </AnimatePresence>
                                </div>
                                {error && <p className="text-red-500 text-center pb-10">Size is required.</p>}

                                <button onClick={addToCart} className="font-bold uppercase w-full bg-black px-10 py-5 border text-white hover:bg-red-500 hover:-translate-y-[4px] transition-all duration-300 hover:text-white">add to cart</button>
                            </div>
                        </div>
                    </div>
                </main>
            </motion.section>
            <ItemDescription />
        </>
    )
}