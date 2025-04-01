export const  ContactUs =() => {
    return (
        <section className="bg-gray-700 text-white  py-20 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src="src/assets/Contact side image.png"
                        alt="Contact Us"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
                    <div className="w-16 h-1 bg-red-500 mb-6"></div>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 bg-white text-black rounded-lg focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 bg-white text-black rounded-lg focus:outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full p-3 bg-white text-black rounded-lg focus:outline-none"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full p-3 bg-white text-black rounded-lg h-32 focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition"
                            onClick={() => {
                                alert('Your Request Successful!');
                            }}
                        >
                            SEND
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}
