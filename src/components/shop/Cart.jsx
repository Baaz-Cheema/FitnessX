import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/CartStore"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Cart({ closeCart, data }) {
    const [checkout, setCheckout] = useState(false)
    const subTotal = data.reduce((p, c) => p + c.price * c.quantity, 0)
    const dispatch = useDispatch()
    function removeItem(id) {
        dispatch(cartActions.removeItem(id))
    }
    function updateValue(item, e) {
        dispatch(cartActions.updateValue({ item: item, quantity: parseInt(e.target.value) }))
    }
    function emptyCart() {
        setCheckout(true)
        dispatch(cartActions.emptyCart())
    }
    function quitCart() {
        setCheckout(false)
        closeCart()
    }

    return (
        createPortal(<>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                exit={{ opacity: 0 }}
                style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0, 0, 0, 0.70)' }}
                className='fixed z-40 top-0 bottom-0 right-0 left-0'
                onClick={quitCart}
            />
            <motion.dialog
                open
                initial={{ scale: .9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .9, opacity: 0 }}
                transition={{ type: "spring", duration: .5 }}
                className='bg-zinc-950 fixed top-0 bottom-0 z-50 font-montserrat text-white w-[30rem] h-[43rem] xs:h-full sm:w-full overflow-hidden drop-shadow-2xl'>
                <div className="border-b flex justify-between items-center">
                    <h3 className="text-2xl uppercase px-3 py-5  font-bold">Your cart</h3>
                    <i onClick={closeCart} className='bx bx-x text-5xl' ></i>
                </div>

                <div className="flex flex-col h-full">
                    <AnimatePresence mode="wait">
                        {data.length > 0 && <motion.div key={'cart'} className="overflow-auto flex-[.7] scrollbar" exit={{ y: -40, opacity: 0 }}>
                            <AnimatePresence>
                                {data.length > 0 && data.map((a) =>
                                    <motion.div layout key={`${a.id}-${a.size}`} className="px-3 py-5 flex gap-3" exit={{ y: -40, opacity: 0 }} >
                                        <div className="w-[30%]">
                                            <img src={a.image} className="object-cover" alt="" />
                                        </div>
                                        <div className="w-[70%] flex flex-col">
                                            <div className="flex justify-between ">
                                                <h2 className="font-bold mb-2 text-lg uppercase sm:mb-1 xs:text-base">{a.title}</h2>
                                                <input onBlur={(e) => updateValue(a, e)} type="number" min={1} className="bg-black border text-white pl-2 w-10" defaultValue={a.quantity} />
                                            </div>

                                            <p className="mb-1">$ {a.price}.00 USD</p>
                                            <p className="mb-4 sm:mb-1 capitalize"><span className="text-zinc-400">Size</span>: {a.size}</p>
                                            <p onClick={() => removeItem(a)} className="underline text-zinc-400 cursor-pointer">Remove</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>}
                        {data.length === 0 && !checkout &&
                            <motion.div key={'fallback'} className="flex flex-col items-center  flex-[.7]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <p className="mb-5 text-gray-400 text-2xl font-montserrat pt-32">Cart is Empty</p>
                                <Link className="w-full" to={'/shop'} onClick={closeCart}>
                                    <button className="font-bold uppercase mx-auto block w-8/12 bg-white px-10 py-5 text-black hover:bg-red-500 hover:-translate-y-[4px] transition-all duration-300 hover:text-white">Shop Items</button>
                                </Link>
                            </motion.div>
                        }
                        {data.length === 0 && checkout &&
                            <motion.div key={'Checkout'} className="flex flex-col items-center  flex-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <p className="mb-5 text-gray-400 text-2xl font-montserrat pt-32 ml-5">Your order <span className="font-bold uppercase">{Math.random().toString(16).slice(2)}</span> has been received!  </p>
                                <Link className="w-full" to={'/shop'} onClick={closeCart}>
                                    <button className="font-bold uppercase mx-auto block w-8/12 bg-white px-10 py-5 text-black hover:bg-red-500 hover:-translate-y-[4px] transition-all duration-300 hover:text-white">Shop more</button>
                                </Link>
                            </motion.div>
                        }
                    </AnimatePresence>
                    {data.length !== 0 && !checkout && <div className="flex-[.3] border-t px-5 py-5">
                        <div className="flex justify-between items-center mb-5">
                            <p className="text-zinc-400 uppercase">subtotal</p>
                            <p className="font-bold text-3xl xs:text-2xl">${subTotal}.00</p>
                        </div>

                        <button onClick={emptyCart} className="font-bold uppercase mx-auto block w-8/12 bg-white px-10 py-5  text-black hover:bg-red-500 hover:-translate-y-[4px] transition-all duration-300 hover:text-white">checkout</button>

                    </div>}
                </div>

            </motion.dialog >
        </>, document.getElementById('modal'))
    )
}