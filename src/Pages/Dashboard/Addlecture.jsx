import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { addCourseLectures } from "../../Redux/Slices/LectureSlice";

function AddLecture() {


    const coursedetails = useLocation().state;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userInput, setUserInput] = useState({
        id: coursedetails._id,
        lecture: undefined,
        title: "",
        description: "",
        videoSrc: " "
    })
    function handleInputChange(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })

    }
    function handleVideo(e) {
        const video = e.target.files[0];
        const source = window.URL.createObjectURL;
        console.log(source)
        setUserInput({
            ...userInput,
            [name]: value,
            videoSrc: source
        })
    }
    async function onFormSubmit(e) {
        e.preventDefault()
        if (!userInput.lecture || !userInput.title || !userInput.description) {
            toast.error("All field are mandatory ")
            return;
        }
        const response = await dispatch(addCourseLectures(userInput))
        if (response?.payload?.success) {
            navigate(-1);
            setUserInput({
                lecture: undefined,
                title: "",
                description: "",
                videoSrc: " "

            })
        }
    }

    useEffect(()=>{
        if(!coursedetails){
            navigate("/courses")
        }

    },[])

    return (
        <HomeLayout>
            <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10  mx-16 text-center">
                <div className='text-center text-2xl font-semibold text-yellow-500 shadow-[0_0_10px_blue] w-96 rounded-lg gap-5 p-2'
                >
                    <header className="flex items-center justify-center relative">
                        <button className="absolute left-2 text-xl text-green-400"
                            onClick={() => navigate(-1)}
                        >
                            <AiOutlineArrowLeft />

                        </button>
                        <h1 className="text-xl text-yellow-300 font-semibold">

                            Add Lecture
                        </h1>
                    </header>
                    {/* Course Name : {coursedetails?.title} */}
                </div>
                <form className='flex flex-col gap-3 p-3 w-[30rem] rounded-lg shadow-[0_2_10px_blue]'
                    onSubmit={onFormSubmit}
                >
                    <input type="file" name="lecture" id="lecture" className="p-2 border border-gray-300 rounded-lg"
                        onChange={handleVideo}
                    />
                    <input type="text" name="title" id="title" placeholder="Title" className="p-2 border border-gray-300 rounded-lg"
                        value={userInput.title}
                        onChange={handleInputChange}
                    />
                    <textarea name="description" id="description" cols="30" rows="10" placeholder="Description" className="p-2 border border-gray-300 rounded-lg"
                        value={userInput.description}
                        onChange={handleInputChange}
                    />
                    {userInput.videoSrc ?(
                        <video 
                        muted 
                        src={userInput.videoSrc}
                        controls
                        controlsList="nodownload nofullscreen"
                        disablePictureInPicture
                        className="object-full rounded-tl-lg w-full">

                        </video>
                    ):(
                        <div className="h-48 border-flex items-center justify-center cursor-pointer">
                            <label className="text-xl font-semibold text-cl cursor-pointer " htmlFor="lecture">Choose your video</label>
                            <input type="file" className="hidden" id="lecture" onChange={handleVideo}  
                            accept="video/mp4 video/x-mp4 video/*"/>

                        </div>
                    )

                    }
                    <button type="submit" className="p-2 btn-primary font-semibold text-lg  bg-gray-800 text-white rounded-lg">Add New Lecture</button>
                </form>
            </div>



        </HomeLayout>
    );
}

export default AddLecture;