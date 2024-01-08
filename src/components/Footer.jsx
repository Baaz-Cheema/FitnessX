export default function Footer() {
    return (
        <section className="bg-zinc-950 py-20 pb-0">
            <main className="mx-auto max-w-[80rem]">
                <div className="font-montserrat flex justify-between fint-slate-50 mx-5 gap-6 lg:grid lg:grid-cols-2 lg:justify-items-center">
                    <div className="flex flex-col gap-3 text-slate-50 mb-16" >
                        <h2 className="font-semibold text-2xl mb-2 ">Company</h2>
                        <p className="">About us</p>
                        <p>Why us</p>
                        <p>Security</p>
                        <p>Partnership</p>
                    </div>
                    <div className="flex flex-col gap-3 text-slate-50 " >
                        <h2 className="font-semibold text-2xl mb-2 ">Categories</h2>
                        <p>Yoga</p>
                        <p>Strength Training</p>
                        <p>HIIT</p>
                        <p>Bodybuilding</p>
                    </div>
                    <div className="flex flex-col gap-3 text-slate-50 lg:pl-8 xs:pl-5" >
                        <h2 className="font-semibold text-2xl mb-2 ">Help</h2>
                        <p className="">Account</p>
                        <p>Support</p>
                        <p>Privacy Policy</p>
                        <p >Terms & Conditions</p>
                    </div>
                    <div className="flex flex-col gap-3 text-slate-50 lg:max-w-[11rem]" >
                        <h2 className="font-semibold text-2xl mb-2 ">Contact us</h2>
                        <p className="flex items-center gap-1"><i className='text-red-500 bx bxs-phone text-2xl'></i>+1(405) 567 9820 </p>
                        <p className="flex items-center gap-1"> <i className='text-red-500 text-2xl bx bxs-envelope' ></i> fitnessX@info.com</p>
                        <p className="flex items-center max-w-[15rem] gap-1"> <i className='text-red-500 text-2xl bx bxs-pin' ></i> 123 Main Street
                            Springfield, IL 62701
                            US</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 text-slate-50 lg:col-span-2 lg:my-6">
                        <h2 className="font-semibold text-2xl mb-2 capitalize text-center ">Subscribe to newsletter</h2>
                        <div className="rounded-3xl py-1 bg-white flex items-center justify-between w-10/12">
                            <input className=" text-black pl-4 bg-transparent focus:outline-none" placeholder="example@email.com" type="text" />
                            <button className="bg-red-500 rounded-full mr-1">
                                <i className='bx bxs-paper-plane text-slate-50 px-1 text-3xl' ></i>
                            </button>
                        </div>

                        <p className="md:text-center">Never miss any updates or exclusive offers</p>
                    </div>
                </div>
                <hr className="bg-zinc-600 h-1 border-none" />
                <div className="py-5 flex items-center justify-between mx-5 md:flex-col md:items-center md:gap-5">
                    <div>
                        <h3 className="uppercase text-slate-50 flex  text-2xl font-bold md:pr-6"><i className='bx bx-dumbbell text-red-500 text-3xl mr-3'></i> FitnessX</h3>
                    </div>
                    <p className="text-zinc-400">@2023 FitnessX. All copywrites reserved.</p>
                    <div className="flex items-center gap-3">
                        <i className='bx bxl-facebook bg-slate-100 rounded-full px-1 text-xl' ></i>
                        <i className='bx bxl-instagram bg-slate-100 rounded-full px-1 text-xl' ></i>
                        <i className='bx bxl-twitter bg-slate-100 rounded-full px-1 text-xl' ></i>
                        <i className='bx bxl-linkedin bg-slate-100 rounded-full px-1 text-xl' ></i>
                    </div>
                </div>
            </main>
        </section>
    )
} 