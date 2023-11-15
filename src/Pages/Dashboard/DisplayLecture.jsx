import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import HomeLayout from '../../Layouts/HomeLayout';
import { deleteCourseLectures, getCourseLectures } from '../../Redux/Slices/LectureSlice';
function DisplayLectures() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();
    const { lectures } = useSelector((state) => state.lecture)
    const { role } = useSelector((state) => state.auth)
    async function onLectureDelete(courseId , lectureId){
        console.log("courseID" , courseId,"lectureUd", lectureId)
        await dispatch(deleteCourseLectures( {courseId : courseId , lectureId : lectureId} ))

        await  dispatch(getCourseLectures(state._id))

    }

    const [currentVideo, setcurrentVideo] = useState(0);
    useEffect(() => {
        if (!state) {

            navigate("/courses")
            dispatch(getCourseLectures(state._id));
        }
    }, [])
    return (

        <HomeLayout>

            <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-center">

                <div className='text-center text-2xl font-semibold text-yellow-500'
                >Course Name : {state?.title}
                </div>
                {lectures && lectures.length > 0  &&
                <div className='flex justify-center gap-10 w-full'>
                    {/* {left section}  and displaying course details */}
                    <div className='space-y-5 p-3 w-[30rem] rounded-lg shadow-[0_2_10px_blue]'>

                        <video src={state && lectures[currentVideo]?.lecture?.secure_url}
                            className='object-full rounded-tl-lg rounded-tr-lg w-full'
                            controls
                            disablePictureInPicture
                            muted
                            controlsList='nodownload'


                        />
                        <h2>
                            <span className='text-yellow-500'>Title : {" "}
                            </span>
                            {lectures && lectures[currentVideo]?.title}


                        </h2>
                        <p> <span className='text-green-400 line-clamp-4 '>Description {" "}</span></p>
                        {lectures && lectures[currentVideo]?.description}



                    </div>
                    <ul className='w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4'>
                        <li className='font-semibold text-xl text-yellow-400 flex items-center justify-between'>

                            <p>Lectures List </p>
                            {role === 'ADMIN' && (
                                <button className='btn-primary px-2 rounded-md font-semibold text-sm' onClick={()=> navigate("/course/addlecture" , {state : {...state}})}>
                                    Add new Lecture</button>
                            )}
                        </li>
                        {lectures &&
                            lectures.map((lecture, idx) => {
                                return (
                                    <l1 key={lecture._id} className="space-y-2">
                                        <p className='cursor-pointer' onClick={() => setcurrentVideo(idx)}>

                                            <span>
                                                {" "}lecture {idx + 1}: {" "}
                                            </span>
                                            {lecture?.title}
                                        </p>
                                        {role === 'ADMIN' && (
                                            <button onClick={onLectureDelete(state?._id, lecture?._id) }
                                            className='btn-accent bg-red-500 px-2 rounded-md font-semibold text-sm'>
                                                Delete lecture</button>
                                        )}


                                    </l1>
                                )
                            })}
                    </ul>

                </div>}


            </div>
        </HomeLayout>
    );
}

export default DisplayLectures;