import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const slides = [
    {
        title: "Fitness Experience",
        subtitle: "Training",
        heading: "Fitness",
        text: "FitGym helps you take control of your physique," +
            " build strength, and sculpt a powerful body." +
            " With modern training techniques, professional trainers," +
            " and an inspiring environment, take your workout sessions " +
            "to the next level.",
        // text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Achieve More",
        subtitle: "Training",
        heading: "Fitness",
        text: "At FitGym, high-energy training sessions, specialized programs, " +
            "and personal trainers help you succeed in your fitness journey." +
            " Join us today and start reaching your goals!",
        // text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        title: "Our Mission",
        subtitle: "Training",
        heading: "Fitness",
        text: "FitGym is dedicated to shaping your ideal body. With top-notch equipment, " +
            "customized workout plans, and expert guidance, we are committed to helping " +
            "you achieve your fitness goals!",
        // text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
];

export const  HomeComponent =() => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const  interval = setInterval(()=>{
            nextSlide();
        },4000)
        return ()=> clearInterval(interval)
    });
    return (

        <div className="h-dvh flex flex-col bg-cover bg-fixe bg-red-500 bg-blend-multiply
            min-height: 100vh ;"
             style={{backgroundImage: "url('src/assets/home Image.png')"}}>
            <div className="relative w-full h-[90vh] flex items-center justify-center  text-white">
                {/* Carousel Container */}
                {/*    <div className="h-dvh flex flex-col bg-cover bg-fixe bg-red-500 bg-blend-multiply*/}
                {/*min-height: 100vh ;"*/}
                {/*         style={{backgroundImage: "url('src/assets/home Image.png')"}}>*/}
                {/*        <div/>*/}
                <div className="relative w-full max-w-4xl overflow-hidden">
                    {/* Slides */}
                    <motion.div
                        key={currentIndex}
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -50}}
                        transition={{duration: 0.5}}
                        className="text-center p-10  rounded-lg shadow-lg"
                    >
                        <h3 className="text-3xl font-bold  ">{slides[currentIndex].heading}</h3>
                        <h2 className="text-4xl font-bold">{slides[currentIndex].subtitle}</h2>
                        <h1 className="text-5xl font-bold ">{slides[currentIndex].title}</h1>
                        <p className=" mt-5 text-lg">{slides[currentIndex].text}</p>
                        {/*<a*/}
                        {/*    href="/ContactUs.tsx"*/}
                        {/*    className="mt-6 inline-block bg-red-500 px-6 py-2 rounded-full text-white font-semibold hover:bg-red-600"*/}
                        {/*>*/}
                        {/*    Contact Us*/}
                        {/*</a>*/}
                        <Link
                            to="/ContactUs.tsx"
                            className="mt-6 inline-block bg-red-500 px-6 py-2 rounded-full text-white font-semibold hover:bg-red-600"
                        >
                            Contact Us
                        </Link>
                    </motion.div>

                    {/* Navigation Buttons */}
                    {/*<button*/}
                    {/*    onClick={prevSlide}*/}
                    {/*    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full hover:bg-black/50 transition"*/}
                    {/*>*/}
                    {/*    ◀*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    onClick={nextSlide}*/}

                    {/*    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full hover:bg-black/50 transition"*/}
                    {/*>*/}
                    {/*    ▶*/}
                    {/*</button>*/}

                    {/* Indicators */}
                    <div className=" mt-8 absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-3 w-3 rounded-full transition mt-7 ${
                                    index === currentIndex ? "bg-red-500" : "bg-gray-500"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )

}