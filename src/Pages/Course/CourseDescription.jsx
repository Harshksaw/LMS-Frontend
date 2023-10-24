import { useEffect } from "react";
import { useLocation } from "react-router-dom"

import HomeLayout from "../../Layouts/HomeLayout";


export default function CourseDescription() {

    const {state}= useLocation();
    const locator = useLocation();

    useEffect(()=>{
        console.log(locator)
    },[])
  return (
    <div>
        <HomeLayout>
                <div className="min-h-[90vh] px-20 pt-12 flex flex-col items-center justify-center text-white "></div>
                    <div className="grid grid-cols-2 gap-10 py-10 relative">
                        <div className="space-y-5"></div>
                        <img 
                        className="w-full h-64"
                        alt=""
                        src={state?.thumbnail?.secure_url}/>

                        <div className="space-y-4">

                        <div className="flex  flex-col items-center justify-between text-xl">
                            <p className="font-semibold">
                                <span>
                                    Total Lectures :{""}
                                </span>
                                {state?.numberOfLectures}
                            </p>
                            <p className="font-semibold">
                                <span>
                                    Instructor :{""}
                                </span>
                                {state?.createdBy}
                            </p>
                        
                        </div>
                        {
                            
                        }
                        </div>

                    </div>
            
        </HomeLayout>
    </div>
  )
}
