      import {Link} from "react-router-dom";

export const HeaderComponent = () => {

    return (
        // <div className="h-dvh flex flex-col bg-cover bg-fixe bg-red-500 bg-blend-multiply
        //         min-height: 100vh ;"
        //      style={{backgroundImage: "url('src/assets/home Image.png')"}}>
        //     <header className="fixed  top-0 left-0 w-full p-1 flex justify-between
        //         items-center z-40 bg-transparent border border-transparent
        //         shadow-md shadow-black/25 backdrop-blur-xl text-[#fefefe] m-0 ">
        //
        //         <a href="#" className="p-6 pb-2 pr-10 pl-10 text-2xl  font-semibold cursor-default animate-slideRight ">
        //             FitGym</a>
        //
        //         <nav className="flex gap-4 p l-7 items-center justify-between px-4 py-2 flex items-center justify-between">
        //             <a href="#" className=" gap-1.5">HOME</a>
        //             <a href="#">WHY US</a>
        //             <a href="">TRAINERS</a>
        //             <a href="">CONTACT US</a>
        //
        //         </nav>
        //     </header>
        //     <HomeComponent />
        //
        //     </div>

        <div>
            <header className="fixed  top-0 left-0 w-full p-1 flex justify-between
                items-center z-40 bg-transparent border border-transparent
                shadow-md shadow-black/25 backdrop-blur-xl text-[#fefefe] m-0 ">

                <Link to="#" className="p-6 pb-2 pr-10 pl-10 text-2xl  font-semibold cursor-default animate-slideRight ">
                    FitGym</Link>

                <nav
                    className="flex gap-4 p l-7 items-center justify-between px-4 py-2 flex items-center justify-between">
                    <Link to="/" className=" gap-1.5">HOME</Link>
                    <Link to="/why">WHY US</Link>
                    <Link to="/Trainers">TRAINERS</Link>
                    <Link to="/contact">CONTACT US</Link>

                </nav>
            </header>

        </div>


    );
}
 export default HeaderComponent;

