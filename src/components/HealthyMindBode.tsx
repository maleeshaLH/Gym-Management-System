export const  HealthyMindBody =() => {
    return (
        // <section className="relative bg-gray-900 text-white py-16 px-6 text-center"
            <section className="relative text-center bg-gray-900 text-white py-15  flex flex-col bg-cover bg-blend-multiply "
                 style={{backgroundImage: "url('src/assets/Health image.png')"}}>

            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}></div>

                <div className="relative max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">HEALTHY MIND, HEALTHY BODY</h2>
                    <p className="text-gray-100 leading-relaxed mb-6">
                        True fitness is not just about physical strength—it’s about mental resilience too. At FitGym, we
                        prioritize a holistic approach to health, ensuring that your workouts not only build muscle but
                        also enhance your mental well-being. Our expertly designed training programs help reduce stress,
                        improve focus, and boost confidence.

                    </p>
                    <p className="text-gray-100 leading-relaxed mb-6">
                        With the right combination of exercise, nutrition, and a positive mindset, you can unlock your
                        full potential. Whether you're looking to increase endurance, build strength, or simply maintain
                        a healthy lifestyle, we’re here to support you every step of the way. Take charge of your body,
                        sharpen your mind, and embrace the ultimate fitness journey with us!

                    </p>
                    <button className="px-6 py-2 border border-white text-white font-semibold hover:bg-white  hover:text-blue-900 transition duration-300
                     rounded-xl border-2">
                        READ MORE
                    </button>
                </div>
            </section>
    );
}
