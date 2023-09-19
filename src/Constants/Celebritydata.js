import gandhi from "../Assets/Images/gandhi.jpeg";
import Lutherking from "../Assets/Images/Lutherking.jpeg";
import mother from "../Assets/Images/mother.jpeg";
import nelson from "../Assets/Images/nelson.jpeg";
import rosa from "../Assets/Images/rosa.jpeg";

export const celebs = [
    {
        title: "Nelson Mandela",
        description:
            "Education is the most powerful tool you can use to change the world.",
        image: nelson, // Add your image link here
        slideNumber: 1,
    },
    {
        title: "Martin Luther King Jr.",
        description: "The time is always right to do what is right.",
        image: Lutherking,
        slideNumber: 2,
    },
    {
        title: "Mahatma Gandhi",
        description: "Be the change that you wish to see in the world.",
        imageLink: gandhi,
        slideNumber: 3,
    },

    {
        title: "Rosa Parks",
        description:
            "I would like to be known as a person who is concerned about freedom and equality and justice and prosperity for all people.",
        image: rosa,
        slideNumber: 4,
    },
    {
        title: "Mother Teresa",
        description:
            "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        image: mother,
        slideNumber: 5,
    },
];
