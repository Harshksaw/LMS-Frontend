import img3 from "../Assets/Images/img3.jpeg"
import CarouselSlide from "../Components/CarouselSlide";
import {celebs} from "../Constants/Celebritydata";
import HomeLayout from "../Layouts/HomeLayout";
export default function About() {
 
    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10 ">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-400 font-semibold">
                            Affordable and quality education
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
                <div className="carousel m-auto w-[80%] my-16 ">
                    {celebs && celebs.map(celebrity => (<CarouselSlide {...celebrity} key = {celebrity.slideNumber } totalSlides = {celebs.length}/>))}
                    <CarouselSlide />
                </div>
            </div>
        </HomeLayout>
    );
}
