import React, { useState } from 'react'
import { HomePageExplore } from "../../../data/homepage-explore"
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

const ExploreMore = () => {
    const tabsName = [
        "Free",
        "New to coding",
        "Most popular",
        "Skills paths",
        "Career paths",
    ];

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) => {
        setCurrentCard(value)
        const result = HomePageExplore.filter((item) => item.heading === value)
        setCourses(result[0].courses)
        setCurrentCard(result[0].courses[0].heading)
    }

    return (
        <div>
            {/* Explore more section */}
            <div>
                <div className="text-4xl font-semibold text-center my-10">
                    Unlock the
                    <HighlightText text={"Power of Code"} />
                    <p className="text-center text-richblack-300 text-lg font-semibold mt-1">
                        Learn to Build Anything You Can Imagine
                    </p>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
                {tabsName.map((ele, index) => {
                    return (
                        <div
                            className={` text-[16px] flex flex-row items-center gap-2 ${currentTab === ele
                                ? "bg-richblack-900 text-richblack-5 font-medium"
                                : "text-richblack-200"
                                } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
                            key={index}
                            onClick={() => setMyCards(ele)}
                        >
                            {ele}
                        </div>
                    );
                })}
            </div>
            <div className=' flex gap-9 w-full   justify-center mt-5 flex-wrap lg:absolute right-0 left-0 mr-auto ml-auto'>
                {
                    courses.map((element, index) => {
                        return (
                            <CourseCard
                                key={index}
                                cardData={element}
                                currentCard={currentCard}
                                setCurrentCard={setCurrentCard}
                            />
                        )
                    })
                }
            </div>


            {/* Cards Section */}

        </div>
    )
}

export default ExploreMore;