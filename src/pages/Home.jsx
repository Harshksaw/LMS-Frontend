import { FaArrowRight } from "react-icons/fa"                                  // Icons Import
import { Link } from "react-router-dom"
import Banner from "../assets/Images/banner.mp4"   
const Home = ()=>{
    return(
        <div>
            <div>

            <Link to={"/signup"}>                                                       
            <div className = 'group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none'>
               <div className = "flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                    <p>Become an Instructor</p>
                    <FaArrowRight />                                                     {/* Put group in the parent element and group-hover: in all those child elements where we want the style on hover so when we hover on any space under parent then */}  
                </div>                                                                   {/* all child which contain group-hover: get styled  , for more detail see notes in public */} 
            </div>
        </Link>


            </div>
            </div>




    </div>
    )
}
export default Home;