import { GiMeal, GiHealthPotion, GiSpeedometer } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";

const features = [
    {
        icon: <FaDumbbell size={40} className="text-red-500" />,
        title: "QUALITY EQUIPMENT",
        description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        icon: <GiMeal size={40} className="text-red-500" />,
        title: "NUTRITION",
        description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        icon: <GiHealthPotion size={40} className="text-red-500" />,
        title: "HEALTHY DIET PLAN",
        description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        icon: <GiSpeedometer size={40} className="text-red-500" />,
        title: "SPORT TRAINING",
        description: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    }
];
export const whyUsComponents = () => {
    return (
        <section className="bg-blue-800 text-white py-5 h-dvh flex flex-col bg-cover bg-blend-multiply "
                 style={{backgroundImage: "url('src/assets/Why Us Images.png')"}}>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">WHY CHOOSE US</h2>
                <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
                <div className="grid md:grid-cols-4 gap-8 px-4">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default whyUsComponents