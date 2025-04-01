import { GiMeal, GiHealthPotion, GiSpeedometer } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";

const features = [
    {
        icon: <FaDumbbell size={40} className="text-red-500" />,
        title: "🏋️ QUALITY EQUIPMENT",
        description: "We provide state-of-the-art fitness equipment to " +
            "enhance your workout experience, ensuring safety, efficiency," +
            " and top performance."
    },
    {
        icon: <GiMeal size={40} className="text-red-500" />,
        title: "🍽️ NUTRITION",
        description: "Proper nutrition is key to achieving fitness goals." +
            " Our expert guidance helps you maintain a balanced diet to fuel your body effectively."
    },
    {
        icon: <GiHealthPotion size={40} className="text-red-500" />,
        title: "❤️ HEALTHY DIET PLAN",
        description: "We offer customized diet plans tailored to your body’s needs, ensuring a well-balanced " +
            "intake of essential nutrients for maximum results."
    },
    {
        icon: <GiSpeedometer size={40} className="text-red-500" />,
        title: "🏆 SPORT TRAINING",
        description: "Our specialized sport training programs help athletes and fitness enthusiasts improve" +
            " their strength, endurance, and overall performance."
    }
];
export const whyUsComponents = () => {
    return (
        <section className="bg-blue-800 text-white py-27 flex flex-col bg-cover bg-blend-multiply "
                 style={{backgroundImage: "url('src/assets/Why Us Images.png')"}}>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">WHY CHOOSE US</h2>
                <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>

                <p className="text-gray-300 max-w-3xl mx-auto mb-8">
                    At FitGym, we are dedicated to helping you achieve your fitness goals
                    with high-quality equipment, expert nutrition advice, and personalized
                    training programs. Whether you're a beginner or a professional athlete,
                    our tailored services ensure you get the best results.
                </p>

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