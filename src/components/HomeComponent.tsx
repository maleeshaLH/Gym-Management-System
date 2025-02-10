import {useEffect, useState} from "react";
import { motion } from "framer-motion";

const slides = [
    {
        title: "FitBody",
        subtitle: "Training",
        heading: "Fitness",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ",
        // text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "FitBody",
        subtitle: "Training",
        heading: "Fitness",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ",
        // text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        title: "FitBody",
        subtitle: "Training",
        heading: "Fitness",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ",
        // text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
];

export default function HomeComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // const prevSlide = () => {
    //     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    // };

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
        <section className="relative w-full h-[90vh] flex items-center justify-center  text-white">
            {/* Carousel Container */}
            <div className="relative w-full max-w-4xl overflow-hidden">
                {/* Slides */}
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-center p-10  rounded-lg shadow-lg"
                >
                    <h3 className="text-3xl font-bold  ">{slides[currentIndex].heading}</h3>
                    <h2 className="text-4xl font-bold">{slides[currentIndex].subtitle}</h2>
                    <h1 className="text-5xl font-bold ">{slides[currentIndex].title}</h1>
                    <p className=" mt-5 text-lg">{slides[currentIndex].text}</p>
                    <a
                        href="#"
                        className="mt-6 inline-block bg-red-500 px-6 py-2 rounded-full text-white font-semibold hover:bg-red-600"
                    >
                        Contact Us
                    </a>
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
        </section>
    );
}
