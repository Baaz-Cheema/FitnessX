export default function PlusButton() {
    return (
        <div className="absolute p-2 w-[5rem] h-[5rem] bg-red-500 group-hover:bg-zinc-950 bottom-6 right-4 transition-colors z-10">
            <div className="w-full h-full scale-75">
                <div className="w-[2px] h-1/2 bg-white mx-auto group-hover:rotate-[-45deg] group-hover:translate-x-5 group-hover:translate-y-[5px] transition-transform">

                </div>
                <div className="w-full h-[2px] bg-white"></div>
                <div className="w-[2px] h-1/2 bg-white mx-auto group-hover:rotate-[45deg] group-hover:translate-x-5 group-hover:-translate-y-[5px] transition-transform">

                </div>
            </div>
        </div>
    )
}