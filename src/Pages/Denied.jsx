import { Navigate } from "react-router-dom";

function Denied(){
    return(

        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h2 className="text-9xl m-5 font-extrabold text-white tracking-tighter ">403</h2>
            <div className="bg-black text-white text-sm rounded rotate-12 absolute">
                Access Denied
            </div>
            <button onClick={()=> Navigate(-1)}
                className="mt-5 "
            >
                <span ></span>
                <span className="relative block px-8 py-3 bg-[#1A2239] border border-current">Go Back</span>

            </button>
        </main>
    )
}
export default Denied;