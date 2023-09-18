import images from "../Assets/Images/images.jpeg";
import img3 from "../Assets/Images/img3.jpeg";
import img4 from "../Assets/Images/img4.jpeg";
import img31 from "../Assets/Images/img31.jpeg";
import HomeLayout from "../Layouts/HomeLayout";

export default function About() {
    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10 ">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-400 font-semibold">
                            Affordable and quality edication
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our Goal is to provide affordable and quality education to the
                            world We are Providing the Platform for the aspiring Teacher and
                            student to share their skills , creativity and knowledge to each
                            other to empower and contribute in the growth
                        </p>
                    </section>
                    <div className="w-1/2">
                        <img
                            className="drop-shadow-2xl"
                            id="text1"
                            style={{ filter: "drop-shadow(0px 20px 20px rgb(216, 34, 34))" }}
                            alt="about-main-img"
                            src={img3}
                        />
                    </div>
                </div>
                <div className="carousel m-auto w-1/2 my-16">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">

                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={images} className="w-90 rounded-full border-2 border-gray-400" />
                                <div className="absolute w-[70%] flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide5" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a href="#slide2" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={img4} className="w-90 rounded-full border-2 border-gray-400" />
                                <div className="absolute w-[70%] flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a href="#slide3" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={images} className="w-90 rounded-full border-2 border-gray-400" />
                                <div className="absolute w-[70%] flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a href="#slide4" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={img31} className="w-90 rounded-full border-2 border-gray-400" />
                                <div className="absolute w-[70%] flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a href="#slide4" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={img31} className="w-90 rounded-full border-2 border-gray-400" />
                                <div className="absolute  w-[70%] flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">
                                        ❮
                                    </a>
                                    <a href="#slide1" className="btn btn-circle">
                                        ❯
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}
