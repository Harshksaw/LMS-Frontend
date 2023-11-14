import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import { login } from "../Redux/Slices/AuthSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // for user input
    const [LoginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    // function to set the onLogindata
    const handleUserInput = (event) => {
        const { name, value } = event.target;
        setLoginData({
            ...LoginData,
            [name]: value,
        });
    };

    const onLogin = async (event) => {
        event.preventDefault();

        // checking the empty fields
        if (!LoginData.email || !LoginData.password) {
            toast.error("Please fill all the fields");
            return;
        }

        // creating the form data from the existing data
        const formData = new FormData();

        formData.append("email", LoginData.email);
        formData.append("password", LoginData.password);

        // calling create account action
        const res = await dispatch(login(LoginData));

        // redirect to login page if true
        if (res.payload.success) {
            navigate("/");
        }

        // clearing the onLogininputs
        setLoginData({
            email: "",
            password: "",
        });
    };

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form
                    onSubmit={onLogin}
                    className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-2xl font-bold">Login Page</h1>

                    {/* input for email */}
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold" htmlFor="email">
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-2 py-1 border"
                            value={LoginData.email}
                            onChange={handleUserInput}
                        />
                    </div>

                    {/* input for password */}
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold" htmlFor="password">
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="bg-transparent px-2 py-1 border"
                            value={LoginData.password}
                            onChange={handleUserInput}
                        />
                    </div>

                    <button
                        className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                        type="submit"
                    >
                        Login Account
                    </button>

                    <p className="text-center">
                        DOnt have an account ?{" "}
                        <Link to={"/signup"} className="link text-accent cursor-pointer">
                            Signup
                        </Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
};

export default Login;
