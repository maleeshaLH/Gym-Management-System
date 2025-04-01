import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {useState} from "react";

const trainers = [
    {
        name: "Smirth Jon",
        image: "src/assets/Trainer01 image.png",
        expertise: "Strength Training"
    },
    {
        name: "Jean Doe",
        image: "src/assets/Trainer03 image.png",
        expertise: "Cardio & Fitness"
    },
    {
        name: "Alex Den",
        image: "src/assets/Trainer02 image.png",
        expertise: "Weightlifting"
    },
];

export const  GymTrainers =() => {
    const [hoveredTrainer, setHoveredTrainer] = useState(null);

    return (
        <section className="relative text-center bg-indigo-900 text-white py-16 pt-17 flex flex-col bg-cover bg-blend-multiply "
                 style={{backgroundImage: "url('src/assets/Trainer image.png')"}}>

            <h2 className="text-3xl font-bold mb-6">OUR GYM TRAINERS</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
            <div className="flex flex-wrap justify-center gap-8">
                {trainers.map((trainer, index) => (
                    <div key={index}
                         className="text-center max-w-xs relative"
                         onMouseEnter={() => setHoveredTrainer(index)}
                         onMouseLeave={() => setHoveredTrainer(null)}
                    >
                        <h3 className="font-bold mb-2">{trainer.name}</h3>
                        <div className="relative rounded-lg overflow-hidden shadow-lg w-64 h-80">
                            <img
                                src={trainer.image}
                                // style={{backgroundImage: `url('${trainer.image}')`}}
                                // alt={trainer.name}
                                className="w-full h-full object-cover"
                            />

                            {hoveredTrainer === index && (
                                <div className="absolute inset-0  bg-opacity-70 flex flex-col justify-center items-center text-red-500 p-4 duration-300">
                                <p className="text-2xl font-semibold">{trainer.expertise}</p>
                        <p className="text-lg mt-1">Expert Trainer</p>
                    </div>
                )}

                    </div>
                        <div className="mt-4 flex justify-center gap-4 bg-white py-2 px-3 rounded-full">
                            <FaFacebookF className="text-red-500 cursor-pointer " />
                            <FaTwitter className="text-red-500 cursor-pointer" />
                            <FaInstagram className="text-red-500 cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
