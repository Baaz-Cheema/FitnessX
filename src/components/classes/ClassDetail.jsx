import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import ClassInfo from "./ClassInfo"

export default function ClassDetail() {
    const params = useParams()
    const paramName = params.className
    return (
        <section className="my-20 h-[100rem] relative">
            <main className="max-w-[80rem] mx-auto">
                <div className="mx-5 flex gap-10 relative">
                    <motion.div className="w-[65%]"
                        initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: [0, .5, 1] }} transition={{ duration: .5 }}>
                        <h2 className="text-black sm:text-center sm:text-[4rem] xs:text-[2.6rem] text-[5rem] uppercase font-montserrat font-extrabold leading-[4.5rem] sm:leading-[3.5rem] xs:leading-[2.5rem] mb-10 xs:mb-4">
                            Cycling
                        </h2>
                        <p className="font-montserrat mb-10 text-gray-500 md:text-center">
                            We’re a fitness hub with top-notch equipment, expert trainers, and diverse classes. Your health goals are our mission.
                        </p>
                        <div className="flex items-center justify-center relative overflow-hidden  ">
                            <motion.div whileHover={{ scale: .9, transition: { delay: 0, duration: .2 } }}
                                className="absolute z-[1] peer md:mr-0 rounded-full bg-white w-[8rem] shrink-0 h-[8rem] md:w-[6rem] md:h-[6rem] xs:w-[5rem] xs:h-[5rem] flex justify-center items-center cursor-pointer">
                                <i className='bx bxs-right-arrow text-[3.5rem] md:text-[2.5rem] xs:text-[2rem]'></i>
                            </motion.div>
                            <img className="object-cover  w-full max-h-[30rem] transition-all peer-hover:scale-105 peer-hover:z-[-1]" src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                        <h2 className="mt-32 text-white sm:text-center sm:text-[4rem] xs:text-[2.6rem] text-[5rem] uppercase font-montserrat font-extrabold leading-[4.5rem] sm:leading-[3.5rem] xs:leading-[2.5rem] mb-10 xs:mb-4">
                            Cycling
                        </h2>
                        <p className="text-zinc-500 font-montserrat">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt cupiditate adipisci beatae dicta, laudantium qui hic itaque quas eius voluptates in odio doloremque repellendus nobis non, dolorem, illum modi.
                            Nesciunt enim quo culpa saepe, quaerat harum totam dicta suscipit, recusandae unde quia atque deserunt hic nam optio ducimus mollitia. Rem quasi quam, dolore architecto nesciunt ut maxime fuga provident.
                            Id, doloribus minus! Ducimus, illo iste rem beatae explicabo sapiente odio id, error molestias necessitatibus aliquid iusto quos non vero recusandae nesciunt. Pariatur quasi repellendus repudiandae eaque nihil rem earum.
                            Quod repellendus perspiciatis quam distinctio illum pariatur, fugit quibusdam modi sunt eveniet officiis nulla, rerum rem, totam assumenda ut. Dicta repellendus optio quae neque soluta! Recusandae blanditiis minus fuga quos?
                            Nulla repellendus, nostrum id ullam expedita ipsam sequi animi accusamus, eveniet fugiat dolorem totam iusto deleniti hic. Magnam animi consectetur iste ratione porro praesentium ex. Molestias pariatur assumenda cumque repellat!
                            Fugiat impedit beatae illum? Voluptatum amet esse commodi modi ipsa aliquam, explicabo facilis nam debitis? Distinctio dolor eligendi, dolore dolorem eum pariatur doloribus architecto, unde hic adipisci laborum, consectetur est!
                            Nihil ipsum distinctio earum ex veritatis impedit dolore commodi excepturi quisquam fuga, et, rem qui voluptate debitis non nostrum illo, dolorem porro doloribus. Et amet, laborum architecto qui harum necessitatibus?
                            Dolorem et accusamus quis laudantium obcaecati minima eligendi laborum officiis libero iusto impedit animi reiciendis sint hic doloremque voluptatibus rerum voluptas, fugiat cupiditate cumque nemo molestias amet ratione cum. Omnis.
                            Nulla, vitae totam velit voluptatem nam itaque aspernatur aliquam omnis, quod laborum eveniet culpa esse hic exercitationem eligendi impedit? Exercitationem sequi libero cupiditate. Enim consequuntur ducimus commodi totam repudiandae quia!
                            Ab tenetur perferendis omnis possimus similique distinctio voluptatum exercitationem quas voluptas facere facilis doloremque, libero temporibus ea neque veniam harum itaque laborum rerum! Saepe fuga dicta laudantium recusandae voluptas delectus.
                        </p>



                    </motion.div>
                    <ClassInfo />
                </div>
            </main>
            <div className="bg-zinc-950 z-[-1] absolute h-[70%] bottom-0 left-0 right-0">

            </div>
        </section>
    )
}