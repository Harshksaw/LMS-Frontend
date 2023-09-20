import { useNavigate } from "react-router-dom";

export default function Notfound(){
    const navigate = useNavigate();
    return(
        <div className = "h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className = "text-9xl font-extrabold text-white tracking-wider">
                404
            </h1>
            <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">PAGE NOT FOUND ....</div>
            <button className="mt-5">
                <a className="relative inline-block text-sm font-medium text-[#ff6A3D group active:text-yellow-500 focus:outline-none focus:out ">
                    <span  onClick = {() => navigate(-1) }className = "relative block px-8 bg-[#1a2238] border border-current">
                    GO Back
                     </span>
                </a>


            </button>

        </div>
    )
}