export default function InfoCard({ title, image, date, para }) {
    return (
        <div className={`flex-1 flex flex-col font-montserrat ${para ? 'text-black' : 'text-slate-50'} items-start  lg:max-w-[500px] blog`} >
            <div className="overflow-hidden w-full">
                <img className="transition-transform w-full" src={image} alt="" />
            </div>
            {date && <p className="rounded-3xl px-5 py-2 border-2 mt-5 text-slate-50">{date}</p>}
            <h3 className="text-2xl mt-5 mb-7 font-bold" >{title}</h3>
            {para && <p className="">{para}</p>}
            <button className={`transition-all flex items-center gap-1 mb-5 text-xl mt-auto py-3 rounded-lg font-montserrat font-bold ${para ? 'text-black' : 'text-slate-50'}`}>Read More <i className='bx bx-chevron-right text-[2.5rem]' ></i></button>
        </div>
    )
}