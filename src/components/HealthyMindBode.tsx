export const  HealthyMindBody =() => {
    return (
        // <section className="relative bg-gray-900 text-white py-16 px-6 text-center"
            <section className="relative text-center bg-gray-900 text-white py-10 h-96 flex flex-col bg-cover bg-blend-multiply "
                 style={{backgroundImage: "url('src/assets/Health image.png')"}}>

            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}></div>

            <div className="relative max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">HEALTHY MIND, HEALTHY BODY</h2>
                <p className="text-gray-100 leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
                <button className="px-6 py-2 border border-white text-white font-semibold hover:bg-white  hover:text-blue-900 transition duration-300
                     rounded-xl border-2">
                    READ MORE
                </button>
            </div>
        </section>
    );
}
