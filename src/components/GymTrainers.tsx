import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const trainers = [
    {
        name: "Smirth Jon",
        image: "src/assets/Trainer01 image.png",
    },
    {
        name: "Jean Doe",
        image: "src/assets/Trainer03 image.png",
    },
    {
        name: "Alex Den",
        image: "src/assets/Trainer02 image.png",
    },
];

export const  GymTrainers =() => {
    return (
        // <section className="bg-gray-900 text-white py-16 text-center">
        <section className="relative text-center bg-indigo-900 text-white py-16  flex flex-col bg-cover bg-blend-multiply "
                 style={{backgroundImage: "url('src/assets/Trainer image.png')"}}>

            <h2 className="text-3xl font-bold mb-6">OUR GYM TRAINERS</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
            <div className="flex flex-wrap justify-center gap-8">
                {trainers.map((trainer, index) => (
                    <div key={index} className="text-center">
                        <h3 className="font-bold mb-2">{trainer.name}</h3>
                        <div className="relative rounded-lg overflow-hidden shadow-lg w-64 h-80">
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-4 flex justify-center gap-4 bg-white py-2 px-4 rounded-full">
                            <FaFacebookF className="text-red-500 cursor-pointer" />
                            <FaTwitter className="text-red-500 cursor-pointer" />
                            <FaInstagram className="text-red-500 cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
