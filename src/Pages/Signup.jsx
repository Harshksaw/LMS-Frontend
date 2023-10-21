import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";


export default function Signup() {
    const [previewImage, setPreviewImage] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [signupData , setSignupData] = useState({
        fullName :"",
        email: "",
        password: "",
        avatar : ""
    })
   
    function handleUserInput(e){
        const {name , value } = e.target;  //it will handle both simultanously

        setSignupData({
            ...signupData,
            [name] : value

            
        })
        console.log([name])

    }
    function getImage(event){
        event.preventDefault();

        const uploadImage = event.target.files[0];

        if(uploadImage){
            setSignupData({
                ...signupData,
                avatar:uploadImage
            });
            //file reader
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadImage);
            fileReader.addEventListener("load", function(){
                
                setPreviewImage(this.result)
            })
        }
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[90vh] w-full">

                <form className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-80 shadow-[1_1_10px_black]">
                    <h1 className="text-center text-3xl font-mono">Registration page</h1>
                    <label htmlFor="image-upload" className="cursor-pointer">
                        {
                            previewImage ? (
                                <img className="w-24 h-24 rounded-full m-auto " src={previewImage} alt="" />
                            ) : (
                                <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                            )
                        }

                    </label>
                    <input
                        onChange={getImage}
                        className="hidden "
                        type="file"
                        name="image_uploads"
                        id="image-uploads"
                        accept=".jpg, .jpeg , .png, .svg"
                    />

                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">Name</label>
                        <input
                            type="text"
                            required
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your Name"
                            className="bg-transparent py-2 py-1 border" 
                            value={signupData.fullName}
                            onChange={handleUserInput}
                            />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input
                            type="email"
                            required
                            name="email"
                            id="email"
                            placeholder="Enter your Email "
                            className="bg-transparent py-2 py-1 border" 
                            value={signupData.email}
                            onChange={handleUserInput}
                            />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input
                            type="password"
                            required
                            name="password"
                            id="password"
                            placeholder="Enter your Password "
                            className="bg-transparent py-2 py-1 border"
                            value={signupData.password}
                            onChange={handleUserInput}
                             />
                    </div>
                    <button type="submit" className="mt-2 w-full hover: bg-yellow-300 bg-red-600   transisition-all ease-in-out duration-300 rounded-md py-2 font-bold text-2xl cursor-pointer">
                        Create Account

                    </button>
                    <p>
                        Already Have an Account ? <Link to ="/login"  className = "link text-accent cursor-pointer "/>
                    </p>



                </form>
            </div>


        </HomeLayout>
    )
}
