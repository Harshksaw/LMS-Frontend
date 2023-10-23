import { useState } from "react";
import toast from "react-hot-toast";

import axiosInstance from "../Helper/axiosinstance";
import { isEmail } from "../Helper/regexMatch";
import HomeLayout from "../Layouts/HomeLayout";

export default function Contact() {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleInputChange(e) {
        const { name, value } = e.target;

        console.log(name, value);
        setUserInput({
            ...userInput,
            [name]: value,
        });
    }

    //api call

    async function onFormSubmit(event) {
        event.preventDefault();
        if (!userInput.email || !userInput.name || !userInput.message) {
            toast.error("All fields are necessary");
            return;
        }
        if (!isEmail(userInput.email)) {
            toast.error("In valid Email");
            return;
        }
        //api

        try {
            const response = axiosInstance.post("/contact", userInput);
            toast.promise(response, {
                loading: "Submiting your message",
                success: "Form submitted Successfully",
                error: "Failed to submit the form",
            });

            const contactResponse = await response;
            if (contactResponse?.data?.success) {
                setUserInput({
                    //setting default value after  success
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (err) {
            toast.error("Operation failed");
        }
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form
                    className="flex flex-col  items-center justify-center bg-blue-700 p-5 rounded-md gap-2 text-yellow-200 shadow-[0_0_13px_blue] w-[22rem] "
                    noValidate
                    onSubmit={onFormSubmit}
                >
                    <h1 className="text-3xl font-semibold">Contact Form</h1>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-xl font-semibold">
                            Name
                        </label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            onChange={handleInputChange}
                            value={userInput.name}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="text-xl font-semibold">
                            EMAIL ID
                        </label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleInputChange}
                            value={userInput.email}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message" className="text-xl font-semibold">
                            Message
                        </label>
                        <textarea
                            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
                            id="message"
                            type="text"
                            name="message"
                            placeholder="Enter your Message"
                            onChange={handleInputChange}
                            value={userInput.message}
                        />
                    </div>
                    <button className="w-full bg-green-300 hover:bg-green-900  transistion-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer text-red-500">
                        Submit{" "}
                    </button>
                </form>
            </div>
        </HomeLayout>
    );
}
